import  express  from 'express';
export const router = express.Router();
import {postRegister,postLogin,logout} from '../controllers/authController.js'

router.post("auth/register",postRegister);
router.post("auth/login",postLogin);
router.post("auth/delete",logout);


