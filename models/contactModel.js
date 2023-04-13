const mongoose = require("mongoose");

const contactSchema = mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const contactModel = mongoose.model("contacts", contactSchema);

module.exports = contactModel;
