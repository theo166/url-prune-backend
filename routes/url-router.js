const express = require("express");
const router = express.Router();

const urlServices = require("../services/url-services");

// GET all urls
router.get("/", async (req, res) => {
  try {
    const urls = await urlServices.findAll();
    res.status(200).json({ urls: urls });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET url by id
router.get("/:id", async (req, res) => {
  try {
    const {
      params: { id },
    } = req;

    const url = await urlServices.findByUrlId(id);
    url
      ? res.status(200).json({ url: url })
      : res.status(404).json({ message: `Url ${id} was not found.` });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST create new URL mapping
router.post("/add", async (req, res) => {
  try {
    const newUrl = await urlServices.createUrl(req.body);
    res.status(201).json({ url: newUrl });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET increase view for url by mapped url code
router.get("/viewed/:code", async (req, res) => {
  try {
    const {
      params: { code },
    } = req;

    let updatedUrl = await urlServices.updateUrlView(code);
    if (!updatedUrl) {
      res.status(404).json({ message: `Url mapped to ${code} was not found.` });
    }
    res.status(200).json({ updatedUrl });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
