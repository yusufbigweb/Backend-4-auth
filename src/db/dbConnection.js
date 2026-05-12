import mongoose from "mongoose";
import { databaseName } from "../../constent.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGO_DB_URL}/${databaseName}`
    );
    console.log(
      `\n MongoDB Connected !! DB HOST: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("MongoDB Connection Error:", error);
    process.exit(1);
  }
};

export { connectDB };
