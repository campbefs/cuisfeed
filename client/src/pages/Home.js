// import { exact } from "prop-types";
// import React, { useEffect } from "react";
// import { useLocation } from 'react-router-dom';
// import Auth from '../utils/auth';
import Feed from '../components/Feed';
import FollowCard from '../components/FollowCard';

export default function Home() {

  
  return(
    // add padding for edges
    <section 
      class="topic-container"
    > 
      <div className="middle-bar">
        <Feed/>
      </div>
      <div className="right-bar">
        <FollowCard/>
      </div>
    </section>
  );
};