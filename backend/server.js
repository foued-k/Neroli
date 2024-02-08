import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";

//configure env
dotenv.config();

//database config
connectDB();

const app = express();

//middelwares
app.use(express.json());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send({ message: "welcome to Neroli mern app" });
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
