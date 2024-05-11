import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { Error } from "mongoose";
import userRouter from "./routes/user";
import seedRouter from "./routes/seed";
import contentRouter from "./routes/content";

dotenv.config();

const app = express();

// Middleware
app.use(cors({ origin: 'https://netflix-clone-six-ruby.vercel.app' }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use("/api/v1/seed", seedRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/content", contentRouter);

const PORT = process.env.PORT || 8080;

const mongoConnectionString = process.env.MONGO_CONNECTION_STRING;
if (!mongoConnectionString) {
  console.error(
    "❌ MongoDB connection string not found in environment variables"
  );
  process.exit(1); // Exit the process if MongoDB connection string is not defined
}

mongoose
  .connect(mongoConnectionString)
  .then(() => {
    console.log("✅ ->> MongoDB connected successfully");
    app.listen(() => {
      console.log(`✅ ->> Server is running on port ${PORT}`);
    });
  })
  .catch((err: Error) => {
    console.error(`❌ Error connecting to MongoDB: ${err.message}`);
  });
