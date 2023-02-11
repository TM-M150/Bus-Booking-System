import mongoose from "mongoose";
const { Schema } = mongoose;

const BusTypesSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },

  mapped: {
    type: Boolean,
    default: no,
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
});
