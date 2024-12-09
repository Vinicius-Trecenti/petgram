 import { PrismaClient } from "@prisma/client";

 const prisma = new PrismaClient();
 export interface postInput {
     id_user: string,   
     photoPost: string[],
     description: string,
 }

export const createPost = async (post: postInput) => {
     const result = await prisma.post.create({
         data: {
             id_user: post.id_user,
             photo_post: post.photoPost,
             description: post.description
         }
     })
     return result;
}

export const getAllPosts = async () =>{
    const result =  await prisma.post.findMany({
        orderBy:{
            id_post: 'desc'
        }
    })
    return result
}