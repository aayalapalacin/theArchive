const express = require('express');
const todos                 = require("./todos");
const getallpc9             = require("./getallpc9");
const getallpc9matchsearch  = require("./getallpc9matchsearch");
const getallpc9matchprofile = require("./getallpc9matchprofile");
const getprofile            = require("./getprofile");
const saveprofile           = require("./saveprofile");

const router = express.Router();

router.get("/gettodos", function(req, res) {
  res.json(todos);
});

router.get("/getallpc9", function(req, res) {
  res.json(getallpc9);
});

router.get("/getallpc9matchsearch", function(req, res) {
  res.json(getallpc9);
});


router.get("/getallpc9matchprofile", function(req, res) {
  res.json(getallpc9);
});



router.get("/getprofile", function(req, res) {
  res.json(getprofile);
});

router.get("/saveprofile", function(req, res) {
  res.json(saveprofile);
});

router.get("/updateprofile", function(req, res) {
  res.json(updateprofile);
});


module.exports = router;
