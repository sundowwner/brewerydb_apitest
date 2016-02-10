"use strict";
var express = require("express");
var jwt = require("express-jwt");
var mongoose = require("mongoose");
var router = express.Router();
var BreweryDb = require("brewerydb-node");
var brewdb = new BreweryDb(process.env.brewdb_key);
var auth = jwt({
    userProperty: "payload",
    secret: process.env.JWT_SECRET
});
router.get("/", function (req, res, next) {
    brewdb.search.breweries({ q: req.query.name }, function (err, data) {
        res.send(data);
    });
});
router.get("/style", function (req, res, next) {
    brewdb.style.all(function (err, data) {
        res.send(data);
    });
});
module.exports = router;
