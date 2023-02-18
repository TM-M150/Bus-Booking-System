import mongoose from "mongoose";

const BusSchema = new mongoose.Schema(
  {
    Name: {
      type: String,
      require: true,
    },

    Status: {
      type: String,
      require: true,
    },

    Rating: {
      type: Number,
      min: 0,
      max: 5,
    },
    seats: [{ number: Number, unavailbleDates: { type: [Date] } }],
  },
  { timestamps: true }
);

export default mongoose.model("Bus", BusSchema);
