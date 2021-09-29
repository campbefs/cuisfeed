import React, { useState } from "react";
import Feed from '../components/Feed';
import FollowCard from '../components/FollowCard';
import AboutMe from '../components/AboutMe';
import Followers from '../components/Followers';


import { Box, Text, Heading, Spinner } from "gestalt";
import { makeStyles } from "@material-ui/styles";
import { Avatar } from '@material-ui/core';

import { useQuery } from "@apollo/client";
import { MY_PROFILE, GET_ME_PROFILE } from "../utils/queries";

const useStyles = makeStyles((theme) => ({
  card: {
    backgroundColor: '#ffffff',
  },
  small: {
    width: "100px",
    height: "100px",
  },
  medium: {
    width: "120px",
    height: "120px",
    fontSize: "50px",
  },
  large: {
    height: "200px",
    width: "200px",
  },
}));



export default function MyProfile(props) {

  // const { loading: loading1, data: follow } = useQuery(GET_ME_PROFILE, {
  //   // fetchPolicy: "no-cache",
  // });
  const { loading: loading_feed, data: feed } = useQuery(MY_PROFILE,
    { fetchPolicy: "no-cache" }
    );

  let feedData = feed?.myProfile || {}; // my posts for feed
  // let followData = follow?.me || {};
  // console.log('feedData', feedData);


  const [profilePages] = useState([ 'Posts', 'Favorites', 'Comments' ]);
  const [currentProfilePage, setCurrentProfilePage] = useState(profilePages[0]);
  
  const styles = useStyles();


  
  if (loading_feed) {
    return (
      <section className="topic-container">
        <div style={{marginTop: "120px", width: "70%", justifyContent: "center"}}>
          <Spinner show={true} accessibilityLabel="loading"/>
        </div>
      </section>
    )
  }  

  return (
    <section
      className="topic-container"
    >

<div className="middle-bar">
        {/* <div style={{height: "40px"}}/> */}
        <br/>

        <Box display="flex" justifyContent="center" margin={2}>
          <Avatar
              // name="Nicholas"
              alt="Nicholas"
              // src="https://i.pinimg.com/originals/bd/35/1e/bd351eff6c29b993ec26ccd9545c8d1c.jpg"
              className={styles.medium}
              // justifyContent="center" // throwing error 
          >
            N
          </Avatar>
        </Box>


        <Box marginBottom={2}>
          <Heading size="lg" align="center">
              Nicholas
          </Heading>
          <Box margin={2}>
            <Text align="center">I am a surprisingly good actor</Text>
          </Box>
          <Text weight="bold" align="center"> <Followers number={151} type="Followers"/> | <Followers number={259} type="Following"/></Text>
        </Box>


        <div className="search-selection">

          <div>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </div>
          
          <div className="profile-nav">
            <button 
              className={`left-nav-button ${currentProfilePage === 'Posts' && 'nav-active'}`}
              onClick={() => setCurrentProfilePage('Posts')}
            >
              <Text fontSize="large"/>Posts
            </button>
          </div>

          <div>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </div>

          <div className="profile-nav">
            <button 
              className={`left-nav-button ${currentProfilePage === 'Favorites' && 'nav-active'}`}
              onClick={() => setCurrentProfilePage('Favorites')}
            >
              <Text fontSize="large"/>Favorites
            </button>
          </div>

          <div className="profile-nav">
            <button 
              className={`left-nav-button ${currentProfilePage === 'Comments' && 'nav-active'}`}
              onClick={() => setCurrentProfilePage('Comments')}
            >
              <Text fontSize="large"/>Comments
            </button>
          </div>
        </div>

        {
          currentProfilePage === 'Posts' ? <Feed
            feedData={feedData}
            loading={loading_feed}
          /> : 
          currentProfilePage === 'Favorites' ? <Feed 
            feedData={feedData}
            loading={loading_feed}
          /> : 
          <div>Comments</div>
        }

      </div>

      <div className="right-bar">
        <AboutMe />
        <FollowCard/>
      </div>

    </section>
  )
}