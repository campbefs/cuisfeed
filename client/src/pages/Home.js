import { exact } from "prop-types";
import React, { useEffect } from "react";
import { useLocation } from 'react-router-dom';
import Auth from '../utils/auth';

export default function Home() {

  
  return(
    // add padding for edges
    <section id="home-container"> 
      <div className="left-bar">
        Left Nav
      </div>
      <div className="middle-bar">
        Feed
      </div>
      <div className="right-bar">
        Follows
      </div>
    </section>
  );
};