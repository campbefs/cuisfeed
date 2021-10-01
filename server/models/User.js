const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, 'Must match an email address!']
    },
    password: {
      type: String,
      required: true,
      minlength: 5
    },
    follows: [
      {
        type: Schema.Types.ObjectId,  // question. how does this know to join on ID?
        ref: 'User',
      }
    ],
    // save posts directly in the User model
    posts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Post'
      }
    ],
    followers: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User',
      }
    ],
    
  },
  {
    toJSON: {
      virtuals: true,
    }
  }
);

// hash user password
userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// custom method to compare and validate password for logging in
userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

// virtual - post count
userSchema.virtual('postCount').get(function () {
  return this.posts.length;
});

const User = model('User', userSchema);

module.exports = User;