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
        username: string;
        profile_picture: string;
    };
    liked_post: Array<{
        id_like: number;
        id_user: string;
    }>;
}

export default function Home() {
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        async function fetchPosts() {
            const token = Cookies.get("token");

            if (!token) {
                alert("Token not found. Redirecting to login...");
                window.location.href = "/login";
                return;
            }

            try {
                const response = await fetch("http://localhost:4000/mainRoutes/post/getAllPost", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`,
                    },
                });

                if (!response.ok) {
                    alert("Erro ao buscar posts.");
                    console.log("Erro ao buscar posts:", response.status);
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

    const handleDeletePost = (id_post: number) => {
        setPosts(posts.filter(post => post.id_post !== id_post));
    };

    return (
        <div className="flex flex-col min-h-screen justify-center pt-20 pb-24">
            <div className="fixed top-0 w-full z-10">
                <HeaderHome />
            </div>

            <div>
                {posts.map((post) => (
                    <PostComponent
                        key={post.id_post}
                        id_post={post.id_post}
                        profile_picture={post.User?.profile_picture || ''}
                        username={post.User?.username || 'Anônimo'}
                        post_url={post.photo_post[0]}
                        description={post.description}
                        likes={post.liked_post?.length || 0}
                        onDelete={handleDeletePost} // Passando a função de deletar
                    />
                ))}
            </div>

            <div className="fixed bottom-0 w-full">
                <NavbarMobile />
            </div>
        </div>
    );
}
