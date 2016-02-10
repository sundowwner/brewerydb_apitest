"use strict";
import express = require("express");
import jwt = require("express-jwt");
let mongoose = require("mongoose");
let router = express.Router();
let BreweryDb = require("brewerydb-node");
let brewdb = new BreweryDb(process.env.brewdb_key);
let auth = jwt ({
    userProperty: "payload",
    secret: process.env.JWT_SECRET
});

//Beer Routes - need to fill this in with beer routes
//CreateBeer searches for beer from the CreateBeer page
router.get("/", (req,res,next) => {
    brewdb.search.breweries({q:req.query.name}, (err, data)=> {
        res.send(data);
    });
});

router.get("/style", (req,res,next) => {
    brewdb.style.all((err,data) =>{
        res.send(data);
    })
})

export = router;
