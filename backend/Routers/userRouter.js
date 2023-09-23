const express = require('express');
const userRouter = express.Router(); // mini app
const {signup, login, isAuthorized} = require('../controller/authController');
const multer = require('multer');
//user options
userRouter.route('/:id')
.patch(updateUser)
.delete(deleteUser)

userRouter
.route('/signup')
.post(signup)

userRouter
.route('/login')
.post(login)