const router = require("express").Router();

router.get("/userTest", (req, res) => {
  res.send("user test is successfully");
});

router.post("userPostTest", (req, res) => {
  const userName = req.body.userName;
  console.log(userName);
  res.send("your user name is: " + userName);
});

module.exports = router;
