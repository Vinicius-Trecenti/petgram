import { findEmail, userSchema } from "../models/userModel";
import bcrypt from "bcrypt";
import { Request, Response } from "express";

const loginWithEmail = async (req: Request, res: Response) => {
    
    try {
        const { email, password } = req.body;

        //validar se email existe no banco
        const emailExists = await findEmail(email);
        if (!emailExists) {
            return res.status(404).json({ message: "Email not found" });
        }

        //validar senha
        const checkPassword = await bcrypt.compare(password, emailExists.password);
        if (!checkPassword) {
            return res.status(401).json({ message: "Invalid password" });
        }

        res.status(200).json({ message: "Login successful" });

    } catch (error) {
        console.log("Error creating user", error),
        res.status(500).json({
            error: "Internal server error. Please try again."
        })
    }
    

}

export default loginWithEmail;