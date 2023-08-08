class Produto {
    constructor(nome, preco, quantidade) {
      this.nome = nome;
      this.preco = preco;
      this.quantidade = quantidade;
    }
  }
  
  class EstoqueItem {
    constructor(produto) {
      this.produto = produto;
    }
  }
  
  class Estoque {
    constructor() {
      this.itens = [];
    }
  
    adicionarItem(item) {
      this.itens.push(item);
    }
  
    removerItem(item) {
      const index = this.itens.findIndex((i) => i.produto.nome === item.produto.nome);
      if (index !== -1) {
        this.itens.splice(index, 1);
      }
    }
  
    listarItens() {
      return this.itens;
    }
  }
  
  // Utilização do Estoque
  const estoque = new Estoque();
  
  const produto1 = new Produto('Camiseta', 29.99, 50);
  const item1 = new EstoqueItem(produto1);
  estoque.adicionarItem(item1);
  
  const produto2 = new Produto('Calça Jeans', 89.99, 30);
  const item2 = new EstoqueItem(produto2);
  estoque.adicionarItem(item2);
  
  console.log('Itens em estoque:', estoque.listarItens());
  
  estoque.removerItem(item1);
  
  console.log('Itens em estoque após a remoção:', estoque.listarItens());