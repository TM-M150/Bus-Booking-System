import mongoose from "mongoose";
const { Schema } = mongoose;

const UsersSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  
});
