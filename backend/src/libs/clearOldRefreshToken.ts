import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const clearOldRefreshToken = async (userId: string) => {

    const clearRefreshToken = await prisma.refreshToken.delete({
        where: {
            userId,
        },
    });
    return clearRefreshToken
}