// ESTRUTURA
const contaBancaria = {
    nome: "Maria",
    saldo: 0,
    historicos: [],
    depositar(valor) {
      this.saldo += valor;
      this.historicos.push({
        tipo: "Depósito",
        valor,
      }); 
      return `Deposito de R$${(valor / 100).toFixed(2)} realizado para o cliente: ${this.nome}`;
    },//SACAR
    sacar(valor) {
      if (valor > this.saldo) {
        return `Saldo insuficiente para o saque de: ${this.nome}`;
      }

      this.saldo -= valor;
      this.historicos.push({
        tipo: "Saque",
        valor,
      });
      return `Saque de R$${(valor / 100).toFixed(2)} realizado para o cliente: ${this.nome}`;
    },// DEFINIR EXTRATO
    extrato() {
      let historico = `Extrato de ${this.nome} - Saldo: R$${(this.saldo / 100).toFixed(2)}\nHistórico:\n`;
      for (const movimento of this.historicos) {
        historico += `${movimento.tipo} de R$${(movimento.valor / 100).toFixed(2)}\n`;
      }
      return historico;
    },
  };

  //chamadas
  console.log(contaBancaria.depositar(10000));
  console.log(contaBancaria.sacar(50000));
  console.log(contaBancaria.sacar(5000));
  console.log(contaBancaria.extrato());