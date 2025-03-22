'use client'
import Link from 'next/link';
import { Produtos } from '../data/Produtos';
import { useCategoriaStore } from '../store/useCategoria';
import { usePaginaStore } from '../store/usePagina';

export default function Grids() {

    const { paginaAtual } = usePaginaStore();
    const { categoria }   = useCategoriaStore();

    let produtosFiltrados = Produtos.todos_produtos;
    let SliceFinal = 12;
    let SliceInicial = 0;
    switch (paginaAtual){
        case 1:
            SliceInicial = 0;
            SliceFinal = 12;
            break;
        case 2:
            SliceInicial = 12;
            SliceFinal = 24;
            break;
        case 3:
            SliceInicial = 24;
            SliceFinal = 36;
            break;
        case 4:
            SliceInicial = 36;
            SliceFinal = 48;
            break;
        case 5:
            SliceInicial = 48;
            SliceFinal = 60;
            break;
        default:
            SliceInicial = 0;
            SliceFinal = 12;
            break;
    }

    switch (categoria) {
        case 'CAMISETAS':
            produtosFiltrados = Produtos.camisetas_produtos;
            break;
        case 'CANECAS':
            produtosFiltrados = Produtos.canecas_produtos;
            break;
    }

    return (
        <main className="grid gap-4 md:gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ease-in-out duration-100">
            {produtosFiltrados.slice(SliceInicial, SliceFinal).map((produto) => (
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
        </main>
    )
}