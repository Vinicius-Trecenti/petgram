import Carrossel from "@/components/Carrossel";
import Header from "@/components/Header";
import NavbarMobile from "@/components/NavbarMobile";
import PostComponent from "@/components/PostComponent";

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen justify-center pt-20 pb-24">
            <div className="fixed top-0 w-full z-10">
                <Header />
            </div>

            {/* <Carrossel /> */}

            <div className="flex flex-col flex-grow justify-center">
                <PostComponent
                    username="Bolte"
                    profile_picture="https://random.dog/c61a3df2-abe3-4b0a-84ee-d036f8696814.jpg"
                    post_url="https://random.dog/c61a3df2-abe3-4b0a-84ee-d036f8696814.jpg"
                    description="Vim ajudar o humano no mercado, mas já cansei… alguém viu onde fica a seção de petiscos? 🐾🛒"
                    likes={1000}
                />

                <PostComponent
                    username="Cripto"
                    profile_picture="https://random.dog/2d394360-33e1-4c27-9e64-d65a2ab82d5b.jpg"
                    post_url="https://random.dog/2d394360-33e1-4c27-9e64-d65a2ab82d5b.jpg"
                    description="Dia de estudos! 📚🐾 Já sei sentar, deitar e rolar... agora só falta entender essa tal de matemática humana!"
                    likes={642}
                />

                <PostComponent
                    username="Spike & Lana"
                    profile_picture="https://random.dog/c1efdc4c-5691-4823-9e66-fd9eeab3ce96.jpg"
                    post_url="https://random.dog/c1efdc4c-5691-4823-9e66-fd9eeab3ce96.jpg"
                    description=" Nosso amor é como um osso: duradouro e irresistível! 🐾❤️"
                    likes={642}
                />

            </div>

            <div className="fixed bottom-0 w-full">
                <NavbarMobile />
            </div>
        </div>
    )
}