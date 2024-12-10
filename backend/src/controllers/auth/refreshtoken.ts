import { Request, Response} from "express";
import dayjs from "dayjs";
import { generateTokenProvider } from "../../libs/generateTokenProvider";
import { generateRefreshToken } from "../../libs/generateRefreshTokenProvider";
import { getRefreshToken, deleteRefreshToken } from "../../models/refreshTokenModel";



export const refreshTokenFunction = async (req: Request, res: Response) => {

    const { refreshToken } = req.body;

    const tokenMatch = await getRefreshToken(refreshToken);

        if(!tokenMatch) {
        res.status(403).json({ error: "Unauthorized, refreshToken not found!" });
        return;
    }

    const token = generateTokenProvider(tokenMatch.userId);
    
    const refreshTokenExpired = dayjs().isAfter(dayjs.unix(tokenMatch.expiresIn))

    if(refreshTokenExpired) {
            console.log("refresh token expirado");

        deleteRefreshToken(tokenMatch.userId);
            console.log("refresh token apagado do banco");

        const newRefreshToken = await generateRefreshToken(tokenMatch.userId);
            console.log("refresh token gerado no banco");

        res.status(200).json({ token: token, refreshToken: newRefreshToken});
        return;
    }

    res.status(200).json({ token: token });
    return;
}

