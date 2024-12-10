'use client';

import { useState } from "react";

import { PiSquaresFourBold } from "react-icons/pi";
import Fotos from "./profile/Fotos";

export default function NavbarProfile() {

    const [isActive, setIsActive] = useState('fotos');

    return (
        <>
            <div className="flex justify-around gap-4 mt-7">
                <PiSquaresFourBold
                    className={`w-8 h-8 cursor-pointer ${isActive === 'fotos' ? 'border-b-2 border-black' : ''}`}
                    onClick={() => setIsActive('fotos')}
                />

            </div>

            {isActive === 'fotos' && <Fotos /> }
        </>
    )
}