import React, { useEffect, useState } from "react";
import {
  Grid,
  Image,
  Header,
  List,
  Rating,
  Icon,
  // Button
} from "semantic-ui-react";
import Comments from '../components/Comments';
// import hat from "../../assets/images/chefhat.jpeg";
import "./post.css";
import { GET_SINGLE_POST, GET_ME } from '../utils/queries';
import { LIKE_POST, RATE_RECIPE, CREATE_POST } from '../utils/mutations';
import { useQuery, useMutation } from '@apollo/client';
import { useParams } from 'react-router-dom';

function Post() {
  const { postId } = useParams();
  const { loading, data, refetch } = useQuery(GET_SINGLE_POST, 
        { variables: {postId}, 
          fetchPolicy: "no-cache" 
        })
  const { loading: loading2, data: data2 } = useQuery(GET_ME,
      { fetchPolicy: "no-cache" }
    );

  const [likePost] = useMutation(LIKE_POST);
  const [rateRecipe] = useMutation(RATE_RECIPE);
  const [createPost] = useMutation(CREATE_POST);

  // use effect for likes and comments

  const postData = data?.getSinglePost || {};
  const meData = data2?.me || {};


  useEffect( () => {
    refetch();
  }, [postData.likeCount]);

  let heart = 'heart outline';

  const handleLikePost = async () => {
    try {
      await likePost({
        variables: {postId}
      });
      heart = 'heart';
      refetch();
    } catch (e) {
      console.error(e);
    }
  }

  const RateRecipe = async (e, { rating }) => {
    e.preventDefault();

    try {
      await rateRecipe({
        variables: {recipeId: postData.recipe._id, rating}
      });
      refetch();
    } catch (e) {
      alert(`You've already rated this recipe!`);
      console.error(e);
    }
  }

  const handleAddPost = async () => {
    try {
      await createPost({
        variables: {recipeId: postData.recipe._id}
      });
      alert('Post created!');
      refetch();
    } catch (e) {
      console.error(e);
    }
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (loading2) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="container">
        <div className="postGrid">
          <Grid stackable divided>
            <Grid.Row  columns={2}>
              <Grid.Column>
                <Image src={postData.recipe.image} />
              </Grid.Column>
              <Grid.Column className='rightColumn'>
                <Header dividing>
                  <List horizontal style={{marginBottom: "3px"}}>
                    <List.Item style={{paddingTop: "10px"}}>
                      <Rating
                        defaultRating={postData.recipe.avgRating}
                        maxRating={5}
                        clearable
                        onRate={RateRecipe}
                      />
                    </List.Item>
                    <List.Item>
                      <Icon 
                        style={{marginRight: "5px"}} 
                        name={postData.likes.includes(`${meData.username}`) ? 'heart' : 'heart outline'}
                        onClick={handleLikePost}
                        className="hover-link"
                      />
                      {postData.likeCount}
                    </List.Item>
                    <List.Item>
                      <Icon 
                        name="add" 
                        className="hover-link"
                        onClick={handleAddPost}
                      />
                    </List.Item>
                    <List.Item style={{position: "absolute", right: "10px"}}>
                      <h3 
                        onClick={() => {window.location.href=`/profile/${postData.username}`}}
                        className="hover-link"
                      >
                        By {postData.username}
                      </h3>
                    </List.Item>
                  </List>
                <p style={{fontSize: "12px"}}>{postData.recipe.ratingCount} Ratings</p>
                </Header>
                <h1>{postData.recipe.label}</h1>
                <h2>Ingredients</h2>
                <List bulleted items={postData.recipe.ingredientLines} />
                <Comments/>
              </Grid.Column>
            </Grid.Row>

          </Grid>
        </div>
      </div>
    </>
  );
}

export default Post;