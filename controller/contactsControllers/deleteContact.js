const asyncHandler = require("express-async-handler");
const contactModel = require("../../models/contactModel");

//@desc delete contact from list by id
//@route DELETE /api/contacts/:id
//@access private

const deleteContact = asyncHandler(async (req, res) => {
  // get id using param: req.params.id
  const contactId = req.params.id;

  // get updated name, email, phone
  const { name, email, phone } = req.body;

  // find contact with user_id and contactId
  try {
    const returnedContact = await contactModel.findByIdAndDelete(contactId);
    res.status(200).json(returnedContact);
  } catch (error) {
    res.status(400);
    throw new Error(error.message || "Can't find the contact");
  }
});

module.exports = deleteContact;
