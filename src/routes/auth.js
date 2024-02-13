import  express  from 'express';
export const router = express.Router();
import {postRegister,postLogin} from '../controllers/authController.js'

router.post("/register",postRegister)
router.post("/login",postLogin)


