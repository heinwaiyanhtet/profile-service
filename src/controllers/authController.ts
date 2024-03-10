import { PrismaClient } from '@prisma/client/edge'
// import { withAccelerate } from '@prisma/extension-accelerate'
const prisma = new PrismaClient()
// .$extends(withAccelerate())
import bcrypt from "bcryptjs";

export const postRegister = async (req: { body: { name: any; email: any; password: any; }; }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { id: number; name: string | null; email: string; password: string; }[]): void; new(): any; }; }; }) => {
    try
        {

            const { name, email, password } = req.body;
            const bcryptPassword = await bcrypt.hash(password, 10);

            const user =  await prisma.user.create({
                data: {
                    name : name,
                    email : email,
                    password: bcryptPassword
                },
            });
        
            const response = await prisma.user.findMany()
            res.status(200).json(response)

            // res.sendStatus(201)
            // .json(user);

        }  
        catch (error : any) 
        {
            console.error(error);
            res.status(500).json({ msg: error.message } as any);
         }
}

export const postLogin = async (
    req: any,res: any

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
    

    } catch (e : any) {
        console.log(e.message)
    }
}