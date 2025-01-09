const mongoose = require("mongoose");

// ViolationSchema defines the structure of the violation documents in the MongoDB database.
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
  message: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Message",
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
  // Reason for resolving the violation, e.g., "False Report", "Action Taken", "No Action Needed"
  resolvedReason: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
  },
});

ViolationSchema.pre("save", function (next) {
  if (this.isModified() || this.isNew) {
    this.updatedAt = Date.now();
  }
  next();
});

module.exports = mongoose.model("Violation", ViolationSchema);
