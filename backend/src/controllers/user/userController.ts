import { userCreate, userSchema, findEmail } from "../../models/userModel";
import { RequestHandler } from "express";
import bcrypt from "bcrypt";



// export const createUser = async (req: Request, res: Response) => {

//     try{
//         const user = req.body;

//     // validar os dados de entrada
//     const validateUser = userSchema.safeParse(user);
//     if(!validateUser.success){
//         return res.status(400).json({
//             error: "Error creating user, check data!",
//             fieldErrors: validateUser.error.flatten().fieldErrors
//         });
//     }

//     //verificar se o e-mail existe no banco
//     const emailExits = await findEmail(validateUser.data.email);

//     if(emailExits){
//         return res.status(409).json({
//             error: "Unable to complete registration as email is already registered ! "
//         });
//     }


//     const passwordHash = await bcrypt.hash(validateUser.data.password, 10);
//     validateUser.data.password = passwordHash

//     //criação de usuário
//     const result = await userCreate(validateUser.data);
//     return res.status(201).json({
//         "message": "User create sucessfully !",
//         data: result
//     })
//     }
//     catch (error){
//         console.log("Error creating user", error),
//         res.status(500).json({
//             error: "Internal server error. Please try again."
//         })
//     }

// }

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

