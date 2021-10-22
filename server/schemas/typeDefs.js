const { gql } = require('apollo-server-express');

const typeDefs = gql`

  type Comment {
    commentId: ID
    commentText: String
    username: String
    createdAt: String
  }

  type Recipe {
    _id: ID
    uri: String
    label: String
    image: String
    source: String
    url: String
    shareAs: String
    yield: Int
    calories: Float
    dietLabels: [String]
    ingredientLines: [String]
    cuisineType: [String]
    mealType: [String]
    dishType: [String]
    ratings: [Int]
    ratingUsers: [String]
    updated: String
    avgRating: Float
    totalTime: Int
    healthLabels: [String]
    cautions: [String]
    ratingCount: Int
    ingredientCount: Int
  }
 
  type Post {
    _id: ID
    username: String
    recipe: Recipe    # ref Recipe model
    comments: [Comment]
    # likes: [String]
    likesUser: [ID]
    createdAt: String
    commentCount: Int
    likeCount: Int
    createdAtTS: Float
  }

  type User {
    _id: ID
    username: String
    email: String
    following: [User]
    posts: [Post]
    followers: [User]
    favorites: [Post]
    postCount: Int
    followingCount: Int
    followersCount: Int
  }

  type Auth {
    token: ID!
    user: User
  }

  input RecipeInput {
    _id: ID
    uri: String!
    label: String!
    image: String
    source: String
    url: String
    shareAs: String
    yield: Int
    calories: Float
    dietLabels: [String]
    ingredientLines: [String]
    cuisineType: [String]
    mealType: [String]
    dishType: [String]
    ratings: [Float]
    totalTime: Int
    healthLabels: [String]
    cautions: [String]
  }


  type Query {
    me: User # OK

    getFollowing: User # OK

    getSingleUser(username: String!): User # OK

    searchUsers(username: String!): [User]

    getSinglePost(postId: ID!): Post # OK

    getSingleRecipe(recipeId: ID, uri: String): Recipe # OK

    myFeed: [Post] # OK

    myProfile: [Post] # OK

    myFavorites: [User] # OK

    userProfile(username: String!): [Post] # OK

  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth # OK
    login(email: String, username: String, password: String!): Auth # OK

    addRecipe(input: RecipeInput!): Recipe # OK

    createPost(recipeId: ID!): Post # OK

    addRecipeAndPost(input: RecipeInput!): Post # OK

    addFollow(followId: ID!): User # OK

    # remove follow - skip for V1

    addComment(postId: ID!, commentText: String!): Post  # OK 

    deleteComment(postId: ID!, commentId: ID!): Post # OK

    deletePost(postId: ID!): Post # OK

    # deleteRecipe - NO. then you'd have to delete all the posts with it

    likePost(postId: ID!): Post # OK

    rateRecipe(recipeId: ID!, rating: Int): Recipe # OK

  }

`;

module.exports = typeDefs;