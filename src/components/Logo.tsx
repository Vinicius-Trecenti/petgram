import { Pacifico } from "next/font/google";

const pacifico = Pacifico({
    subsets: ["latin"],
    weight: ["400"],
});
export default function Logo() {
    return <h1 className={`${pacifico.className} text-3xl font-bold text-center`}>Petgram</h1>
}