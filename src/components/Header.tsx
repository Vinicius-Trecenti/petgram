import Logo from "./Logo";
import { IoCameraOutline } from "react-icons/io5";
import { FaRegCommentDots } from "react-icons/fa";

export default function Header() {
    return (
        <div className="border border-solid border-gray-300 bg-white">
            <div className="flex justify-between p-4">
                <Logo />

                <div className="flex gap-4">
                    <IoCameraOutline className="w-8 h-8" />
                    <FaRegCommentDots className="w-8 h-8" />
                </div>
            </div>
        </div>

    )
}