const mongoose = require("mongoose");
require("dotenv").config();
const initModels = require("../models/initModels");
const config = require("../config");
const models = initModels(mongoose);

mongoose.connect(
  `mongodb://localhost:27017/${process.env.DB_NAME}?socketTimeoutMS=360000&connectTimeoutMS=360000`,
  (err) => {
    if (err) throw err;
    console.log("DB Connected Successfully");
  }
);
module.exports = {
  // connectDB
};
