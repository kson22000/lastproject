import React from "react";
import { defineElement } from "@lordicon/element";
import { useNavigate } from 'react-router-dom';
function Bought() {
    const navigate = useNavigate();
    return (
        <div className="justify-center items-center flex flex-col font-serif w-full h-107">
            <svg xmlns="http://www.w3.org/2000/svg" width="4em" height="4em" viewBox="0 0 48 48">
                <path d="M0 0h48v48H0z" fill="none" />
                <g fill="none" stroke="#85ef87" stroke-linecap="round" stroke-linejoin="round" stroke-width="4">
                    <path d="m24 4l5.253 3.832l6.503-.012l1.997 6.188l5.268 3.812L41 24l2.021 6.18l-5.268 3.812l-1.997 6.188l-6.503-.012L24 44l-5.253-3.832l-6.503.012l-1.997-6.188l-5.268-3.812L7 24l-2.021-6.18l5.268-3.812l1.997-6.188l6.503.012z" />
                    <path d="m17 24l5 5l10-10" />
                </g>
            </svg>
            <h1 className="text-2xl">Thank You</h1>
            <button type="submit" onClick={() => navigate(`/`)} className='w-30 h-10 mt-5 shadow-2xl shadow-black hover:bg-gray-300 hover:text-black duration-500 bg-black text-md  text-white'>
                HOME
            </button>
        </div>
    )
}
defineElement();
export default Bought