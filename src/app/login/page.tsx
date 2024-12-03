'use client';

import Button from "@/components/Button";
import Input from "@/components/Input";
import Logo from "@/components/LogoBlack";

import { useState, useEffect } from "react";
import login from "@/api/auth/login";
import { set } from "zod";

export default function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [errors, setErrors] = useState<any[]>([]);
    const [successMessage, setSuccessMessage] = useState("");
    const [alert, setAlert] = useState('');


    useEffect(() => {
        const queryParams = new URLSearchParams(window.location.search);
        const message = queryParams.get("successMessage");
        if (message) {
            setSuccessMessage(decodeURIComponent(message));
        }
    }, []);

    const handleLogin = async () => {
        console.log(email, password)

        setErrors([]);

        const response = await login(email, password);

        if(response.alert){
            setAlert(response.error);
        }

        if (!response.success) {
            setErrors(response.errors);
            return;
        }

        if (response.success) {
            const successMessage = encodeURIComponent("Login realizado com sucesso!");
            window.location.href = `/home`;
            return;
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
                <div className="flex flex-col items-center p-8 gap-4">
                    <img src="dog.svg" alt="" className="w-20 h-20"/>

                    <Logo />
                </div>

                {successMessage && (
                    <p className="text-green-500 text-center mb-4">{successMessage}</p>
                )}

                {alert && (
                    <p className="text-red-500 text-sm text-center mt-1">{alert}</p>
                )}

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