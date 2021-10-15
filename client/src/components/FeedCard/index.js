import React, { useEffect } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { timeFormatter } from '../../utils/helpers';
import { useQuery, useMutation } from '@apollo/client';

import { Grid, Box, Tooltip, Avatar, Typography, IconButton } from '@material-ui/core';

import Rating from '@material-ui/lab/Rating';
import { Favorite as FavoriteIcon, 
    Share as ShareIcon, 
    FavoriteBorderRounded as FavoriteBorderRoundedIcon,
    FavoriteRounded as FavoriteRoundedIcon,
    ChatBubbleOutline as ChatBubbleOutlineIcon,
    PostAdd as PostAddIcon,
    // TurnedInNot as TurnedInNotIcon,
    // TurnedIn as TurnedInIcon,
  } from '@material-ui/icons';
// import FavoriteIcon from '@material-ui/icons/Favorite';
// import CallMade from '@material-ui/icons/CallMade';
import { Label } from 'semantic-ui-react';
// import { Text } from 'gestalt';

import { LIKE_POST } from '../../utils/mutations';
import { GET_SINGLE_POST_LIKES } from '../../utils/queries';

import { Row, Column, Item } from '@mui-treasury/components/flex';
import { useSizedIconButtonStyles } from '@mui-treasury/styles/iconButton/sized';

const StyledTooltip = withStyles({
  tooltip: {
    marginTop: '0.2rem',
    backgroundColor: 'rgba(0,0,0,0.72)',
    color: '#fff',
  },
})(Tooltip);

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

const BasicProfile = props => {

  const {username} = props;

  const styles = useBasicProfileStyles();
  return (
    <Row {...props} paddingBottom="5px">
      <Item><Avatar className={styles.avatar}>{username.charAt(0).toUpperCase()}</Avatar></Item>
      <Item position={'middle'} pl={{ sm: 0.5, lg: 0.5 }}>
        <Typography className={styles.overline}>CHEF</Typography>
        <Typography className={styles.name}>{username}</Typography>
      </Item>
    </Row>
  );
};

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

const CardHeader = props => {
  const styles = useCardHeaderStyles();
  const iconBtnStyles = useSizedIconButtonStyles({ padding: 8, childSize: 20 });

  const { postData, me } = props;

  const StyledRating = withStyles({
    iconFilled: {
      // color: '#ff6d75',
      color: '#f33943'
    },
    iconHover: {
      color: '#ff3d47',
    },
  })(Rating);

  let date = Date.now();
  let postTime = postData.createdAtTS;

  // utils to transform date
  // console.log('createdAt', (postData.createdAtTS));
  // console.log('date', date);

  let diffTime = (date - postTime)/1000;

  // console.log('time difference', timeFormatter(diffTime, postData.createdAt));

  return (
    <>
      <Row {...props}>
        <Item position={'middle'} minWidth={'250px'}>
          <Typography className={styles.title}>
            <b>{postData.recipe.label}</b>
            {/* <Text weight="bold" size='lg'>White-Bean Dip with Veggie Chips</Text> */}
          </Typography>
          {/* <hr/> */}
          <div style={{display: "flex", alignItems: "flex-start", justifyContent: "space-between"}}>
            <StyledRating
              defaultValue={4.5}
              readOnly
              icon={<FavoriteIcon fontSize="inherit"/>}
              className={styles.title}
              precision={0.5}
            />
            <span style={{marginRight: "5px"}}><Label color='green' horizontal>Easy</Label></span>
          </div>
          <Typography className={styles.subheader}>
           Source: {postData.recipe.source}<br/>
           {timeFormatter(diffTime, postData.createdAt)}

          </Typography>
        </Item>
        {/* <Item position={'right'} mr={-0.5}>
          <StyledTooltip title={'See details'}>
            <IconButton classes={iconBtnStyles}>
              <CallMade />
            </IconButton>
          </StyledTooltip>
        </Item> */}
      </Row>
    </>
  );
};

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
  outerCard: {
    minWidth: '570px',
  },
  noBotPadding: {
    padding: '8px 8px 0px 8px'
  }
}));

export default function FeedCard(props) {

  const { postdata: postData, me } = props;

  const [likePost] = useMutation(LIKE_POST);

  let postId = postData._id

  const { loading, data, refetch } = useQuery(GET_SINGLE_POST_LIKES,
      { 
        variables: {postId},
        fetchPolicy: "no-cache"
      })
  const postLikes = data?.getSinglePost || {};

  console.log('me', me.username);
  console.log('postLikes', postLikes.likes);
  console.log('postId', postId);


  const styles = useStyles();
  const gap = { xs: 1, sm: 1.5, lg: 2 }

  // refetch if like count changes
  useEffect( () => {
    refetch();
  }, [postLikes.likeCount])
  

  // Handle post likes
  const handleLikePost = async () => {
    try {
      await likePost({
        variables: {postId}
      });
      refetch();
    } catch (e) {
      console.log(e);
    }
  }



  if (loading) {
    return(<div>Loading</div>)
  }

  return (
    
    <section className='feed-card'>
      <Grid container spacing={4} justifyContent={'center'}>
        <Grid item xs={12} sm={8} lg={7} className={styles.outerCard}>
          <Grid className={styles.card}>
            <Row p={{ xs: 0.5, sm: 0.75, lg: 1 }} gap={gap} className={styles.noBotPadding}>
              <Item>
                <Box minHeight={200} bgcolor={'#F4F7FA'} borderRadius={8} maxWidth={250}>
                  <img style={{width: "250px", height: "250px", borderRadius: "8px"}}alt="recipe image" src={postData.recipe.image}/>
                </Box>
              </Item>
              <Column>
                <CardHeader postData={postData}/>
                <BasicProfile username={postData.username} position={'bottom'} />
              </Column>
            </Row>
            <Row xs={12} 
              display="flex" 
              flexDirection="row" 
              justifyContent="space-between"
              alignItems="flex-start"
              marginLeft="65px"
              marginRight="65px"
              paddingBottom="6px"
            >
              {/* Heart Icon */}
              <Tooltip title={'Like'}>
                <IconButton 
                  size='small'
                  onClick={handleLikePost}
                >
                  {postLikes.likes.includes(`${me.username}`) ? <FavoriteRoundedIcon/> : <FavoriteBorderRoundedIcon/>}
                  {/* <FavoriteRoundedIcon/> */}
                  {/* <FavoriteBorderRoundedIcon/> */}
                </IconButton>

              </Tooltip>
              <Tooltip title={'Comments'}>
                <IconButton size='small'><ChatBubbleOutlineIcon/></IconButton>
              </Tooltip>
              <Tooltip title={'Post'}>
                <IconButton size='small'><PostAddIcon/></IconButton>
              </Tooltip>
              <Tooltip title={'Share'}>
                <IconButton size='small'><ShareIcon/></IconButton>
              </Tooltip>
              {/* <IconButton size='small'><TurnedInNotIcon/></IconButton> */}
            </Row>
          </Grid>

        </Grid>
      </Grid>
    </section>
  );
};
