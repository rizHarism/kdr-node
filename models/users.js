const mongoose = require("mongoose");
const { Schema } = mongoose;
const bcrypt = require("bcrypt");

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: "Username is required",
      max: 25,
    },
    name: {
      type: String,
      required: "Name is required",
      max: 25,
    },
    password: {
      type: String,
      required: "Password is required",
      select: false,
      max: 25,
    },
    role: {
      type: String,
      required: true,
      default: "0x01",
    },
  },
  { timestamps: true }
);

userSchema.pre("save", function (next) {
  const user = this;

  if (!user.isModified("password")) return next();
  bcrypt.genSalt(10, (err, salt) => {
    if (err) return next(err);

    bcrypt.hash(user.password, salt, (err, hash) => {
      if (err) return next(err);

      user.password = hash;
      next();
    });
  });
});

const User = mongoose.model("User", userSchema);
module.exports = User;