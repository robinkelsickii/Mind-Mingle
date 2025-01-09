const mongoose = require("mongoose");

// Schema for keeping track of likes in the application.
// This schema is used to store information about likes made by users on posts, comments, or messages.
// Each like can now be associated with multiple types of content simultaneously.
const LikeSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    post: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post",
    },
    comment: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment",
    },
    message: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Message",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Like", LikeSchema);
