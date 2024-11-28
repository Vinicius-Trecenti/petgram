import { findEmail } from "../models/userModel";
import bcrypt from "bcrypt";
import { RequestHandler } from "express";
import { sessionCreate } from "../models/sessionModel";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const SECRET_KEY = process.env.SECRET_KEY;
if (!SECRET_KEY) {
    throw new Error("SECRET_KEY is not defined in the environment variables");
}

export const loginWithEmail: RequestHandler = async (req, res, next) => {
    
    try {
    
        const { email, password } = req.body;

        if(!email || !password){
            res.status(400).json({ message: "Email and password are required"});
            return
        }

        const checkEmail = await findEmail(email);
            if(!checkEmail){
                res.status(404).json({ message: "Email not found "});
            return; 
        }

        const checkPassword = await bcrypt.compare(password, checkEmail.password);
            if(!checkPassword){
                res.status(401).json({ message: "Invalid Password"});
            return; 
        }

        const token = jwt.sign(
            { email: checkEmail.email, id_user: checkEmail.id_user }, 
            SECRET_KEY, 
            { expiresIn: "5m" }
        );
        
        await sessionCreate(checkEmail.id_user, token);

        res.status(201).json({ 
            message: "Login successfully",
            token: token,
            id: checkEmail.id_user,
            email: checkEmail.email
        });

    } catch (error){
        console.log("Error creating user", error),
         res.status(500).json({
             error: "Internal server error. Please try again."
         })
    }
}