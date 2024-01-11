const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = express('bcryptjs');
const router = express.Router();

const users = [];

router.post("/register",async(req,res) => {
    try 
    {
        const {email,password} = req.body;
        const newUser = await bcrypt.hash(password,10);
        users.push(newUser);



    } catch (e) {
        console.log(e);
    }

})

router.post("/login", async(req,res) => {
    try {

        // const {email,password} = req.body;
    
        // const user = users.find((u) => u.email == email);

        // if(!user){
        //     return res.status(400).json({message : "Invalid username or password"});
        // }

        // const passwordMatch = await bcrypt.compare({password,user.password})
         
        




    } catch (e) {
        console.log(e.message)
    }
})

module.exports = {router , users};
