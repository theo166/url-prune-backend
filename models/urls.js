const mongoose = require("mongoose");

const urlsSchema = new mongoose.Schema({
  url: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  url_map: {
    type: String,
    unique: true,
    required: true,
    lowercase: true,
  },
  created_at: {
    type: Date,
    required: true,
    default: Date.now,
  },
  last_visit: {
    type: Date,
    required: true,
    default: Date.now,
  },
  visit_count: {
    type: Number,
    required: true,
    default: 0,
  },
});

module.exports = mongoose.model("Url", urlsSchema);
