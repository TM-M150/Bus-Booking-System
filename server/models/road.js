import mongoose from "mongoose";

const RouteSchema = new mongoose.Schema({
  Title: {
    type: String,
    require: true,
  },

  From: {
    type: String,
    require: true,
  },

  To: {
    type: String,
    require: true,
  },

  Price: {
    type: String,
    currency: "KSH",
  },

  Status: {
    type: Date,
    reqiure: true,
  },

  ArriveTime: {
    type: Date,
    reqiure: true,
  },

  DepartTime: {
    type: String,
    reqiure: true,
  },

  Busses: {
    type: [String],
  },
});

export default mongoose.model("Route", RouteSchema);
