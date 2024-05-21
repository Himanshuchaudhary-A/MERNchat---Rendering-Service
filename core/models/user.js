import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  dob: {
    type: String,
  },
  mobileNumber: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  refreshToken: {
    type: String,
  },
}, { timestamps: true });


export const User = mongoose.model("User", UserSchema);
