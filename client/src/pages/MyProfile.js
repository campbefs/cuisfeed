import React, { useEffect } from "react";
import {
  Icon,
  Grid,
  Image,
  List,
  Card,
  Modal
} from "semantic-ui-react";
import "./misc.css";
import { useQuery } from '@apollo/client'
import { MY_PROFILE, GET_ME_PROFILE } from '../utils/queries';
// import { Link } from 'react-router-dom';


function MyProfile() {
  const [open, setOpen] = React.useState(false);
  // QUERY FEED
  
  const { loading: loading2, data: follow } = useQuery(GET_ME_PROFILE,
     { fetchPolicy: "no-cache" }
    );
  const { loading: loading1, data: feed } = useQuery(MY_PROFILE,
          { fetchPolicy: "no-cache" }
    );
  let feedData = feed?.myProfile || {};
  let followData = follow?.me || {};

  const following = followData.follows
  console.log(following);
  

  // Loading - must come at bottom
  if (loading1) {
    return <div>Loading...</div>;
  }

  if (loading2) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="home" id="myprofile-home">
       
        <Grid divided stackable columns={3}>
        
        <div className='posts'>
       
          <Grid.Row textAlign='center'>
            <div className="homeHeader">
              <h2><Icon name='user circle'/>{follow.me.username}'s favorite recipes</h2>
              <Modal
                  closeIcon
                  open={open}
                  trigger={<a className='follow-list'>Following</a>}
                  onClose={() => setOpen(false)}
                  onOpen={() => setOpen(true)}
                  size="mini"
                >
                  <Modal.Content>
                    <h3 style={{ textAlign: "center" }}>Following</h3>
                    <List vertical="true">
                      {followData.follows.map((follows) => {
                        return (
                          <List.Item key={follows.id}>
                            <div
                              className="hover-link"
                              style={{
                                marginBottom: "15px",
                                cursor: "pointer",
                                fontWeight: "bold",
                              }}
                              onClick={() => {
                                window.location.href = `/profile/${follows.username}`;
                              }}
                            >
                              <Icon name="user circle" />
                              <a
                                className="hover-link"
                                style={{ marginLeft: "5px" }}
                              >
                                {follows.username}
                              </a>
                            </div>
                          </List.Item>
                        );
                      })}
                    </List>
                  </Modal.Content>
                </Modal>
            </div>
          </Grid.Row>

            <List horizontal>
              {feedData.map((post) => {
                return (
                  <List.Item key={post.id}>
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
          
          </div>
        </Grid>
      </div>
    </>
  );
}

export default MyProfile;
