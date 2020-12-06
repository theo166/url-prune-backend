require("dotenv").config();

const UrlSchema = require("../models/urls.js");

module.exports = {
  findAll,
  findByUrlId,
  findByMappedUrl,
  createUrl,
  updateUrlView,
};

async function findAll() {
  return await UrlSchema.find();
}

async function findByUrlId(id) {
  return await UrlSchema.findById(id);
}

async function findByMappedUrl(mapped_url) {
  return await UrlSchema.findOne({ mapped_url: mapped_url });
}

async function createUrl(url_object) {
  const url = new UrlSchema({
    url: url_object.url,
  });
  return await url.save();
}

async function updateUrlView(mapped_url) {
  let foundUrl = await findByMappedUrl(mapped_url);

  if (!foundUrl) {
    console.log("EXIT");
    return null;
  }
  console.log("NEXT");
  foundUrl.last_view = Date.now();
  foundUrl.view_count += 1;

  return await foundUrl.save();
}
