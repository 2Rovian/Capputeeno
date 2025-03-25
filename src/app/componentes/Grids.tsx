'use client'
import Link from 'next/link';

// Data
import { Produtos } from '../data/Produtos';
// ----

// zustand
import { useCategoriaStore } from '../store/useCategoria';
import { usePaginaStore } from '../store/usePagina';
// -------

// Componentes
import Produto_Article from './Produto_Article';
// -----------

import { useOrganizarStore } from '../store/useOrganizarPor';
export default function Grids() {

    const { OrganizarPor } = useOrganizarStore();
    const { paginaAtual } = usePaginaStore();
    const { categoria } = useCategoriaStore();

    let produtosFiltrados = Produtos.todos_produtos;
    let produtosPorPagina = 12;
    const SliceInicial = (paginaAtual - 1) * produtosPorPagina;
    const SliceFinal = SliceInicial + produtosPorPagina;

    switch (categoria) {
        case 'CAMISETAS':
            produtosFiltrados = Produtos.camisetas_produtos;
            break;
        case 'CANECAS':
            produtosFiltrados = Produtos.canecas_produtos;
            break;
    }

    if (OrganizarPor) {
        produtosFiltrados = [...produtosFiltrados];

        switch (OrganizarPor) {
            case 'Preço: menor para maior':
                produtosFiltrados.sort((a, b) => a.preco - b.preco);
                break;

            case 'Preço: maior para menor':
                produtosFiltrados.sort((a, b) => b.preco - a.preco);
                break;

            case 'Ordem alfabética (A → Z)':
                produtosFiltrados.sort((a, b) => a.nome.localeCompare(b.nome));
                break;

            case 'Ordem alfabética (Z → A)':
                produtosFiltrados.sort((a, b) => b.nome.localeCompare(a.nome));
                break;
        }
    }

    return (
        <main className="grid gap-4 md:gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ease-in-out duration-100">
            {produtosFiltrados.slice(SliceInicial, SliceFinal).map((produto) => (
                <Link
                    href={`/produto/${produto.id}`}
                    key={produto.id}
                >
                    <Produto_Article produto={produto} />
                </Link>
            ))}
        </main>
    )
}