// require express
const express = require("express");
const postContact = require("../controller/contactsControllers/postContact");
const getContacts = require("../controller/contactsControllers/getContacts");
const getContact = require("../controller/contactsControllers/getContact");
const editContact = require("../controller/contactsControllers/editContact");
const deleteContact = require("../controller/contactsControllers/deleteContact");
const validateTokenHandler = require("../middleware/validateTokenHandler");
// router
const router = express.Router();

// validate token and pass id -> req.user everytime this route is hit
router.use(validateTokenHandler);

// router -> GET -> /
// router -> POST -> /
router.route("/").get(getContacts).post(postContact);

// router -> GET / DELETE / PUT -> /:id
router.route("/:id").get(getContact).put(editContact).delete(deleteContact);

module.exports = router;
