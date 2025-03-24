'use client'
import Image from 'next/image';

// ícones 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
// ------

// Função
import { handleAddCarrinho } from './AddCarrinho';

export default function Produto_Article({ produto }: any) {
    
    return (
        <article
            className='rounded-t-md bg-gray-100 overflow-hidden shadow cursor-pointer hover:outline-2 outline-amber-600 duration-300 ease-in-out hover:scale-105'
        >
            <Image
                src={produto.imagem}
                alt={produto.nome}
                width={300}
                height={300}
                className='h-[250px] md:h-[300px] object-cover object-center w-full'
                loading="lazy"

            />
            <div className='px-2 py-1 '>

                <h2 className='text-gray-700'>{produto.nome}</h2>
                <div className='bg-gray-300 h-[1px] my-1' />
                <div className='flex justify-between items-center mt-1'>
                    <h3 className='text-gray-950 font-bold text-lg'>R$ {produto.preco},00</h3>
                    <button className='flex gap-x-2 px-2 py-1 bg-amber-600 hover:bg-amber-500 duration-200 ease-in-out text-white rounded-md items-center cursor-pointer'
                    onClick={(e) => handleAddCarrinho(produto, e)}
                    >
                        <span>Adicionar</span>
                        <FontAwesomeIcon icon={faCartShopping}/>
                        
                    </button>
                </div>

            </div>

        </article>
    )
}