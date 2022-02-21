const router = require("express").Router();

router.get("/usertest", (req, res) => {
  res.send("User test successfull");
});

router.post("/userposttest", (req, res) => {
  const username = req.body.username;
  console.log(username);
});

// lh: 5500/api/user/usertest
module.exports = router;
