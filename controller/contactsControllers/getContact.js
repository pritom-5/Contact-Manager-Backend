const asyncHandler = require("express-async-handler");
const contactModel = require("../../models/contactModel");

//@desc get single contact from contacts list
//@route GET /api/contacts/:id
//@access private

const getContact = asyncHandler(async (req, res) => {
  // get id using param: req.params.id
  const contactId = req.params.id;

  // find contact with user_id and contactId
  try {
    const returnedContact = await contactModel.find({
      _id: contactId,
    });
    res.status(200).json(returnedContact);
  } catch (error) {
    res.status(400);
    throw new Error(error.message || "Can't find the contact");
  }
});

module.exports = getContact;
