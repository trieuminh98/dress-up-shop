import Router from "express";
import { v4 as uuidv4 } from "uuid";
import User from "../models/User.js";
import CryptoJS from "crypto-js";
import JWT from "jsonwebtoken";

const authRouter = Router();

authRouter.post("/register", async (req, res) => {
  const { email, password, birthMonth } = req.body;
  const newUser = new User({
    id: uuidv4(),
    email,
    password: CryptoJS.AES.encrypt(
      password,
      process.env.PASS_SECRET_KEY
    ).toString(),
    birthMonth,
  });
  try {
    const savedUser = await newUser.save();
    //Status 201 ==> Created successfully
    res.status(201).json({ message: "register successfully" });
  } catch (err) {
    res.status(500).json(err);
  }
});

authRouter.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });
    if (user) {
      const { password: originalPassword, ...other } = user._doc;
      const hashedPassword = CryptoJS.AES.decrypt(
        originalPassword,
        process.env.PASS_SECRET_KEY
      );
      const encPassword = hashedPassword.toString(CryptoJS.enc.Utf8);
      if (encPassword === password) {
        const accessToken = JWT.sign(
          {
            id: other.id,
            isAdmin: other.isAdmin,
          },
          process.env.JWT_SECRET_KEY,
          { expiresIn: "1d" }
        );
        return res.status(200).json({ ...other, accessToken });
      }
      return res.status(401).json({ message: "Wrong crendentials!" });
    }
    res.status(500).json({ message: "Wrong email" });
  } catch (err) {
    res.status(500).json(err);
  }
});

export default authRouter;
