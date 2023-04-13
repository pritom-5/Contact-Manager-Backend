const asynchandler = require("express-async-handler");

// @desc login user
// @routes GET /api/users/details
// @access private
// access token
const detailsUser = asynchandler(async (req, res) => {
  // get values from passed token validation
  const id = req.user;
  res.status(200).json({ message: "user details", userId: id });
});

module.exports = detailsUser;
