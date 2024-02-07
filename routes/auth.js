import  express  from 'express';
const authRouter = express.Router();

import {postRegister,postLogin} from '../controllers/authController.js'


authRouter.post("/register",postRegister)
authRouter.post("/login",postLogin)

export default authRouter;

