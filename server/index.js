import dotenv from 'dotenv';
import moongose from 'mongoose';
import express from 'express';
import userRouter from './routes/user.js';
import authRouter from './routes/auth.js';
import cors from 'cors';
import morgan from 'morgan';

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
app.use(morgan('dev'));
app.use(express.json());
app.use("/api/users", userRouter);
app.use("/api/auth", authRouter);
app.use((_req, _res, next) => {
  const error = new Error('Not found');
  error.status(404);
  next(error);
})

app.use((error, _req, res, _next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
  console.log(error.message);
})

app.listen(process.env.PORT || 5000, () => {
  console.log("PORT 5000 is running");
});
