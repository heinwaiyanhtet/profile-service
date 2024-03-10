// // const prisma = require('../config/prisma');
// import { PrismaClient } from "@prisma/client";
// const prisma = new PrismaClient();

// class User {

//     constructor() {
//         console.log("hello user model");
//     }

//     async createUser(name: string, email : string, password : string){

//         try 
//         {
//             const user =  await prisma.user.create({
//                 data: 
//                 {
//                     name,
//                     email,
//                     password
//                 },
//             });
//             return user;

//         } 
//         catch (error) 
//         {
//             console.log("errro in creating user",error);
//             throw error; 
//         }

//     }
    

    
// }

// export default User;

// model Profile {
//     id     Int     @id @default(autoincrement())
//      bio    String?
//      user   User    @relation(fields: [userId], references: [id])
//      userId Int     @unique
// }
   
//    model User {
//      id      Int      @id @default(autoincrement())
//      email   String   @unique
//      name    String?
//      password String
//      profile Profile?
//    }