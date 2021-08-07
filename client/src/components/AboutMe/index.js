import React, { useEffect, useState } from "react";


import { Box, Heading, Text } from 'gestalt';
import { makeStyles, StylesContext } from "@material-ui/styles";

import { Avatar, Typography } from '@material-ui/core';
import { Row, Item } from '@mui-treasury/components/flex';


const useStyles = makeStyles(() => ({
  card: {
    border: '2px solid',
    borderColor: '#E7EDF3',
    borderRadius: 16,
    transition: '0.4s',
    '&:hover': {
      borderColor: '#5B9FED',
    },
    backgroundColor: '#ffffff',
    boxShadow: '2px 1px 5px gray',
  },
  hover: {
    "&:hover": {
      maxWidth: "97%"
    }
  }
}));


export default function FollowCard() {

  const styles = useStyles();

  return (
    <>
      {/* <div style={{marginBottom: "30px"}}> */}

      <Box
        className={styles.card}
        display="flex"
        marginStart={-3}
        marginEnd={-3}
        marginTop={8}
        direction="column"
        color="white"
        borderStyle="shadow"
        rounding={3}
        padding={2}
        // 280
        width="280px"
        // marginBottom doesn't work cause gestalt fucking sucks. use surrounding div
      >
      
        <Box marginBottom={4}>
          <Heading size="sm" align="center">
            About Me
          </Heading>
        </Box>

        <Box marginBottom={4} padding={2}>
          <Text align="center">
            Nicolas Kim Coppola, known professionally as Nicolas Cage, is an American actor and filmmaker. Cage has been nominated for numerous major cinematic awards, and won an Academy Award, a Golden Globe, and Screen Actors Guild Award for his performance in Leaving Las Vegas.
          </Text>
        </Box>

      </Box>

      {/* </div> */}
    </>
  );
}