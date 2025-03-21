import { create } from 'zustand';

export type Categoria = 'TODOS OS PRODUTOS' | 'CAMISETAS' | 'CANECAS';

interface CategoriaStore {
    categoria: Categoria;
    setCategoria: (categoria: Categoria) => void;
}

export const useCategoriaStore = create<CategoriaStore>((set) => ({
    categoria: 'TODOS OS PRODUTOS',
    setCategoria: (categoria) => set({ categoria })
}))
