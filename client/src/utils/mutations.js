import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String, $username: String, $password: String!) {
    login(email: $email, username:$username, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser ($username: String!, $password: String!, $email: String!){
    addUser(username:$username, password:$password, email: $email){
      token 
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_RECIPE = gql`
mutation addRecipe($uri:String!, $label:String!, 
  			$image:String, $ingredientLines:[String], $url: String) {
  addRecipe( input:{ uri: $uri, label:$label, 
    		image:$image, ingredientLines:$ingredientLines, url:$url})
    {
      _id
      uri
      label
      image
      source
      url
      shareAs
      yield
      calories
      dietLabels
      ingredientLines
      cuisineType
      mealType
      dishType
      ratings
      ratingUsers
      updated
    }
  }
`;

export const CREATE_POST = gql`
  mutation createPost ($recipeId: ID!){
    createPost(recipeId:$recipeId){
      _id
      username
      recipe {
        _id
      }
      createdAt
    }
  }
`;

// checks if recipe already exists in DB. if so, grabs RecipeId
// if not, it creates recipe
export const ADD_RECIPE_AND_POST = gql`
  mutation addRecipeAndPost($uri:String!, $label:String!, 
          $image:String, $ingredientLines:[String], $url: String) {
    addRecipeAndPost( input:{ uri: $uri, label:$label, 
          image:$image, ingredientLines:$ingredientLines, url:$url})
    {
      username
      recipe {
          _id
          uri
          label
          image
          source
          url
          shareAs
          yield
          calories
          dietLabels
          ingredientLines
          cuisineType
          mealType
          dishType
          ratings
          ratingUsers
          updated
        }
      createdAt
    }
  }
`;

export const ADD_FOLLOW = gql`
  mutation addFollow ($followId: ID!) {
    addFollow(followId:$followId){
      username
      email
      follows {
        _id
        username
        email
      }
    }
  }
`;

export const ADD_COMMENT = gql`
  mutation addComment ($postId:ID!, $commentText:String!){
    addComment(postId:$postId, commentText:$commentText){
      _id
      username
      createdAt
      comments {
        commentId
        commentText
        username
      }
      commentCount
    }
  }
`;

export const DELETE_COMMENT = gql`
  mutation deleteComment ($postId:ID!, $commentId:ID!){
    deleteComment(postId:$postId, commentId:$commentId){
      _id
      username
      createdAt
      comments {
        commentId
        commentText
        username
      }
      commentCount
    }
  }
`;

export const DELETE_POST = gql`
  mutation deletePost ($postId:ID!) {
    deletePost(postId:$postId){
      username
      comments{
        commentId
      }
        likes
      createdAt
      commentCount
      likeCount
    }
  }
`;

export const LIKE_POST = gql`
  mutation likePost ($postId:ID!) {
    likePost(postId:$postId){
      username
      comments{
        commentId
        username
        commentText
      }
      likes
      createdAt
      commentCount
      likeCount  }
  }
`;

export const RATE_RECIPE = gql`
  mutation rateRecipe($recipeId:ID!, $rating:Int) {
    rateRecipe(recipeId:$recipeId, rating:$rating){
      _id
      uri
      label
      ratings
      ratingUsers
      updated
      avgRating
      ratingCount
    }
  }
`;

