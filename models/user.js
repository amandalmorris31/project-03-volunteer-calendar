const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  first_name: { type: String },
  last_name: { type: String },
  email: { type: String },
  picture: { type: String },
  admin: { type: Boolean, default: false },
  googleId: String,
  accepted_events: [
    {
      id: {
        type: String,
      },
    },
  ],
});

const User = mongoose.model("users", userSchema);

module.exports = User;
