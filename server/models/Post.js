const { Schema, model } = require('mongoose');
const commentSchema = require('./Comment');
const dateFormat = require('../utils/dateFormat');

const postSchema = new Schema({
  
    // postText: {
    //   type: String,
    //   required: [true, 'Text field is required'],
    //   min: 1,
    //   max: 280
    // },

    username: {
      type: String,
      required: [true, 'Username is required']
    },
    recipe: {
      type: Schema.Types.ObjectId,
      ref: 'Recipe'
    },
    comments: [commentSchema],
    likes: [String],
    createdAt: {
      type: Date,
      default: Date.now,
      get: createdAtVal => dateFormat(createdAtVal)
    },
    createdAtTS: {
      type: Date,
      default: Date.now
    }
},
{
  toJSON: {
    virtuals: true,
  },
  // id: false
})

// virtual - post count
postSchema.virtual('commentCount').get(function () {
  return this.comments.length;
});

postSchema.virtual('likeCount').get(function () {
  return this.likes.length;
});

const Post = model('Post', postSchema);

module.exports = Post;