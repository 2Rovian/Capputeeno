'use client'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { useReducer } from "react";

import { MdFilterListAlt } from "react-icons/md";

type Categoria = "TODOS OS PRODUTOS" | "CAMISETAS" | "CANECAS";

function categoriaReducer(state: Categoria, action: Categoria): Categoria {
  return action;
}

export default function Categorias() {
    const [categoria, dispatch] = useReducer(categoriaReducer, "TODOS OS PRODUTOS");

    return (
        <div className="flex justify-between items-center mt-5 text-gray-700">
            <ul className="flex gap-x-3">
                {["TODOS OS PRODUTOS", "CAMISETAS", "CANECAS"].map((item) => (
                    <li 
                        key={item}
                        className={`cursor-pointer hover:text-gray-900 ease-in-out duration-100 
                        ${categoria === item ? "font-bold text-black border-b-2 border-amber-600" : ""}`}
                        onClick={() => dispatch(item as Categoria)}
                    >
                        {item}
                    </li>
                ))}
            </ul>

            <div className="cursor-pointer">
                <div className="sm:flex items-center gap-x-1 hidden ">
                    <span>Organizar por</span>
                    <span className="text-xl py-0 px-2">
                        <FontAwesomeIcon icon={faCaretDown} />
                    </span>
                </div>

                <span className="sm:hidden text-xl py-1 px-2 items-center flex bg-amber-600 text-white rounded-md">
                    <MdFilterListAlt />
                </span>
            </div>
        </div>
    );
}
