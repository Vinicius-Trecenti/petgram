import { GiDogHouse } from "react-icons/gi";
import { FaRegCircleUser } from "react-icons/fa6";
import { MdOutlineCamera } from "react-icons/md";
import Link from 'next/link'

export default function NavbarMobile() {
    return (
        <div className="flex justify-between p-4 border-t bg-verde-custom text-white">

            <div className="mt-2">
                <Link href="/home">
                    <GiDogHouse className="w-10 h-10"/>
                </Link>
            </div>

            <div className="mt-2">
                <Link href="/">
                    <MdOutlineCamera className="w-12 h-12"/>
                </Link>
            </div>

            <div className="mt-2">
                <Link href="/profile">
                    <FaRegCircleUser  className="w-10 h-10"/>
                </Link>
            </div>

        </div>
    )
}