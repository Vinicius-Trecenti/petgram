
import HeaderComponent from "@/components/HeaderComponent";
import NavbarMobile from "@/components/NavbarMobile";



export default function page() {
    return (
        <div className="flex flex-col min-h-screen justify-center pt-16 pb-16">
            <HeaderComponent text="Nova Publicação "/>


            <div className="fixed bottom-0 w-full">
                <NavbarMobile />
            </div>
        </div>
    );
};
