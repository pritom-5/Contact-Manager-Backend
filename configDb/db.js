//get mongoose
const mongoose = require("mongoose");

// mongodb URI
const MONGODB_URI = process.env.MONGODB_URI;

const connectDb = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGODB_URI);
    console.log("database connected");
  } catch (error) {
    console.log("data base connection error");
    process.exit(1);
  }
};

module.exports = connectDb;
