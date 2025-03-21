'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { MdFilterListAlt } from 'react-icons/md';

import { Categoria, useCategoriaStore } from '../store/useCategoria';

export default function Categorias() {
    const { categoria, setCategoria } = useCategoriaStore();
    const categorias_array: Categoria[] = ['TODOS OS PRODUTOS', 'CAMISETAS', 'CANECAS'];

    const handleSelecionarCategoria = (categoria: Categoria) => {
        setCategoria(categoria);
    };

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

            <div className="cursor-pointer">
                <div className="sm:flex items-center gap-x-1 hidden">
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