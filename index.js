// require express
const express = require("express");
const connectDb = require("./configDb/db");
const errorHandler = require("./middleware/errorHandler");
const cors = require("cors");

// app
const app = express();

// configure env
require("dotenv").config();

// cors
app.use(
  cors({
    origin: process.env.DOMAIN,
    credentials: true,
  })
);

connectDb();

// port
const port = process.env.PORT || 5000;

// json() to all routes -> read from req
app.use(express.json());

// /api/users -> require users
app.use("/api/users", require("./routes/userRoutes"));

// /api/contacts -> require contacts
app.use("/api/contacts", require("./routes/contactsRoutes"));

// error handler middleware
app.use(errorHandler);

// listen to server
app.listen(port, () => {
  console.log(`listening to port: ${port}`);
});
