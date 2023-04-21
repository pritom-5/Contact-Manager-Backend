// configure env
require("dotenv").config();

// require express
const express = require("express");
const connectDb = require("./configDb/db");
const errorHandler = require("./middleware/errorHandler");
const cors = require("cors");
const path = require("path");

// app
const app = express();

// cors
app.use(
  cors({
    origin: process.env.DOMAIN,
    credentials: true,
  })
);

// port
const port = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, "dist")));

// json() to all routes -> read from req
app.use(express.json());

// /api/users -> require users
app.use("/api/users", require("./routes/userRoutes"));

// /api/contacts -> require contacts
app.use("/api/contacts", require("./routes/contactsRoutes"));

// test /api/hello
app.get("/api/hello", (req, res) => res.status(200).send("hello"));

// error handler middleware
app.use(errorHandler);

// listen to server
const connect = async () => {
  try {
    await connectDb();
    app.listen(port, () => {
      console.log(`listening to port: ${port}`);
    });
  } catch (error) {
    console.log(error.message);
  }
};
connect();
