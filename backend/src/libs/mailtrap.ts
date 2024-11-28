import nodemailer, { Transporter } from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const transporter: Transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
  user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,
  },
});

interface MailOptions {
  to: string; // Destinatário
  subject: string; // Assunto
  text?: string; // Texto do e-mail (opcional)
  html?: string; // Corpo em HTML (opcional)
}

export const sendEmail = async (mailOptions: MailOptions): Promise<void> =>{
  
  try{

    await transporter.sendMail({
      from: '"Equipe Petgram" <petgram7@gmail.com>', // Remetente
      to: mailOptions.to, // Destinatário
      subject: mailOptions.subject, // Assunto
      text: mailOptions.text, // Texto (opcional)
      html: mailOptions.html, // HTML (opcional)
    })

    console.log("Email sent successfully")
  } catch (error) {
    console.error("Error sending email", error)
  }
  
}
