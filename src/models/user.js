import mongoose from "mongoose";
import bcrypt from "bcrypt";
import { SALT } from "../config/server-config.js";
import jwt from "jsonwebtoken";
const userSchema = await mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

userSchema.methods.comparePassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};
userSchema.methods.createToken = function () {
  return jwt.sign({ id: this._id, email: this.email }, "twitter_secret", {
    expiresIn: "1d",
  });
};

userSchema.pre("save", function (next) {
  const user = this;
  user.password = bcrypt.hashSync(user.password, SALT);
  next();
});

const User = mongoose.model("User", userSchema);
export default User;
