'use client'
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

import { usePaginaStore } from "../store/usePagina";

export default function Paginacao() {

    let { paginaAtual, setPaginaAtual, prevPagina, nextPagina } = usePaginaStore();
    const total_paginas = [1, 2, 3, 4, 5]

    const handlePaginação = (numeroPagina: number) => {
        setPaginaAtual(numeroPagina);
    }

    return (
        <ul className="flex my-5 justify-end items-center gap-x-1">
            {total_paginas.map((numeroPagina) => (
                <li key={numeroPagina}
                    className={`px-3 py-1 cursor-pointer 
                    ${numeroPagina === paginaAtual ? "paginação-selecionado " : "paginação-style"}`}
                    onClick={() => handlePaginação(numeroPagina)}
                >
                    {numeroPagina}
                </li>
            ))}

            <li className={`px-3 py-2  
                ${paginaAtual === 1 ? "opacity-50 paginação-style-undefined" : "paginação-style"}`}
                onClick={paginaAtual === 1 ? undefined : prevPagina}
            >
                <FaAngleLeft />
            </li>

            <li className={`px-3 py-2  
                ${paginaAtual === 5 ? "opacity-50 paginação-style-undefined" : "paginação-style"}`}
                onClick={paginaAtual === 5 ? undefined : nextPagina}
            >
                <FaAngleRight />
            </li>

        </ul>
    );
}
