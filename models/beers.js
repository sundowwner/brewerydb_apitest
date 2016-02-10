"use strict";
var mongoose = require("mongoose");
var BeerSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    abv: { type: Number, required: true },
    style: { type: String, required: false }
});
exports.Beer = mongoose.model("Beer", BeerSchema);
