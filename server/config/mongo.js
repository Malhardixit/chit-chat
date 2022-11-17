import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const MONGO_URI =
  "mongodb+srv://Riddhiman_Mongo:hello123@cluster1.b76yf.mongodb.net/ChatApp?retryWrites=true&w=majority";

mongoose.connect(MONGO_URI);

mongoose.connection.on("connected", () => {
  console.log("Mongo has connected succesfully");
});
mongoose.connection.on("reconnected", () => {
  console.log("Mongo has reconnected");
});
mongoose.connection.on("error", (error) => {
  console.log("Mongo connection has an error", error);
  mongoose.disconnect();
});
mongoose.connection.on("disconnected", () => {
  console.log("Mongo connection is disconnected");
});
