//get mongoose
const mongoose = require("mongoose");

// mongodb URI
// const MONGODB_URI = process.env.MONGODB_URI;

const connectDb = async () => {
  await mongoose.connect(process.env.MONGODB_URI);
  console.log("database connected");
};

module.exports = connectDb;
