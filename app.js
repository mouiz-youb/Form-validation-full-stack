import express from "express";
import mongoose from "mongoose";
// import User from "./models/User.ts";
import User from "./models/User.js";
const app = express();
const port = 3001;
import mongodb from "./config/dbconnection.js";
// ?  to use the bady params
app.use(express.json());
// create a user in the database
app.post("/createUser", (req, res) => {
  console.log(`create user test`);
});
app.get("/test", (req, res) => {
  res.send(`test for the first time `);
});
app.listen(port, () => {
  console.log(`the server is listen to the port ${port}`);
});
