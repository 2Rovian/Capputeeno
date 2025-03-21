import { create } from 'zustand';

interface PaginaStore{
    paginaAtual: number;
    setPaginaAtual: (paginaAtual: number) => void;
    prevPagina: () => void;
    nextPagina: () => void;
}

export const usePaginaStore = create<PaginaStore>((set) => ({
    paginaAtual: 1,
    setPaginaAtual: (paginaAtual) => set({paginaAtual}),

    prevPagina: () => set((state) => ({ paginaAtual: state.paginaAtual - 1 })),
    nextPagina: () => set((state) => ({ paginaAtual: state.paginaAtual + 1 }))
}));
