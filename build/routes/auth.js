"use strict";
var express = require('express');
var authRouter = express.Router();
var controller = require('../controllers/authController');
authRouter.post("/register", controller.postRegister);
authRouter.post("/login", controller.postLogin);
module.exports = { authRouter: authRouter };
