const express = require("express");
const app = express();
const dotenv = require("dotenv");

dotenv.config();

const moongose = require("mongoose");

moongose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("MongoDB connect successfully");
  })
  .catch((err) => {
    console.log("MongoDB connect fail", err);
  });

app.get("/api/test", () => {
  console.log("Test is successful");
});

app.listen(process.env.PORT || 5000, () => {
  console.log("PORT 5000 is running");
});
