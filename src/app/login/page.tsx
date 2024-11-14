'use client';

import Button from "@/components/Button";
import Input from "@/components/Input";
import Logo from "@/components/LogoBlack";

import { useState } from "react";
import login from "@/api/auth/login";

export default function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [errors, setErrors] = useState<any[]>([]);

    const handleLogin = () => {
        const errors = login(email, password);

        if (errors) {
            setErrors(errors);
        }
        else{
            setErrors([]);
        }

        console.log(email, password);
    }

    const getErrorMessage = (field: string) => {
        const error = errors.find((err) => err.path.includes(field));
        return error ? error.message : ''
    }

    return (
        <div className="flex flex-col min-h-screen justify-center">

            <div className="flex flex-col flex-grow justify-center gap-4 p-8">
                <div className="flex flex-col items-center p-8 gap-4">
                    <img src="dog.svg" alt="" className="w-20 h-20"/>

                    <Logo />
                </div>

                <div className="">
                    <Input text="Email or username" type="email" onChange={(e) => setEmail(e.target.value)}/>
                    {getErrorMessage('email') && <p className="text-red-500 text-sm mt-1">{getErrorMessage('email')}</p>}
                </div>

                <div className="">
                    <Input text="Password" type="password" onChange={(e) => setPassword(e.target.value)}/>
                    {getErrorMessage('password') && <p className="text-red-500 text-sm mt-1">{getErrorMessage('password')}</p>}
                </div>

                <a href="" className="text-md text-green-500 font-bold text-end">Esqueceu a senha?</a>

                <Button text="Log In" onClick={handleLogin}/>

                <button type="button" className="flex justify-center gap-2 text-center border border-gray-300 rounded p-2">
                    <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="" className="w-5 h-5"/>
                    <p>Sing in with Google</p>
                </button>
            </div>

            <div className="w-full mb-4">
                <hr className="w-full border-1 mt-8"/>
                    <p className=" text-sm text-gray-500 text-center mt-4">Não tem uma conta?
                        <a href="/register" className="text-md text-green-500 font-bold ml-1">
                            Sing up
                        </a>
                    </p>
            </div>
        </div>
    );
}