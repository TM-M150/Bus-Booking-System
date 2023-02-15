import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    Name: {
      type: String,
      require: true,
    },

    Email: {
      type: String,
      require: true,
      unique: true,
    },

    Addresses: {
      type: [String],
    },

    password: {
      type: String,
      require: true,
    },

    PhoneNumber: {
      type: Number,
      require: true,
    },

    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", UserSchema);
