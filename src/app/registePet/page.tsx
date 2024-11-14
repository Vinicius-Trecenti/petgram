'use client';

import HeaderComponent from "@/components/HeaderComponent";
import NavbarMobile from "@/components/NavbarMobile";
import { useState } from "react";



export default function page() {

    const [text, setText] = useState<string>('');
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const userPicture = <img src="https://random.dog/c1efdc4c-5691-4823-9e66-fd9eeab3ce96.jpg" alt="" className="w-full h-full object-cover rounded-full"></img>;
    const realName = 'placeholder';
    const userName = 'placeholder';
    const userBio = 'placeholder';

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setText(event.target.value);
    };

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            const file = event.target.files[0];
            const imageUrl = URL.createObjectURL(file);
            setSelectedImage(imageUrl);
        }
    };

    return (
        <div className="flex flex-col justify-center items-center pt-14 pb-16 bg-branco-custom" style={{ minHeight: '80vh' }}>

            <HeaderComponent text="Cadastrar Pet" />

            <div className="grid justify-center items-center gap-8 p-8">

                <div className="flex flex-col justify-center items-center">
                    <div className="bg-white w-24 h-24 flex justify-center items-center relative filter drop-shadow-md rounded-full">
                        {selectedImage ? (
                            <img
                                src={selectedImage}
                                alt="Selected"
                                className="w-full h-full object-cover rounded-full"
                            />
                        ) : (
                            userPicture
                        )}
                    </div>
                </div>


                <div className="flex flex-col justify-center items-center">
                    <div className="bg-verde-custom w-40 h-10 flex justify-center items-center relative filter drop-shadow-md rounded-full">
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                            className="absolute inset-0 opacity-0 cursor-pointer"
                        />
                        <p className="text-white">Editar foto</p>
                    </div>
                </div>


                <div className="relative w-full">
                    <label className="absolute top-0 left-3 text-gray-600 text-sm">
                        Nome
                    </label>
                    <input
                        type="text"
                        placeholder={realName}
                        className="w-full pt-6 p-2 border border-solid border-gray-300 focus:border-blue-500 focus:outline-none rounded-lg py-1 px-3 text-black"
                    />
                </div>

                <div className="relative w-full">
                    <label className="absolute top-0 left-3 text-gray-600 text-sm">
                        Raça
                    </label>
                    <input
                        type="text"
                        placeholder={userName}
                        className="w-full pt-6 p-2 border border-solid border-gray-300 focus:border-blue-500 focus:outline-none rounded-lg py-1 px-3 text-black"
                    />
                </div>

                <div className="relative w-full">
                    <label className="absolute top-1 left-3 text-gray-600 text-sm bg-white z-10">
                        Descrição
                    </label>
                    <textarea
                        className="w-full pt-6 p-2 border border-solid border-gray-300 focus:border-blue-500 focus:outline-none rounded-lg py-1 px-3 resize-none filter drop-shadow-md text-black"
                        rows={4}
                        placeholder={userBio}
                        value={text}
                        onChange={handleChange}
                    ></textarea>
                </div>

                <div className="flex justify-center">
                    <button className="bg-verde-custom hover:bg-green-700 text-white font-bold p-2 rounded-full py-3 px-6 w-60 filter drop-shadow-md">
                        Salvar
                    </button>
                </div>
            </div>

            <div className="fixed bottom-0 w-full">
                <NavbarMobile />
            </div>
        </div>
    );
};