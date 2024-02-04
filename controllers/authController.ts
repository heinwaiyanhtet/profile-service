const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
// const user = require('../model/user');
import { PrismaClient } from "@prisma/client";
import { error } from "console";

const users: any[] = [];

exports.postRegister = 
    async (
            req:{ 
                    body: { name: string; email: string; password: string; }; 
                }
                ,res
                : any
        ) => 
{
    
    try 
    {

        const {name,email,password} = req.body;

        // const prisma = new PrismaClient();

        // const bcryptPassword = await bcrypt.hash(password,10);

        // await prisma.user.create({
        //         data: 
        //         {
        //             name,
        //             email,
        //             password : bcryptPassword
        //         },
        //     });


        // 
        // await user.createUser(name,email,bcryptPassword);

        res.sendStatus(201);
        
    } 
    catch (e) 
    {
        console.log(e);
        throw error;
    }

}


exports.postLogin = 
        async (req: { body: { email: any; password: any; }; }
            ,res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { message: string; }): any; new(): any; }; };
             json: (arg0: { message: string; token: any; }) => void; }) => {
    try 
    {
        const {email,password} = req.body;
        
        const user = users.find((u) => u.email == email);
        if(!user){
            return res.status(400).json({message : "Invalid username or password"});
        }

        let userPass = user.password;

        const passwordMatch = await bcrypt.compare({password,userPass})
            
        if(!passwordMatch){
            return res.status(400).json({message:"password does not match"});
        }

        const token = jwt.sign(
            {username: user.email},
            process.env.JWT_SECRET,
            {
                expiresIn:"1h",
            }
        )
    
        res.json({message:"Login Successfully",token});


    } catch (e : any) {
        console.log(e.message)
    }
}

