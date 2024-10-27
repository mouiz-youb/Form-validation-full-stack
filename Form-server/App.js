import express from "express";
import mongoose from "mongoose";
import User from "./models/User.js";
const app = express();
const port = 3002;
// the connection wit the database
mongoose
  .connect(
    "mongodb+srv://youb:mouiz200308@cluster0.qjjyo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("connected to the database");
  })
  .catch(() => {
    console.log("error connecting to the database");
  });
app.use(express.json());
app.post("/Registration", (req, res) => {
  User.create(req.body)
    .then((User) => res.json(User))
    .catch((err) => res.json(err));
});
app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
// "mongodb://youb:<db_password>@<hostname>/?ssl=true&replicaSet=atlas-3vzaf7-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0"
