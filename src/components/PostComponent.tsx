'use client';

import { LiaPawSolid } from "react-icons/lia";
import { IoPaw } from "react-icons/io5";

import { FaRegComment } from "react-icons/fa";
import { LuSend } from "react-icons/lu";
import { FaRegBookmark } from "react-icons/fa6";
import { FaEdit, FaTrash } from "react-icons/fa"; // Ícones de editar e deletar

import { useState } from "react";

interface PostComponentProps {
    profile_picture: string;
    username: string;
    post_url: string;
    description: string;
    likes: number;
    isUserPost: boolean; // Novo campo para verificar se o post é do usuário logado
}

export default function PostComponent({ profile_picture, username, post_url, description, likes, isUserPost }: PostComponentProps) {

    const [liked, setLiked] = useState(false);

    function handleLike() {
        setLiked(!liked);
    }

    return (
        <div className="bg-white mx-4 my-2 rounded-lg text-black">
            <div className="flex items-center justify-between gap-2 ml-2 mt-2">
                {/* <img src={profile_picture} alt="" className="w-12 h-12 rounded-full" /> */}
                <p className="font-bold">{username}</p>

                {isUserPost && (
                    <div className="flex gap-2 mt-2">
                        <button onClick={() => { }} className="text-blue-500 hover:text-blue-700">
                            <FaEdit className="w-5 h-5" />
                        </button>
                        <button onClick={() => { }} className="text-red-500 hover:text-red-700">
                            <FaTrash className="w-5 h-5" />
                        </button>
                    </div>
                )}

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
    );
}
