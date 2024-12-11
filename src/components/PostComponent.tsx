import { useState } from "react";
import { CiEdit } from "react-icons/ci";
import { FaRegBookmark, FaRegComment } from "react-icons/fa6";
import { IoPaw } from "react-icons/io5";
import { LuSend } from "react-icons/lu";
import { MdDelete } from "react-icons/md";
import { toast } from "react-toastify";
import Cookies from "js-cookie";
import { LiaPawSolid } from "react-icons/lia";

// No PostComponent
export default function PostComponent({ id_post, profile_picture, username, post_url, description, likes, onDelete, onEdit }: PostComponentProps) {
    const [liked, setLiked] = useState(false);

    const handleLike = () => {
        setLiked(!liked);
        toast.success(liked ? "Post descurtido!" : "Post curtido!"); // Notificação de curtir/descurtir
    };

    const handleDelete = async () => {
        const token = Cookies.get("token");

        if (!token) {
            toast.error("Token não encontrado. Redirecionando para login...");
            window.location.href = "/login"; // Redireciona para o login se não tiver token
            return;
        }

        try {
            const response = await fetch("http://localhost:4000/mainRoutes/post/deletePost", {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`,
                },
                body: JSON.stringify({ id_post }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                toast.error(`Erro: ${errorData.message}`); // Exibe mensagem de erro
                console.error("Erro ao deletar post:", response.status, errorData.message);
                return;
            }

            onDelete(id_post); // Atualiza a lista de posts no componente pai
            toast.success("Post deletado com sucesso!");
        } catch (error) {
            console.error("Erro ao deletar o post:", error);
            toast.error("Erro ao deletar o post. Tente novamente.");
        }
    };

    return (
        <div className="bg-white mx-4 my-2 rounded-lg text-black">
            <div className="flex justify-between items-center gap-2 ml-2 mt-2">
                <div className="flex items-center mt-2">
                    <p className="font-bold">{username}</p>
                </div>

                <div className="flex justify-between gap-2">
                    <button onClick={() => onEdit(id_post, description)}>
                        <CiEdit className="w-6 h-6 text-blue-400" />
                    </button>
                    <button onClick={handleDelete}>
                        <MdDelete className="w-6 h-6 text-red-400" />
                    </button>
                </div>
            </div>

            <img src={post_url} alt="" className=" p-2 mt-2" />

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
