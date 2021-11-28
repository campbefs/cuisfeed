import React, { useState } from 'react';
import Nutrients from '../components/Nutrients';
import PostCommentsSelect from '../components/PostCommentsSelect';
import PostComments from '../components/PostComments';

import { timeFormatter, difficultyFunc } from '../utils/helpers';

import AddRecipeButton from '../components/AddRecipeButton';
import { useQuery, useMutation } from "@apollo/client";
import { GET_SINGLE_POST } from "../utils/queries";
import { useParams } from 'react-router-dom';
import { RATE_RECIPE } from '../utils/mutations';

import { Box, Text, Heading, Divider, Link as GestaltLink, Button, Spinner } from 'gestalt';

import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Grid, Tooltip, Avatar, Typography, IconButton } from '@material-ui/core';
import { Row, Column, Item } from '@mui-treasury/components/flex';

// Snackbar
import Snackbar from '@material-ui/core/Snackbar';
import CloseIcon from '@material-ui/icons/Close';
import MuiAlert from '@mui/material/Alert';

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

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

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
      marginTop="10px"
      paddingBottom="6px"
    >
      <Tooltip title={'Like'}>
        <IconButton size='small'><FavoriteBorderRoundedIcon/></IconButton>
      </Tooltip>
      <Tooltip title={'Comments'}>
        <IconButton size='small'><ChatBubbleOutlineIcon/></IconButton>
      </Tooltip>
      <Tooltip title={'Quick Post'}>
        <IconButton size='small'><PostAddIcon/></IconButton>
      </Tooltip>
      <Tooltip title={'Share'}>
        <IconButton size='small'><ShareIcon/></IconButton>
      </Tooltip>
      {/* <Tooltip title={'Save to Recipe Book'}>
        <IconButton size='small'><TurnedInNotIcon/></IconButton>
      </Tooltip> */}
    </Row>
  );
};

const DifficultyTag = props => {

  const { difficulty } = props;

  return (
    <>
      { difficulty == 'easy' ?
      <span style={{marginRight: "5px"}}><Label color='green' horizontal>Easy</Label></span> 
      : difficulty == 'medium' ?
      <span style={{marginRight: "5px"}}><Label color='blue' horizontal>Med</Label></span>
      :
      <span style={{marginRight: "5px"}}><Label color='black' horizontal>Hard</Label></span>
      }
    </>
  )
}


export default function Post() {

  const { postId } = useParams();

  const { loading: loading, data: postdata, refetch } = useQuery(GET_SINGLE_POST, {
    variables: { postId: postId },
    fetchPolicy: "no-cache",
  })

  let postData = postdata?.getSinglePost;

  ///////////////// Start Rating
  const [rateRecipe] = useMutation(RATE_RECIPE);

  const [rateState, setRateState] = useState({
    open: false,
    vertical: 'top', 
    horizontal: 'center',
    message: 'User Already Rated!'
    // update color here -- set state to default. but change color IF alert
  })

  const { vertical, horizontal, open, message } = rateState;

  const handleClose = () => {
    setRateState({ ...rateState, open: false });
  }
  /////////////// End Rating Recipe

  const difficulty = difficultyFunc(postData?.recipe.totalTime, postData?.recipe.ingredientCount);

  console.log('difficulty', difficulty);
  console.log('time', postData?.recipe.totalTime);
  console.log('ing count', postData?.recipe.ingredientCount);

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


  const rateRecipeFunc = async (e, rating) => {
    e.preventDefault();

    try {
      let recipe = await rateRecipe({
        variables: {recipeId: postData?.recipe._id, rating}
      });
      refetch();
      console.log('recipe client', recipe);
    } catch (e) {

      // Having trouble with graphql responses
      let jsError = {...e};
      console.log('jsError', jsError.networkError?.response.status);
      let status = jsError.networkError?.response.status;

      if (status === 400) {
        setRateState({ ...rateState, open: true, message: 'Something went Wrong!' })
      } else {
        setRateState({ ...rateState, open: true, message: 'User Already Rated!' })
      }

      // alert(`You've already rated this recipe!`);
      console.log('e array', {...e});

      console.error(e);
    }
    
  }

    // de-dupe Ingredients list array
    // console.log('postData', postData?.recipe?.ingredientLines);
    let ingredientLines = [ ... new Set(postData?.recipe.ingredientLines)]

  if (loading) {
    return (
      <div style={{marginTop: "120px", width: "100%", justifyContent: "center"}}>
        <Spinner show={true} accessibilityLabel="loading feed card"/>
      </div>
      )
  }


  return (
    <section className = 'topic-container' style={{flexDirection: "column"}}>
      
      <div className="top-outer-post">
        <div className="top-left-post">
          <div className="upper-left-post the-white-box">
            <Box marginBottom={12}>
              <Heading align="center">{postData.recipe.label}</Heading>
            </Box>

            {/* <Divider/> */}

            <Box marginTop={4} marginBottom={2}>
              <Heading size="md">Ingredients</Heading>
            </Box>

            <Box marginBottom={6}>
              <ul>
                {
                  ingredientLines.map((ingredient) => {
                    return <li key={ingredient} ><Text>{ingredient}</Text></li>
                  })
                }
                {/* <li key="1" ><Text>1 pack pizza base mix</Text></li>
                <li key="2"><Text>3 tbsp tomato pizza sauce</Text></li>*/}
              </ul>
            </Box>

            <Divider/>

            <Box marginTop={4} marginBottom={4}>
              <Heading size="md">Recipe Details</Heading>
            </Box>

            <div style={{textAlign: "left", marginTop: "5px", marginBottom: "15px", marginLeft: "15px", lineHeight: "1.5"}}>
              <Text><span style={{fontWeight: "bold"}}>Cuisine Type: </span>{postData.recipe.cuisineType.length === 0 ? 'n/a' : postData.recipe.cuisineType.join(', ')}</Text>
              <Text><span style={{fontWeight: "bold"}}>Yield: </span>{postData.recipe.yield} servings</Text>
              <Text><span style={{fontWeight: "bold"}}>Total Time: </span>{parseInt(postData.recipe.totalTime) === 0 ? '' : postData.recipe.totalTime} minutes</Text>
              <Text><span style={{fontWeight: "bold"}}>Diet Labels: </span>{ postData.recipe.dietLabels.length === 0 ? 'n/a' : postData.recipe.dietLabels.join(', ')}</Text>
              <Text><span style={{fontWeight: "bold"}}>Cautions: </span>{postData.recipe.cautions.length === 0 ? 'n/a' : postData.recipe.cautions.join(', ')}</Text>
              <Text><span style={{fontWeight: "bold"}}>Health Labels: </span>{postData.recipe.healthLabels.length === 0 ? 'n/a' : postData.recipe.healthLabels.join(', ')}</Text>
            </div>

            <Divider/>

            <Box marginTop={5} marginBottom={4}>
              <Heading size="md">Nutrients</Heading>
            </Box>

            <Box marginBottom={10}>
              {/* <Divider/> */}
              <Nutrients 
                totalnutrients={postData.recipe.totalNutrients}
                totaldaily={postData.recipe.totalDaily}
                // key={postData.recipe.totalDaily}
              />
              {/* <Divider/> */}
            </Box>
          
            <Divider/>

            <Box marginTop={5} marginBottom={2}>
              <Heading size="md">Link</Heading>
            </Box>

            <Box marginBottom={2}>
              <Text color="blue" weight="bold">
                <GestaltLink href={postData.recipe.url}>
                  <Box padding={2}>For more details visit {postData.recipe.source}</Box>
                </GestaltLink>
              </Text>
            </Box>
          </div>

          <div className="bottom-post-box the-white-box">
            <Heading align="center">Engage</Heading>

            <PostCommentsSelect/>

            {/* <PostComments/> */}


          </div>

        </div>

        <div className="top-right-post the-white-box">
          <div className="top-right-section">
            <Box marginBottom={4}>
              <AddRecipeButton/>
            </Box>
            <img style={{position: "-webkit-sticky", position: "sticky", width: "90%", maxWidth: "400px", borderRadius: "8px"}} alt="recipe image" src={postData.recipe.image}/>

            <div style={{marginTop: "30px", width: "85%", maxWidth: "400px", marginLeft: "50px", marginRight: "50px"}}>
              <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between",  flexWrap: "wrap"}}>
                <div style={{display: "flex", flexDirection: "row", marginBottom: "10px", flexWrap: "wrap"}}>
                  <StyledRating
                    defaultValue={postData.recipe.avgRating}
                    // maxRating={5}
                    // readOnly
                    name="recipe rating"
                    icon={<FavoriteIcon fontSize="inherit"/>}
                    // className={styles.title}
                    precision={0.5}
                    onChange={(e, rating) => {
                      rateRecipeFunc(e, rating);
                    }}
                  />
                  &nbsp;&nbsp;<span>&#8226;</span>&nbsp;&nbsp;<Text color="darkGray">{postData.recipe.ratingCount} Ratings</Text>                  
                </div>

                <Text><span style={{marginRight: "5px"}}><DifficultyTag difficulty={difficulty}/></span></Text>
              </div>
              

              <div style={{display: "flex", flexDirection: "row", textAlign: "left", marginTop: "40px", marginBottom: "20px", justifyContent: "space-between", flexWrap: "wrap"}}>

                {/* <Text align="center">Posted by:</Text> */}

                <BasicProfile/>
                {/* <Flex gap={2}> */}
                <div style={{display: "flex", alignItems: "center"}}>
                  <Button color="gray" text="Follow"/>
                </div>
                {/* </Flex> */}

              </div>

              <div style={{marginTop: "5px", marginBottom: "10px"}}>
                <Text color="gray">12:28PM &#8226; Aug 3, 2021</Text>
              </div>
              <Divider/>
              <div style={{marginTop: "10px", marginBottom: "10px"}}>
                <Text color="darkGray">&nbsp;<span style={{fontWeight: "bold"}}>5</span> Likes</Text>
              </div>
              <Divider/>
              <ItemActions/>

            </div>

          </div>
        </div>
      </div>

      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        open={open}
        onClose={handleClose}
        // message="You've Already Rated This Recipe!"
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
        // width={'100px'}
        }
      >
        <Alert 
          severity="error"
          sx={{width: '290px'}}
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
        >{message}</Alert>
      </Snackbar>

    </section>
  )
}