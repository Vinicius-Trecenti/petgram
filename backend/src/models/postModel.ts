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

export const createComment = async (post_id: number, user_id: string, comment: string) => {
    const result = await prisma.comments.create({
        data: {
            post_id,
            user_id,
            comment
        }
    })
    return result
}

export const getComment = async (post_id: number) => {
    const result = await prisma.comments.findMany({
        where: {
            post_id
        },
        orderBy: {
            post_id: 'desc'
        },
        select: {
            comment: true
        }
    })
    return result;
}

export const deletePost = async (id_post: number) => {
    const result =  await prisma.post.delete({
        where:{
            id_post
        }
    })
    return result;
}

export const updatePost = async (id_post: number, photo_post: string[], description: string) => {
    const result = await prisma.post.update({
        where: {
                id_post,
        },
        data: {
            photo_post,
            description

        }
    })

    return result;
}

export const compareId = async () => {
    
    const result = await prisma.post.findMany({
        include: {
            User: {
                select: {
                    username: true
                }
            }
        }
    })
    return result;
}