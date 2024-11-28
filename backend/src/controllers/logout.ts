import { sessionDelete } from "../models/sessionModel";
import { RequestHandler } from "express";
interface errorPrisma {
    code?: string
}

export const logout: RequestHandler = async (req, res, next) => {
    try {
        const { accessToken } = req.body;
        if(!accessToken){
            res.status(401).json({ error: "Logout error, accessToken not provided"})
        return;
        }

        await sessionDelete(accessToken);

        res.status(200).json({ message: "Logout successfully"});

    } catch (error: unknown) {
        const errorPrisma = error as errorPrisma

        if(errorPrisma?.code == "P2025"){
            res.json({sucess: "Logout successfully"})
            return;
        }
        next(error);

    }
}