import Carrossel from "@/components/Carrossel";
import Header from "@/components/Header";
import NavbarMobile from "@/components/NavbarMobile";
import PostComponent from "@/components/PostComponent";
import StoryIcon from "@/components/StoryIcon";

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen justify-center">
            <div className="">
                <Header />

                <Carrossel />
            </div>

            <div className="flex flex-col flex-grow justify-center">
                <PostComponent />
            </div>

            <div className="w-full mb-4">
                <NavbarMobile />
            </div>
        </div>
    )
}