import express from "express";
import mongoose from "mongoose";
import cors from "cors";
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
app.use(cors());
app.post("/Registration", (req, res) => {
  User.create(req.body)
    .then((User) => res.json(User))
    .catch((err) => res.json(err));
});
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  User.findOne({ email: email })
    .then((user) => {
      if (user) {
        if (user.password === password) {
          return res.status(200).json("success"); // Successful login
        } else {
          return res.status(401).json("the password is incorrect"); // Unauthorized for incorrect password
        }
      } else {
        return res.status(404).json("No record existed"); // Not found for no user
      }
    })
    .catch((error) => {
      console.error("Database error:", error);
      return res.status(500).json("Server error"); // Internal server error for unexpected issues
    });
});

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
// "mongodb://youb:<db_password>@<hostname>/?ssl=true&replicaSet=atlas-3vzaf7-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0"
