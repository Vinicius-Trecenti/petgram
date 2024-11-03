import { LiaPawSolid } from "react-icons/lia";
import { FaRegComment } from "react-icons/fa";
import { LuSend } from "react-icons/lu";
import { FaRegBookmark } from "react-icons/fa6";

export default function PostComponent() {
    return (
        <div>
            <div className="flex items-center gap-2 ml-2 mt-2">
                <img src="https://random.dog/aa4277d4-ffdc-45f5-b87e-2b28b7f23f2e.jpg" alt="" className="w-12 h-12 rounded-full"/>

                <p className="font-bold">Bolt Super Cão</p>
            </div>

            <img src="https://random.dog/aa4277d4-ffdc-45f5-b87e-2b28b7f23f2e.jpg" alt="" className="mt-2"/>

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
                <p className="font-bold">540 Likes</p>
                <p className="mt-1 font-bold">Bolt Super Cão <span className="font-medium">Curtindo um barzinho na sexta</span></p>
                <p className="mt-1">#MeuDonoFicouEmCasa</p>

                <p className="text-sm mt-2">Ver todos os 2 comentários</p>
                {/* <p className="text-sm">Há 3 minutos</p> */}
            </div>

        </div>
    );
}
