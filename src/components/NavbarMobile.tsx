import { GiDogHouse } from "react-icons/gi";
import { IoSearch } from "react-icons/io5";
import { CgAddR } from "react-icons/cg";
import { MdSlowMotionVideo } from "react-icons/md";
import { FaRegCircleUser } from "react-icons/fa6";
import Link from 'next/link'

export default function NavbarMobile() {
    return (
        <div className="flex justify-between p-4 border-t border-gray-300 border-solid bg-white">

            <div className="mt-2">
                <Link href="/home">
                    <GiDogHouse className="w-8 h-8"/>
                </Link>
            </div>

            <div className="mt-2">
                <IoSearch  className="w-8 h-8"/>
            </div>

            <div className="mt-2">
                <CgAddR  className="w-8 h-8"/>
            </div>

            <div className="mt-2">
                <MdSlowMotionVideo  className="w-8 h-8"/>
            </div>

            <div className="mt-2">
                <Link href="/profile">
                    <FaRegCircleUser  className="w-8 h-8"/>
                </Link>
            </div>

        </div>
    )
}