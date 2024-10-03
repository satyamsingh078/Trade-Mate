const { Schema } = require("mongoose");

const OrdersSchema = new Schema({
  name: String,
  qty: Number,
  price: Number,
  mode: String,
});
// this is for holding the order
module.exports = { OrdersSchema };
