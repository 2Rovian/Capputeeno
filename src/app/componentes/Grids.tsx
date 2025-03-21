'use client'
import Link from 'next/link';
import { Produtos } from '../data/Produtos';
import { useCategoriaStore } from '../store/useCategoria';

export default function Grids() {

    const { categoria } = useCategoriaStore();

    let produtosFiltrados = Produtos.todos_produtos;

    switch (categoria) {
        case 'CAMISETAS':
            produtosFiltrados = Produtos.camisetas_produtos;
            break;
        case 'CANECAS':
            produtosFiltrados = Produtos.canecas_produtos;
            break;
    }

    return (
        <div className="grid gap-4 md:gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ease-in-out duration-100">
            {produtosFiltrados.slice(0, 12).map((produto) => (
                <Link
                    href={`/produto/${produto.id}`}
                    key={produto.id}
                >
                    <article
                        className='rounded-t-md bg-gray-100 overflow-hidden shadow cursor-pointer hover:outline-2 outline-amber-600 duration-300 ease-in-out hover:scale-105'
                    >
                        <img src={produto.imagem} alt={produto.nome}
                            className='h-[250px] md:h-[300px] object-cover object-center w-full'
                        />
                        <div className='px-2 py-1'>
                            <h2 className='text-gray-700'>{produto.nome}</h2>
                            <div className='bg-gray-300 h-[1px] my-1' />
                            <h3 className='text-gray-950 font-bold'>R$ {produto.preco},00</h3>
                        </div>
                    </article>
                </Link>
            ))}
        </div>
    )
}