import { userCreate, userSchema, findEmail } from "../../models/userModel";
import { Request, Response } from "express";

export const createUser = async (req: Request, res: Response) => {

    try{
        const user = req.body;

    // validar os dados de entrada
    const validateUser = userSchema.safeParse(user);
    if(!validateUser.success){
        return res.status(400).json({
            error: "Error creating user, check data!",
            fieldErrors: validateUser.error.flatten().fieldErrors
        });
    }

    //verificar se o e-mail existe no banco
    const emailExits = await findEmail(validateUser.data.email);

    if(emailExits){
        return res.status(409).json({
            error: "Unable to complete registration as email is already registered ! "
        });
    }
    
    //criação de usuário
    const result = await userCreate(validateUser.data);
    return res.status(201).json({
        "message": "User create sucessfully !",
        data: result
    })
    }
    catch (error){
        console.log("Error creating user", error),
        res.status(500).json({
            error: "Internal server error. Please try again."
        })
    }
    
}

