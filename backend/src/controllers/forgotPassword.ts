import { RequestHandler } from "express";
import { findEmail } from "../models/userModel";
import { sendEmail } from "../libs/mailtrap";
import crypto from 'crypto';    


export const forgot: RequestHandler = async (req, res) => {

    //recebe o e-mail para reset
    const { email } = req.body

    //verificar se o e-mail existe no banco
    const checkEmail = findEmail(email);
    if(!checkEmail){
        res.status(404).json({ message: "E-mail not found"});
        return;
    }

    // gerar um token 
    const generateToken = crypto.randomBytes(20).toString('hex');

   // enviar o token por e-mail
    await sendEmail({
        to: email,
        subject: "Petgram - Reset de Senha",
        text: `Você solicitou o reset de sua senha. Entre com o token: ${generateToken} para resetar a senha.`,
        html: "<p>Você solicitou o reset de sua senha. Entre com o token: " + generateToken + " para resetar a senha.</p>",
    })

    console.log(email);
    res.status(200).json({message: "Email sent successfully"});
}