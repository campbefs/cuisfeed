import React, { useEffect } from "react";
import { Flex, Button } from "gestalt";
import { Link } from 'react-router-dom';

import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import MailIcon from '@material-ui/icons/Mail';
import PersonIcon from '@material-ui/icons/Person';
import CreateIcon from '@material-ui/icons/Create';


export default function LeftNav(props) {

  const {
    currentPage,
    setCurrentPage
  } = props;
  // <Link id="home-link" to='/home'>
  return (
    <section id="left-nav-bar">

      <Link className="left-nav-item">
        <Flex gap={2}>
          <button
            id="create-post"
            className={`left-nav-button ${currentPage === 'Create Post' && 'nav-active'}`}
            onClick={() => setCurrentPage('Create Post')}
          >
            <CreateIcon fontSize="large"/>&nbsp;Create Post
          </button>
        </Flex>
      </Link>

      <hr/>
      <hr/>

      <Link className="left-nav-item" to='/home'>
        <Flex gap={2}>
          <button 
            className={`left-nav-button ${currentPage === 'Home' && 'nav-active'}`}
            onClick={() => setCurrentPage('Home')}
          >
            <HomeIcon fontSize="large"/>&nbsp;&nbsp;Home
          </button>
        </Flex>
      </Link>

      <hr/>

      <Link className="left-nav-item" to='/search'>
        <Flex gap={2}>
          <button 
            className={`left-nav-button ${currentPage === 'Search' && 'nav-active'}`}
            onClick={() => setCurrentPage('Search')}
          >
            <SearchIcon fontSize="large"/>&nbsp;&nbsp;Search
          </button>
        </Flex>
      </Link>
      
      <hr/>

      <div className="left-nav-item">
        <Flex gap={2}>
          <button 
            className={`left-nav-button ${currentPage === 'Discover' && 'nav-active'}`}
            onClick={() => setCurrentPage('Discover')}
          >
            <ArrowForwardIosIcon fontSize="large"/>&nbsp;&nbsp;Discover
          </button>
        </Flex>
      </div>

      <hr/>

      {/* <div className="left-nav-item">
        <Flex gap={2}>
          <button 
            className={`left-nav-button ${currentPage === 'Notifications' && 'nav-active'}`}
            onClick={() => setCurrentPage('Notifications')}
          >
            <NotificationsIcon fontSize="large"/>&nbsp;Notifications
          </button>
        </Flex>
      </div>

      <hr/> */}

      <div className="left-nav-item">
        <Flex gap={2}>
          <button 
            className={`left-nav-button ${currentPage === 'Inbox' && 'nav-active'}`}
            onClick={() => setCurrentPage('Inbox')}
          >
            <MailIcon fontSize="large"/>&nbsp;&nbsp;Inbox
          </button>
        </Flex>
      </div>

      <hr/>

      <div className="left-nav-item">
        <Flex gap={2}>
          <button 
            className={`left-nav-button ${currentPage === 'My Recipe Book' && 'nav-active'}`}
            onClick={() => setCurrentPage('My Recipe Book')}
          >
            <MenuBookIcon fontSize="large"/>&nbsp;&nbsp;Recipe Book
          </button>
        </Flex>
      </div>

      <hr/>

      <Link className="left-nav-item" to='/myprofile'>
        <Flex gap={2}>
          <button 
            className={`left-nav-button ${currentPage === 'Profile' && 'nav-active'}`}
            onClick={() => setCurrentPage('Profile')}
          >
            <PersonIcon fontSize="large"/>&nbsp;&nbsp;Profile
          </button>
        </Flex>
      </Link>

      {/* 
        'Home',
        'Search',
        'Discover',
        'Notifications',
        'Inbox',
        'My Recipe Book',
        'My Profile'
      */}

    </section>
  );
}