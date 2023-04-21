// configure env
require("dotenv").config();

// require express
const express = require("express");
const connectDb = require("./configDb/db");
const errorHandler = require("./middleware/errorHandler");
const cors = require("cors");
const path = require("path");

const app = express();

// cors
app.use(
  cors({
    origin: process.env.DOMAIN,
    credentials: true,
  })
);

const port = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, "dist")));

app.use(express.json());

app.use("/api/users", require("./routes/userRoutes"));

app.use("/api/contacts", require("./routes/contactsRoutes"));

app.get("/api/hello", (req, res) => res.status(200).send("hello"));

app.use(errorHandler);

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
