import mongoose from "mongoose";

const UsersSchema = new mongoose.Schema(
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

    address: {
      type: [String],
    },

    password: {
      type: String,
      require: true,
    },

    phone: {
      type: Number,
      require: true,
    },

    isAdmin: {
      type: Boolean,
      default: false,
    },

    bustypes: {
      type: [String],
    },

    routs: {
      type: [String],
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", UsersSchema);
