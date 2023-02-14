import mongoose from "mongoose";

const AddresssSchema = new mongoose.Schema({
  county: {
    type: String,
  },

  town: {
    type: String,
  },

  street: {
    type: String,
  },

  address: {
    type: String,
  },
});

export default mongoose.model("Address", UsersSchema);
