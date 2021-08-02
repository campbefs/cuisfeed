import React from 'react';
import { Box, Text, Heading } from 'gestalt';

import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Grid, Tooltip, Avatar, Typography, IconButton } from '@material-ui/core';
import { Row, Column, Item } from '@mui-treasury/components/flex';

import Rating from '@material-ui/lab/Rating';

import { Favorite as FavoriteIcon, 
  Share as ShareIcon, 
  FavoriteBorderRounded as FavoriteBorderRoundedIcon,
  FavoriteRounded as FavoriteRoundedIcon,
  ChatBubbleOutline as ChatBubbleOutlineIcon,
  PostAdd as PostAddIcon,
  TurnedInNot as TurnedInNotIcon,
  TurnedIn as TurnedInIcon,
} from '@material-ui/icons';

import { Label } from 'semantic-ui-react';


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
  }
}));

const useCardHeaderStyles = makeStyles(() => ({
  root: { paddingBottom: 0 },
  title: {
    fontSize: '1.25rem',
    color: '#122740',
    marginBottom: '7px',
  },
  subheader: {
    fontSize: '0.875rem',
    color: '#495869',
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

const ItemActions = props => {
  return (
    <Row xs={12} 
      display="flex" 
      flexDirection="row" 
      justifyContent="space-between"
      alignItems="flex-start"
      marginLeft="0px"
      marginRight="0px"
      marginTop="20px"
      paddingBottom="6px"
    >
      <IconButton size='small'><FavoriteBorderRoundedIcon/></IconButton>
      <IconButton size='small'><ChatBubbleOutlineIcon/></IconButton>
      <IconButton size='small'><PostAddIcon/></IconButton>
      <IconButton size='small'><ShareIcon/></IconButton>
      <IconButton size='small'><TurnedInNotIcon/></IconButton>
    </Row>
  );
};




export default function Post() {

  const styles = useCardHeaderStyles();

  const StyledRating = withStyles({
    iconFilled: {
      // color: '#ff6d75',
      color: '#f33943'
    },
    iconHover: {
      color: '#ff3d47',
    },
  })(Rating);

  return (
    <section className = 'topic-container' style={{flexDirection: "column"}}>
      
      <div className="top-outer-post">
        <div className="top-left-post">
          <Box marginBottom={5}>
            <Heading align="center">Pizza that's pretty good</Heading>
          </Box>

          <Text marginTop={3}>
            A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text
            A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text
            A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text
            A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text
            A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text
            A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text
            A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text
            A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text
            A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text
            A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text
            A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text
            A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text
          </Text>
        </div>
        <div className="top-right-post">
          <div className="top-right-pic">
            <img style={{position: "-webkit-sticky", position: "sticky", width: "90%", maxWidth: "400px", borderRadius: "8px"}} alt="recipe image" src="https://www.edamam.com/web-img/7fe/7fee72cbf470edc0089493eb663a7a09.jpg"/>

            <div style={{marginTop: "30px", width: "85%", maxWidth: "400px", marginLeft: "50px", marginRight: "50px"}}>
              <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                <StyledRating
                  defaultValue={4.5}
                  maxRating={5}
                  // readOnly
                  icon={<FavoriteIcon fontSize="inherit"/>}
                  // className={styles.title}
                  precision={0.5}
                />
                <Text><span style={{marginRight: "5px"}}><Label color='green' horizontal>Easy</Label></span></Text>
              </div>

              <div style={{textAlign: "left", marginTop: "15px", lineHeight: "1.5"}}>
                <Text>Source: Martha Stewart</Text>
                <Text>2h</Text>
                <BasicProfile marginTop="15px" justifyContent="center"/>


                <ItemActions/>

              </div>

            </div>

          </div>
        </div>
      </div>

      <div className="bottom-post-box">
        <Heading align="center">Comments</Heading>
      </div>

    </section>
  )
}