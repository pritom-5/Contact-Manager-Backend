const asyncHandler = require("express-async-handler");
const contactModel = require("../../models/contactModel");

//@desc get all the contacts by logged user
//@route GET /api/contacts/
//@access private

const getContacts = asyncHandler(async (req, res) => {
  const user_id = req.user;

  try {
    const returnedContacts = await contactModel.find({
      user_id,
    });
    res.status(200).json(returnedContacts);
  } catch (error) {
    res.status(400);
    throw new Error(error.message || "Some thing went wrong");
  }
});

module.exports = getContacts;
