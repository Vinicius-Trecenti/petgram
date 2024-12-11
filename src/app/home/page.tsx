'use client';

import HeaderHome from "@/components/HeaderHome";
import NavbarMobile from "@/components/NavbarMobile";
import PostComponent from "@/components/PostComponent";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";


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
                const token = Cookies.get("token"); // Pega o token dos cookies

                if (!token) {
                    alert("Token not found. Redirecting to login...");
                    console.log("Token não encontrado. Redirecionando para login...");
                    window.location.href = "/login"; // Redireciona para o login se não tiver token
                    return;
                }

                const response = await fetch("http://localhost:4000/mainRoutes/post/getAllPost", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`, // Envia o token no cabeçalho
                    },
                });

                if (!response.ok) {
                    alert("Erro ao buscar posts. Redirecting to login...");
                    console.log("Erro ao buscar posts:", response.status);
                    window.location.href = "/login"; // Redireciona se ocorrer um erro de autenticação
                    return;
                }

                const data = await response.json();
                setPosts(data);
            } catch (error) {
                console.error("Erro ao buscar posts:", error);
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
                        post_url={post.photo_post[0]} // Apenas a primeira imagem
                        description={post.description}
                        likes={post.liked_post?.length || 0}
                    />
                ))}
            </div>

            <div className="fixed bottom-0 w-full">
                <NavbarMobile />
            </div>
        </div>
    )
}