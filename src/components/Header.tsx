import Logo from "./Logo";
import { IoPaw } from "react-icons/io5";

export default function Header() {
    return (
        <div className="bg-verde-custom">
            <div className="flex justify-between p-4">
                <Logo />

                <div className="flex gap-4">
                    <IoPaw className="text-white w-8 h-8" />
                </div>
            </div>
        </div>

    )
}