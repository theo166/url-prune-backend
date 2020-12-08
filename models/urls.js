const mongoose = require("mongoose");
const { customAlphabet } = require("nanoid");
const nanoid = customAlphabet("234569abcefghjkprstuvwxyz", 8);

const urlsSchema = new mongoose.Schema({
  url: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  mapped_url: {
    type: String,
    unique: true,
    required: true,
    default: () => nanoid(),
  },
  created_at: {
    type: Date,
    required: true,
    default: Date.now,
  },
  last_view: {
    type: Date,
    required: true,
    default: Date.now,
  },
  view_count: {
    type: Number,
    required: true,
    default: 0,
  },
});

module.exports = mongoose.model("Url", urlsSchema);
