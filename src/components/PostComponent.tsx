import { LiaPawSolid } from "react-icons/lia";
import { FaRegComment } from "react-icons/fa";
import { LuSend } from "react-icons/lu";
import { FaRegBookmark } from "react-icons/fa6";

interface PostComponentProps {
    profile_picture: string;
    username: string;
    post_url: string;
    description: string;
    likes: number;
}

export default function PostComponent({ profile_picture, username, post_url, description, likes }: PostComponentProps) {
    return (
        <div>
            <div className="flex items-center gap-2 ml-2 mt-2">
                <img src={profile_picture} alt="" className="w-12 h-12 rounded-full"/>

                <p className="font-bold">{username}</p>
            </div>

            <img src={post_url} alt="" className="mt-2"/>

            <div className="flex justify-between p-2">
                <div className="flex items-center gap-4">
                    <LiaPawSolid className="w-8 h-8"/>
                    <FaRegComment className="w-6 h-6"/>
                    <LuSend className="w-6 h-6"/>
                </div>

                <div className="flex items-center">
                    <FaRegBookmark className="w-6 h-6"/>
                </div>

            </div>

            <div className="p-2">
                <p className="font-bold">{likes} Likes</p>
                <p className="mt-1 font-bold">{username} <span className="font-medium">{description}</span></p>
                <p className="mt-1">#Petgram</p>

                <p className="text-sm mt-2">Ver todos os 2 comentários</p>
            </div>

        </div>
    );
}
