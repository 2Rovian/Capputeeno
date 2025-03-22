
// ícones
import { FaRegTrashCan } from "react-icons/fa6";
import { RxCaretDown } from "react-icons/rx";
import { RxCaretUp } from "react-icons/rx";
import Carrinho_Article from "../componentes/Carrinho_Article";
// ------

export default function Carrinho_Página(){
    return(
        <div className="my-5 flex flex-col gap-y-4">
            <main className="grow">
                <h1>SEU CARRINHO</h1>
                <p className="my-2">Total(3 produtos) R$ 161,00</p>
                <div className="flex flex-col gap-y-4">
                    <Carrinho_Article />
                    <Carrinho_Article />
                    <Carrinho_Article />
                    
                </div>

            </main>
            <aside className="w-full bg-white rounded-md">
                <h2>RESUMO DO PEDIDO</h2>
                <div>
                    <span>Subtotal de produtos</span>
                    <span>R$ 161,00</span>
                </div>
            </aside>
        </div>
    )
}