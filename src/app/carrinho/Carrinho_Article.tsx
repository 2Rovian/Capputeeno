'use client'
import { FaRegTrashCan } from "react-icons/fa6";

import { RxCaretDown } from "react-icons/rx";
import { RxCaretUp } from "react-icons/rx";
import { useState } from 'react';
import Image from "next/image";

export default function Carrinho_Article({ produto }: any) {
    return (
        <article className="w-full h-fitt bg-white rounded-md overflow-hidden flex flex-col md:flex-row justify-between">
            {/* <img src={produto.imagem} alt="" className="w-full md:max-w-[300px] h-[250px] object-center object-cover" /> */}

            <Image src={produto.imagem} alt=""
            width={300}
            height={300}
            loading="lazy"
            className="w-full md:max-w-[300px] h-[250px] object-center object-cover" />

            <div className="flex flex-col justify-between grow px-3 md:px-5">
                <div className="min-h-[125px]">
                    <div className="flex items-center justify-between my-2">
                        <h3 className="text-2xl font-semibold">{produto.nome}</h3>
                        <span className="text-red-500 text-lg rounded-md duration-200 ease-in-out cursor-pointer hover:px-2 hover:py-1 hover:bg-red-500 hover:text-red-50">
                            <FaRegTrashCan />
                        </span>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet atque voluptas cupiditate! Repellat dolorem alias error sit, rerum laboriosam. Fuga.</p>
                </div>
                <div className="flex justify-between my-3">
                    <div className="flex gap-x-2 items-center bg-gray-300 outline-2 outline-gray-400 px-4 py-1 rounded-lg cursor-pointer"
        
                    >
                        <span>1</span>
                        <span>
                            <RxCaretDown />
                        
                        </span>
                    </div>
                    <span className="font-bold text-lg">R$ {produto.preco},00</span>
                </div>

            </div>

        </article>
    )
}