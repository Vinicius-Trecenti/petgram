import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const sessionCreate = async (user_id: string, token: string) => {
    const result = await prisma.session.create({
        data: {
            user_id: user_id,
            token: token
        }
    })
    return result
}