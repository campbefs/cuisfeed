// schema within Post
const { Schema, Types } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

// SCHEMA ONLY
const commentSchema = new Schema({
  // new to manually create ID for 'schema only'. Not a model
  commentId: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId()
  },
  commentText: {
    type: String,
    required: [true, 'Text field is required'],
    min: 1,
    max: 180,
    // validate: [({ length }) => length <= 280, '280 character maximum'] // alternative
  },
  username: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: createdAtVal => dateFormat(createdAtVal)
  }
})

module.exports = commentSchema;