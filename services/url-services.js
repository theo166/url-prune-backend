require("dotenv").config();

const UrlSchema = require("../models/urls.js");

module.exports = {
  findAll,
  findByUrlId,
  createUrl,
};

async function findAll() {
  return await UrlSchema.find();
}

async function findByUrlId(id) {
  return await UrlSchema.findById(id);
}

async function createUrl(url_object) {
  const url = new UrlSchema({
    url: url_object.url,
  });
  return await url.save();
}
