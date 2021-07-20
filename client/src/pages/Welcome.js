import React, { useEffect } from 'react';
// import { Box,  Collage, Mask, Image, } from 'gestalt';
import SignUp from '../components/SignUp';
import Login from '../components/Login';
import google from '../assets/images/Google__G__Logo.png';
import facebook from '../assets/images/facebook-logo-2019.png';
import WelcomeCollage from '../components/WelcomeCollage';
import Auth from '../utils/auth';


function Welcome() {

  useEffect(() => {
    if (Auth.loggedIn()) {
      window.location.href = "/home";
    }
  }, []);

  return (

    <section id='welcome-container'>

      <WelcomeCollage/>
      
      <div id="welcome-container-right">
        <h1 id="welcome-title">Welcome to <span style={{fontWeight: "bold", color: "rgba(0,116,232)"}}>Cuisfeed</span></h1>

        <div id="login-container">

          <button className="copy-button">
            <img alt="Facebook logo 2019 Icon by Icon Mafia" src={facebook}/><span>&nbsp;&nbsp;Continue with Facebook</span>
          </button>
          <hr/>
          <button className="copy-button">
            <img alt="google logo" src={google}/><span id="google-text">&nbsp;&nbsp;Continue with Google</span>
          </button>
          <hr/>
          <SignUp/>
          <hr/>
          <Login/>
        </div>
      </div>

    </section>
  )
}

export default Welcome;