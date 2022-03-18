const router = require("express").Router(),
  CryptoJs = require("crypto-js"),
  jwt = require("jsonwebtoken"),
  User = require("../models/User");

// REGISTER
router.post("/register", async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: CryptoJs.AES.encrypt(
      req.body.password,
      process.env.PW_SECRET
    ).toString(),
  });
  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

// LOGIN
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    !user && res.status(401).json("Wrong crenentials: username doesn't match");

    const hashedPasword = CryptoJs.AES.decrypt(
        user.password,
        process.env.PW_SECRET
      ),
      dbPassword = hashedPasword.toString(CryptoJs.enc.Utf8),
      accessToken = jwt.sign(
        {
          id: user._id,
          isAdmin: user.isAdmin,
        },
        process.env.JWT_SECRET,
        { expiresIn: "3d" }
      ),
      { password, ...others } = user._doc;

    req.body.password !== dbPassword
      ? res
          .status(401)
          .json(
            `Wrong crenentials: password doesn't match for ${req.body.username}`
          )
      : res.status(200).json({ ...others, accessToken });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

// Chris || admin
// 1234
//  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMTYzMDE0NDI3MzNhYjI2ZDkxOGFjOSIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2NDU4MDA5NDgsImV4cCI6MTY0NjA2MDE0OH0.LnIhnUGS6CBfL77cRDDQNZdp3SVrXZ94k5C71QdjinY"
// }
