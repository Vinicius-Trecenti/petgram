
import { RequestHandler } from "express";
import { verify, JwtPayload } from "jsonwebtoken";

const SECRET_KEY = process.env.SECRET_KEY as string;

export const auth: RequestHandler = async (req, res, next) => {

  const authToken = req.headers.authorization;

  if (!authToken) {
    res.status(401).json({ message: "Unauthorized" });
    return;
  }

  const [, token] = authToken.split(" ");

  try{

    const decodedToken = verify(token, SECRET_KEY) as JwtPayload;
    console.log("Payload do token: ", decodedToken);

    req.user = decodedToken;
    next();
    return;
  } catch (error) {
    console.error("Error decoding token:", error);
    res.status(401).json({ message: "Token invalid or expired" });
    return;
  }
}
declare global {
  namespace Express {
    interface Request {
      user?: JwtPayload;
    }
  }
}
