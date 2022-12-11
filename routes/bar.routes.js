const express = require("express");
const router = express.Router();
const Bar = require("../models/Bars.model");
const Dentinho = require("../models/Dentinho.model");
const {
  isLoggedIn,
  isLoggedOut,
  isBarOwner,
  isClient,
} = require("../middleware/route-guard");
const fileUploader = require("../config/cloudinary.config");

router.get("/create", async (req, res, next) => {
  try {
    const dentinho = await Dentinho.find();
    res.render("bars/bar-create", { dentinho });
  } catch (error) {
    next(error);
  }
});

router.post(
  "/create",
  fileUploader.single("picture_url"),
  async (req, res, next) => {
    try {
      console.log("request file", req.file);
      const { name, opening_hours, address, dentinho, picture_url } = req.body;
      console.log(name);
      const bar = {
        name,
        opening_hours,
        address,
        dentinho,
      };
      if (req.file) {
        bar.picture_url = req.file.path;
      }
      const newBar = await Bar.create(bar);
      console.log("Bar created:", newBar.name);
      res.redirect("/bars/bar-list");
    } catch (error) {
      next(error);
    }
  }
);

// CRUD - Read

router.get("/bar-list", async (req, res, next) => {
  try {
    const bars = await Bar.find().populate("dentinho");
    res.render("bars/bar-list", { bars });
  } catch (error) {
    next(error);
  }
});

router.get("/bar-search", async (req, res, next) => {
  try {
    const { barName } = req.query;

    //console.log(barName)

    const bar = await Bar.find({name: barName}).populate("dentinho");
    res.render("bars/bar-search-result", {bar});
  } catch (error) {
    next(error);
  }
});

router.get("/:barId", async (req, res, next) => {
  try {
    const { barId } = req.params;

    const bar = await Bar.findById(barId).populate("dentinho");
    //console.log(bar);
    res.render("bars/bar-details", bar);
  } catch (error) {
    next(error);
  }
});

router.post("/:bar/edit", async (req, res, next) => {
  try {
    const { barId } = req.params;
    // console.log(req.body);
    const { bar } = req.body;
    await Bar.findByIdAndUpdate(barId, {
      $push: { bar },
    });
    res.redirect(`/bars/${barId}`);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
