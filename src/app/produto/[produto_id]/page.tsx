import { Produtos } from '../../data/Produtos';

// ícones
import { TbArrowBackUp } from "react-icons/tb";
import { RiShoppingBag4Line } from "react-icons/ri";
import { LuExpand } from "react-icons/lu";
// ------ 
import Link from "next/link";
import Expand_img from '@/app/componentes/Expand_img';

export default async function Detalhes_Produto({
    params
}: {
    params: Promise<{ produto_id: string }>
}) {

    const { produto_id } = await params;
    const produtoId = parseInt(produto_id, 10);
    const produto = Produtos.todos_produtos.find((p) => p.id === produtoId);

    if (!produto) {
        return (
            <div className="flex flex-col items-center justify-center h-screen">
                <h1 className="text-2xl text-gray-950">Produto não encontrado</h1>
                <Link href="/" className="mt-4 text-blue-600 hover:text-blue-800">
                    Voltar para a página inicial
                </Link>
            </div>
        );
    }

    return (
        <div>
            <div className="my-5">
                <div className='cursor-pointer w-fit'>
                    <Link href='/'
                        className='flex items-center gap-x-2 text-gray-700 hover:text-gray-950'
                    >
                        <span className=' outline-2 outline-gray-700 rounded-full text-2xl'>
                            <TbArrowBackUp />
                        </span>
                        <span className='text-lg'>Voltar</span>
                    </Link>
                </div>
            </div>

            <main className="flex flex-col lg:flex-row lg:gap-x-8 lg:h-[550px]">
                <div className='rounded-lg grow overflow-hidden relative'>
                    <img src={produto?.imagem} alt={`Imagem do produto: ${produto.nome}`}
                    className="h-[400px] lg:h-[550px] w-full object-cover object-center"
                    />
                    <Expand_img produtoImg={produto.imagem}/>
                </div>
                <div className="lg:w-[40%] flex flex-col justify-between text-gray-700 my-5 lg:my-0">
                    <div className="flex flex-col">
                        <h2 className="text-lg">{produto.tipo}</h2>
                        <h1 className='text-4xl text-gray-950 mt-2'>{produto?.nome}</h1>
                        <h3 className='text-xl mt-2 mb-4 font-bold text-black'>R$ {produto?.preco},00</h3>
                        <span className="mb-10">*Frete de R$40,00 para todo o Brasil, grátis para compras acima de R$900,00.</span>
                        <h3 className="text-gray-900">DESCRIÇÃO</h3>
                        <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate modi nihil, aliquid quasi eaque architecto aperiam ut quos exercitationem fugit ipsam ex facilis laborum rem harum iusto asperiores earum itaque.</h3>
                    </div>

                    <button className='bg-blue-800 hover:bg-blue-500 py-2 mt-5 lg:mt-0 text-white flex items-center justify-center gap-x-2 cursor-pointer duration-300 ease-in-out rounded-lg'>
                        <RiShoppingBag4Line />
                        <span>ADICIONAR AO CARRINHO</span>
                    </button>
                </div>
            </main>
        </div>
    )
}
