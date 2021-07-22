import {
  Segment,
  Grid,
  Image,
  List,
  Card,
  Icon,
  Button
} from "semantic-ui-react";
import avatar from '../assets/images/square-image.png'
import "./misc.css"
import { useQuery } from '@apollo/client'
import { USER_PROFILE, GET_SINGLE_USER_PROFILE } from '../utils/queries';
import { useParams } from 'react-router-dom';


function UserProfile() {
  // QUERY FEED
  const { username } = useParams();
  console.log('username', username);
  // console.log('username', username);
  
  const { loading: loading1, data: follow } = useQuery(GET_SINGLE_USER_PROFILE,
    { 
      variables: {username: username},  // CHANGE THIS!!!
      fetchPolicy: "no-cache" 
    }
  );
   let followData = follow?.getSingleUser || {};
    console.log(followData, follow)
  const { loading: loading2, data: feed, refetch } = useQuery(USER_PROFILE,
          { 
            variables: {username: username},  // CHANGE THIS!!!
            fetchPolicy: "no-cache" 
          }
    );
  let feedData = feed?.userProfile || {};

  

  // console.log('feedData', feedData);
  console.log('follow data:', followData);
  

  // Loading - must come at bottom
  if (loading1) {
    return <div>Loading...</div>;
  }

  if (loading2) {
    return <div>Loading...</div>;
  }

  return (
    <section class='topic-conatiner'>
      <div className="home" style={{paddingLeft: "300px"}}>
       
        <Grid divided stackable>
        
        <div className='posts'>
       
          <Grid.Row>
            <div className="homeHeader">
              <h2><Icon name='user circle'/>{username}'s Favorite Recipes</h2>
              <p>Following || Followers</p>
              <Button primary size='small' compact><Icon name='add'/> Follow</Button>
            </div>
          </Grid.Row>
          <Grid.Row columns={3}>
            <List horizontal>
              {feedData.map((post) => {
                return (
                  <List.Item>
                  <Card style={{marginBottom: "50px"}}>
                    <div className='title'>
                    <a className='click' className="hover-link" onClick={() => {window.location.href=`/post/${post._id}`}}>
                     <h3 style={{marginBottom: "8px", 
                          }}>
                            {post.recipe.label}</h3>
                    </a>
                   
                        <p>{post.createdAt}</p>
                    
                    <a
                      className="hover-link"
                      onClick={() => {window.location.href=`/post/${post._id}`}}
                    >
                      <Image
                        className='img'
                        src={post.recipe.image}
                        style={{marginTop: "20px"}}
                      />
                    </a>
                    </div>
                  </Card>
                  </List.Item>
                );
              })}
            </List>
          
          </Grid.Row>
         
         
          </div>
          <div className='following'>
            <Segment>
          <Grid.Row>
            <h3 style={{marginBottom: "20px"}}>{username}'s Follows</h3>
            </Grid.Row>
            <Grid.Row>
              <List vertical>
                {
                  followData.follows.map((follows) => {
                    return (
                      <List.Item>
                      <div 
                        className="hover-link"
                        style={{marginBottom: "15px", cursor: "pointer", fontWeight: "bold"}}
                        onClick={() => {window.location.href=`/profile/${follows.username}`}}
                      >
                        <Image
                          src={avatar}
                          avatar
                        />
                        <a className="hover-link" style={{marginLeft: "5px"}}>{follows.username}</a>
                      </div>
                    </List.Item>
                    )
                  })
                }
              </List>
          
          </Grid.Row>
          </Segment>
          </div>
        </Grid>
      </div>
    </section>
  );
}

export default UserProfile;