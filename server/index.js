import dotenv from 'dotenv';
import moongose from 'mongoose';
import express from 'express';
import userRouter from './routes/user.js';
import authRouter from './routes/auth.js';
import cors from 'cors';

const app = express();

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
app.use("/api", authRouter);

app.listen(process.env.PORT || 5000, () => {
  console.log("PORT 5000 is running");
});
