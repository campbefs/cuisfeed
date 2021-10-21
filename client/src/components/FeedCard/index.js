import React, { useState } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { timeFormatter, numFormatter, difficultyFunc } from '../../utils/helpers';
import { useQuery, useMutation } from '@apollo/client';
import { Spinner, Link } from 'gestalt';

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

import { LIKE_POST, CREATE_POST } from '../../utils/mutations';
import { GET_SINGLE_POST_LIKES } from '../../utils/queries';

import { Row, Column, Item } from '@mui-treasury/components/flex';
import { useSizedIconButtonStyles } from '@mui-treasury/styles/iconButton/sized';

// SnackBar
import Snackbar from '@material-ui/core/Snackbar';
import CloseIcon from '@material-ui/icons/Close';

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

  const {username, profilelink} = props;

  const styles = useBasicProfileStyles();
  return (
      <Row {...props} paddingBottom="5px">
        <Link href={profilelink} hoverStyle="none" tapStyle="compress">
          <Item><Avatar className={styles.avatar}>{username.charAt(0).toUpperCase()}</Avatar></Item>
        </Link>
        <Item position={'middle'} pl={{ sm: 0.5, lg: 0.5 }}>
          <Link href={profilelink} hoverStyle="none" tapStyle="compress">
            <Typography className={styles.overline}>CHEF</Typography>
            <Typography className={styles.name}>{username}</Typography>
          </Link>
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

  const { postdata, recipelink } = props;

  const StyledRating = withStyles({
    iconFilled: {
      // color: '#ff6d75',
      color: '#f33943'
    },
    iconHover: {
      color: '#ff3d47',
    },
  })(Rating);

  // Calc post age
  const date = Date.now();
  const postTime = postdata.createdAtTS;
  const diffTime = (date - postTime)/1000;

  console.log('diffTime', diffTime);
  console.log('postdata.createdat', postdata.createdAt);

  const difficulty = difficultyFunc(postdata.recipe.totalTime, postdata.recipe.ingredientCount);

  return (
    <>
      <Row {...props}>
        <Link href={recipelink} hoverStyle="none" tapStyle="compress">

          <Item position={'middle'} minWidth={'250px'}>
            <Typography className={styles.title}>
              <b>{postdata.recipe.label}</b>
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
              { difficulty == 'easy' ?
                <span style={{marginRight: "5px"}}><Label color='green' horizontal>Easy</Label></span> 
                : difficulty == 'medium' ?
                <span style={{marginRight: "5px"}}><Label color='blue' horizontal>Med</Label></span>
                :
                <span style={{marginRight: "5px"}}><Label color='black' horizontal>Hard</Label></span>
              }
              
            </div>
            <Typography className={styles.subheader}>
            Source: {postdata.recipe.source}<br/>
            {timeFormatter(diffTime, postdata.createdAt)}

            </Typography>
          </Item>
        </Link>

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
  },
  coloredHeart: {
    color: '#f33944',
  }
}));

export default function FeedCard(props) {

  const { postdata: postdata, me } = props;

  const [likePost] = useMutation(LIKE_POST);
  const [createPost] = useMutation(CREATE_POST);

  let postId = postdata._id

  const { loading, data, refetch } = useQuery(GET_SINGLE_POST_LIKES,
      { 
        variables: {postId},
        fetchPolicy: "no-cache"
      })
  const postLikes = data?.getSinglePost || {};

  const styles = useStyles();
  const gap = { xs: 1, sm: 1.5, lg: 2 }

  // Snackbar state
  const [state, setState] = useState({
    open: false,
    vertical: 'top',
    horizontal: 'center'
  });

  const { vertical, horizontal, open } = state;

  // close snackbar
  const handleClose = () => {
    setState({ ...state, open: false});
  }

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

  // Handle Create Post
  const handleCreatePost = async() => {
    console.log('recipe id', postdata.recipe._id);
    try {
      await createPost({
        variables: {recipeId: postdata.recipe._id}
      });
      // alert('post created!');

      // snackbar
      setState({ ...state, open: true});
    } catch (e) {
      console.log(e);
    }
  }

  // Links

  // let profileLink = `/`
  let profileLink = `/profile/${postdata.username}`;
  let recipeLink = `/post/${postdata.recipe._id}`;

  console.log('profileLink', profileLink);
  console.log('recipeLink', recipeLink);

  if (loading) {
    return(
      <div style={{marginTop: "120px", width: "70%", justifyContent: "center"}}>
        <Spinner show={true} accessibilityLabel="loading home"/>
      </div>
      )
  }

  return (
    
    <section className='feed-card'>
      <Grid container spacing={4} justifyContent={'center'}>
        <Grid item xs={12} sm={8} lg={7} className={styles.outerCard}>
          <Grid className={styles.card}>
              <Row p={{ xs: 0.5, sm: 0.75, lg: 1 }} gap={gap} className={styles.noBotPadding}>
                <Item>
                  <Link href={recipeLink} hoverStyle="none" tapStyle="compress">
                    <Box minHeight={200} bgcolor={'#F4F7FA'} borderRadius={8} maxWidth={250}>
                      <img style={{width: "250px", height: "250px", borderRadius: "8px"}}alt="recipe image" src={postdata.recipe.image}/>
                    </Box>
                  </Link>
                </Item>
                <Column>
                  <CardHeader postdata={postdata} recipelink={recipeLink}/>
                  <BasicProfile username={postdata.username} profilelink={profileLink} position={'bottom'} />
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
                  {postLikes.likesUser.includes(`${me._id}`) ? 
                    // <FavoriteRoundedIcon color='secondary'/>
                      <>
                        <FavoriteRoundedIcon className={styles.coloredHeart}/>
                        <div style={{paddingLeft: "5px", fontSize: "14px", marginBottom: "2px"}}>
                          {numFormatter(postLikes.likeCount)}
                        </div>
                      </>
                    : <>
                        <FavoriteBorderRoundedIcon/>
                        <div style={{paddingLeft: "5px", fontSize: "14px", marginBottom: "2px"}}>
                          {numFormatter(postLikes.likeCount)}
                        </div>
                      </>
                  }
                  {/* <FavoriteRoundedIcon/> */}
                  {/* <FavoriteBorderRoundedIcon/> */}
                </IconButton>

              </Tooltip>
              <Tooltip title={'Comments'}>
                <IconButton size='small'><ChatBubbleOutlineIcon/></IconButton>
              </Tooltip>
              <Tooltip title={'Post'}>
                <IconButton size='small' onClick={handleCreatePost}><PostAddIcon/></IconButton>
              </Tooltip>
              <Tooltip title={'Share'}>
                <IconButton 
                  size='small'
                >
                  <ShareIcon/>
                </IconButton>
              </Tooltip>
              {/* <IconButton size='small'><TurnedInNotIcon/></IconButton> */}
            </Row>
          </Grid>

        </Grid>
      </Grid>

      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        open={open}
        onClose={handleClose}
        message="Recipe Posted!"
        key={'bottom' + 'right'}
        action={
          <React.Fragment>
            <IconButton 
              size="small" 
              aria-label="close" 
              color="inherit" 
              onClick={handleClose}>
                <CloseIcon fontSize="small" />
            </IconButton>
          </React.Fragment>
        }
      />
    </section>
  );
};
