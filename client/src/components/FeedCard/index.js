import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';

import { Grid, Box, Tooltip, Avatar, Typography, IconButton } from '@material-ui/core';

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
// import FavoriteIcon from '@material-ui/icons/Favorite';
// import CallMade from '@material-ui/icons/CallMade';
import { Label } from 'semantic-ui-react';
// import { Text } from 'gestalt';


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
        <Item position={'middle'}>
          <Typography className={styles.title}>
            <b>White-Bean Dip with Veggie Chips</b>
            {/* <Text weight="bold" size='lg'>White-Bean Dip with Veggie Chips</Text> */}
          </Typography>
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
           Source: Martha Stewart<br/>
           2h

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

export const FeedCard = React.memo(function ShowcaseCard() {
  const styles = useStyles();
  const gap = { xs: 1, sm: 1.5, lg: 2 }
  return (
    
    <section className='feed-card'>
      <Grid container spacing={4} justify={'center'}>
        <Grid item xs={12} sm={8} lg={7} className={styles.outerCard}>
          <Grid className={styles.card}>
            <Row p={{ xs: 0.5, sm: 0.75, lg: 1 }} gap={gap} className={styles.noBotPadding}>
              <Item grow>
                <Box minHeight={200} bgcolor={'#F4F7FA'} borderRadius={8}>
                  <img style={{width: "250px", height: "250px"}}alt="recipe image" src="https://www.edamam.com/web-img/7fe/7fee72cbf470edc0089493eb663a7a09.jpg"/>
                </Box>
              </Item>
              <Column>
                <CardHeader />
                <BasicProfile position={'bottom'} />
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
              <IconButton size='small'><FavoriteBorderRoundedIcon/></IconButton>
              <IconButton size='small'><ChatBubbleOutlineIcon/></IconButton>
              <IconButton size='small'><PostAddIcon/></IconButton>
              <IconButton size='small'><ShareIcon/></IconButton>
              {/* <IconButton size='small'><TurnedInNotIcon/></IconButton> */}
            </Row>
          </Grid>

        </Grid>
      </Grid>
    </section>
  );
});
export default FeedCard



// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import clsx from 'clsx';
// import Card from '@material-ui/core/Card';
// import CardHeader from '@material-ui/core/CardHeader';
// import CardMedia from '@material-ui/core/CardMedia';
// import CardContent from '@material-ui/core/CardContent';
// import CardActions from '@material-ui/core/CardActions';
// import Collapse from '@material-ui/core/Collapse';
// import Avatar from '@material-ui/core/Avatar';
// import IconButton from '@material-ui/core/IconButton';
// import Typography from '@material-ui/core/Typography';
// import { red } from '@material-ui/core/colors';
// import FavoriteIcon from '@material-ui/icons/Favorite';
// import ShareIcon from '@material-ui/icons/Share';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import MoreVertIcon from '@material-ui/icons/MoreVert';

// // set up diff Font by changing theme
// import { createTheme, ThemeProvider } from '@material-ui/core/styles';
// // import { ThemeProvider } from 'styled-components';


// const theme = createTheme({
//   typography: {
//     fontFamily: [
//       '-apple-system',
//       'BlinkMacSystemFont',
//       'Segoe UI',
//       'Roboto',
//       'Oxygen-Sans',
//       'Ubuntu',
//       'Cantarell',
//       'Fira Sans',
//       'Droid Sans',
//       'Helvetica Neue',
//       'Helvetica',
//       'ヒラギノ角ゴ Pro W3',
//       'Hiragino Kaku Gothic Pro',
//       'メイリオ',
//       'Meiryo',
//       'ＭＳ Ｐゴシック',
//       'Arial',
//       'sans-serif',
//       'Apple Color Emoji',
//       'Segoe UI Emoji',
//       'Segoe UI Symbol'
//     ].join(','),
//   },
// });

// const useStyles = makeStyles((theme) => ({
//   root: {
//     maxWidth: 345,
//   },
//   media: {
//     height: 0,
//     paddingTop: '56.25%', // 16:9
//   },
//   expand: {
//     transform: 'rotate(0deg)',
//     marginLeft: 'auto',
//     transition: theme.transitions.create('transform', {
//       duration: theme.transitions.duration.shortest,
//     }),
//   },
//   expandOpen: {
//     transform: 'rotate(180deg)',
//   },
//   avatar: {
//     backgroundColor: red[500],
//   },
// }));

// export default function FeedCard() {
//   const classes = useStyles();
//   const [expanded, setExpanded] = React.useState(false);

//   const handleExpandClick = () => {
//     setExpanded(!expanded);
//   };

//   return (
//     <section className="feed-card">
//       <ThemeProvider theme={theme}>
//         <Typography>
//           <Card className={classes.root}>
//             <CardHeader
//               avatar={
//                 <Avatar aria-label="recipe" className={classes.avatar}>
//                   R
//                 </Avatar>
//               }
//               action={
//                 <IconButton aria-label="settings">
//                   <MoreVertIcon />
//                 </IconButton>
//               }
//               title="Shrimp and Chorizo Paella"
//               subheader="September 14, 2016"
//             />
//             <CardMedia
//               className={classes.media}
//               // image="/static/images/cards/paella.jpg"
//               image="https://www.edamam.com/web-img/7fe/7fee72cbf470edc0089493eb663a7a09.jpg"
//               title="Paella dish"
//             />
//             <CardContent>
//               <Typography variant="body2" color="textSecondary" component="p">
//                 This impressive paella is a perfect party dish and a fun meal to cook together with your
//                 guests. Add 1 cup of frozen peas along with the mussels, if you like.
//               </Typography>
//             </CardContent>
//             <CardActions disableSpacing>
//               <IconButton aria-label="add to favorites">
//                 <FavoriteIcon />
//               </IconButton>
//               <IconButton aria-label="share">
//                 <ShareIcon />
//               </IconButton>
//               <IconButton
//                 className={clsx(classes.expand, {
//                   [classes.expandOpen]: expanded,
//                 })}
//                 onClick={handleExpandClick}
//                 aria-expanded={expanded}
//                 aria-label="show more"
//               >
//                 <ExpandMoreIcon />
//               </IconButton>
//             </CardActions>
//             <Collapse in={expanded} timeout="auto" unmountOnExit>
//               <CardContent>
//                 <Typography paragraph>Method:</Typography>
//                 <Typography paragraph>
//                   Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
//                   minutes.
//                 </Typography>
//                 <Typography paragraph>
//                   Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
//                   heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
//                   browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
//                   and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
//                   pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
//                   saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
//                 </Typography>
//                 <Typography paragraph>
//                   Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
//                   without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
//                   medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook
//                   again without stirring, until mussels have opened and rice is just tender, 5 to 7
//                   minutes more. (Discard any mussels that don’t open.)
//                 </Typography>
//                 <Typography>
//                   Set aside off of the heat to let rest for 10 minutes, and then serve.
//                 </Typography>
//               </CardContent>
//             </Collapse>
//           </Card>
//         </Typography>
//       </ThemeProvider>
//     </section>
//   );
// }