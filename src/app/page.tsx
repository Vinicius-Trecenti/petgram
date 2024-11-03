import Logo from "@/components/Logo";
import Link from "next/link";
export default function Welcome() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">

      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <img src="dog.svg" alt="" className="w-20 h-20"/>
        <Logo />

        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
            Veja seus pets e fotos favoritas em um só lugar.
          </li>
          <li>Guarde e compartilhe fotos de seus pets.</li>
        </ol>

        <div className="flex gap-4 items-center sm:flex-row">
          <Link className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5" href="/login">
            Login In
          </Link>

          <Link className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44" href="/register" >
            Sing Up
          </Link>
        </div>
      </main>

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <p>&copy; 2024 Petgram</p>

        <p className="text-md text-center">Desenvolvido por João Vitor, Tulio e Vinicius Trecenti</p>
      </footer>
    </div>
  );
}
