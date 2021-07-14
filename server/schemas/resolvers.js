const { User, Post, Recipe } = require('../models');
const { AuthenticationError, UserInputError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {

    // me
    me: async (_parent, _args, context) => {
      if (context.user) {
        // console.log('hit', context.user);
        const userData = await User.findOne({ _id: context.user._id})
          .select('-__v -password')
          .populate({path:'follows', 
                  populate: { path: 'posts',
                      populate: {path: 'recipe'}
                  }})
          .populate({path:'posts', populate: { path: 'recipe'}}) // populate subpath

        // console.log('userdata', userData);
        return userData;
      }


      throw new AuthenticationError('Not logged in');
    },

    myFeed: async (_parent, _args, context) => {
      if (context.user) {

        // find your friend's usernames
        const userData = await User.findOne({ _id: context.user._id})
          .select('follows')
          .populate('follows');

        let followArr = [];
        for (i=0; i<userData.follows.length;i++) {
          followArr.push(userData.follows[i].username);
        }

        // Grab your friend's posts
        const post = await Post.find({'username': { $in: followArr }})
              .populate('recipe')
              .sort([['createdAt', -1]])
              .limit(10);

        // console.log('post: ', post);
        return post;
      }

      throw new AuthenticationError('Not logged in');
    },

    myProfile: async (_parent, _args, context) => {
      if (context.user) {

        // Grab & sort my posts
        const post = await Post.find({'username': context.user.username})
              .populate('recipe')
              .sort([['createdAt', -1]])
              .limit(10);

        return post;
      }

      throw new AuthenticationError('Not logged in');
    },

    userProfile: async (_parent, { username }, context) => {
      if (context.user) {

        // Grab & sort my posts
        const post = await Post.find({username: username})
              .populate('recipe')
              .sort([['createdAt', -1]])
              .limit(10);

        return post;
      }

      throw new AuthenticationError('Not logged in');
    },


    // getSingleUser
    getSingleUser: async (_parent, { username }, context) => {
      if (context.user) {

        const userData = await User.findOne({ username: username })
          .select('-__v -password')
          .populate({path:'follows', 
                  populate: { path: 'posts',
                      populate: {path: 'recipe'}
                  }})
          .populate({path:'posts', populate: { path: 'recipe'}}) // populate subpath
        

        if (!userData) {
          throw new UserInputError('No User Found');
        }
      
      return userData;
      }

      throw new AuthenticationError('Not logged in');
    },


    // getSinglePost 
    getSinglePost: async (_parent, { postId }, context) => {
      if (context.user) {

        const postData = await Post.findOne({ _id: postId })
          .select('-__v')
          .populate('recipe');

        if (!postData) {
          throw new UserInputError('No Post Found');
        }
      
      return postData;
      }

      throw new AuthenticationError('Not logged in');
    },

    // getSingleRecipe
    // takes recipeId OR uri  // look up examples of 'OR' 
    getSingleRecipe: async (_parent, { recipeId, uri }, context) => {
      if (!context.user) {
        throw new AuthenticationError('Not logged in');
      }

      const recipe = await Recipe.findOne({ $or: [ 
                  {_id: recipeId}, 
                  { uri }
                ]})
      
      if (!recipe) {
        throw new UserInputError('No Recipe Found');
      }

      return recipe;

    }


    // getFriendsPosts
    // get single user => populate follows => populate posts (how to double populate...?)

  },

  Mutation: {

    // addUser
    addUser: async (_parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },

    // Login
    login: async(_parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect Credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },

    // add recipe
    addRecipe: async (_parent, { input }, context) => {
      if (!context.user) {
        throw new AuthenticationError('You need to be logged in!');
      }

      const recipe = await Recipe.create(input);

      return recipe;
    },

    // create Post (save recipe)  -- add a field of users that like the post
    createPost: async (_parent, { recipeId }, context) => {
      if (context.user) {
        // console.log(recipeId);

        // Create the Post & push recipeID to array 
        const post = await Post.create( { recipe: recipeId, username: context.user.username });
        // post = await Post.findByIdAndUpdate(
        //   { _id: post._id },
        //   { $push: { recipe: recipeId }},
        //   { new: true }
        // )
          // .populate('recipes'); // doesn't work on create

        // add post ID to user model
        await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { posts: post._id }},
          { new: true }
        )

        return post;
      }

    },

    addRecipeAndPost: async (_parent, { input }, context) => {
      if (!context.user) {
        throw new AuthenticationError('You need to be logged in!');
      }

      // check if recipe already exists in DB. if so, grab RecipeId
      let recipe = await Recipe.findOne({ uri: input.uri });
  
      // if not create recipe
      if (!recipe) {
        recipe = await Recipe.create(input);
      }
      // console.log('recipeId: ', recipe._id);

      // Create the Post
      const postData = await Post.create( {
                          recipe: recipe._id,
                          username: context.user.username 
                        })
      // post = await Post.findOneAndUpdate(
      //   {_id: post._id},
      //   { $push: {recipe: recipe._id}}
      // )

      // add post ID to user model
      await User.findByIdAndUpdate(
        { _id: context.user._id },
        { $push: { posts: postData._id }},
        { new: true }
      )
      
      // query post again to populate recipe
      const post = await Post.findOne({ _id: postData._id })
          .populate('recipe');

      return post;
    },




    // Add Follow
    addFollow: async (_parent, { followId }, context) => {
      if (context.user) {
        
        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { follows: followId }}, // addToSet will prevent duplicates
          { new: true }
        )

        // return user.populate();
        return User.findOne({_id: context.user._id})
          .populate({path:'follows', populate: { path: 'posts'}}); // populate subpath
      }
      throw new AuthenticationError('You need to be logged in!');
    },


    // addComment  -- error handling - post doesn't exist?
    // takes postId
    addComment: async (_parent, { postId, commentText }, context) => {
      if (!context.user) {
        throw new AuthenticationError('You need to be logged in!');
      }

      // check if post exists
      const postCheck = await Post.findOne({ _id: postId });
      if (!postCheck) {
        throw new UserInputError('No post found');
      }

      const post = await Post.findOneAndUpdate(
        { _id: postId },
        { $push: { comments: {username: context.user.username, commentText}}},
        { new: true }
      );

      return post;
    },

    // deleteComment
    // takes postId and commentId
    deleteComment: async (_parent, { postId, commentId }, context) => {
      if (!context.user) {
        throw new AuthenticationError('You need to be logged in!');
      }

      // Find the Comment in the Post table
      const userCheck = await Post.findOne(
        { _id: postId, comments: { $elemMatch: { _id: commentId }}}
      )

      // console.log(userCheck.comments[0].username);
      // console.log(userCheck.comments.length);

      // check if data exists
      if (!userCheck) {
        throw new UserInputError('No match for the inputs provided');
      }

      // check if comment user matches the context user
      if (userCheck.comments[0].username !== context.user.username) {
        throw new AuthenticationError('You are not authorized to delete this comment');
      }

      // Remove comment
      const post = await Post.findOneAndUpdate(
        { _id: postId },
        { $pull: { comments: { _id: commentId }}},
        { new: true }
      );

      return post;
    },

    // deletePost
    deletePost: async (_parent, { postId }, context) => {
      if (!context.user) {
        throw new AuthenticationError('You need to be logged in!');
      }

      // check if post is found with that ID 
      const postCheck = await Post.findOne({ _id: postId });
      
      if (!postCheck) {
        throw new UserInputError('No post found with that ID');
      }

      // check if post username matches context
      if (postCheck.username !== context.user.username) {
        throw new AuthenticationError('You are not authorized to delete this post!');
      }

      // delete post 
      const post = await Post.findOneAndDelete({_id: postId});

      // remove post from User model
      await User.findOneAndUpdate(
        { _id: context.user._id},
        { $pull: { posts: { _id: postId }}},
        { new: true}
      );

      return post;
    },

    likePost: async (_parent, { postId }, context) => {
      if (!context.user) {
        throw new AuthenticationError('Not logged in');
      }

      const post = await Post.findOneAndUpdate(
        {_id: postId },
        { $addToSet: {likes: context.user.username}},
        { new: true }
      )

      if (!post) {
        throw new UserInputError('No Post Found');
      }

      return post;
    },

    
    // rateRecipe 
    rateRecipe: async (_parent, { recipeId, rating }, context) => {
      if (!context.user) {
        throw new AuthenticationError('Not logged in');
      }

      // check if user already rated recipe
      const userRating = await Recipe.findOne(
        { _id: recipeId, ratingUsers: context.user.username }
      );

      // if exists, throw user error
      if (userRating) {
        throw new UserInputError('User Already Rated');
      };

      // add rating to Recipe
      const recipe = await Recipe.findOneAndUpdate(
        { _id: recipeId },
        { $push: { ratings: rating, ratingUsers: context.user.username }},
        // { $push: { ratings: 1, ratingUsers: "testrating1" }}, // for testing
        { new: true }
      );
      
      // add username to Recipe -- above

      // save recipeId & rating to user - SKIP

      return recipe;
    }

  }
};

module.exports = resolvers;