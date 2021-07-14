// import React, { useEffect } from "react";
import {
  Segment,
  Grid,
  Image,
  List,
} from "semantic-ui-react";
// import hat from "../../assets/images/chefhat.jpeg";
import avatar from '../../assets/images/square-image.png'
import "../Home/home.css";
import { useQuery } from '@apollo/client'
import { MY_PROFILE, GET_ME_PROFILE } from '../../utils/queries';
// import { Link } from 'react-router-dom';


function MyProfile() {
  // QUERY FEED
  
  const { loading: loading2, data: follow } = useQuery(GET_ME_PROFILE,
     { fetchPolicy: "no-cache" }
    );
  const { loading: loading1, data: feed } = useQuery(MY_PROFILE,
          { fetchPolicy: "no-cache" }
    );
  let feedData = feed?.myProfile || {};
  let followData = follow?.me || {};

  // console.log(feedData);
  

  // Loading - must come at bottom
  if (loading1) {
    return <div>Loading...</div>;
  }

  if (loading2) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="home">
       
        <Grid divided stackable>
        
        <div className='posts'>
        <Segment>
          <Grid.Row>
            <div className="homeHeader">
              <h2>My Favorites</h2>
            </div>
          </Grid.Row>
          <Grid.Row columns={3}>
            <Grid.Column>
              {feedData.map((post) => {
                return (
                  <div style={{marginBottom: "50px"}}>
                    <a className='click' className="hover-link" onClick={() => {window.location.href=`/post/${post._id}`}}>
                     <h3 className='title' style={{marginBottom: "8px", 
                          }}>
                            {post.recipe.label}</h3>
                    </a>
                    <div 
                      // className="hover-link" 
                      // onClick={() => {window.location.href=`/profile/${post.username}`}}
                    >
                        {post.createdAt}
                    </div>
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
                );
              })}
            </Grid.Column>
          
          </Grid.Row>
         
          </Segment>
          </div>
          <div className='following'>
            <Segment>
          <Grid.Row>
            <h3 style={{marginBottom: "20px"}}>Following</h3>
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
    </>
  );
}

export default MyProfile;
