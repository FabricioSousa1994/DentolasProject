const express = require("express");
const router = express.Router();
const Bar = require("../models/Bars.model");
const Dentinho = require("../models/Dentinho.model");
const {
  isLoggedIn,
  isLoggedOut,
  isAdmin,
  isUser,
} = require("../middleware/route-guard");
const fileUploader = require("../config/cloudinary.config");

router.get("/create", isLoggedIn, isAdmin, async (req, res, next) => {
  try {
    const dentinho = await Dentinho.find();
    res.render("bars/bar-create", { dentinho });
  } catch (error) {
    next(error);
  }
});

router.post(
  "/create",
  fileUploader.single("picture_url"), isLoggedIn, isAdmin,
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

router.get("/bar-list", isLoggedIn, async (req, res, next) => {
  try {
    const bars = await Bar.find().populate("dentinho");
    res.render("bars/bar-list", { bars });
  } catch (error) {
    next(error);
  }
});

router.get("/bar-search", isLoggedIn, async (req, res, next) => {
  try {
    const { barName } = req.query;

    //console.log(barName)

    const bar = await Bar.find({ name: barName }).populate("dentinho");
    res.render("bars/bar-search-result", { bar });
  } catch (error) {
    next(error);
  }
});

router.post("/:barId/delete", isLoggedIn, isAdmin, async (req, res, next) => {
  try {
    console.log("here");
    const { barId } = req.params;
    await Bar.findByIdAndDelete(barId);
    res.redirect("/bars/bar-list");
  } catch (error) {
    next(error);
  }
});

router.get("/:barId/edit", isLoggedIn, isAdmin, async (req, res, next) => {
  try {
    const { barId } = req.params;
    const dentinho = await Dentinho.find();
    const bar = await Bar.findById(barId);
    res.render("bars/bar-edit", {bar, dentinho});
  } catch (error) {
    next(error);
  }
});

router.post("/:barId/edit", isLoggedIn, isAdmin, async (req, res, next) => {
  try {
    const { barId } = req.params;
    const { name, opening_hours, address, dentinho } = req.body;
    const updateBar = await Bar.findByIdAndUpdate(barId, {
      name,
      opening_hours,
      address,
      dentinho,
    }).populate(dentinho);
    res.redirect(`/${updateBar._id}`);
  } catch (error) {
    next(error);
  }
});

router.get("/:barId", isLoggedIn, async (req, res, next) => {
  try {
    const { barId } = req.params;

    const bar = await Bar.findById(barId).populate("dentinho");
    //console.log(bar);
    res.render("bars/bar-details", bar);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
