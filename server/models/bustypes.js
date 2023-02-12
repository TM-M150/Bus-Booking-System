import mongoose from "mongoose";

const BusTypesSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },

  seats: {
    type: Number,
    require: true,
  },

  status: {
    type: String,
    require: true,
  },

  rating: {
    type: Number,
    min: 0,
    max: 5,
  },

  routs: {
    type: [String],
  },
});

export default mongoose.model("BusTypes", BusTypesSchema);
