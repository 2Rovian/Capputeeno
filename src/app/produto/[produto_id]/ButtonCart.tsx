'use client'
import { RiShoppingBag4Line } from "react-icons/ri";
import { handleAddCarrinho } from '@/app/componentes/AddCarrinho';

export default function ButtonCart({ produto }: any) {
    return (
        <button className='bg-blue-800 hover:bg-blue-500 py-2 mt-5 lg:mt-0 text-white flex items-center justify-center gap-x-2 cursor-pointer duration-300 ease-in-out rounded-lg'
            onClick={(e) => handleAddCarrinho(produto, e)}
        >
            <RiShoppingBag4Line />
            <span>ADICIONAR AO CARRINHO</span>
        </button>
    )
}