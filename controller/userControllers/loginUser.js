const bcrypt = require("bcrypt");
const asynchandler = require("express-async-handler");
const userModel = require("../../models/userModel");
const jwt = require("jsonwebtoken");

// @desc login user
// @routes POST /api/users/login
// @access public
// username, password

const loginUser = asynchandler(async (req, res) => {
  // get items from req.body
  const { username, password } = req.body;

  // check: all fields are not available -> 400
  if (!username || !password) {
    res.status(401);
    throw new Error("All fields are mandatory");
  }

  // check: if username doesn't exist -> 401
  const existingUser = await userModel.findOne({ username });

  if (!existingUser) {
    res.status(401);
    throw new Error("User not found");
  }

  // compare input password and stored hashed password
  const comparePassword = await bcrypt.compare(password, existingUser.password);
  if (!comparePassword) {
    res.status(401);
    throw new Error("Username or Password wrong");
  }

  // generate token
  const token = jwt.sign(
    { username, password, id: existingUser._id },
    process.env.JWT_SECRET,
    { expiresIn: "1d" }
  );

  // give user token
  res.status(200).json({ message: "logged in", status: 200, token });
});

module.exports = loginUser;
