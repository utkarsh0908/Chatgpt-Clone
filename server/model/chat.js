const mongoose = require("mongoose");

const chatSchema = mongoose.Schema({
  prompt: {
    type: String,
    required: true,
  },
  result: {
    type: String,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
  id: { type: String },
});

module.exports = mongoose.model("chat", chatSchema);
