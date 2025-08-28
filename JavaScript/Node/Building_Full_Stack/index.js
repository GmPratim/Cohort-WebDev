import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import db from "./utils/db.js";

// import all routes
import userRoutes from "./routes/user.routes.js";

dotenv.config();

const app = express();

app.use(
  cors({
    origin: process.env.BASE_URL,
    methods: ["get", "post", "delete", "options"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json()); // json accept krlo

app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.send("Cohorttt!");
});

app.get("/pratim", (req, res) => {
  res.send("Pratimmmmmmmm!");
});

// connect to db
db();

// user routes

app.use("/api/v1/users", userRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
