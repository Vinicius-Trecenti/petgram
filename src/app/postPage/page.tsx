'use client';

import React, { useState } from 'react';
import HeaderHome from "@/components/HeaderHome";
import NavbarMobile from "@/components/NavbarMobile";
import { FaRegBookmark, FaRegComment } from "react-icons/fa6";
import { IoPaw } from "react-icons/io5";
import { LiaPawSolid } from "react-icons/lia";
import { LuSend } from "react-icons/lu";
import Comment from "@/components/Comment"; // Importe corretamente o componente

interface Comentario {
    user: string;
    userImage: string;
    text: string;
}

const profile_picture = "https://random.dog/2d394360-33e1-4c27-9e64-d65a2ab82d5b.jpg";
const username = "Bolte";
const post_url = "https://random.dog/2d394360-33e1-4c27-9e64-d65a2ab82d5b.jpg";
const description = "Vim ajudar o humano no mercado, mas já cansei… alguém viu onde fica a seção de petiscos? 🐾🛒";
const likes = 1000;
const comentarios: Comentario[] = [
    { user: "User1", userImage: "https://avatar.iran.liara.run/public", text: "Este é um comentário." },
    { user: "User2", userImage: "https://avatar.iran.liara.run/public", text: "Outro comentário." },
    { user: "User3", userImage: "https://avatar.iran.liara.run/public", text: "Mais um comentário." },
    { user: "User1", userImage: "https://avatar.iran.liara.run/public", text: "Este é um comentário." },
    { user: "User2", userImage: "https://avatar.iran.liara.run/public", text: "Outro comentário." },
]

export default function PostComponent() {
    const [liked, setLiked] = useState(false);

    function handleLike() {
        setLiked(!liked);
    }

    return (
        <div className="flex flex-col min-h-screen justify-center pt-20 pb-24 text-black">
            <div className="fixed top-0 w-full z-10">
                <HeaderHome />
            </div>

            <div className="bg-white mx-4 my-2 rounded-lg">
                <div className="flex items-center gap-2 ml-2 mt-2">
                    <img src={profile_picture} alt="" className="w-12 h-12 rounded-full" />
                    <p className="font-bold">{username}</p>
                </div>

                <img src={post_url} alt="" className="p-2 mt-2" />

                <div className="flex justify-between p-2">
                    <div className="flex items-center gap-4">
                        <button onClick={handleLike} className="transition-all duration-300 transform hover:scale-110">
                            {liked ? <IoPaw className="w-8 h-8 text-green-500" /> : <LiaPawSolid className="w-8 h-8" />}
                        </button>

                        <FaRegComment className="w-6 h-6" />
                        <LuSend className="w-6 h-6" />
                    </div>

                    <div className="flex items-center">
                        <FaRegBookmark className="w-6 h-6" />
                    </div>
                </div>

                <div className="p-2">
                    <p className="font-bold">{likes} Likes</p>
                    <p className="mt-1 font-bold">{username} <span className="font-medium">{description}</span></p>
                    <p className="mt-1">#Petgram</p>
                </div>
            </div>

            <div className="flex justify-center">
                <p className="font-bold">Comentarios</p>
            </div>

            <div className="flex justify-center p-4">
                <div className="p-4 w-full bg-white rounded-lg drop-shadow-md">
                    {/* Área de Comentários com rolagem */}
                    <div className="h-64 overflow-y-auto"> {/* Ajuste a altura conforme necessário */}
                        {comentarios.map((comentario, index) => (
                            <Comment
                                key={index}
                                user={comentario.user}
                                userImage={comentario.userImage}
                                text={comentario.text}
                            />
                        ))}
                    </div>
                    <div className="sticky top-0 bg-white p-4 shadow-lg z-10">
                        <p>Esta div ficará fixa dentro do contêiner</p>
                    </div>
                </div>
            </div>

            <div className="fixed bottom-0 w-full">
                <NavbarMobile />
            </div>
        </div>
    );
}
