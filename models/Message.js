const mongoose = require("mongoose");
const { Schema } = mongoose;

const MessageSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  messageOn: {
    type: Date,
    default: Date.now,
  },
});
const message = mongoose.model("message", MessageSchema);
module.exports = message;
