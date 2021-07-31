import Feed from '../components/Feed';
import FollowCard from '../components/FollowCard';
import AboutMe from '../components/AboutMe';

import { Box, Card, Text, Link, Button, Heading } from "gestalt";
import { makeStyles, StylesContext } from "@material-ui/styles";
import { Avatar } from '@material-ui/core';


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

export default function MyProfile() {

  
  const styles = useStyles();

  
  return(
    // add padding for edges
    <section 
      class="topic-container"
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
              justifyContent="center"
          >
            N
          </Avatar>
        </Box>


        <Box marginBottom={10}>
          <Heading size="lg" align="center">
              Nicholas
          </Heading>
          <Box margin={2}>
            <Text align="center">I am a surprisingly good actor</Text>
          </Box>
          <Text weight="bold" align="center">151 followers | 259 following</Text>
        </Box>


        <Feed/>
      </div>

      <div className="right-bar">
        <AboutMe />
        <FollowCard/>
      </div>
    </section>
  );
};