const asynchandler = require("express-async-handler");
const userModel = require("../../models/userModel");
const bcrypt = require("bcrypt");

// @desc register new user
// @routes POST /api/users/register
// @access public
// username, email, password

const registerUser = asynchandler(async (req, res) => {
  // get items from req.body
  const { username, email, password } = req.body;

  // check: all fields provided
  if (!username || !email || !password) {
    res.status(400);
    throw new Error("all fields are mandatory");
  }

  // check: if email already exists in the database
  const existingUser = await userModel.findOne({ email });
  if (!!existingUser) {
    res.status(401);
    throw new Error("user already registered");
  }

  // hash password bcrypt salt: 10
  const hashedPassword = await bcrypt.hash(password, 10);

  // add values to the db
  const registeredUser = await userModel.create({
    username,
    email,
    password: hashedPassword,
  });

  res
    .status(200)
    .json({
      id: registeredUser._id,
      username: registeredUser.username,
      status: 200,
      message: "user successfully registered",
    });
});

module.exports = registerUser;
