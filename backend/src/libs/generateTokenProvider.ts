import jwt from "jsonwebtoken";

const SECRET_KEY = process.env.SECRET_KEY as string;

export const generateTokenProvider = (userId: string) => {
  return jwt.sign(
    { userId }, 
    SECRET_KEY, 
    {
      subject: userId, 
      expiresIn: "1 minute",
    }
  );
};
