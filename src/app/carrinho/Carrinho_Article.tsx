'use client'
import { FaRegTrashCan } from "react-icons/fa6";

import { RxCaretDown } from "react-icons/rx";
import { RxCaretUp } from "react-icons/rx";
import { useState } from 'react';
import Image from "next/image";

export default function Carrinho_Article({ produto, atualizarQuantidade, removerProduto }: any) {
    const [showSelect, setShowSelect] = useState<boolean>(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newQuantity = Number(e.target.value);
        if (newQuantity > 0) {
            atualizarQuantidade(produto.id, newQuantity);
        }
    };

    return (
        <article className="w-full h-fitt bg-white rounded-md overflow-hidden flex flex-col md:flex-row justify-between">

            <Image src={produto.imagem} alt=""
                width={300}
                height={300}
                loading="lazy"
                className="w-full md:max-w-[300px] h-[250px] object-center object-cover" />

            <div className="flex flex-col justify-between grow px-3 md:px-5">
                <div className="min-h-[125px]">
                    <div className="flex items-center justify-between my-2">
                        <h3 className="text-2xl font-semibold">{produto.nome}</h3>
                        <span className="text-red-500 text-lg rounded-md duration-200 ease-in-out cursor-pointer hover:px-2 hover:py-1 hover:bg-red-500 hover:text-red-50"
                        onClick={() => removerProduto(produto.id)}
                        >
                            <FaRegTrashCan />
                        </span>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet atque voluptas cupiditate! Repellat dolorem alias error sit, rerum laboriosam. Fuga.</p>
                </div>
                <div className="flex justify-between my-3">
                    <div className={`flex gap-x-2 items-center bg-gray-300 outline-2 outline-gray-400 px-4 py-1 rounded-lg cursor-pointer relative ${showSelect ? "rounded-t-none " : ""}`}
                        onClick={() => setShowSelect(!showSelect)}
                    >
                        <span>1</span>
                        <span >
                            {showSelect ?
                                (<RxCaretUp />)
                                :
                                (<RxCaretDown />)
                            }

                        </span>
                        {showSelect && (
                            <div
                                className="absolute left-0 top-[-90%] bg-white w-full outline-2 outline-gray-400 rounded-t-md overflow-hidden"
                                onClick={(e) => { e.stopPropagation() }}
                            >
                                <input
                                    type="number"
                                    className="w-full pl-2 py-1 outline-none"
                                    value={produto.quantidade || 1}
                                    onChange={handleInputChange}
                                />

                            </div>
                        )}

                    </div>
                    <span className="font-bold text-lg">R$ {produto.preco * produto.quantidade},00</span>

                </div>
            </div>
        </article>
    )
}