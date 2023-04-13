const asyncHandler = require("express-async-handler");
const contactModel = require("../../models/contactModel");

//@desc get all the contacts by logged user
//@route GET /api/contacts/
//@access private

const getContacts = asyncHandler(async (req, res) => {
  // get id of user from req.user -> coming from validateTokenHandler middleware
  // TODO:
  const user_id = req.user;
  console.log(user_id);
  // const user_id = "642d94b6a751c65fd7296be6";

  // get all the contacts from this user_id
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
