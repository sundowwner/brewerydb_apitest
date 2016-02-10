"use strict";

import mongoose = require("mongoose");
let BeerSchema = new mongoose.Schema({

    name: { type: String, required: true },
    description: { type: String, required: true },
    abv: { type: Number, required: true  },
    style: { type: String, required: false }

});


export let Beer = mongoose.model("Beer", BeerSchema);
