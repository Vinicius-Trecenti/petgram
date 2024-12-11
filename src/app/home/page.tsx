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
    const [editingPost, setEditingPost] = useState<null | { id_post: number, description: string }>(null);

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

    const handleEditPost = (id_post: number, description: string) => {
        setEditingPost({ id_post, description });
    };

    const handleUpdatePost = async () => {
        if (!editingPost) return;

        const token = Cookies.get("token");

        if (!token) {
            alert("Token não encontrado. Faça login novamente.");
            return;
        }

        try {
            const response = await fetch("http://localhost:4000/mainRoutes/post/updatePost", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`,
                },
                body: JSON.stringify({
                    id_post: editingPost.id_post,
                    //photo_post: [], // Atualize conforme necessário
                    description: editingPost.description,
                }),
            });

            if (!response.ok) {
                alert("Erro ao atualizar post.");
                return;
            }

            const updatedPost = await response.json();
            alert("Post atualizado com sucesso!");
            setPosts((prevPosts) =>
                prevPosts.map((post) =>
                    post.id_post === updatedPost.id_post ? updatedPost : post
                )
            );
            setEditingPost(null);
        } catch (error) {
            console.error("Erro ao atualizar post:", error);
        }
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
                        onDelete={handleDeletePost}
                        onEdit={handleEditPost} // Adiciona o handler para edição
                    />
                ))}
            </div>

            {editingPost && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-4/5 max-w-lg">
                        <h3 className="text-xl font-semibold mb-4">Editando Post</h3>
                        <textarea
                            className="w-full h-32 p-3 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring focus:ring-blue-500"
                            value={editingPost.description}
                            onChange={(e) =>
                                setEditingPost({ ...editingPost, description: e.target.value })
                            }
                        />
                        <div className="flex justify-end space-x-4 mt-4">
                            <button
                                className="px-4 py-2 bg-verde-custom text-white rounded-lg hover:bg-green-600 focus:outline-none focus:ring focus:ring-green-300"
                                onClick={handleUpdatePost}
                            >
                                Salvar
                            </button>
                            <button
                                className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 focus:outline-none focus:ring focus:ring-gray-200"
                                onClick={() => setEditingPost(null)}
                            >
                                Cancelar
                            </button>
                        </div>
                    </div>
                </div>
            )}


            <div className="fixed bottom-0 w-full">
                <NavbarMobile />
            </div>
        </div>
    );
}
