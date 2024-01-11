const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = express('bcryptjs');


const users = [];

exports.postRegister = async (req,res) => {
    try 
    {
        const {email,password} = req.body;
        const newUser = await bcrypt.hash(password,10);
        users.push(newUser);
    } catch (e) {
        console.log(e);
    }
}

exports.postLogin = async (req,res) => {
    try 
    {
        const {email,password} = req.body;
        const user = users.find((u) => u.email == email);
        if(!user){
            return res.status(400).json({message : "Invalid username or password"});
        }
        const passwordMatch = await bcrypt.compare({password,password})
            
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


    } catch (e) {
        console.log(e.message)
    }
}