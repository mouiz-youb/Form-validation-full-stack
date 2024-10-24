import mongoose from "mongoose";
// ? to connect with database we should to make this instrection in the bottom
const mongodb = mongoose
  .connect(
    "mongodb+srv://youb:mouiz200308@cluster0.5asji.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("connected to database");
  })
  .catch(() => {
    console.log("not connected to database");
  });
export default mongodb;
