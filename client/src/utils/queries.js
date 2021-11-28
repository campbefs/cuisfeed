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
      followers {
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
      followingCount
      followersCount
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
        totalTime
        healthLabels
        cautions
        totalNutrients
        totalDaily
        avgRating
        ratingCount
        ingredientCount
      }
      comments{
        commentId
        commentText
        username
        createdAt
      }
      likesUser
      commentCount
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
      ingredientCount
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
      recipe{
        _id
        uri
        label
        image
        source
        totalTime
        ingredientCount
      }
      likesUser
      createdAt
      likeCount
      commentCount
    }
  }
`;


export const MY_PROFILE = gql`
  query {
    myProfile {
      _id
      username
      createdAt
      createdAtTS
      recipe {
        _id
        uri
        label
        image
        source
        totalTime
        ingredientCount
      }
    }
  }
`;

export const MY_FAVORITES = gql`
  query {
    myFavorites {
      _id
      username
      favorites {
        _id
        username
        createdAt
        createdAtTS
        recipe{
          _id
          uri
          label
          image
          source
          totalTime
          ingredientCount
        }
        likesUser
        createdAt
        likeCount
        commentCount
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

