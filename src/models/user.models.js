import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      lowercase: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    profileUrl:{
      type: String,
      required: true
    },
    role: {
      type: String,
      default: "employee",
      required: true,
    },
  },
  { timestamps: true }
);

export const User = mongoose.model("users", userSchema);
