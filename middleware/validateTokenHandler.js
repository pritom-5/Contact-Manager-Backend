const jwt = require("jsonwebtoken");
const asynchandler = require("express-async-handler");

const validateTokenHandler = asynchandler(async (req, res, next) => {
  // get token from req.header.Authorization
  const receivedTokenHeader =
    req.headers.Authorization || req.headers.authorization;

  if (!receivedTokenHeader) {
    res.status(401);
    throw new Error("Unauthorized");
  }

  const receivedToken = receivedTokenHeader.split(" ")[1];

  // check: if no token passed

  if (!receivedToken) {
    res.status(401);
    throw new Error("Unauthorized");
  }

  // validate token
  try {
    // check if token is varified
    const decodeTest = await jwt.verify(receivedToken, process.env.JWT_SECRET);

    // req.user = decoded id
    req.user = decodeTest.id;
  } catch (error) {
    // if validation failed
    res.status(401);
    throw new Error("token unvarified");
  }

  next();
});

module.exports = validateTokenHandler;
