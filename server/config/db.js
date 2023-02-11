import mongoose from "mongoose";

const connectDB = async function () {
  try {
    mongoose.set("strictQuery", true);
    const client = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`MongoDB Connected: ${client.connection.host}`);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

export default connectDB;
