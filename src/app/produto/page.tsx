import { TbArrowBackUp } from "react-icons/tb";
import { RiShoppingBag4Line } from "react-icons/ri";
import Link from "next/link";

export default function PáginaProduto(){
    return(
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

            <main className="flex flex-col md:flex-row md:gap-x-8 md:h-[550px]">
                <div className='rounded-md grow overflow-hidden'>
                    <img src="https://placehold.co/800x800" alt="imagem do produto" 
                    className="h-[400px] md:h-[550px] w-full object-cover object-center"
                    />
                </div>
                <div className="md:w-[40%] flex flex-col justify-between text-gray-700 my-5 md:my-0">
                    <div className="flex flex-col">
                        <h2 className="text-lg">(caneca / camiseta)</h2>
                        <h1 className='text-4xl text-gray-950 mt-2'>Nome do produto</h1>
                        <h3 className='text-xl mt-2 mb-4 font-bold text-black'>R$ 40,00</h3>
                        <span className="mb-10">*Frete de R$40,00 para todo o Brasil, grátis para compras acima de R$900,00.</span>
                        <h3 className="text-gray-900">DESCRIÇÃO</h3>
                        <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate modi nihil, aliquid quasi eaque architecto aperiam ut quos exercitationem fugit ipsam ex facilis laborum rem harum iusto asperiores earum itaque.</h3>
                    </div>

                    <button className='bg-blue-800 hover:bg-blue-500 py-2 mt-5 md:mt-0 text-white flex items-center justify-center gap-x-2 cursor-pointer duration-300 ease-in-out rounded-md'>
                        <RiShoppingBag4Line />
                        <span>ADICIONAR AO CARRINHO</span>
                    </button>
                </div>
            </main>
        </div>
    )
}