import Router from "express";
import { v4 as uuidv4 } from "uuid";
import User from "../models/User.js";
import CryptoJS from "crypto-js";

const authRouter = Router();

authRouter.post("/register", async (req, res) => {
  const { email, password, birthMonth } = req.body;
  const newUser = new User({
    id: uuidv4(),
    email,
    password: CryptoJS.AES.encrypt(password, process.env.PASS_SECRET_KEY).toString(),
    birthMonth,
  });
  try {
    const savedUser = await newUser.save();
    //Status 201 ==> Created successfully
    res.status(201).json("register successfully");
  } catch (err) {
    res.status(500).json(err);
  }
});

export default authRouter;
