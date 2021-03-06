import React, { useEffect, useState } from "react";


import { Box, Heading, Link } from 'gestalt';
import { makeStyles, StylesContext } from "@material-ui/styles";

import { Avatar, Typography } from '@material-ui/core';
import { Row, Item } from '@mui-treasury/components/flex';
import { BasicProfile } from '../BasicProfile';

// import { Box } from ''

// import { Grid, Box, Tooltip, Avatar, Typography, IconButton } from '@material-ui/core';

// import { Favorite as FavoriteIcon, 
//     Share as ShareIcon, 
//     FavoriteBorderRounded as FavoriteBorderRoundedIcon,
//     FavoriteRounded as FavoriteRoundedIcon,
//     ChatBubbleOutline as ChatBubbleOutlineIcon,
//     PostAdd as PostAddIcon,
//     TurnedInNot as TurnedInNotIcon,
//     TurnedIn as TurnedInIcon,
//   } from '@material-ui/icons';

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
    },
  left: {
    marginLeft: '30px'
  }
  },
}));


export default function FollowCard(props) {

  const { followdata: followData } = props;

  const styles = useStyles();

  return (
    <>
      <div style={{marginBottom: "100px"}}>
        <Box
          className={styles.card}
          display="flex"
          marginStart={-3}
          marginEnd={-3}
          marginTop={8}
          direction="column"
          // maxWidth="95%"
          color="white"
          borderStyle="shadow"
          rounding={3}
          padding={2}
          // 280
          width="280px"
          // marginBottom doesn't work cause gestalt fucking sucks 
        >
        
        <Box marginBottom={3}>
          <Heading size="sm" align="center">
            Following
          </Heading>
        </Box>

        {
            followData.map((followInfo) => {
              return (
                <BasicProfile 
                  marginBottom="20px"
                  paddingLeft="20px"
                  marginTop={1}
                  username={followInfo.username}
                  key={followInfo._id}
                />
              )
            })          
        }
{/* 


          
        <BasicProfile 
          marginBottom="20px"
          paddingLeft="20px"  
        />

        <BasicProfile 
          marginBottom="20px"
          paddingLeft="20px"  
        />

        <BasicProfile 
          marginBottom="20px"
          paddingLeft="20px"  
        />

        <BasicProfile 
          marginBottom="20px"
          paddingLeft="20px"  
        />

        <BasicProfile 
          marginBottom="20px"
          paddingLeft="20px"  
        />

        <BasicProfile 
          marginBottom="20px"
          paddingLeft="20px"  
        />

        <BasicProfile 
          marginBottom="20px"
          paddingLeft="20px"  
        />

        <BasicProfile 
          marginBottom="20px"
          paddingLeft="20px"  
        />

        <BasicProfile 
          marginBottom="20px"
          paddingLeft="20px"  
        />

        <BasicProfile 
          marginBottom="20px"
          paddingLeft="20px"  
        />

        <BasicProfile 
          marginBottom="20px"
          paddingLeft="20px"  
        />

        <BasicProfile 
          marginBottom="20px"
          paddingLeft="20px"  
        />

        <BasicProfile 
          marginBottom="20px"
          paddingLeft="20px"  
        />

        <BasicProfile 
          marginBottom="20px"
          paddingLeft="20px"  
        />

        <BasicProfile 
          marginBottom="20px"
          paddingLeft="20px"  
        />

        <BasicProfile 
          marginBottom="20px"
          paddingLeft="20px"  
        /> */}

        </Box>
      </div>
    </>
  );
}