export interface Produto {
    id: number;
    imagem: string;
    nome: string;
    preco: number;
    tipo: 'canecas' | 'camisetas'; 
  }
  
  export interface ProdutoArray {
    todos_produtos: Produto[];
    canecas_produtos: Produto[];
    camisetas_produtos: Produto[];
  }
  
  export const Produtos: ProdutoArray = {
    todos_produtos: [
      { id: 1, nome: 'Caneca de cerâmica rústica', preco: 40, imagem: '/imgs/canecas/caneca01.jpeg', tipo: 'canecas' },
      { id: 2, nome: 'Caneca Black Ring', preco: 32, imagem: '/imgs/canecas/caneca02.jpeg', tipo: 'canecas' },
      { id: 3, nome: 'Caneca The Grounds', preco: 85, imagem: '/imgs/canecas/caneca03.jpeg', tipo: 'canecas' },
      { id: 4, nome: 'Caneca preta fosca', preco: 28, imagem: '/imgs/canecas/caneca04.jpeg', tipo: 'canecas' },
      { id: 5, nome: 'Caneca Never settle', preco: 43, imagem: '/imgs/canecas/caneca05.jpeg', tipo: 'canecas' },

      
      { id: 6, nome: 'Caneca Decaf!', preco: 32, imagem: '/imgs/canecas/caneca06.jpeg', tipo: 'canecas' },
      { id: 7, nome: 'Camiseta not today', preco: 78, imagem: '/imgs/camisetas/camiseta01.jpeg', tipo: 'camisetas' },
      { id: 8, nome: 'Camiseta Broken Saints', preco: 58, imagem: '/imgs/camisetas/camiseta02.jpeg', tipo: 'camisetas' },
      { id: 9, nome: 'Camiseta Outcast', preco: 89, imagem: '/imgs/camisetas/camiseta03.jpeg', tipo: 'camisetas' },
      { id: 10, nome: 'Camiseta evening', preco: 69, imagem: '/imgs/camisetas/camiseta04.jpeg', tipo: 'camisetas' },
      { id: 11, nome: 'Camiseta DREAMER', preco: 55, imagem: '/imgs/camisetas/camiseta05.jpeg', tipo: 'camisetas' },
      { id: 12, nome: 'Camiseta Ramones', preco: 92, imagem: '/imgs/camisetas/camiseta06.jpeg', tipo: 'camisetas' },
    ],
    canecas_produtos: [
      { id: 1, nome: 'Caneca de cerâmica rústica', preco: 40, imagem: '/imgs/canecas/caneca01.jpeg', tipo: 'canecas' },
      { id: 2, nome: 'Caneca Black Ring', preco: 32, imagem: '/imgs/canecas/caneca02.jpeg', tipo: 'canecas' },
      { id: 3, nome: 'Caneca The Grounds', preco: 85, imagem: '/imgs/canecas/caneca03.jpeg', tipo: 'canecas' },
      { id: 4, nome: 'Caneca preta fosca', preco: 28, imagem: '/imgs/canecas/caneca04.jpeg', tipo: 'canecas' },
      { id: 5, nome: 'Caneca Never settle', preco: 43, imagem: '/imgs/canecas/caneca05.jpeg', tipo: 'canecas' },
      { id: 6, nome: 'Caneca Decaf!', preco: 32, imagem: '/imgs/canecas/caneca06.jpeg', tipo: 'canecas' },
    ],
    camisetas_produtos: [
      { id: 7, nome: 'Camiseta not today', preco: 78, imagem: '/imgs/camisetas/camiseta01.jpeg', tipo: 'camisetas' },
      { id: 8, nome: 'Camiseta Broken Saints', preco: 58, imagem: '/imgs/camisetas/camiseta02.jpeg', tipo: 'camisetas' },
      { id: 9, nome: 'Camiseta Outcast', preco: 89, imagem: '/imgs/camisetas/camiseta03.jpeg', tipo: 'camisetas' },
      { id: 10, nome: 'Camiseta evening', preco: 69, imagem: '/imgs/camisetas/camiseta04.jpeg', tipo: 'camisetas' },
      { id: 11, nome: 'Camiseta DREAMER', preco: 55, imagem: '/imgs/camisetas/camiseta05.jpeg', tipo: 'camisetas' },
      { id: 12, nome: 'Camiseta Ramones', preco: 92, imagem: '/imgs/camisetas/camiseta06.jpeg', tipo: 'camisetas' },
    ],
  };