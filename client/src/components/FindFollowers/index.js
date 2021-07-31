import React, { useEffect, useState } from "react";

import { makeStyles, withStyles } from '@material-ui/core/styles';

import { Box, Heading } from 'gestalt';

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

const useBasicProfileStyles = makeStyles(({ palette }) => ({
  avatar: {
    borderRadius: 8,
    backgroundColor: '#495869',
  },
  overline: {
    fontSize: 10,
    textTransform: 'uppercase',
    letterSpacing: 1,
    color: '#8D9CAD',
  },
  name: {
    fontSize: 14,
    fontWeight: 500,
    color: '#495869',
  },
  white: {
    backgroundColor: '#ffffff'
  },
}));

const BasicProfile = props => {
  const styles = useBasicProfileStyles();
  return (
    <Row {...props} paddingBottom="5px">
      <Item><Avatar className={styles.avatar}>S</Avatar></Item>
      <Item position={'middle'} pl={{ sm: 0.5, lg: 0.5 }}>
        <Typography className={styles.overline}>CHEF</Typography>
        <Typography className={styles.name}>siriwatknp</Typography>
      </Item>
    </Row>
  );
};


export default function FollowCard() {

  const styles = useStyles();

  return (
    <>

      <Box
      className={styles.card}
      display="flex"
      marginStart={-3}
      marginEnd={-3}
      marginBottom={-3}
      marginTop={8}
      direction="column"
      // maxWidth="95%"
      color="white"
      borderStyle="shadow"
      rounding={3}
      padding={2}
      justifyContent="left"
      alignItems="left"
      width="280px"
    >
          
      <Box marginBottom={2}>
        <Heading size="sm" align="center">
          Find Cooks to Follow
        </Heading>

      </Box>

        <BasicProfile 
          marginBottom="20px"
          paddingLeft="20px"
          marginTop={2}
        />

        <BasicProfile 
          marginBottom="20px"
          paddingLeft="20px"
          marginTop={2}
        />
    </Box>

  </>
  
  )
}