import mongoose from "mongoose";

const connectDB = async () => {
  try {
    var conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`Connected to database successfully: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error while connecting to database: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
