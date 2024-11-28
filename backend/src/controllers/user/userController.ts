import { userCreate, userSchema, findEmail } from "../../models/userModel";
import { RequestHandler } from "express";
import bcrypt from "bcrypt";


export const createUser: RequestHandler = async (req, res)=>{
    
    const user = req.body;

    const validateUserData = userSchema.safeParse(user);
    if(!validateUserData.success){
        res.status(400).json({ error: "Error creating user, check data!", fieldErrors: validateUserData.error.flatten().fieldErrors});
        return;
    }

    const checkEmail = await findEmail(validateUserData.data.email);
    if(checkEmail){
        res.status(409).json({ message: "Unable to complete registration as email is already registered !"});
        return;
    }

    const passwordHash = await bcrypt.hash(validateUserData.data.password, 10);
    validateUserData.data.password = passwordHash;

    const result = await userCreate(validateUserData.data);
    res.status(201).json({"message": "User create sucessfully !", data: result});
    return;

}

