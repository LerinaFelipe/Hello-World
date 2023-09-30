const carrinho = {
    nomeDoCliente: "Guido Bernal",
    produtos: [
        {
            id: 1,
            nome: "Camisa",
            qtd: 3,
            precoUnit: 3000
        },
        {
            id: 2,
            nome: "Bermuda",
            qtd: 2,
            precoUnit: 5000
        }
    ]
}

imprimirResumo() {   
    console.log(`Cliente: ${this.nomeDoCliente}`);
    const { totalItens, totalPagar } = this.calcularTotais();
    console.log(`Total de itens: ${totalItens} itens`);
    console.log(`Total a pagar: R$ ${(totalPagar / 100).toFixed(2)}`);
  };

  // ADICIONAR OS PRODUTOS

  addProduto(produto) {
    const produtoExistente = this.produtos.find((p) => p.id === produto.id);

    if (produtoExistente) {
      produtoExistente.qtd += produto.qtd;
    } else {
      this.produtos.push(produto);
    }
  };
  
  // IMPRESSÃO

  imprimirDetalhes() {
    console.log(`Cliente: ${this.nomeDoCliente}\n`);
    this.produtos.forEach((produto, index) => {
      const totalItem = produto.qtd * produto.precoUnit;
      console.log(
        `Item ${index + 1} - ${produto.nome} - ${produto.qtd} und - R$ ${(totalItem / 100).toFixed(
          2
        )}`
      );
    });
    const { totalItens, totalPagar } = this.calcularTotais();
    console.log(`\nTotal de itens: ${totalItens} itens`);
    console.log(`Total a pagar: R$ ${(totalPagar / 100).toFixed(2)}`);
  };
  //TOTAL DE ITENS A PAGAR
  
  calcularTotais() {
    let totalItens = 0;
    let totalPagar = 0;

    for (const produto of this.produtos) {
      totalItens += produto.qtd;
      totalPagar += produto.qtd * produto.precoUnit;
    }

    const desconto = this.calcularDesconto(totalItens, totalPagar);
    totalPagar -= desconto;

    return { totalItens, totalPagar };
  };

  // DESCONTO
  
  calcularDesconto(totalItens, totalPagar) {
    if (totalItens > 4) {
      let itemMaisBarato = this.produtos[0];
      for (const produto of this.produtos) {
        if (produto.precoUnit < itemMaisBarato.precoUnit) {
          itemMaisBarato = produto;
        }
      }

      return itemMaisBarato.qtd * itemMaisBarato.precoUnit;
    } else if (totalPagar > 10000) {
      return totalPagar * 0.1;
    } else {
      return 0;
    }
  };

// Testes OPCIONAIS
carrinho.imprimirDetalhes();

const novaBermuda = {
  id: 2,
  nome: "Bermuda",
  qtd: 3,
  precoUnit: 5000,
};

carrinho.addProduto(novaBermuda);
carrinho.imprimirDetalhes();

const novoTenis = {
  id: 3,
  nome: "Tenis",
  qtd: 1,
  precoUnit: 10000,
};

carrinho.addProduto(novoTenis);
carrinho.imprimirDetalhes();