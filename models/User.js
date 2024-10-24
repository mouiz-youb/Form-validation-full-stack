// import mongoose from "mongoose";
// const Schema = mongoose.Schema;
// const ArticleSchema = new Schema({
//   title: String,
//   body: String,
//   numberOfLike: Number,
// });
// const Article = mongoose.model("Arcile", ArticleSchema);
// export default Article;
import mongoose from "mongoose";
const Schema = mongoose.Schema;
const UserSchema = new Schema({
  username: String,
  email: String,
  age: Number,
});
const User = mongoose.model("User", UserSchema);
export default User;
