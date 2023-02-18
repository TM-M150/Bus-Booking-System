import mongoose from "mongoose";

const RouteSchema = new mongoose.Schema({
  Title: {
    type: String,
    require: true,
  },

  From: {
    type: String,
    require: true,
    trim: true,
  },

  To: {
    type: String,
    require: true,
    trim: true,
  },

  Price: {
    type: Number,
    currency: "KSH",
  },

  Status: {
    type: String,
    reqiure: true,
    trim: true,
  },

  ArriveTime: {
    type: String,
    reqiure: true,
    trim: true,
  },

  DepartTime: {
    type: String,
    reqiure: true,
    trim: true,
  },

  Busses: {
    type: [String],
  },
});

export default mongoose.model("Route", RouteSchema);
