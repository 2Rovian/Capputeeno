import { create } from 'zustand';

interface OrganizarStore{
    OrganizarPor: string | null;
    setOrganizarPor: (OrganizarPor: string) => void;
}

export const useOrganizarStore = create<OrganizarStore>((set) => ({
    OrganizarPor: null, // Estado inicial
    setOrganizarPor: (OrganizarPor) => set({OrganizarPor})
}))