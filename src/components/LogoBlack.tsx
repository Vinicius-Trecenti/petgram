import { Pacifico } from "next/font/google";

const pacifico = Pacifico({
    subsets: ["latin"],
    weight: ["400"],
});
export default function LogoBlack() {
    return <h1 className={`${pacifico.className} text-3xl text-black font-bold text-center`}>Petgram</h1>
}