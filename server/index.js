const express = require("express");
const app = express();
const dotenv = require("dotenv");
const moongose = require("mongoose");
const userRouter = require("./routes/user");
var cors = require("cors");

dotenv.config();

moongose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("MongoDB connect successfully");
  })
  .catch((err) => {
    console.log("MongoDB connect fail", err);
  });

app.use(cors());

app.use(express.json());
app.use("/api/users", userRouter);

app.listen(process.env.PORT || 5000, () => {
  console.log("PORT 5000 is running");
});
