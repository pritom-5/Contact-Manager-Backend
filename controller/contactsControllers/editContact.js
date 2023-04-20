const asyncHandler = require("express-async-handler");
const contactModel = require("../../models/contactModel");

//@desc edit contact found by id
//@route PUT /api/contacts/:id
//@access private
// name, email, phone

const editContact = asyncHandler(async (req, res) => {
  // get id using param: req.params.id
  const contactId = req.params.id;

  // get updated name, email, phone
  const { name, email, phone } = req.body;

  // find contact with user_id and contactId
  try {
    const returnedContact = await contactModel.findByIdAndUpdate(
      contactId,
      {
        name,
        email,
        phone,
      },
      { new: true }
    );
    res
      .status(200)
      .json({ message: `${name} updated`, status: 200, returnedContact });
  } catch (error) {
    res.status(400);
    throw new Error(error.message || "Can't find the contact");
  }
});

module.exports = editContact;
