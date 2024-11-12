import Header from "@/components/HeaderProfile"
import NavbarMobile from "@/components/NavbarMobile"
import Carrossel from "@/components/Carrossel"
import NavbarProfile from "@/components/NavbarProfile"
import HeaderProfile from "@/components/HeaderProfile"

export default function Profile() {
    return (
        <div className="flex flex-col min-h-screen pt-16 pb-16">
            <div className="fixed top-0 w-full z-10">
                <HeaderProfile/>
            </div>

            <div className="flex flex-col mt-5">
                <div className="flex flex-col justify-center">
                    <div className="flex justify-center items-center p-2 gap-4">
                        <div className="flex flex-col items-center bg-gradient-to-tr from-blue-400 via-indigo-500 to-purple-600 rounded-full p-1">
                            <img src="https://random.dog/c1efdc4c-5691-4823-9e66-fd9eeab3ce96.jpg" alt="" className="w-32 h-32 rounded-full "/>
                        </div>

                        <div>
                            <p className="text-normal text-black text-center font-bold">8</p>
                            <p className="text-normal text-black font-bold">publicações</p>
                        </div>

                        <div>
                            <p className="text-normal text-black text-center font-bold">235</p>
                            <p className="text-normal text-black font-bold">seguidores</p>
                        </div>

                        <div>
                            <p className="text-normal text-black text-center font-bold">234</p>
                            <p className="text-normal text-black font-bold">seguindo</p>
                        </div>
                    </div>

                    <div className="flex flex-col ml-8">
                        <p className="font-bold">Spike & Lana</p>
                        <p>Dois apaixonados</p>
                    </div>
                </div>
            </div>

            <div className="flex justify-center gap-4 mt-4 border-b border-gray-300 pb-4">
                <button className="bg-gray-500 p-1 px-4 text-white rounded-lg">
                    Editar perfil
                </button>

                <button className="bg-gray-500 p-1 px-4 text-white rounded-lg">
                    Compartilhar perfil
                </button>
            </div>

            <Carrossel />

            <NavbarProfile />

            <div className="fixed bottom-0 w-full">
                <NavbarMobile />
            </div>
        </div>
    )
}