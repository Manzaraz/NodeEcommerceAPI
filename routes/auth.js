const router = require("express").Router();
const CryptoJs = require("crypto-js");
const User = require("../models/User");

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
    );

    const dbPassword = hashedPasword.toString(CryptoJs.enc.Utf8);
    const { password, ...others } = user._doc;

    req.body.password !== dbPassword
      ? res
          .status(401)
          .json(
            `Wrong crenentials: password doesn't match for ${req.body.username}`
          )
      : res.status(200).json({ ...others });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
