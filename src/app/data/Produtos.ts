export interface Produto {
  id: number;
  imagem: string;
  nome: string;
  preco: number;
  tipo: 'Caneca' | 'Camiseta'; 
}
  
export interface ProdutoArray {
  todos_produtos: Produto[];
  canecas_produtos: Produto[];
  camisetas_produtos: Produto[];
}


const todos_produtos: Produto[] = [
  { id: 1, nome: 'Caneca de cerâmica rústica', preco: 40, imagem: '/imgs/canecas/caneca01.jpeg', tipo: 'Caneca' },
  { id: 2, nome: 'Caneca Black Ring', preco: 32, imagem: '/imgs/canecas/caneca02.jpeg', tipo: 'Caneca' },
  { id: 3, nome: 'Caneca The Grounds', preco: 85, imagem: '/imgs/canecas/caneca03.jpeg', tipo: 'Caneca' },
  { id: 4, nome: 'Caneca preta fosca', preco: 28, imagem: '/imgs/canecas/caneca04.jpeg', tipo: 'Caneca' },
  { id: 5, nome: 'Caneca Never settle', preco: 43, imagem: '/imgs/canecas/caneca05.jpeg', tipo: 'Caneca' },
  { id: 6, nome: 'Caneca Black Ring 2.0', preco: 35, imagem: '/imgs/canecas/caneca06.jpeg', tipo: 'Caneca' },
  
  { id: 7, nome: 'Caneca Café Latte', preco: 39, imagem: '/imgs/canecas/caneca07.jpg', tipo: 'Caneca' },
  { id: 8, nome: 'Caneca You Can', preco: 42, imagem: '/imgs/canecas/caneca08.jpg', tipo: 'Caneca' },
  { id: 9, nome: 'Caneca Tão Vigiando Nois', preco: 40, imagem: '/imgs/canecas/caneca09.jpg', tipo: 'Caneca' },
  { id: 10, nome: 'Caneca Lisa Branca', preco: 57, imagem: '/imgs/canecas/caneca10.jpg', tipo: 'Caneca' },
  { id: 11, nome: 'Caneca Três Árvores', preco: 52, imagem: '/imgs/canecas/caneca11.jpg', tipo: 'Caneca' },
  { id: 12, nome: 'Caneca Nescafé', preco: 33, imagem: '/imgs/canecas/caneca12.jpg', tipo: 'Caneca' },
  { id: 13, nome: 'Caneca Lisa Vermelha', preco: 74, imagem: '/imgs/canecas/caneca13.jpg', tipo: 'Caneca' },
  { id: 14, nome: 'Caneca Desenhos', preco: 30, imagem: '/imgs/canecas/caneca14.jpg', tipo: 'Caneca' },
  { id: 15, nome: 'Caneca A', preco: 45, imagem: '/imgs/canecas/caneca15.jpg', tipo: 'Caneca' },
  { id: 16, nome: 'Caneca Balade Paris', preco: 40, imagem: '/imgs/canecas/caneca16.jpg', tipo: 'Caneca' },
  { id: 17, nome: 'Caneca Cup of Love', preco: 45, imagem: '/imgs/canecas/caneca17.jpg', tipo: 'Caneca' },
  { id: 18, nome: 'Caneca Sorriso', preco: 47, imagem: '/imgs/canecas/caneca18.jpg', tipo: 'Caneca' },
  { id: 19, nome: 'Caneca Cachorro', preco: 50, imagem: '/imgs/canecas/caneca19.jpg', tipo: 'Caneca' },
  { id: 20, nome: 'Caneca I Like u a latte', preco: 55, imagem: '/imgs/canecas/caneca20.jpg', tipo: 'Caneca' },
  { id: 21, nome: 'Caneca We Founders', preco: 52, imagem: '/imgs/canecas/caneca21.jpg', tipo: 'Caneca' },
  { id: 22, nome: 'Caneca R', preco: 50, imagem: '/imgs/canecas/caneca22.jpg', tipo: 'Caneca' },
  { id: 23, nome: 'Caneca Coffe', preco: 43, imagem: '/imgs/canecas/caneca23.jpg', tipo: 'Caneca' },
  { id: 24, nome: 'Caneca Coffe 2.0', preco: 41, imagem: '/imgs/canecas/caneca24.jpg', tipo: 'Caneca' },
  { id: 25, nome: 'Caneca Eternal Op.', preco: 47, imagem: '/imgs/canecas/caneca25.jpg', tipo: 'Caneca' },
  { id: 26, nome: 'Caneca U Can Win', preco: 44, imagem: '/imgs/canecas/caneca26.jpg', tipo: 'Caneca' },
  { id: 27, nome: 'Caneca Warm & Cozy', preco: 58, imagem: '/imgs/canecas/caneca27.jpg', tipo: 'Caneca' },
  { id: 28, nome: 'Caneca Bliss', preco: 50, imagem: '/imgs/canecas/caneca28.jpg', tipo: 'Caneca' },
  { id: 29, nome: 'Caneca Lot Sixty One', preco: 63, imagem: '/imgs/canecas/caneca29.jpg', tipo: 'Caneca' },
  { id: 30, nome: 'Caneca Let Life', preco: 65, imagem: '/imgs/canecas/caneca30.jpg', tipo: 'Caneca' },
  
  { id: 31, nome: 'Camiseta not today', preco: 78, imagem: '/imgs/camisetas/camiseta01.jpeg', tipo: 'Camiseta' },
  { id: 32, nome: 'Camiseta Broken Saints', preco: 58, imagem: '/imgs/camisetas/camiseta02.jpeg', tipo: 'Camiseta' },
  { id: 33, nome: 'Camiseta Outcast', preco: 89, imagem: '/imgs/camisetas/camiseta03.jpeg', tipo: 'Camiseta' },
  { id: 34, nome: 'Camiseta evening', preco: 69, imagem: '/imgs/camisetas/camiseta04.jpeg', tipo: 'Camiseta' },
  { id: 35, nome: 'Camiseta DREAMER', preco: 55, imagem: '/imgs/camisetas/camiseta05.jpeg', tipo: 'Camiseta' },
  { id: 36, nome: 'Camiseta Ramones', preco: 92, imagem: '/imgs/camisetas/camiseta06.jpeg', tipo: 'Camiseta' },
  
  { id: 37, nome: 'Camiseta U are Close', preco: 67, imagem: '/imgs/camisetas/camiseta07.jpg', tipo: 'Camiseta' },
  { id: 38, nome: 'Camiseta Verde', preco: 87, imagem: '/imgs/camisetas/camiseta08.jpg', tipo: 'Camiseta' },
  { id: 39, nome: 'Camiseta Cinza', preco: 60, imagem: '/imgs/camisetas/camiseta09.jpg', tipo: 'Camiseta' },
  { id: 40, nome: 'Camiseta Branca', preco: 125, imagem: '/imgs/camisetas/camiseta10.jpg', tipo: 'Camiseta' },
  { id: 41, nome: 'Camiseta Animal Lover', preco: 110, imagem: '/imgs/camisetas/camiseta11.jpg', tipo: 'Camiseta' },
  { id: 42, nome: 'Camiseta 705', preco: 115, imagem: '/imgs/camisetas/camiseta12.jpg', tipo: 'Camiseta' },
  { id: 43, nome: 'Camiseta Creative', preco: 100, imagem: '/imgs/camisetas/camiseta13.jpg', tipo: 'Camiseta' },
  { id: 44, nome: 'Camiseta Common Sense', preco: 100, imagem: '/imgs/camisetas/camiseta14.jpg', tipo: 'Camiseta' },
  { id: 45, nome: 'Camiseta 705', preco: 95, imagem: '/imgs/camisetas/camiseta15.jpg', tipo: 'Camiseta' },
  { id: 46, nome: 'Camiseta F GetLost', preco: 92, imagem: '/imgs/camisetas/camiseta16.jpg', tipo: 'Camiseta' },
  { id: 47, nome: 'Camiseta M GetLost', preco: 95, imagem: '/imgs/camisetas/camiseta17.jpg', tipo: 'Camiseta' },
  { id: 48, nome: 'Camiseta Burn', preco: 90, imagem: '/imgs/camisetas/camiseta18.jpg', tipo: 'Camiseta' },
  { id: 49, nome: 'Camiseta Nirvana', preco: 37, imagem: '/imgs/camisetas/camiseta19.jpg', tipo: 'Camiseta' },
  { id: 50, nome: 'Camiseta Aquas', preco: 60, imagem: '/imgs/camisetas/camiseta20.jpg', tipo: 'Camiseta' },
  { id: 51, nome: 'Camiseta No Plans 4', preco: 100, imagem: '/imgs/camisetas/camiseta21.jpg', tipo: 'Camiseta' },
  { id: 52, nome: 'Camiseta LZ', preco: 100, imagem: '/imgs/camisetas/camiseta22.jpg', tipo: 'Camiseta' },
  { id: 53, nome: 'Camiseta Listrada Xadrez', preco: 105, imagem: '/imgs/camisetas/camiseta23.jpg', tipo: 'Camiseta' },
  { id: 54, nome: 'Camiseta Listrada', preco: 95, imagem: '/imgs/camisetas/camiseta24.jpg', tipo: 'Camiseta' },
  { id: 55, nome: 'Camiseta Preta', preco: 80, imagem: '/imgs/camisetas/camiseta25.jpg', tipo: 'Camiseta' },
  { id: 56, nome: 'Camiseta Volunteer', preco: 100, imagem: '/imgs/camisetas/camiseta26.jpg', tipo: 'Camiseta' },
  { id: 57, nome: 'Camiseta Versus', preco: 135, imagem: '/imgs/camisetas/camiseta27.jpg', tipo: 'Camiseta' }
];
  
export const Produtos: ProdutoArray = {
  todos_produtos: todos_produtos,
  canecas_produtos: todos_produtos.filter(produto => produto.tipo === 'Caneca'),
  camisetas_produtos: todos_produtos.filter(produto => produto.tipo === 'Camiseta'),
};
  
  
  // export const Produtos: ProdutoArray = {
  //   todos_produtos: [
  //     { id: 1, nome: 'Caneca de cerâmica rústica', preco: 40, imagem: '/imgs/canecas/caneca01.jpeg', tipo: 'canecas' },
  //     { id: 2, nome: 'Caneca Black Ring', preco: 32, imagem: '/imgs/canecas/caneca02.jpeg', tipo: 'canecas' },
  //     { id: 3, nome: 'Caneca The Grounds', preco: 85, imagem: '/imgs/canecas/caneca03.jpeg', tipo: 'canecas' },
  //     { id: 4, nome: 'Caneca preta fosca', preco: 28, imagem: '/imgs/canecas/caneca04.jpeg', tipo: 'canecas' },
  //     { id: 5, nome: 'Caneca Never settle', preco: 43, imagem: '/imgs/canecas/caneca05.jpeg', tipo: 'canecas' },
  //     { id: 6, nome: 'Caneca Black Ring 2.0', preco: 0, imagem: '/imgs/canecas/caneca06.jpeg', tipo: 'canecas' },

  //     { id: 7, nome: 'Caneca Café Latte', preco: 0, imagem: '/imgs/canecas/caneca07.jpg', tipo: 'canecas' },
  //     { id: 8, nome: 'Caneca You Can', preco: 0, imagem: '/imgs/canecas/caneca08.jpg', tipo: 'canecas' },
  //     { id: 9, nome: 'Caneca Tão Vigiando Nois', preco: 0, imagem: '/imgs/canecas/caneca09.jpg', tipo: 'canecas' },
  //     { id: 10, nome: 'Caneca Lisa Branca', preco: 0, imagem: '/imgs/canecas/caneca10.jpg', tipo: 'canecas' },
  //     { id: 11, nome: 'Caneca Três Árvores', preco: 0, imagem: '/imgs/canecas/caneca11.jpg', tipo: 'canecas' },
  //     { id: 12, nome: 'Caneca Nescafé', preco: 0, imagem: '/imgs/canecas/caneca12.jpg', tipo: 'canecas' },
  //     { id: 13, nome: 'Caneca Lisa Vermelha', preco: 0, imagem: '/imgs/canecas/caneca13.jpg', tipo: 'canecas' },
  //     { id: 14, nome: 'Caneca Desenhos', preco: 0, imagem: '/imgs/canecas/caneca14.jpg', tipo: 'canecas' },
  //     { id: 15, nome: 'Caneca A', preco: 0, imagem: '/imgs/canecas/caneca15.jpg', tipo: 'canecas' },
  //     { id: 16, nome: 'Caneca Balade Paris', preco: 0, imagem: '/imgs/canecas/caneca16.jpg', tipo: 'canecas' },
  //     { id: 17, nome: 'Caneca Cup of Love', preco: 0, imagem: '/imgs/canecas/caneca17.jpg', tipo: 'canecas' },
  //     { id: 18, nome: 'Caneca Sorriso', preco: 0, imagem: '/imgs/canecas/caneca18.jpg', tipo: 'canecas' },
  //     { id: 19, nome: 'Caneca Cachorro', preco: 0, imagem: '/imgs/canecas/caneca19.jpg', tipo: 'canecas' },
  //     { id: 20, nome: 'Caneca I Like u a latte', preco: 0, imagem: '/imgs/canecas/caneca20.jpg', tipo: 'canecas' },
  //     { id: 21, nome: 'Caneca We Founders', preco: 0, imagem: '/imgs/canecas/caneca21.jpg', tipo: 'canecas' },
  //     { id: 22, nome: 'Caneca R', preco: 0, imagem: '/imgs/canecas/caneca22.jpg', tipo: 'canecas' },
  //     { id: 23, nome: 'Caneca Coffe', preco: 0, imagem: '/imgs/canecas/caneca23.jpg', tipo: 'canecas' },
  //     { id: 24, nome: 'Caneca Coffe 2.0', preco: 0, imagem: '/imgs/canecas/caneca24.jpg', tipo: 'canecas' },
  //     { id: 25, nome: 'Caneca Eternal Op.', preco: 0, imagem: '/imgs/canecas/caneca25.jpg', tipo: 'canecas' },
  //     { id: 26, nome: 'Caneca U Can Win', preco: 0, imagem: '/imgs/canecas/caneca26.jpg', tipo: 'canecas' },
  //     { id: 27, nome: 'Caneca Warm & Cozy', preco: 0, imagem: '/imgs/canecas/caneca27.jpg', tipo: 'canecas' },
  //     { id: 28, nome: 'Caneca Bliss', preco: 0, imagem: '/imgs/canecas/caneca28.jpg', tipo: 'canecas' },
  //     { id: 29, nome: 'Caneca Lot Sixty One', preco: 0, imagem: '/imgs/canecas/caneca29.jpg', tipo: 'canecas' },
  //     { id: 30, nome: 'Caneca Let Life', preco: 32, imagem: '/imgs/canecas/caneca30.jpg', tipo: 'canecas' },

  //     { id: 31, nome: 'Camiseta not today', preco: 78, imagem: '/imgs/camisetas/camiseta01.jpeg', tipo: 'camisetas' },
  //     { id: 32, nome: 'Camiseta Broken Saints', preco: 58, imagem: '/imgs/camisetas/camiseta02.jpeg', tipo: 'camisetas' },
  //     { id: 33, nome: 'Camiseta Outcast', preco: 89, imagem: '/imgs/camisetas/camiseta03.jpeg', tipo: 'camisetas' },
  //     { id: 34, nome: 'Camiseta evening', preco: 69, imagem: '/imgs/camisetas/camiseta04.jpeg', tipo: 'camisetas' },
  //     { id: 35, nome: 'Camiseta DREAMER', preco: 55, imagem: '/imgs/camisetas/camiseta05.jpeg', tipo: 'camisetas' },
  //     { id: 36, nome: 'Camiseta Ramones', preco: 92, imagem: '/imgs/camisetas/camiseta06.jpeg', tipo: 'camisetas' },

  //     { id: 37, nome: '', preco: 92, imagem: '/imgs/camisetas/camiseta07.jpg', tipo: 'camisetas' },
  //     { id: 38, nome: '', preco: 92, imagem: '/imgs/camisetas/camiseta08.jpg', tipo: 'camisetas' },
  //     { id: 39, nome: '', preco: 92, imagem: '/imgs/camisetas/camiseta09.jpg', tipo: 'camisetas' },
  //     { id: 40, nome: '', preco: 92, imagem: '/imgs/camisetas/camiseta10.jpg', tipo: 'camisetas' },
  //     { id: 41, nome: '', preco: 92, imagem: '/imgs/camisetas/camiseta11.jpg', tipo: 'camisetas' },
  //     { id: 42, nome: '', preco: 92, imagem: '/imgs/camisetas/camiseta12.jpg', tipo: 'camisetas' },
  //     { id: 43, nome: '', preco: 92, imagem: '/imgs/camisetas/camiseta13.jpg', tipo: 'camisetas' },
  //     { id: 44, nome: '', preco: 92, imagem: '/imgs/camisetas/camiseta14.jpg', tipo: 'camisetas' },
  //     { id: 45, nome: '', preco: 92, imagem: '/imgs/camisetas/camiseta15.jpg', tipo: 'camisetas' },
  //     { id: 46, nome: '', preco: 92, imagem: '/imgs/camisetas/camiseta16.jpg', tipo: 'camisetas' },
  //     { id: 47, nome: '', preco: 92, imagem: '/imgs/camisetas/camiseta17.jpg', tipo: 'camisetas' },
  //     { id: 48, nome: '', preco: 92, imagem: '/imgs/camisetas/camiseta18.jpg', tipo: 'camisetas' },
  //     { id: 49, nome: '', preco: 92, imagem: '/imgs/camisetas/camiseta19.jpg', tipo: 'camisetas' },
  //     { id: 50, nome: '', preco: 92, imagem: '/imgs/camisetas/camiseta20.jpg', tipo: 'camisetas' },
  //     { id: 51, nome: '', preco: 92, imagem: '/imgs/camisetas/camiseta21.jpg', tipo: 'camisetas' },
  //     { id: 52, nome: '', preco: 92, imagem: '/imgs/camisetas/camiseta22.jpg', tipo: 'camisetas' },
  //     { id: 53, nome: '', preco: 92, imagem: '/imgs/camisetas/camiseta23.jpg', tipo: 'camisetas' },
  //     { id: 54, nome: '', preco: 92, imagem: '/imgs/camisetas/camiseta24.jpg', tipo: 'camisetas' },
  //     { id: 55, nome: '', preco: 92, imagem: '/imgs/camisetas/camiseta25.jpg', tipo: 'camisetas' },
  //     { id: 56, nome: '', preco: 92, imagem: '/imgs/camisetas/camiseta26.jpg', tipo: 'camisetas' },
  //     { id: 57, nome: '', preco: 92, imagem: '/imgs/camisetas/camiseta27.jpg', tipo: 'camisetas' },
    
  //   ],

  //   canecas_produtos: Produtos.todos_produtos.filter(produto => produto.tipo === 'canecas'),
  //   camisetas_produtos: Produtos.todos_produtos.filter(produto => produto.tipo === 'camisetas')

  //   canecas_produtos: [
  //     { id: 1, nome: 'Caneca de cerâmica rústica', preco: 40, imagem: '/imgs/canecas/caneca01.jpeg', tipo: 'canecas' },
  //     { id: 2, nome: 'Caneca Black Ring', preco: 32, imagem: '/imgs/canecas/caneca02.jpeg', tipo: 'canecas' },
  //     { id: 3, nome: 'Caneca The Grounds', preco: 85, imagem: '/imgs/canecas/caneca03.jpeg', tipo: 'canecas' },
  //     { id: 4, nome: 'Caneca preta fosca', preco: 28, imagem: '/imgs/canecas/caneca04.jpeg', tipo: 'canecas' },
  //     { id: 5, nome: 'Caneca Never settle', preco: 43, imagem: '/imgs/canecas/caneca05.jpeg', tipo: 'canecas' },
  //     { id: 6, nome: 'Caneca Decaf!', preco: 32, imagem: '/imgs/canecas/caneca06.jpeg', tipo: 'canecas' },

  //     { id: 7, nome: 'Caneca Café Latte', preco: 0, imagem: '/imgs/canecas/caneca07.jpg', tipo: 'canecas' },
  //     { id: 8, nome: 'Caneca You Can', preco: 0, imagem: '/imgs/canecas/caneca08.jpg', tipo: 'canecas' },
  //     { id: 9, nome: 'Caneca Tão Vigiando Nois', preco: 0, imagem: '/imgs/canecas/caneca09.jpg', tipo: 'canecas' },
  //     { id: 10, nome: 'Caneca Lisa Branca', preco: 0, imagem: '/imgs/canecas/caneca10.jpg', tipo: 'canecas' },
  //     { id: 11, nome: 'Caneca Três Árvores', preco: 0, imagem: '/imgs/canecas/caneca11.jpg', tipo: 'canecas' },
  //     { id: 12, nome: 'Caneca Nescafé', preco: 0, imagem: '/imgs/canecas/caneca12.jpg', tipo: 'canecas' },
  //     { id: 13, nome: 'Caneca Lisa Vermelha', preco: 0, imagem: '/imgs/canecas/caneca13.jpg', tipo: 'canecas' },
  //     { id: 14, nome: 'Caneca Desenhos', preco: 0, imagem: '/imgs/canecas/caneca14.jpg', tipo: 'canecas' },
  //     { id: 15, nome: 'Caneca A', preco: 0, imagem: '/imgs/canecas/caneca15.jpg', tipo: 'canecas' },
  //     { id: 16, nome: 'Caneca Balade Paris', preco: 0, imagem: '/imgs/canecas/caneca16.jpg', tipo: 'canecas' },
  //     { id: 17, nome: 'Caneca Cup of Love', preco: 0, imagem: '/imgs/canecas/caneca17.jpg', tipo: 'canecas' },
  //     { id: 18, nome: 'Caneca Sorriso', preco: 0, imagem: '/imgs/canecas/caneca18.jpg', tipo: 'canecas' },
  //     { id: 19, nome: 'Caneca Cachorro', preco: 0, imagem: '/imgs/canecas/caneca19.jpg', tipo: 'canecas' },
  //     { id: 20, nome: 'Caneca I Like u a latte', preco: 0, imagem: '/imgs/canecas/caneca20.jpg', tipo: 'canecas' },
  //     { id: 21, nome: 'Caneca We Founders', preco: 0, imagem: '/imgs/canecas/caneca21.jpg', tipo: 'canecas' },
  //     { id: 22, nome: 'Caneca R', preco: 0, imagem: '/imgs/canecas/caneca22.jpg', tipo: 'canecas' },
  //     { id: 23, nome: 'Caneca Coffe', preco: 0, imagem: '/imgs/canecas/caneca23.jpg', tipo: 'canecas' },
  //     { id: 24, nome: 'Caneca Coffe 2.0', preco: 0, imagem: '/imgs/canecas/caneca24.jpg', tipo: 'canecas' },
  //     { id: 25, nome: 'Caneca Eternal Op.', preco: 0, imagem: '/imgs/canecas/caneca25.jpg', tipo: 'canecas' },
  //     { id: 26, nome: 'Caneca U Can Win', preco: 0, imagem: '/imgs/canecas/caneca26.jpg', tipo: 'canecas' },
  //     { id: 27, nome: 'Caneca Warm & Cozy', preco: 0, imagem: '/imgs/canecas/caneca27.jpg', tipo: 'canecas' },
  //     { id: 28, nome: 'Caneca Bliss', preco: 0, imagem: '/imgs/canecas/caneca28.jpg', tipo: 'canecas' },
  //     { id: 29, nome: 'Caneca Lot Sixty One', preco: 0, imagem: '/imgs/canecas/caneca29.jpg', tipo: 'canecas' },
  //     { id: 30, nome: 'Caneca Let Life', preco: 32, imagem: '/imgs/canecas/caneca30.jpg', tipo: 'canecas' }

  //   ],
  //   camisetas_produtos: [
  //     { id: 31, nome: 'Camiseta not today', preco: 78, imagem: '/imgs/camisetas/camiseta01.jpeg', tipo: 'camisetas' },
  //     { id: 32, nome: 'Camiseta Broken Saints', preco: 58, imagem: '/imgs/camisetas/camiseta02.jpeg', tipo: 'camisetas' },
  //     { id: 33, nome: 'Camiseta Outcast', preco: 89, imagem: '/imgs/camisetas/camiseta03.jpeg', tipo: 'camisetas' },
  //     { id: 34, nome: 'Camiseta evening', preco: 69, imagem: '/imgs/camisetas/camiseta04.jpeg', tipo: 'camisetas' },
  //     { id: 35, nome: 'Camiseta DREAMER', preco: 55, imagem: '/imgs/camisetas/camiseta05.jpeg', tipo: 'camisetas' },
  //     { id: 36, nome: 'Camiseta Ramones', preco: 92, imagem: '/imgs/camisetas/camiseta06.jpeg', tipo: 'camisetas' },

  //     { id: 37, nome: 'Camiseta U are Close', preco: 92, imagem: '/imgs/camisetas/camiseta07.jpg', tipo: 'camisetas' },
  //     { id: 38, nome: 'Camiseta Verde', preco: 92, imagem: '/imgs/camisetas/camiseta08.jpg', tipo: 'camisetas' },
  //     { id: 39, nome: 'Camiseta Cinza', preco: 92, imagem: '/imgs/camisetas/camiseta09.jpg', tipo: 'camisetas' },
  //     { id: 40, nome: 'Camiseta Branca', preco: 92, imagem: '/imgs/camisetas/camiseta10.jpg', tipo: 'camisetas' },
  //     { id: 41, nome: 'Camiseta Animal Lover', preco: 92, imagem: '/imgs/camisetas/camiseta11.jpg', tipo: 'camisetas' },
  //     { id: 42, nome: 'Camiseta 705', preco: 92, imagem: '/imgs/camisetas/camiseta12.jpg', tipo: 'camisetas' },
  //     { id: 43, nome: 'Camiseta Creative', preco: 92, imagem: '/imgs/camisetas/camiseta13.jpg', tipo: 'camisetas' },
  //     { id: 44, nome: 'Camiseta Common Sense', preco: 92, imagem: '/imgs/camisetas/camiseta14.jpg', tipo: 'camisetas' },
  //     { id: 45, nome: 'Camiseta 705', preco: 92, imagem: '/imgs/camisetas/camiseta15.jpg', tipo: 'camisetas' },
  //     { id: 46, nome: 'Camiseta F GetLost', preco: 92, imagem: '/imgs/camisetas/camiseta16.jpg', tipo: 'camisetas' },
  //     { id: 47, nome: 'Camiseta M GetLost', preco: 92, imagem: '/imgs/camisetas/camiseta17.jpg', tipo: 'camisetas' },
  //     { id: 48, nome: 'Camiseta Burn', preco: 92, imagem: '/imgs/camisetas/camiseta18.jpg', tipo: 'camisetas' },
  //     { id: 49, nome: 'Camiseta Nirvana', preco: 92, imagem: '/imgs/camisetas/camiseta19.jpg', tipo: 'camisetas' },
  //     { id: 50, nome: 'Camiseta Aquas', preco: 92, imagem: '/imgs/camisetas/camiseta20.jpg', tipo: 'camisetas' },
  //     { id: 51, nome: 'Camiseta No Plans 4', preco: 92, imagem: '/imgs/camisetas/camiseta21.jpg', tipo: 'camisetas' },
  //     { id: 52, nome: 'Camiseta LZ', preco: 92, imagem: '/imgs/camisetas/camiseta22.jpg', tipo: 'camisetas' },
  //     { id: 53, nome: 'Camiseta Listrada Xadrez', preco: 92, imagem: '/imgs/camisetas/camiseta23.jpg', tipo: 'camisetas' },
  //     { id: 54, nome: 'Camiseta Listrada', preco: 92, imagem: '/imgs/camisetas/camiseta24.jpg', tipo: 'camisetas' },
  //     { id: 55, nome: 'Camiseta Preta', preco: 92, imagem: '/imgs/camisetas/camiseta25.jpg', tipo: 'camisetas' },
  //     { id: 56, nome: 'Camiseta Volunteer', preco: 92, imagem: '/imgs/camisetas/camiseta26.jpg', tipo: 'camisetas' },
  //     { id: 57, nome: 'Camiseta Versus', preco: 92, imagem: '/imgs/camisetas/camiseta27.jpg', tipo: 'camisetas' }
  //   ],
  // };