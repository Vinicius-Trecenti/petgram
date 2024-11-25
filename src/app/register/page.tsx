'use client';

import Logo from "@/components/LogoBlack";
import Button from "@/components/Button";
import Input from "@/components/Input";

import { useState } from "react";
import register from "@/api/auth/register";

export default function Register() {

    const [email, setEmail] = useState('');
    const [fullname, setfullname] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [errors, setErrors] = useState<any[]>([]);

    const handleRegister = () => {
        const errors = register(email, fullname, username, password);

        if (errors) {
            setErrors(errors);
        }
        else{
            setErrors([]);
        }
    }

    const getErrorMessage = (field: string) => {
        if (!Array.isArray(errors)) return ''; // Garante que `errors` é um array

        const error = errors.find((err) => err.path.includes(field));
        return error ? error.message : '';
    };


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

                <div className="">
                    <Input text="Email" type="email" onChange={(e) => setEmail(e.target.value)}/>
                    {getErrorMessage("email") && (
                        <p className="text-red-500 text-sm mt-1">{getErrorMessage("email")}</p>
                    )}
                </div>

                <div className="">
                    <Input text="Full name" type="name" onChange={(e) => setfullname(e.target.value)}/>
                    {getErrorMessage("name") && (
                        <p className="text-red-500 text-sm mt-1">{getErrorMessage("name")}</p>
                    )}
                </div>

                <div className="">
                    <Input text="Username" type="username" onChange={(e) => setUsername(e.target.value)}/>
                    {getErrorMessage("username") && (
                        <p className="text-red-500 text-sm mt-1">{getErrorMessage("username")}</p>
                    )}
                </div>

                <div className="">
                    <Input text="Password" type="password" onChange={(e) => setPassword(e.target.value)}/>
                    {getErrorMessage("password") && (
                        <p className="text-red-500 text-sm mt-1">{getErrorMessage("password")}</p>
                    )}
                </div>


                <p className="text-center font-medium mt-4">
                    As pessoas que usam nosso serviço podem ter enviado suas informações de contato para o Instagram. <a className="text-green-500">Saiba mais</a>
                </p>

                <p className="text-center font-medium mt-4">
                Ao se cadastrar, você concorda com nossos <a href="" className="text-green-500">Termos</a>, <a href="" className="text-green-500">Política de Privacidade</a> e <a href="" className="text-green-500">Política de Cookies</a>.
                </p>

                <Button text="Sing Up" onClick={handleRegister}/>

            </div>

            <div className="w-full mb-4">
                <hr className="w-full border-1 mt-8"/>
                    <p className=" text-sm text-gray-500 text-center mt-4">Have an account?
                        <a href="/login" className="text-md text-green-500 font-bold ml-1">
                            Log In
                        </a>
                    </p>
            </div>
        </div>
    );
}