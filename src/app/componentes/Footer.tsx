import { BsGithub } from "react-icons/bs";

export default function Footer(){
    return(
        <footer className="lg:h-[80px] h-[110px] rounded-t-lg bg-slate-950 text-slate-100 px-4">
            <div className="size-full flex flex-col justify-evenly lg:flex-row lg:justify-between lg:items-center ">
                <p className="text-center lg:text-start md:text-lg lg:text-xl">Este site tem fins educacionais e foi feito com base no 
                <span className="mx-1 hover:underline text-[#9956f6]">
                    <a href="https://github.com/Rocketseat/frontend-challenge" className="  ">desafio da Rocketseat</a>
                </span>
                </p>

                <div className="rounded-md flex justify-center ">
                    <span className="text-white text-3xl lg:text-4xl cursor-pointer">
                        <a href="https://github.com/2Rovian">
                            <BsGithub />
                        </a>
                    </span>
                </div>
            </div>
        </footer>
    )
}