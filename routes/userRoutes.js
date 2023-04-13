// require express
const express = require("express");
const registerUser = require("../controller/userControllers/registerUser");
const loginUser = require("../controller/userControllers/loginUser");
const detailsUser = require("../controller/userControllers/detailsUser");
const validateTokenHandler = require("../middleware/validateTokenHandler");
// get router
const router = express.Router();

// /register
router.post("/register", registerUser);

// /login
router.post("/login", loginUser);

// /details
router.get("/details", validateTokenHandler, detailsUser);

// export router
module.exports = router;
