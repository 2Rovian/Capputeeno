'use client'
import { Produtos } from '../data/Produtos';

export default function Grids(){
    return(
        <div className="grid gap-4 md:gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ease-in-out duration-100">
            {Produtos.todos_produtos.map((produto) => (
                <article key={produto.id}
                className='rounded-t-md bg-gray-100 overflow-hidden shadow cursor-pointer hover:outline-2 outline-amber-600  duration-200 ease-in-out'
                >
                    <img src={produto.imagem} alt={produto.nome}
                    className='h-[250px] md:h-[300px] object-cover object-center w-full'
                    />
                    <div className='px-2 py-1'>
                        <h2 className='text-gray-700'>{produto.nome}</h2>
                        <div className='bg-gray-300 h-[1px] my-1'/>
                        <h3 className='text-gray-950 font-bold'>R$ {produto.preco},00</h3>
                    </div>
                </article>
            ))}
        </div>
    )
}