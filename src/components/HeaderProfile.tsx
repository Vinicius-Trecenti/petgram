'use client';

import { useState } from "react";
import Logo from "./Logo";
import { SlMenu } from "react-icons/sl";
import Modal from './Modal';
import Link from "next/link";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";


export default function HeaderWithModal() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    const router = useRouter(); 

    const handleLogout = () => {
        // Remover os cookies de autenticação
        Cookies.remove("token");
        Cookies.remove("refreshToken");
        Cookies.remove("userId");

        // Redirecionar o usuário para a página de login
        router.push("/login");
    };
    return (
        <div className="bg-verde-custom">
            <div className="flex justify-between p-4">
                <Logo />
                <button onClick={openModal} className="menu-button flex gap-4">
                    <SlMenu className="text-white w-8 h-8"/>
                </button>
            </div>

            <Modal isOpen={isModalOpen} onClose={closeModal}>
                <div className="flex flex-col gap-5">
                    <button onClick={closeModal} className="flex justify-end ">
                        <SlMenu className="text-verde-custom w-8 h-8" />
                    </button>

                    <div className="bg-branco-custom relative filter drop-shadow-lg rounded-md">
                        <Link href="/editProfile">
                            <p className=" text-black text-center capitalize">Editar perfil</p>
                        </Link>
                    </div>

                    <div className="bg-branco-custom relative filter drop-shadow-lg rounded-md">
                        <Link href="/registePet">
                            <p className="text-black text-center capitalize">Cadastrar Pet</p>
                        </Link>
                    </div>

                    {/* Mudar o onclick do botão para deslogar o usuário /> */}
                    <button onClick={closeModal} className="bg-branco-custom relative filter drop-shadow-lg rounded-md">
                        <p className="text-black text-center capitalize" onClick={handleLogout} >Sair</p>
                    </button>
                </div>
            </Modal>

        </div>
    );
}

