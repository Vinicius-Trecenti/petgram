import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getRefreshToken = async (refresh_token: string) => {
    
    const result = await prisma.refreshToken.findFirst({
        where: {
            id: refresh_token
        },
    });
    return result   
}

export const tokenExpired = async (refresh_token: string) => {

    const result = await prisma.refreshToken.delete({
        where: {
            id: refresh_token
        }
    })
    return result;

}

export const deleteRefreshToken = async (userId: string) => {

    const result = await prisma.refreshToken.deleteMany({
        where: {
            userId,
        },
    });
    return result;
}
