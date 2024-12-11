import dayjs from "dayjs";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const generateRefreshToken = async (userId: string) => {

    const expiresIn = dayjs().add(35, "minute").unix();

    const generateTokenRefresh = await prisma.refreshToken.create({
        data: {
            userId,
            expiresIn
        },
    });

    return generateTokenRefresh;

}