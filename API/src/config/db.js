import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      maxPoolSize: 10,   
      minPoolSize: 2,
      useNewUrlParser: true,
    });
    console.log("MongoDB Connected");
  } catch (error) {
    console.error(" MongoDB Error: ", error.message);
    process.exit(1);
  }
};


