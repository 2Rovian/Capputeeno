'use client';

// ícones
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { MdFilterListAlt } from 'react-icons/md';
import { FaAngleDown } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";
import { FaMoneyBillWave } from "react-icons/fa6";
import { TiSortAlphabetically } from "react-icons/ti";
import { IoMdClose } from "react-icons/io";

// ------

import { useState } from 'react';

import { Categoria, useCategoriaStore } from '../store/useCategoria';
import { useOrganizarStore } from '../store/useOrganizarPor';

export default function Categorias() {
    const { categoria, setCategoria } = useCategoriaStore();
    const { OrganizarPor, setOrganizarPor } = useOrganizarStore();

    const categorias_array: Categoria[] = ['TODOS OS PRODUTOS', 'CAMISETAS', 'CANECAS'];
    const filtrarPor_array = ['Preço: menor para maior', 'Preço: maior para menor', 'Ordem alfabética (A → Z)', 'Ordem alfabética (Z → A)']

    const handleSelecionarCategoria = (categoria: Categoria) => {
        setCategoria(categoria);
    };

    const [showDropdown, setShowDropdown] = useState<boolean>(false);

    return (
        <div className="flex justify-between items-center mt-5 text-gray-700">
            <ul className="flex gap-x-3">
                {categorias_array.map((categoriaItem) => (
                    <li
                        key={categoriaItem}
                        className={`cursor-pointer hover:text-gray-900 ease-in-out duration-100 ${categoriaItem === categoria
                            ? 'font-bold text-black border-b-2 border-amber-600'
                            : ''
                            }`}
                        onClick={() => handleSelecionarCategoria(categoriaItem)}
                    >
                        {categoriaItem}
                    </li>
                ))}
            </ul>

            <div className="cursor-pointer relative">
                <div className="sm:flex items-center gap-x-1 hidden"
                onClick={() => setShowDropdown(!showDropdown)}
                >
                    <span>Organizar por</span>
                    <span className="text-xl py-0 px-2">
                        {showDropdown? 
                        <FontAwesomeIcon icon={faCaretUp} /> 
                        : 
                        <FontAwesomeIcon icon={faCaretDown} /> 
                        }
                        
                        
                    </span>
                </div>

                <span className="sm:hidden text-xl py-1 px-2 items-center flex bg-amber-600 hover:bg-amber-500 text-white rounded-md duration-300 ease-in-out"
                onClick={() => setShowDropdown(!showDropdown)}
                >
                    {showDropdown ? <IoMdClose /> :<MdFilterListAlt />}
                </span>

                {showDropdown && (
                <ul className='absolute top-10 right-0 bg-gray-200 outline-2 outline-amber-600 z-50 shadow rounded-md p-2 w-auto'>
                    {filtrarPor_array.slice(0, 4).map((item) => (
                       <li key={item} className='px-4 py-1 flex items-center justify-between gap-x-2 whitespace-nowrap hover:bg-amber-600 hover:text-white duration-200 ease-in-out'
                        onClick={() => setOrganizarPor(item)}
                       >
                           <span>
                               {item.includes('Preço') ? <FaMoneyBillWave /> : <TiSortAlphabetically />}
                           </span>
                           <span>{item}</span>
                       </li> 
                    ))}
                    
                </ul>
                )}

            </div>
        </div>
    );
}