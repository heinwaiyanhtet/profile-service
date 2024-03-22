import { PrismaClient } from '@prisma/client/edge'
import {Request, Response} from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import  prisma from "../services/prisma";


async function findUserByEmail(email : string) {

    return await prisma.user.findFirst({
        where: {
            email: email
        },
        select: {
            email: true,
            password: true,
            name: true,
            id: true
        }
    });

}

export const postRegister = async (req: Request, res : Response) => {
    try
    {

        const { name, email, password } = req?.body;

        if(!name || !email || !password){
            return res.status(400).jsonp({ req : "required fields"});
        }
        const existedUser = await findUserByEmail(email);

        if (existedUser) return res.status(400).jsonp({msg: "Email must be unique",});


        const bcryptPassword = await bcrypt.hash(password, 10);
        const user =  await prisma.user.create({
            data: {
                name : name,
                email : email,
                password: bcryptPassword
            },
        });

        const response = await prisma.user.findMany()
        return res.status(200).json(response);

    }  
    catch (error : any) 
    {
        return res.status(400).jsonp({ msg: error.message });
    }
}

export const postLogin = async ( req: Request,res: Response ) => {
    try 
    {

        const { email, password } = req?.body;

        if(!email || !password)
        {
            return res.status(400).jsonp({message:"Email or password Required!"});
        }

        const existedUser = await findUserByEmail(req?.body?.email);

        if(!existedUser)
        {
            return res.status(400).jsonp({message:"Email or Password is wrong"})
        }

        const passwordMatch = await bcrypt.compare(password,existedUser.password)

        if(!passwordMatch)
        {
            return res.status(400).jsonp({message:"Email or Password is wrong"})
        }


         const token = jwt.sign({
                user: existedUser
        }, 'secret', {expiresIn: '24h'});

        return res.cookie("access_token", token, {
            httpOnly: true
        })
        .status(200)
        .jsonp({
            msg: "Login successfully",
            user: {email: existedUser?.email, name: existedUser?.name, id: existedUser?.id}
        });
    

    } catch (e : any) {
        console.log(e.message)
    }
}

export const logout = async (req:Request,res: Response) => {
    return res.clearCookie("access_token").status(200).jsonp({msg: "Logout successfully"});
}