//tipo de pagamento (dinheiro, credito, debito, cheque).
const tipoDePagamento = "credito";

//valor da mercadoria (centavos)
const valorDoProduto = 13000;

switch (tipoDePagamento) {
    case "credito":
      desconto = 0.05;
      tipoDePagamentoFormatado = "crédito";
      break;
    case "cheque":
      desconto = 0.03;
      tipoDePagamentoFormatado = "cheque";
      break;
    case "debito":
    case "dinheiro":
      desconto = 0.10;
      tipoDePagamentoFormatado = "débito ou dinheiro";
      break;
    default:
      console.log("Forma de pagamento não reconhecida.");
  }
  
  if (desconto !== undefined) {
    const valorComDesconto = valorDoProduto - valorDoProduto * desconto;
    const valorComDescontoEmReais = (valorComDesconto / 100).toFixed(2);
    console.log(`Valor a ser pago: R$${valorComDescontoEmReais}`);
  }
