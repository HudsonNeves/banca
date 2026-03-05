function calcularTotal(itens) {
    return itens.reduce((total, item) => total + item.preco, 0);
}

const carrinho = [
    { nome: 'Camisa', preco: 50 },
    { nome: 'Calça', preco: 100 },
    { nome: 'Tênis', preco: 150 }
];

const total = calcularTotal(carrinho);
console.log("O total do carrinho é: R$", total);