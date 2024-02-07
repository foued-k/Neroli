import express from "express";
import dotenv from "dotenv";

//configure env
dotenv.config();

const app = express();

app.get("/", (req, res) => {
  res.send({ message: "welcome to Neroli mern app" });
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
