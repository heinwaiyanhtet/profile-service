const prisma = require('../config/prisma');

class User {

    constructor() {}

    async createUser(email : string, password : string){

        try 
        {
            const user = await prisma.user
            
            
        } 
        catch (error) {
            
        }

    }
    

    
}

module.exports = User;

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