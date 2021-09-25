import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';

import { Grid, Box, Tooltip, Typography, IconButton } from '@material-ui/core';

import Rating from '@material-ui/lab/Rating';
import { Favorite as FavoriteIcon, 
    Share as ShareIcon, 
    // FavoriteBorderRounded as FavoriteBorderRoundedIcon,
    // FavoriteRounded as FavoriteRoundedIcon,
    // ChatBubbleOutline as ChatBubbleOutlineIcon,
    PostAdd as PostAddIcon,
    // TurnedInNot as TurnedInNotIcon,
    // TurnedIn as TurnedInIcon,
  } from '@material-ui/icons';
// import FavoriteIcon from '@material-ui/icons/Favorite';
// import CallMade from '@material-ui/icons/CallMade';
import { Label } from 'semantic-ui-react';
import { Button } from 'gestalt';


import { Row, Column, Item } from '@mui-treasury/components/flex';
// import { useSizedIconButtonStyles } from '@mui-treasury/styles/iconButton/sized';
import { useMutation } from '@apollo/client';
import { ADD_RECIPE_AND_POST } from '../../utils/mutations';

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
  wide: {
    minWidth: '260px'
  }

}));

const CardFooter = props => {

  const { recipeData } = props;

  const styles = useCardHeaderStyles();
  // const iconBtnStyles = useSizedIconButtonStyles({ padding: 8, childSize: 20 });

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
    <>
      <Row {...props}>
        <Item position={'middle'} className={styles.wide}>
          {/* <hr/> */}
          <div style={{display: "flex", alignItems: "flex-start", justifyContent: "space-between"}}>
            <StyledRating
              defaultValue={4.5}
              maxRating={5}
              readOnly
              icon={<FavoriteIcon fontSize="inherit"/>}
              className={styles.title}
              precision={0.5}
            />
            <span style={{marginRight: "5px"}}><Label color='green' horizontal>Easy</Label></span>
          </div>
          <Typography className={styles.subheader}>
           Source: {recipeData.source}<br/>

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
    minWidth: '300px',
  },
  noBotPadding: {
    padding: '8px 8px 0px 8px'
  }
}));

// export const RecipeCard = React.memo(function ShowcaseCard() {

function RecipeCard(props) {

  const { recipeData } = props;

  // console.log('recipeData', recipeData);


  const styles = useStyles();
  const cardHeaderStyles = useCardHeaderStyles();

  const gap = { xs: 1, sm: 1.5, lg: 2 }

  const [addRecipeAndPost] = useMutation(ADD_RECIPE_AND_POST);

  const handleAddPost = async () => {
    try {
      await addRecipeAndPost({
        variables: {
            uri: recipeData.uri,
            label: recipeData.label,
            image: recipeData.image,
            ingredientLines: recipeData.ingredientLines,
            url: recipeData.url
          }
      });
      alert('Post created!');
      // refetch();
    } catch (e) {
      console.error(e);
    }
    
  }

  // Resources: https://material-ui.com/components/grid/
  
  return (
    
    <section className='feed-card'>
      <Grid container spacing={4} justify={'center'}>
        <Grid item xs={12} sm={8} lg={7} className={styles.outerCard}>
          <Grid className={styles.card}>

            <Row xs={12} 
              display="flex" 
              flexDirection="row" 
              justifyContent="center"
              alignItems="center"
              textAlign="center"
              marginLeft="5px"
              marginRight="5px"
              paddingTop="6px"
              minHeight="65px"
              maxWidth="260px"
            >
              <Typography className={cardHeaderStyles.title}>
                <b>{recipeData.label}</b>
              </Typography>
            </Row>

            <Row xs={12} gap={gap} className={styles.noBotPadding}>
              <img style={{width: "250px", height: "250px", borderRadius: "8px"}}alt="recipe image" src={recipeData.image}/>
            </Row>

            {/* <Row p={{ xs: 0.5, sm: 0.75, lg: 1 }} gap={gap} className={styles.noBotPadding}>
              <Item grow>
                <Box minHeight={200} bgcolor={'#F4F7FA'} borderRadius={8}>
                  <img style={{width: "250px", height: "250px", borderRadius: "8px"}}alt="recipe image" src="https://www.edamam.com/web-img/7fe/7fee72cbf470edc0089493eb663a7a09.jpg"/>
                </Box>
              </Item>
              <Column>
                <CardHeader />
              </Column>
            </Row> */}

            <Row xs={12} gap={gap} className={styles.noBotPadding}>
              <CardFooter recipeData={recipeData}/>
            </Row>


            <Row xs={12} 
              display="flex" 
              flexDirection="row" 
              // justifyContent="space-between"
              justifyContent="center"
              alignItems="flex-start"
              marginLeft="65px"
              marginRight="65px"
              paddingBottom="12px"
            >
              {/* <IconButton 
                size='small'
                onClick={handleAddPost}
              ><PostAddIcon/></IconButton> */}
              <Button
                accessibilityLabel="Follow Nicholas"
                color="red"
                text="Post"
                onClick={handleAddPost}
                // size="sm"
              />
              {/* <IconButton size='small'><ShareIcon/></IconButton> */}
              {/* <IconButton size='small'><TurnedInNotIcon/></IconButton> */}
            </Row>
          </Grid>

        </Grid>
      </Grid>
    </section>
  );
};

export default RecipeCard;