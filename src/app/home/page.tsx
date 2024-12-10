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
        username: string;
        profile_picture: string;
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
    const [loggedInUser, setLoggedInUser] = useState<string | null>(null);

    useEffect(() => {
        async function fetchPosts() {
            try {
                const response = await fetch('http://localhost:4000/posts'); //mudar aqui a rota da chamada
                const data = await response.json();
                setPosts(data);
                const token = Cookies.get("token");

                if (!token) {
                    console.log("Token não encontrado. Redirecionando para login...");
                    window.location.href = "/login";
                    return;
                }

                // Busca os posts
                const postsResponse = await fetch("http://localhost:4000/posts", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`,
                    },
                });

                if (!postsResponse.ok) {
                    console.log("Erro ao buscar posts:", postsResponse.status);
                    window.location.href = "/login";
                    return;
                }

                const postsData = await postsResponse.json();
                setPosts(postsData);

                // Opcional: Busca os dados do usuário logado
                const userResponse = await fetch("http://localhost:4000/user", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`,
                    },
                });

                if (userResponse.ok) {
                    const userData = await userResponse.json();
                    setLoggedInUser(userData.username);
                }
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
                {posts.length > 0 ? (
                    posts.map((post) => (
                        <PostComponent
                            key={post.id_post}
                            profile_picture={post.User.profile_picture}
                            username={post.User.username}
                            post_url={post.photo_post}
                            description={post.description}
                            likes={post.liked_post.length}
                            isUserPost={loggedInUser === post.User.id_user}

                        />
                    ))
                ) : (
                    <p className="text-center mt-4">Nenhum post encontrado.</p>
                )}
            </div>

            <div className="fixed bottom-0 w-full">
                <NavbarMobile />
            </div>
        </div>
    )
}    );
}
