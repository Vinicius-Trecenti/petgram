'use client';

import { useState } from "react";

import { PiSquaresFourBold } from "react-icons/pi";
import { BiSolidVideos } from "react-icons/bi";
import { BiSolidUserAccount } from "react-icons/bi";
import Fotos from "./profile/Fotos";
import Videos from "./profile/Videos";
import Mencoes from "./profile/Mencoes";


export default function NavbarProfile() {

    const [isActive, setIsActive] = useState('fotos');

    return (
        <>
            <div className="flex justify-around gap-4 mt-7">
                <PiSquaresFourBold
                    className={`w-8 h-8 cursor-pointer ${isActive === 'fotos' ? 'border-b-2 border-black' : ''}`}
                    onClick={() => setIsActive('fotos')}
                />

                <BiSolidVideos
                    className={`w-8 h-8 cursor-pointer ${isActive === 'videos' ? 'border-b-2 border-black' : ''}`}
                    onClick={() => setIsActive('videos')}
                />

                <BiSolidUserAccount
                    className={`w-8 h-8 cursor-pointer ${isActive === 'mencoes' ? 'border-b-2 border-black' : ''}`}
                    onClick={() => setIsActive('mencoes')}
                />
            </div>

            {isActive === 'fotos' && <Fotos /> }
            {isActive === 'videos' && <Videos /> }
            {isActive === 'mencoes' && <Mencoes /> }
        </>
    )
}