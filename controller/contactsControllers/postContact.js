const asyncHandler = require("express-async-handler");
const contactModel = require("../../models/contactModel");

//@desc add new contact to the already existing list
//@route POST /api/contacts/
//@access private
// name, email, phone

const postContact = asyncHandler(async (req, res) => {
  // get id of user from req.user -> coming from validateTokenHandler middleware
  // TODO:
  const user_id = req.user;

  // get data from req.body
  const { name, email, phone } = req.body;

  // check: all fileds are filled
  if (
    !name ||
    !email ||
    !phone ||
    !name.trim() ||
    !email.trim() ||
    !phone.trim()
  ) {
    res.status(400);
    throw new Error("All fields are mandatory");
  }

  const returnedContact = await contactModel.create({
    user_id,
    name,
    email,
    phone,
  });
  // create new document in scema
  res.status(200).json({
    message: `${name} added to the contact`,
    returnedContact,
    status: 200,
  });
});

module.exports = postContact;
