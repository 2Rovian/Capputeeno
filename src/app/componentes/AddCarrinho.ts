import toast from "react-hot-toast";

export function handleAddCarrinho(produto: any, e?: React.MouseEvent){
    e?.stopPropagation();
    e?.preventDefault();

    const produtosSalvos = localStorage.getItem("Produtos");

    let Produtos_localStorage: any[] = [];
    
    try {
        Produtos_localStorage = JSON.parse(produtosSalvos || "[]");
        if (!Array.isArray(Produtos_localStorage)) {
            Produtos_localStorage = [];
        }
    } catch (error) {
        Produtos_localStorage = [];
    }

    const produtoExistente = Produtos_localStorage.some(p => p.id === produto.id);
    if(produtoExistente){
        toast.error(`${produto.nome} já pertence ao carrinho`)
        return
    }

    Produtos_localStorage.push(produto);
    localStorage.setItem("Produtos", JSON.stringify(Produtos_localStorage));
    toast.success(`${produto.nome} adicionado ao carrinho`, { duration: 2000 });
};

