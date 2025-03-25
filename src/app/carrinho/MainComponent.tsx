'use client'
import Carrinho_Article from "./Carrinho_Article";
import { useState, useEffect } from "react";
import Loading from "./Loading";
import { FaGhost } from "react-icons/fa";
import Link from "next/link";
import toast from 'react-hot-toast'

export default function MainComponent() {
    const [produtosCarrinho, setProdutosCarrinho] = useState<any[]>([]);
    const [isLoading, setisLoading] = useState<boolean>(true);

    useEffect(() => {
        const produtosSalvos = localStorage.getItem("Produtos");
        if (produtosSalvos) {
            try {
                const produtosArray = JSON.parse(produtosSalvos);
                if (Array.isArray(produtosArray)) {
                    setProdutosCarrinho(produtosArray);
                }
            } catch (error) {
                console.error("Erro ao carregar o carrinho:", error);
            }
        }
        setisLoading(false);
    }, []);

     // Atualizar a quantidade de um produto específico
     const atualizarQuantidade = (id: number, novaQuantidade: number) => {
        setProdutosCarrinho((produtos) =>
            produtos.map((produto) =>
                produto.id === id ? { ...produto, quantidade: novaQuantidade } : produto
            )
        );
    };

    const removerProduto = (id: number) => {
        const novoCarrinho = produtosCarrinho.filter((produto) => produto.id !== id);
        setProdutosCarrinho(novoCarrinho);
        localStorage.setItem("Produtos", JSON.stringify(novoCarrinho))
        toast.success("Produto removido");
    };

    const handleFinalizarCompra = () => {
        localStorage.clear();
        toast.success("Compra realizada com sucesso");
    }

    const PrecoTotal = produtosCarrinho.reduce((acc, produto) => acc + produto.preco * (produto.quantidade || 1), 0);

    return (
        <>
            {isLoading ?
                (<div className="flex justify-center ">
                    <Loading />
                </div>)
                : !produtosCarrinho.length ?
                    (<div className="flex flex-col justify-center">
                        <div className='flex flex-col gap-y-4 justify-center items-center w-[80%] max-w-xl mx-auto py-6 lg:py-8 px-4 bg-white text-amber-600 rounded-xl mt-10 lg:gap-y-8 duration-300 ease-in-out shadow'>
                            <div className="text-6xl lg:text-9xl">
                                <FaGhost />
                            </div>
                            <div className="flex flex-col">
                                <p className='text-xl lg:text-2xl'>Não há nenhum item no seu carrinho</p>

                                <Link href='/'
                                    className='px-6 py-2 bg-amber-600 text-white rounded-2xl mt-2 self-center font-semibold hover:scale-105 duration-200 ease-in-out'
                                >Volte para a Home</Link>
                            </div>

                        </div>
                    </div>)
                    :
                    (<div className="flex flex-col lg:flex-row lg:gap-x-4">
                        <main className="grow">
                            <h1 className='font-bold text-2xl'>SEU CARRINHO</h1>
                            <p className="mb-3 mt-1 text-lg">Total({produtosCarrinho.length} produtos) <span className="font-semibold">R${PrecoTotal.toFixed(2).replace(".", ",")}</span>
                            </p>
                            <section className="flex flex-col gap-y-4">
                                {produtosCarrinho.map((produto) => (
                                    <Carrinho_Article 
                                    key={produto.id} 
                                    produto={produto}
                                    atualizarQuantidade={atualizarQuantidade}
                                    removerProduto={removerProduto}
                                    />
                                ))}

                            </section>
                        </main>
                        <aside className="w-full flex flex-col lg:w-[50%] bg-white rounded-md mt-4 lg:mt-0 p-4 lg:h-fit">
                            <h2 className="font-bold text-xl">RESUMO DO PEDIDO</h2>
                            <div className="flex justify-between items-center mt-2">
                                <span>Subtotal de produtos</span>
                                <span>R$ {PrecoTotal.toFixed(2).replace(".", ",")}</span>
                            </div>
                            <div className="flex justify-between items-center mt-1">
                                <span>Entrega</span>
                                <span>R$ 40,00</span>
                            </div>
                            <div className='h-[1px] bg-gray-400 rounded-md mb-2 mt-4' />
                            <div className="flex justify-between items-center font-bold text-lg">
                                <span>Total</span>
                                <span>R$ {(PrecoTotal + 40).toFixed(2).replace(".", ",")}</span>
                            </div>
                            <button className="bg-green-600 hover:bg-green-500 cursor-pointer text-white py-2 duration-200 ease-in-out rounded-md my-5"
                            onClick={handleFinalizarCompra}
                            >FINALIZAR A COMPRA</button>

                            <ul className="grid grid-cols-2 lg:grid-cols-1 lg:gap-y-2 text-gray-600 lg:mt-[60px]">
                                <li className="">
                                    <span className='hover:text-gray-900 underline cursor-pointer'>AJUDA</span>
                                </li>
                                <li className="">
                                    <span className='hover:text-gray-900 underline cursor-pointer'>REEMBOLSOS</span>
                                </li>
                                <li className="">
                                    <span className='hover:text-gray-900 underline cursor-pointer'>ENTREGAS E FRETE</span>
                                </li>
                                <li className="">
                                    <span className='hover:text-gray-900 underline cursor-pointer'>TROCAS E DEVOLUÇÕES</span>
                                </li>
                            </ul>
                        </aside>
                    </div>)}

        </>
    )
}