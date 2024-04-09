const mongoose = require("mongoose");

const historySchema = mongoose.Schema({
  history: [
    {
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
    },
  ],
});

module.exports = mongoose.model("history", historySchema);
