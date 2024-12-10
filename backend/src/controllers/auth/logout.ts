import { RequestHandler } from "express";
import { deleteRefreshToken } from "../../models/refreshTokenModel";

export const logoutFunction: RequestHandler = async (req, res) => {
    try {
        const { userId } = req.body;
        if (!userId) {
            res.status(400).json({ error: "User ID is required!" });
            return;
        }

        await deleteRefreshToken(userId);
        
        res.status(200).json({message: "Logged out successfully"});

    } catch (error) {
        console.error("Error logging out:", error);
        res.status(500).json({ error: "Internal server error while logging out." });
    }
}