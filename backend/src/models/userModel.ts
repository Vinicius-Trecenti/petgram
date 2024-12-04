import { PrismaClient } from '@prisma/client';
import { z } from 'zod';

const prisma = new PrismaClient();

export interface userInput {
    email: string,
    fullname: string,
    username: string,
    password: string,
    photo_user?: string,
    bio?: string
}


export const userSchema = z.object({
    email: z.string({message: "The email must be a string."}).email(),
    fullname: z.string({message: "The full name must be a string."})
    .min(17, {message: "The full name must be at least 17 characters."})
    .max(255, {message: "The full name must be a maximum of 255 characters"}),
    username: z.string()
    .min(3,{message: "The username must be at least 3 characters."}).
    max(50, {message: "Username must be a maximum of 50 characters"}),
    password: z.string()
    .min(8, {message: "The password must be at least 8 characters."})
    .max(255, {message: "The password must be a maximum of 255 caracteres"})
});

//type userSchemaType = z.infer<typeof userSchema>;

export const userCreate = async (user: userInput) => {
    const result = await prisma.user.create({
        data: user
    })
    return result
}

// export const userUpdate = async (user: userInput) => {
//     const result = await prisma.user.update({
//         where: {
//             id_user: user.
//         },
//         data: {
//             username: user.username,
//             photo_user: user.photoUser,
//             bio: user.bio
//         }
//     })
//     return result;
//}

export const findEmail = async (email: string) => {
    const result = await prisma.user.findUnique({
        where: {
            email,
        }
    })
    return result
}

export const getById = async (id_user: string) => {
    const result = await prisma.user.findUnique({
        where: {
            id_user,
        }
    })
    return result
}