import Logo from "@/components/Logo";
import Button from "@/components/Button";
import Input from "@/components/Input";

export default function Register() {
    return (
        <div className="flex flex-col min-h-screen justify-center">

            <div className="flex flex-col flex-grow justify-center gap-4 p-8">
                <div className="p-4">
                    <Logo />
                </div>

                <p className="text-center font-bold text-gray-500 mb-2">
                    Cadastre-se para ver fotos e vídeos dos seus pet favoritos.
                </p>

                <button type="button" className="flex justify-center gap-2 text-center border border-gray-300 rounded p-2">
                    <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="" className="w-5 h-5"/>
                    <p>Sing in with Google</p>
                </button>

                <div className="flex items-center gap-4">
                    <hr className="w-full border-1"/>
                    <p className="text-center font-medium">or</p>
                    <hr className="w-full border-1"/>
                </div>

                <Input text="Phone number or email" type="email"/>
                <Input text="Full name" type="name"/>
                <Input text="Username" type="username"/>
                <Input text="Password" type="password"/>

                <p className="text-center font-medium mt-4">
                    As pessoas que usam nosso serviço podem ter enviado suas informações de contato para o Instagram. <a className="text-sky-400">Saiba mais</a>
                </p>

                <p className="text-center font-medium mt-4">
                Ao se cadastrar, você concorda com nossos <a href="" className="text-sky-400">Termos</a>, <a href="" className="text-sky-400">Política de Privacidade</a> e <a href="" className="text-sky-400">Política de Cookies</a>.
                </p>

                <Button text="Sing Up"/>

            </div>

            <div className="w-full mb-4">
                <hr className="w-full border-1 mt-8"/>
                    <p className=" text-sm text-gray-500 text-center mt-4">Have an account?
                        <a href="/login" className="text-md text-sky-400 font-bold ml-1">
                            Log In
                        </a>
                    </p>
            </div>
        </div>
    );
}