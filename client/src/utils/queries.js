import { gql } from '@apollo/client';

export const GET_ME = gql`
  query {
    me{
      _id
      username
      email
      following {
        username
        email
      }
      postCount
      posts {
        recipe {
          _id
        }
        comments {
          username
          commentText
        }
        createdAt
      }
    }
  }
`;

export const GET_FOLLOWING = gql`
  query {
    getFollowing{
      following {
        _id
        username
      }
    }
  }
`;

export const GET_ME_PROFILE = gql`
query {
    me{
      _id
      username
      email
      following {
        _id
        username
      }
      postCount
      posts {
        _id
        username
        recipe {
          _id
          label
          image
        }
        # comments {
        #   username
        #   commentText
        # }
        createdAt
      }
    }
  }
`;

export const GET_SINGLE_USER_PROFILE = gql`
  query getSingleUserProfile($username:String!) {
    getSingleUser(username:$username) {
      _id
      username
      email
      following {
        _id
        username
      }
      postCount
      posts {
        _id
        username
        recipe {
          _id
          label
          image
        }
        # comments {
        #   username
        #   commentText
        # }
        createdAt
      }
    }
  }
`;

export const SEARCH_USERS = gql`
  query searchUsers($username:String!) {
    searchUsers(username:$username) {
      _id
      username
  #    image or profile picture will go here
    }
  }
`;

export const GET_SINGLE_POST = gql`
  query getSinglePost($postId:ID!) {
    getSinglePost(postId:$postId) {
      username
      recipe {
        _id
        label
        ingredientLines
        image
        avgRating
        ratingCount
        ratingUsers
      }
      comments{
        commentId
        commentText
        username
        createdAt
      }
      commentCount
      likesUser
      likeCount
      createdAt
    }
  }
`;

export const GET_SINGLE_POST_LIKES = gql`
  query getSinglePost($postId:ID!) {
    getSinglePost(postId:$postId) {
      likesUser
      likeCount
    }
  }
`;

export const GET_SINGLE_RECIPE = gql`
  query getSingleRecipe($recipeId:ID) {
    getSingleRecipe(recipeId:$recipeId){
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
      avgRating
      ratingCount
    }
  }
`;

export const MY_FEED = gql`
  query {
    myFeed {
      _id
      username
      createdAt
      createdAtTS
      likesUser
      likeCount
      commentCount
      recipe {
        uri
        label
        image
        source
      }
    }
  }
`;


export const MY_PROFILE = gql`
  query {
    myProfile {
      _id
      username
      createdAt
      recipe {
        label
        image
        # source
        uri
        url
      }
    }
  }
`;

export const USER_PROFILE = gql`
  query userProfile($username:String!) {
    userProfile(username:$username) {
      _id
      username
      createdAt
      recipe {
        label
        image
      }
    }
  }
`;

