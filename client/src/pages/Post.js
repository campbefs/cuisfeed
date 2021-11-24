import React from 'react';
import Nutrients from '../components/Nutrients';
import PostCommentsSelect from '../components/PostCommentsSelect';
import PostComments from '../components/PostComments';
import AddRecipeButton from '../components/AddRecipeButton';
import { useQuery } from "@apollo/client";
import { GET_SINGLE_POST } from "../utils/queries";
import { useParams } from 'react-router-dom';

import { Box, Text, Heading, Divider, Link as GestaltLink, Button, Spinner } from 'gestalt';

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


export default function Post() {

  const { postId } = useParams();

  const { loading: loading, data: postdata } = useQuery(GET_SINGLE_POST, {
    variables: { postId: postId }
    // fetchPolicy: "no-cache",
  })

  let postData = postdata?.getSinglePost

  console.log('postData', postData);

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
                  postData.recipe.ingredientLines.map((ingredient) => {
                    return <li key={ingredient} ><Text>{ingredient}</Text></li>
                  })
                }
                {/* <li key="1" ><Text>1 pack pizza base mix</Text></li>
                <li key="2"><Text>3 tbsp tomato pizza sauce</Text></li>
                <li key="3"><Text>2 small cooking chorizo, diced</Text></li>
                <li key="4"><Text>1 tbsp capers, drained</Text></li>
                <li key="5"><Text>handful cherry tomatoes, halved</Text></li>
                <li key="6"><Text>handful rocket</Text></li>
                <li key="7"><Text>olive oil, to drizzle</Text></li> */}
              </ul>
            </Box>

            <Divider/>

            <Box marginTop={4} marginBottom={4}>
              <Heading size="md">Recipe Details</Heading>
            </Box>

            <div style={{textAlign: "left", marginTop: "5px", marginBottom: "15px", marginLeft: "15px", lineHeight: "1.5"}}>
              <Text><span style={{fontWeight: "bold"}}>Cuisine Type: </span>{postData.recipe.cuisineType.length == 0 ? 'n/a' : postData.recipe.cuisineType.join(', ')}</Text>
              <Text><span style={{fontWeight: "bold"}}>Yield: </span>{postData.recipe.yield} servings</Text>
              <Text><span style={{fontWeight: "bold"}}>Total Time: </span>{parseInt(postData.recipe.totalTime) == 0 ? '' : postData.recipe.totalTime} minutes</Text>
              <Text><span style={{fontWeight: "bold"}}>Diet Labels: </span>{ postData.recipe.dietLabels.length == 0 ? 'n/a' : postData.recipe.dietLabels.join(', ')}</Text>
              <Text><span style={{fontWeight: "bold"}}>Cautions: </span>{postData.recipe.cautions.length == 0 ? 'n/a' : postData.recipe.cautions.join(', ')}</Text>
              <Text><span style={{fontWeight: "bold"}}>Health Labels: </span>{postData.recipe.healthLabels.length == 0 ? 'n/a' : postData.recipe.healthLabels.join(', ')}</Text>
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
                    defaultValue={4.5}
                    // maxRating={5}
                    // readOnly
                    name="recipe rating"
                    icon={<FavoriteIcon fontSize="inherit"/>}
                    // className={styles.title}
                    precision={0.5}
                  />
                  &nbsp;&nbsp;<span>&#8226;</span>&nbsp;&nbsp;<Text color="darkGray">21 Ratings</Text>                  
                </div>

                <Text><span style={{marginRight: "5px"}}><Label color='green' horizontal>Easy</Label></span></Text>
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

      {/* <div className="bottom-post-box the-white-box">
        <Heading align="center">Engage</Heading>

        <PostComments/>
      </div> */}

    </section>
  )
}