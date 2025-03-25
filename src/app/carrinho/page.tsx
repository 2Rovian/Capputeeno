// ícones
import { TbArrowBackUp } from "react-icons/tb";
// ------

import Link from "next/link";
import MainComponent from "./MainComponent";

export default function Carrinho_Página() {
    return (
        <div className="mb-5">
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

            <MainComponent />
        </div>
    )
}