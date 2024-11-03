import Header from "@/components/Header"
import NavbarMobile from "@/components/NavbarMobile"

export default function Profile() {
    return (
        <div className="flex flex-col min-h-screen justify-center pt-16 pb-16">
            <div className="fixed top-0 w-full z-10">
                <Header />
            </div>

            <div className="flex flex-col flex-grow justify-center">
                Perfil
            </div>

            <div className="fixed bottom-0 w-full">
                <NavbarMobile />
            </div>
        </div>
    )
}

// https://random.dog/c61a3df2-abe3-4b0a-84ee-d036f8696814.jpg