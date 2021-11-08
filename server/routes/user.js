import Router from "express";

const userRouter = Router();

userRouter.get("/userTest", (req, res) => {
  res.send("user test is successfully");
});

userRouter.post("userPostTest", (req, res) => {
  const userName = req.body.userName;
  console.log(userName);
  res.send("your user name is: " + userName);
});

export default userRouter;
