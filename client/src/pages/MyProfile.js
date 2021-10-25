import React, { useState } from "react";
import Feed from '../components/Feed';
import FollowCard from '../components/FollowCard';
import AboutMe from '../components/AboutMe';
import Followers from '../components/Followers';


import { Box, Text, Heading, Spinner } from "gestalt";
import { makeStyles } from "@material-ui/styles";
import { Avatar } from '@material-ui/core';

import { useQuery } from "@apollo/client";
import { MY_PROFILE, GET_ME_PROFILE, MY_FAVORITES } from "../utils/queries";

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

  // follow data
  const { loading: loading1, data: follow } = useQuery(GET_ME_PROFILE, {
    fetchPolicy: "no-cache",
  });

  // feed data (my posts)
  const { loading: loading_feed, data: feed } = useQuery(MY_PROFILE,
    { fetchPolicy: "no-cache" }
    );

  // favorites data
  const { loading: loading_favs, data: favorites } = useQuery(MY_FAVORITES,
    // { fetchPolicy: "no-cache" }
    );

  let followData = follow?.me.following || {};
  let feedData = feed?.myProfile || {}; // my posts for feed
  let favoritesData = favorites?.myFavorites[0].favorites || {};
  let me = follow?.me;

  console.log('feedData', feedData);

  const [profilePages] = useState([ 'Posts', 'Favorites', 'Comments' ]);
  const [currentProfilePage, setCurrentProfilePage] = useState(profilePages[0]);
  
  const styles = useStyles();
  
  if (loading_feed || loading1) {
    return (
      <section className="topic-container">
        <div style={{marginTop: "120px", width: "100%", justifyContent: "center"}}>
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
              alt="username"
              // src="https://i.pinimg.com/originals/bd/35/1e/bd351eff6c29b993ec26ccd9545c8d1c.jpg"
              className={styles.medium}
              // justifyContent="center" // throwing error 
          >
            {me.username.charAt(0).toUpperCase()}
          </Avatar>
        </Box>


        <Box marginBottom={2}>
          <Heading size="lg" align="center">
              {me.username}
          </Heading>
          <Box margin={2}>
            <Text align="center">I Love to Cook All the Things</Text>
          </Box>
          <Text weight="bold" align="center">
              <span className="profile-link">
                <Followers number={me.followersCount} type="Followers" users={me.followers}/>
              </span> | <span className="profile-link">  {/* keep this here bc of formatting*/}
                <Followers number={me.followingCount} type="Following" users={me.following}/>
              </span>
          </Text>
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
            feedData={favoritesData}
            loading={loading_favs}
          /> : 
          <div>Comments</div>
        }

      </div>

      <div className="right-bar">
        <AboutMe />
        <FollowCard followdata={followData}/>
      </div>

    </section>
  )
}