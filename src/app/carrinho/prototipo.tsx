// ícones
import { FaRegTrashCan } from "react-icons/fa6";
import { RxCaretDown } from "react-icons/rx";
import { RxCaretUp } from "react-icons/rx";
import { TbArrowBackUp } from "react-icons/tb";
// ------

import Link from "next/link";
import Carrinho_Article from "./Carrinho_Article";

export default function Carrinho_Página() {
    return (
        <div className="mb-5">
            <div className="my-5">
                <div className='cursor-pointer w-fit'>
                    <Link href='/'
                        className='flex items-center gap-x-2 text-gray-700 hover:text-gray-950'
                    >
                        <span className=' outline-2 outline-gray-700 rounded-full text-2xl'>
                            <TbArrowBackUp />
                        </span>
                        <span className='text-lg'>Voltar</span>
                    </Link>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row lg:gap-x-4">
                <main className="grow">
                    <h1 className='font-bold text-2xl'>SEU CARRINHO</h1>
                    <p className="mb-3 mt-1 text-lg">Total(3 produtos) <span className="font-semibold">R$161,00</span>
                    </p>
                    <section className="flex flex-col gap-y-4">
                        <Carrinho_Article />
                        <Carrinho_Article />
                        <Carrinho_Article />
                    </section>
                </main>

                <aside className="w-full flex flex-col lg:w-[50%] bg-white rounded-md mt-4 lg:mt-0 p-4 lg:h-fit">
                    <h2 className="font-bold text-xl">RESUMO DO PEDIDO</h2>
                    <div className="flex justify-between items-center mt-2">
                        <span>Subtotal de produtos</span>
                        <span>R$ 161,00</span>
                    </div>
                    <div className="flex justify-between items-center mt-1">
                        <span>Entrega</span>
                        <span>R$ 40,00</span>
                    </div>
                    <div className='h-[1px] bg-gray-400 rounded-md mb-2 mt-4'/>

                    <div className="flex justify-between items-center font-bold text-lg">
                        <span>Total</span>
                        <span>R$ 201,00</span>
                    </div>

                    <button className="bg-green-600 hover:bg-green-500 cursor-pointer text-white py-2 duration-200 ease-in-out rounded-md my-5">FINALIZAR A COMPRA</button>

                    <ul className="grid grid-cols-2 lg:grid-cols-1 lg:gap-y-2 text-gray-600 lg:mt-[60px]">
                        <li className="">
                            <span className='hover:text-gray-900 underline cursor-pointer'>AJUDA</span>
                        </li>
                        <li className="">
                            <span className='hover:text-gray-900 underline cursor-pointer'>REEMBOLSOS</span>
                        </li>
                        <li className="">
                            <span className='hover:text-gray-900 underline cursor-pointer'>ENTREGAS E FRETE</span>
                        </li>
                        <li className="">
                            <span className='hover:text-gray-900 underline cursor-pointer'>TROCAS E DEVOLUÇÕES</span>
                        </li>
                    </ul>
                </aside>

            </div>
        </div>
    )
}