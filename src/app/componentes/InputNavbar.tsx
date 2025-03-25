'use client'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { IoCloseCircleOutline } from "react-icons/io5";

import { useState } from "react";

import { Produtos } from "../data/Produtos";
import Image from "next/image";

import { handleAddCarrinho } from "./AddCarrinho";
import Link from "next/link";

export default function InputNavbar() {
    const [inputValue, setInputValue] = useState<string>('');

    const ProdutosFiltrados = Produtos.todos_produtos.filter((produto) => produto.nome.toLowerCase().includes(inputValue.toLowerCase()));

    return (
        <div className="flex items-center bg-gray-300 rounded-md relative">
            <input type="text"
                className="grow outline-none pl-3 lg:w-[300px] sm:w-[250px]"
                placeholder="O que você procura?"
                value={inputValue}
                onChange={(e) => { setInputValue(e.target.value) }}
            />
            <span className="px-2 text-xl cursor-pointer">
                {inputValue ?
                    <span className='hover:text-white duration-200 ease-in-out'
                    onClick={() => setInputValue('')}
                    >
                        <IoCloseCircleOutline />
                    </span>
                    :
                    <FontAwesomeIcon icon={faSearch} />
                }

            </span>

            {inputValue && ProdutosFiltrados.length > 0 && (
                <div className="absolute left-0 top-full w-full bg-white shadow-md rounded-md mt-1 p-2 z-50 max-h-[350px] overflow-y-auto">
                    {ProdutosFiltrados.map((produto) => (
                        <div key={produto.id} className="h-fit flex flex-col border-b py-2 last:border-b-0">
                            <div className="flex gap-2 items-center">
                                <Link className='cursor-pointer'
                                    href={`/produto/${produto.id}`}
                                >
                                    <Image
                                        src={produto.imagem}
                                        alt={produto.nome}
                                        width={300}
                                        height={300}
                                        loading="lazy"
                                        className="object-cover object-center w-20 h-20 rounded-md"
                                    />
                                </Link>
                                <div className="flex flex-col flex-grow gap-y-0">
                                    <Link
                                        className='cursor-pointer'
                                        href={`/produto/${produto.id}`}
                                    >
                                        <span className="text-sm font-semibold text-gray-700">{produto.nome}</span>
                                    </Link>
                                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                                        <span className="text-gray-950 font-bold">R$ {produto.preco.toFixed(2)}</span>
                                        <button className="bg-amber-600 text-white rounded-md flex items-center px-2 hover:bg-amber-500 gap-x-2 cursor-pointer duration-200 ease-in-out self-start sm:self-auto"
                                            onClick={(e) => { handleAddCarrinho(produto, e) }}
                                        >
                                            <span>Add</span>
                                            <FontAwesomeIcon icon={faCartShopping} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {inputValue && ProdutosFiltrados.length === 0 && (
                <div className="absolute left-0 top-full w-full bg-white shadow-md rounded-md mt-1 p-2 z-50">
                    <p className="text-gray-500 text-center">Nenhum produto encontrado</p>
                </div>
            )}
        </div>
    )
}