import { PrismaClient } from '@prisma/client/edge'
const prisma = new PrismaClient()

import bcrypt from "bcryptjs";



export const postRegister = async (req, res) => {
    try
        {

            const { name, email, password } = req.body;
            const bcryptPassword = await bcrypt.hash(password, 10);

            // const user =  await prisma.User.create({
            //     data: {
            //         name : name,
            //         email : email,
            //         password: bcryptPassword
            //     },
            // });
        
            res.sendStatus(201)
            .json(user);

        }  
        catch (error) 
        {
            console.error(error);
            res.status(500).json({ msg: error.message });
         }
}



export const postLogin = async (
    req,res

) => {
    try 
    {
        // const {email,password} = req.body;
        
        // const user = users.find((u) => u.email == email);
        // if(!user){
        //     return res.status(400).json({message : "Invalid username or password"});
        // }

        // let userPass = user.password;

        // const passwordMatch = await bcrypt.compare({password,userPass})
            
        // if(!passwordMatch){
        //     return res.status(400).json({message:"password does not match"});
        // }

        // const token = jwt.sign(
        //     {username: user.email},
        //     process.env.JWT_SECRET,
        //     {
        //         expiresIn:"1h",
        //     }
        // )
    
        // res.json({message:"Login Successfully",token});
    

    } catch (e) {
        console.log(e.message)
    }
}