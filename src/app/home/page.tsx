'use client';

import HeaderHome from "@/components/HeaderHome";
import NavbarMobile from "@/components/NavbarMobile";
import PostComponent from "@/components/PostComponent";
import { useEffect, useState } from "react";

interface Post {
    id_post: number;
    photo_post: string;
    description: string;
    like_post: boolean;
    User: {
        id_user: string;
        username: string; // Certifique-se de que o modelo User tem este campo
        profile_picture: string; // Idem
    };
    comments: Array<{
        id_comment: number;
        content: string;
    }>;
    liked_post: Array<{
        id_like: number;
        id_user: string;
    }>;
}

export default function Home() {

    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        async function fetchPosts() {
            try {
                const response = await fetch('http://localhost:4000/posts'); //mudar aqui a rota da chamada
                const data = await response.json();
                setPosts(data);
            } catch (error) {
                console.error('Erro ao buscar posts:', error);
            }
        }

        fetchPosts();
    }, []);

    return (
        <div className="flex flex-col min-h-screen justify-center pt-20 pb-24">
            <div className="fixed top-0 w-full z-10">
                <HeaderHome />
            </div>

            <div>
                {posts.map((post) => (
                    <PostComponent
                        key={post.id_post}
                        profile_picture={post.User?.profile_picture || ''}
                        username={post.User?.username || 'Anônimo'}
                        post_url={post.photo_post}
                        description={post.description}
                        likes={post.liked_post.length}
                    />
                ))}
            </div>

            <div className="fixed bottom-0 w-full">
                <NavbarMobile />
            </div>
        </div>
    )
}