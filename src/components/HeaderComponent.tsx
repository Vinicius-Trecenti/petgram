import { SlArrowLeft } from "react-icons/sl";
interface HeaderComponentProps{
    text: string
}

export default function HeaderComponent({text}: HeaderComponentProps) {
    return(
    <div className="fixed top-0 w-full z-10">
                <div className="border border-solid border-gray-300 bg-verde-custom">
                    <div className="flex p-4 space-x-14">
                        <SlArrowLeft className="w-8 h-8 text-white "/>
                        <p className="text-2xl text-white">{text}</p>

                    </div>
                </div>
            </div>
    )
};
