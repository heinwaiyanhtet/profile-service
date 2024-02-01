const express = require('express');
const authRouter = express.Router();

const controller = require('../controllers/authController')

authRouter.post("/register",controller.postRegister)
authRouter.post("/login",controller.postLogin)



module.exports = {authRouter};
