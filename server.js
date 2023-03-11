const app = require("./app");

// const DB_HOST =
//   "mongodb+srv://antonina:H3haUc58aGmRSj4@cluster0.ukw0xzd.mongodb.net/contacts-reader?retryWrites=true&w=majority";

const { DB_HOST } = require("./config");

const mongoose = require("mongoose");

mongoose.set("strictQuery", true);

mongoose
  .connect(DB_HOST)
  .then(() => app.listen(3000))
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });

// app.listen(3000, () => {
//   console.log("Server running. Use our API on port: 3000");
// });
