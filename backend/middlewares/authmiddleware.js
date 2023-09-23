const User = require("../models/UserModels");
require("dotenv").config();
const express = require('express');
const app = express();
const jwt = require("jsonwebtoken");
const cookieParser = require('cookie-parser');

app.use(cookieParser());

module.exports.userVerification = (req, res) => {
  const token = req.cookies.token;
  if (!token) {
    return res.json({
      status: false
    })
  }
  jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
    if (err) {
      return res.json({
        status: false,
        msg: err.message
      })
    } else {
      const user = await User.findById(data.id)
      if (user) return res.json({ status: true, user: user.name })
      else return res.json({
        status: false
      })
    }
  })
}