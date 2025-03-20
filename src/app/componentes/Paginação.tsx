'use client'
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { useReducer } from "react";

const TOTAL_PAGES = 5;
const initialState = { currentPage: 1 };

function paginationReducer(state: typeof initialState, action: "NEXT" | "PREV" | number) {
    if (action === "NEXT" && state.currentPage < TOTAL_PAGES) {
        return { currentPage: state.currentPage + 1 };
    } 
    if (action === "PREV" && state.currentPage > 1) {
        return { currentPage: state.currentPage - 1 };
    } 
    if (typeof action === "number") {
        return { currentPage: action };
    }
    return state;
}

export default function Paginacao() {
    const [state, dispatch] = useReducer(paginationReducer, initialState);

    return (
        <ul className="flex my-5 justify-end items-center gap-x-1">
            {Array.from({ length: TOTAL_PAGES }, (_, i) => i + 1).map((num) => (
                <li 
                    key={num} 
                    className={`px-3 py-1 cursor-pointer 
                    ${state.currentPage === num ? "paginação-selecionado" : "paginação-style"}`}
                    onClick={() => dispatch(num)}
                >
                    {num}
                </li>
            ))}

            <li 
                className={`px-3 py-2 cursor-pointer paginação-style ${state.currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""}`}
                onClick={() => dispatch("PREV")}
            >
                <FaAngleLeft />
            </li>

            <li 
                className={`px-3 py-2 cursor-pointer paginação-style ${state.currentPage === TOTAL_PAGES ? "opacity-50 cursor-not-allowed" : ""}`}
                onClick={() => dispatch("NEXT")}
            >
                <FaAngleRight />
            </li>
        </ul>
    );
}
