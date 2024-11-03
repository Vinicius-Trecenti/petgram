import Button from "@/components/Button";
import Input from "@/components/Input";
import Logo from "@/components/Logo";

export default function Login() {
    return (
        <div className="flex flex-col min-h-screen justify-center">

            <div className="flex flex-col flex-grow justify-center gap-4 p-8">
                <div className="flex flex-col items-center p-8 gap-4">
                    <img src="dog.svg" alt="" className="w-20 h-20"/>

                    <Logo />
                </div>

                <Input text="Phone number, email or username" type="email"/>
                <Input text="Password" type="password"/>

                <a href="" className="text-md text-sky-400 font-bold text-end">Esqueceu a senha?</a>

                <Button text="Log In"/>

                <button type="button" className="flex justify-center gap-2 text-center border border-gray-300 rounded p-2">
                    <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="" className="w-5 h-5"/>
                    <p>Sing in with Google</p>
                </button>
            </div>

            <div className="w-full mb-4">
                <hr className="w-full border-1 mt-8"/>
                    <p className=" text-sm text-gray-500 text-center mt-4">Não tem uma conta?
                        <a href="/register" className="text-md text-sky-400 font-bold ml-1">
                            Sing up
                        </a>
                    </p>
            </div>
        </div>
    );
}