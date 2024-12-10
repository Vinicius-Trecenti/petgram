import { findEmail } from "../../models/userModel";
import { RequestHandler } from "express";
import bcrypt from "bcrypt";
import { generateTokenProvider } from "../../libs/generateTokenProvider";
import { generateRefreshToken } from "../../libs/generateRefreshTokenProvider";
import { clearOldRefreshToken } from "../../libs/clearOldRefreshToken";

export const loginWithEmail: RequestHandler = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    // Verifica se os campos estão presentes
    if (!email || !password) {
      res.status(400).json({ message: "Email and password are required" });
      return;
    }
    
    const checkEmail = await findEmail(email);
    if (!checkEmail) {
      res.status(404).json({ message: "Email not found" });
      return;
    }
   
    const checkPassword = await bcrypt.compare(password, checkEmail.password);
    if (!checkPassword) {
      res.status(401).json({ message: "Invalid password" });
      return;
    }
    
    const token = generateTokenProvider(checkEmail.id_user, checkEmail.username, checkEmail.photo_user ?? "");
    
    clearOldRefreshToken(checkEmail.id_user);

    const refreshToken = await generateRefreshToken(checkEmail.id_user);
    
    res.status(200).json({
      token:token,
      refreshToken:refreshToken,
      message: "Login successfully",
    });

    return;
  } catch (error) {
    console.error("Erro no login:", error);
    res.status(500).json({ message: "Internal server error" });
    return;
  }
};
