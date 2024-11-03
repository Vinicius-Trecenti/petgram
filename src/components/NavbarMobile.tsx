import { GiDogHouse } from "react-icons/gi";
import { IoSearch } from "react-icons/io5";
import { CgAddR } from "react-icons/cg";
import { MdSlowMotionVideo } from "react-icons/md";
import { FaRegCircleUser } from "react-icons/fa6";


export default function NavbarMobile() {
    return (
        <div className="flex justify-between p-2 border-t border-gray-300 border-solid">

            <div>
                <GiDogHouse className="w-8 h-8"/>
            </div>

            <div>
                <IoSearch  className="w-8 h-8"/>
            </div>

            <div>
                <CgAddR  className="w-8 h-8"/>
            </div>

            <div>
                <MdSlowMotionVideo  className="w-8 h-8"/>
            </div>

            <div>
                <FaRegCircleUser  className="w-8 h-8"/>
            </div>

        </div>
    )
}