const { model } = require("mongoose");

const { HoldingsSchema } = require("../schemas/HoldingsSchema");

const HoldingsModel = new model("holding", HoldingsSchema);// creating the holding model

module.exports = { HoldingsModel };
