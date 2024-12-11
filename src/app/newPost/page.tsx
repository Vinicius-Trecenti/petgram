'use client';

import HeaderComponent from "@/components/HeaderComponent";
import NavbarMobile from "@/components/NavbarMobile";
import { useState } from "react";
import Cookies from "js-cookie";

export default function page() {
    const [text, setText] = useState<string>('');
    const [selectedImage, setSelectedImage] = useState<File | null>(null); // Alterado para File, que é mais adequado para o upload
    const token = Cookies.get("token"); // Pega o token dos cookies
    const userId = Cookies.get("userId"); // Pega o ID_USER dos cookies

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setText(event.target.value);
    };

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            const file = event.target.files[0];
            setSelectedImage(file); // Salvar o arquivo selecionado
        }
    };

    const handleSubmit = async () => {
        if (!text || !selectedImage) {
            alert("Descrição e imagem são necessários!");
            return;
        }

        const formData = new FormData();
        formData.append('description', text);
        formData.append('files', selectedImage); // Envia a imagem selecionada
        formData.append('id_user', userId!);

        console.log(userId);

        try {
            const response = await fetch('http://localhost:4000/mainRoutes/post/createPost', {
                method: 'POST',
                headers: {
                    "Authorization": `Bearer ${token}`, // Envia o token no cabeçalho
                },
                body: formData,
            });

            const data = await response.json();

            if (response.ok) {
                // alert("Post criado com sucesso!");
                setText(''); // Limpa o campo de descrição
                setSelectedImage(null); // Limpa a imagem
                window.location.href = `/home`;

            } else {
                alert("Erro ao criar post: " + data.error);
            }
        } catch (error) {
            console.error("Erro ao criar o post:", error);
            alert("Erro ao criar o post.");
        }
    };

    return (
        <div className="flex flex-col min-h-screen justify-center pt-2 pb-16 bg-branco-custom">
            <HeaderComponent text="Nova Publicação" />

            <div className="grid justify-center items-center gap-4 p-8">
                <div className="text-black flex justify-center capitalize">Selecione uma imagem</div>
                <div className="bg-white w-80 h-80 flex justify-center items-center relative filter drop-shadow-md">
                    {selectedImage ? (
                        <img
                            src={URL.createObjectURL(selectedImage)} // Exibe a imagem selecionada
                            alt="Selected"
                            className="w-full h-full object-cover rounded"
                        />
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

                <div className="text-black flex justify-center capitalize">Adicione uma descrição</div>
                <textarea
                    className="w-full p-2 border border-solid border-gray-300 focus:border-blue-500 focus:outline-none rounded-lg py-1 px-3 resize-none filter drop-shadow-md text-black"
                    rows={4}
                    placeholder="Digite seu texto aqui..."
                    value={text}
                    onChange={handleChange}
                ></textarea>

                <div className="flex justify-center">
                    <button
                        onClick={handleSubmit} // Chama a função de envio do formulário
                        className="bg-green-700 hover:bg-verde-custom text-white font-bold p-2 rounded-full py-3 px-6 w-60 filter drop-shadow-md"
                    >
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
