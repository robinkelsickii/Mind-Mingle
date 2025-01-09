const mongoose = require("mongoose");

const ViolationSchema = new mongoose.Schema({
  reportedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  post: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Post",
    default: null,
  },
  reason: {
    type: String,
    enum: [
      "Spam",
      "Hate Speech",
      "Bullying or Harassment",
      "Inappropriate Content",
      "Safety",
      "Privacy",
      "Misinformation",
      "Community Guidelines Violation",
      "Other",
    ],
  },
  resolved: {
    type: Boolean,
    default: false,
  },
  resolvedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  resolvedReason: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updateAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Violation", ViolationSchema);
