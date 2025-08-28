import mongoose from "mongoose";

import dotenv from "dotenv";
dotenv.config(); //  somtimes when we load third party liberies then we have to import dotenv like this.

const db = () => {
  mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
      console.log("connected to mongodb");
    })
    .catch((err) => {
      console.log("Error connecting to mongodb");
    });
};

export default db;
