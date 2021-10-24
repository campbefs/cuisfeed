import React from "react";


import { Link } from 'gestalt';
import { makeStyles } from "@material-ui/styles";

import { Avatar, Typography } from '@material-ui/core';
import { Row, Item } from '@mui-treasury/components/flex';


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
  left: {
    marginLeft: '10px'
  }
}));

export const BasicProfile = props => {
  const { username } = props;

  let profileLink = `/profile/${username}`

  const styles = useBasicProfileStyles();
  return (
    <div  style={{marginBottom: "-3px"}}>
      <div className="link-hover">
        <Link href={profileLink} hoverStyle="none">
            <Row {...props} paddingTop="5px" paddingBottom="5px">
              <Item><Avatar className={styles.avatar}>{username.charAt(0).toUpperCase()}</Avatar></Item>
              <Item className={styles.left} position={'middle'} pl={{ sm: 0.5, lg: 0.5 }}>
                <Typography className={styles.overline}>CHEF</Typography>
                <Typography className={styles.name}>{username}</Typography>
              </Item>
            </Row>
        </Link>
      </div>  
    </div>
  );
};