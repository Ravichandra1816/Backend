// require('dotenv').config({path: './env'})
import connectDB from "./db/index.js";

import dotenv from "dotenv";
dotenv.config();

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 5000, () => {
      console.log(`Server is running at port: ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log("MONGODB connection is failed", error);
  });

/*
import express from "express";
const app = express();

( async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    app.on("error", (error) => {
      console.log("Error:", error);
      throw error;
    });
    app.listen{process.env.PORT, ()=> {
      console.log('App is listening on port ${process.env.PORT')
    }}
  } catch (error) {
    console.log("Error:", error);
    throw error;
  }
})()
  */
