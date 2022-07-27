require("dotenv").config();
const mongoose = require("mongoose");
function connectDB() {
  // Database connection 🥳
  mongoose.connect(process.env.MONGO_CONNECTION_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
  });
  mongoose.connection.on("error", (err) => {
    console.log("Error connecting mongoDB", err);
  });
  mongoose.connection.on("connected", () => {
    console.log("Conneted to mongoDB");
  });
}

// mIAY0a6u1ByJsWWZ

module.exports = connectDB;
