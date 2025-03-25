import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import InputNavbar from "./InputNavbar";

export default function Navbar() {
    
    return (
        <header className="h-[60px] px-4 bg-gray-100 text-black shadow">
            <nav className="h-full max-w-7xl mx-auto flex justify-between items-center">
                <div className="pr-4 text-3xl font-serif">
                    <Link href='/'>Capputeeno</Link>
                </div>
                <div className="flex gap-x-2">
                    <InputNavbar />

                    <Link href='/carrinho'
                        className="text-xl py-1 px-2">
                        <FontAwesomeIcon icon={faCartShopping}
                            className="cursor-pointer"
                        />
                    </Link>

                </div>

            </nav>
        </header>
    )
}