const asynchandler = require("express-async-handler");
const userModel = require("../../models/userModel");

// @desc login user
// @routes GET /api/users/details
// @access private
// access token
const detailsUser = asynchandler(async (req, res) => {
  // get values from passed token validation
  const id = req.user;
  try {
    const userInfo = await userModel.findOne({ _id: id });
    console.log(userInfo);
    const { username, email } = userInfo;
    res.status(200).json({
      message: "user details",
      username,
      email,
      status: 200,
    });
  } catch (error) {
    res.status(401);
    throw new Error("Couldn't find user info");
  }
});

module.exports = detailsUser;
