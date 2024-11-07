'use client';

import HeaderComponent from "@/components/HeaderComponent";
import NavbarMobile from "@/components/NavbarMobile";
import { useState } from "react";



export default function page() {

    const [text, setText] = useState<string>('');
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

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
        <div className="flex flex-col min-h-screen justify-center pt-2 pb-16 bg-branco-custom">

            <HeaderComponent text="Nova Publicação " />

            <div className="grid justify-center items-center gap-4 p-8">

                <div className="text-black flex justify-center capitalize">
                    Selecione uma imagem
                </div>

                <div className="bg-white w-80 h-80 flex justify-center items-center relative filter drop-shadow-md">
                    {selectedImage ? (
                        <img src={selectedImage} alt="Selected" className="w-full h-full object-cover rounded" />
                    ) : (
                        <img src="addImageIcon.svg" alt="" className="w-20 h-20" />
                    )}

                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="absolute inset-0 opacity-0 cursor-pointer"
                    />
                </div>

                <div className="text-black flex justify-center capitalize">
                    Adicione uma descrição
                </div>

                <textarea
                    className="w-full p-2 border border-solid border-gray-300 focus:border-blue-500 focus:outline-none rounded-lg py-1 px-3 resize-none filter drop-shadow-md"
                    rows={4}
                    placeholder="Digite seu texto aqui..."
                    value={text}
                    onChange={handleChange}
                ></textarea>
                
                <div className="flex justify-center">
                    <button className="bg-green-700 hover:bg-green-400 text-white font-bold p-2 rounded-full py-3 px-6 w-60 filter drop-shadow-md">
                        Publicar
                    </button>
                </div>
            </div>

            <div className="fixed bottom-0 w-full">
                <NavbarMobile />
            </div>
        </div>
    );
};
