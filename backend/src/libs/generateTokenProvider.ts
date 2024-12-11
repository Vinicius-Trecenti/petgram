import jwt from "jsonwebtoken";
import dotenv from 'dotenv';

dotenv.config();
const SECRET_KEY = process.env.SECRET_KEY as string;


export const generateTokenProvider = (userId: string, username: string, photo_user: string) => {
  return jwt.sign(
    { userId,
      username,
      photo_user
     },
    SECRET_KEY,
    {
      subject: userId, 
      expiresIn: "30 minute",
    }
  );
};
