import React from 'react'
import { useNavigate } from 'react-router-dom';

function Card() {
    const navigate = useNavigate();
    const Products = [
        {
            id: 1,
            img: "https://i.pinimg.com/1200x/59/66/d5/5966d568879f4b69be375adfc57bb305.jpg",
            name: "Lip Glow",
            price: "38$",
        },
        {
            id: 2,
            img: "https://i.pinimg.com/1200x/fe/79/14/fe79144f35ced29996c63559791cd13a.jpg",
            name: "Lip Butter",
            price: "38$",
        },
        {
            id: 3,
            img: "https://www.dior.com/dw/image/v2/BGXS_PRD/on/demandware.static/-/Sites-master_dior/default/dwdcc3eba1/Y0000164/Y0000164_E000001655_E01_RHC.jpg?sw=1024",
            name: "Lip Glass",
            price: "48$",
        },
        {
            id: 4,
            img: "https://www.dior.com/dw/image/v2/BGXS_PRD/on/demandware.static/-/Sites-master_dior/default/dw5a6a77f4/Y0996265/Y0996265_C025400999_E01_GHC.jpg?sw=800",
            name: "Rouge Liquid",
            price: "48$",
        },
        {
            id: 5,
            img: "https://www.dior.com/on/demandware.static/-/Sites-master_dior/default/dwb112cd77/Y0271005/Y0271005_E000001674_E01_RHC.jpg?sw=736&sh=1102",
            name: "Lip Tint",
            price: "38$",
        },
        {
            id: 6,
            img: "https://www.dior.com/dw/image/v2/BGXS_PRD/on/demandware.static/-/Sites-master_dior/default/dw9b4b4b41/Y0451001/Y0451001_C045100100_E01_RHC.jpg?sw=1024",
            name: "Rouge Balm",
            price: "38$",
        },
        {
            id: 7,
            img: "https://www.dior.com/dw/image/v2/BGXS_PRD/on/demandware.static/-/Sites-master_dior/default/dwca2e62d1/Y0179010/Y0179010_C017900999_E01_ZHC.jpg?sw=1920",
            name: "Lip Liner",
            price: "28$",
        },
        {
            id: 8,
            img: "https://www.dior.com/dw/image/v2/BGXS_PRD/on/demandware.static/-/Sites-master_dior/default/dw98703630/Y0356009/Y0356009_C035600999_E01_RHC.jpg?sw=1024",
            name: "Rouge Velet",
            price: "48$",
        },
        {
            id: 9,
            img: "https://www.dior.com/dw/image/v2/BGXS_PRD/on/demandware.static/-/Sites-master_dior/default/dw5ceccd5e/Y0374009/Y0374009_C037400999_E01_GHC.jpg?sw=800",
            name: "Rouge Lacquer",
            price: "48$",
        },
        {
            id: 10,
            img: "https://www.dior.com/dw/image/v2/BGXS_PRD/on/demandware.static/-/Sites-master_dior/default/dwff2f41e1/Y0000001/Y0000001_C047300100_E01_GHC.jpg?sw=800",
            name: "Rouge Limited",
            price: "20$",
        },
        {
            id: 11,
            img: "https://www.dior.com/dw/image/v2/BGXS_PRD/on/demandware.static/-/Sites-master_dior/default/dwe23951d9/Y0996338/Y0996338_C024500075_E01_GHC.jpg?sw=800",
            name: "Diorific",
            price: "46$",
        },
        {
            id: 12,
            img: "https://www.dior.com/dw/image/v2/BGXS_PRD/on/demandware.static/-/Sites-master_dior/default/dw8fa94ffb/Y0000108/Y0000108_E000000809_E01_GHC.jpg?sw=800",
            name: "Onstage",
            price: "48$",
        },
    ];
    return (
        <div className='w-full h-400 grid gap-2 p-2 grid-cols-4 font-serif'>
            {Products.map((value) => (
                <div className='col-span-1 w-full h-105 p-1'>
                    <img src={value.img} alt="" className='w-full h-3/4 shadow-lg shadow-black' />
                    <div className='h-1/4 w-full p-2 leading-12.5'>
                        <div className='w-full h-1/2 text-sm font-bold text-black justify-center items-center flex-col flex'>
                            <p>
                            {value.price}
                            </p>
                            <p>
                            {value.name}
                            </p>
                        </div>
                        <button onClick={() => navigate(`/product-detail/${value.id}`)}
                            type='button' className='py-2.5 w-full bg-gray-200 hover:scale-90 duration-500 hover:bg-gray-300 justify-center items-center flex shadow-black shadow-lg text-2xl'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48">
                                <path d="M0 0h48v48H0z" fill="none" />
                                <g fill="none" stroke="#000" stroke-width="4">
                                    <path stroke-linejoin="round" d="M6 15h36l-2 27H8z" clip-rule="evenodd" />
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M16 19V6h16v13" />
                                    <path stroke-linecap="round" d="M16 34h16" />
                                </g>
                            </svg>

                        </button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Card
