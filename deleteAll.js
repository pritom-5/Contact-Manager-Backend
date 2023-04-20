require("dotenv").config();
const mongoose = require("mongoose");
const connectDb = require("./configDb/db");
const contactModel = require("./models/contactModel");

const fn = async () => {
  try {
    console.log(process.env);
    await connectDb();
    const response = await contactModel.deleteMany();
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};
fn();
