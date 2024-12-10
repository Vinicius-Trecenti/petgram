import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Função para buscar todos os posts
export const getAllPosts = async (req: Request, res: Response) => {
    try {

        // const mockPosts = [
        //     {
        //         id_post: 1,
        //         id_user: 'user-123',
        //         photo_post: 'https://example.com/photo1.jpg',
        //         description: 'Primeiro post de teste',
        //         like_post: true,
        //         User: { id_user: 'user-123', name: 'Usuário Teste' },
        //         comments: [],
        //         liked_post: [{ id_liked: 1, id_post: 1, id_user: 'user-456' }],
        //     },
        //     {
        //         id_post: 2,
        //         id_user: 'user-456',
        //         photo_post: 'https://example.com/photo2.jpg',
        //         description: 'Segundo post de teste',
        //         like_post: false,
        //         User: { id_user: 'user-456', name: 'Outro Usuário' },
        //         comments: [],
        //         liked_post: [],
        //     },
        // ];

        const posts = await prisma.post.findMany({
            include: {
                User: true, 
                comments: false, // Inclui os comentários (mudar aqui caso for criar os comentarios)
                liked_post: true,
            },
        });

        res.status(200).json(posts);
        // res.status(200).json(mockPosts);
    } catch (error) {
        console.error('Erro ao buscar posts:', error);
        res.status(500).json({ error: 'Erro ao buscar posts' });
    }
};
 