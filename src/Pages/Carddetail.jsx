import React, { use, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

function Carddetail() {
    const { id } = useParams();
    const { name } = useParams();
    const [count, setcount] = useState(0);
    const navigate = useNavigate();
    const Products = [
        {
            id: 1,
            img: "https://i.pinimg.com/1200x/59/66/d5/5966d568879f4b69be375adfc57bb305.jpg",
            name: "Lip Glow",
            price: "38$",
            type: "Lipstick",
            size: "3.5g",
        },
        {
            id: 2,
            img: "https://i.pinimg.com/1200x/fe/79/14/fe79144f35ced29996c63559791cd13a.jpg",
            name: "Lip Butter",
            price: "38$",
            type: "Lipstick",
            size: "3.5g",
        },
        {
            id: 3,
            img: "https://www.dior.com/dw/image/v2/BGXS_PRD/on/demandware.static/-/Sites-master_dior/default/dwdcc3eba1/Y0000164/Y0000164_E000001655_E01_RHC.jpg?sw=1024",
            name: "Lip Glass",
            price: "48$",
            type: "Lipstick",
            size: "3.5g",
        },
        {
            id: 4,
            img: "https://www.dior.com/dw/image/v2/BGXS_PRD/on/demandware.static/-/Sites-master_dior/default/dw5a6a77f4/Y0996265/Y0996265_C025400999_E01_GHC.jpg?sw=800",
            name: "Rouge Liquid",
            price: "48$",
            type: "Lipstick",
            size: "3.5g",
        },
        {
            id: 5,
            img: "https://www.dior.com/on/demandware.static/-/Sites-master_dior/default/dwb112cd77/Y0271005/Y0271005_E000001674_E01_RHC.jpg?sw=736&sh=1102",
            name: "Lip Tint",
            price: "38$",
            type: "Lipstick",
            size: "3.5g",
        },
        {
            id: 6,
            img: "https://www.dior.com/dw/image/v2/BGXS_PRD/on/demandware.static/-/Sites-master_dior/default/dw9b4b4b41/Y0451001/Y0451001_C045100100_E01_RHC.jpg?sw=1024",
            name: "Rouge Balm",
            price: "38$",
            type: "Lipstick",
            size: "3.5g",
        },
        {
            id: 7,
            img: "https://www.dior.com/dw/image/v2/BGXS_PRD/on/demandware.static/-/Sites-master_dior/default/dwca2e62d1/Y0179010/Y0179010_C017900999_E01_ZHC.jpg?sw=1920",
            name: "Lip Liner",
            price: "28$",
            type: "Lipstick",
            size: "3.5g",
        },
        {
            id: 8,
            img: "https://www.dior.com/dw/image/v2/BGXS_PRD/on/demandware.static/-/Sites-master_dior/default/dw98703630/Y0356009/Y0356009_C035600999_E01_RHC.jpg?sw=1024",
            name: "Rouge Velet",
            price: "48$",
            type: "Lipstick",
            size: "3.5g",
        },
        {
            id: 9,
            img: "https://www.dior.com/dw/image/v2/BGXS_PRD/on/demandware.static/-/Sites-master_dior/default/dw5ceccd5e/Y0374009/Y0374009_C037400999_E01_GHC.jpg?sw=800",
            name: "Rouge Lacquer",
            price: "48$",
            type: "Lipstick",
            size: "3.5g",
        },
        {
            id: 10,
            img: "https://www.dior.com/dw/image/v2/BGXS_PRD/on/demandware.static/-/Sites-master_dior/default/dwff2f41e1/Y0000001/Y0000001_C047300100_E01_GHC.jpg?sw=800",
            name: "Rouge Limited",
            price: "20$",
            type: "Lipstick",
            size: "3.5g",
        },
        {
            id: 11,
            img: "https://www.dior.com/dw/image/v2/BGXS_PRD/on/demandware.static/-/Sites-master_dior/default/dwe23951d9/Y0996338/Y0996338_C024500075_E01_GHC.jpg?sw=800",
            name: "Diorific",
            price: "46$",
            type: "Lipstick",
            size: "3.5g",
        },
        {
            id: 12,
            img: "https://www.dior.com/dw/image/v2/BGXS_PRD/on/demandware.static/-/Sites-master_dior/default/dw8fa94ffb/Y0000108/Y0000108_E000000809_E01_GHC.jpg?sw=800",
            name: "Onstage",
            price: "48$",
            type: "Lipstick",
            size: "3.5g",
        },

    ];

    const product = Products.find((p) => p.id === parseInt(id));
    console.log(id);
    if (!product)
        return <h1>product not found</h1>
    return (
        <div className='w-full h-full grid grid-cols-2'>
            <div className=' w-full flex justify-center items-center'>
                <img src={product.img} alt="" className="w-100 h-112.5 border-black border-2xl" />
            </div>
            <div className='col-span-1 font-serif'>
                <div className='text-center'>
                    <h1 className='text-4xl text-bold text-center'>{product.name}</h1><br />
                <p className='text-xl mt-2'>{product.type}</p>
                <p className='text-xl mt-2'>{product.size}</p>
                <p className='text-xl mt-2'>{product.price}</p>
                </div><br />
                
                <form className='flex-col items-center flex' action="">
                    <div style={{ display: "flex", gap: "10px" }}>
                        <button type="button" className=" py-2 w-10 bg-black duration-500 text-white hover:text-black hover:bg-gray-300"
                            onClick={() => setcount(count - 1)}> - </button>
                        <p className='w-65 h-10 border-b-2 border-gray-300' style={{display: "flex", justifyContent: "center", alignItems: "center"}}>{count}</p>
                        <button type="button" className=" py-2 w-10 bg-black duration-500  text-white hover:text-black hover:bg-gray-300"
                            onClick={() => setcount(count + 1)}> + </button>
                    </div><br />
                    <button type='submit' onClick={() => navigate(`/Bought/`)} className='w-90 h-10 shadow-2xl shadow-black hover:bg-gray-300 hover:text-black duration-500 bg-black text-md  text-white'>BUY</button>
                </form>

            </div>
        </div>
    )
}

export default Carddetail
