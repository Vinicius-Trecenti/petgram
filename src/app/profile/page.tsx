import Header from "@/components/Header"
import NavbarMobile from "@/components/NavbarMobile"

export default function Profile() {
    return (
        <div className="flex flex-col min-h-screen justify-center">
            <div className="">
                <Header />
            </div>

            <div className="flex flex-col flex-grow justify-center gap-4 p-8">
                perfil
            </div>

            <div className="w-full mb-4">
                <NavbarMobile />
            </div>
        </div>
    )
}