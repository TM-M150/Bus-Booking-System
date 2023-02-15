import mongoose from "mongoose";

const AddressSchema = new mongoose.Schema({
  County: {
    type: String,
  },

  Town: {
    type: String,
  },

  Street: {
    type: String,
  },

  Address: {
    type: String,
  },
});

export default mongoose.model("Address", AddressSchema);
