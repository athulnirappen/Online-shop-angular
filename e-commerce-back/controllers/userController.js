const users = require("../models/userSchema");
const jwt = require("jsonwebtoken");
const jwtSecret = process.env.JWTSECRET;

//register

exports.Register = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const preUser = await users.findOne({ email });

    if (preUser) {
      res.status(406).json("user is alreay exists please login!!!");
    } else {
      const newUser = new users({
        username,
        email,
        password,
      });

      await newUser.save();

      res.status(200).json(newUser);
    }
  } catch (error) {
    res.status(401).json(error);
  }
};

//login

exports.Login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const existingUser = await users.findOne({ email, password });

    if (existingUser) {
        const token = jwt.sign({ userId: existingUser._id }, jwtSecret);
        res.status(200).json({existingUser,token})
    } else {
    }
  } catch (error) {
    res.status(402).json(error);
  }
};
