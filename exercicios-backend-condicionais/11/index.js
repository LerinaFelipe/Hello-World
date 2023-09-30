//renda mensal do aluno, em centavos.
const rendaMensalEmCentavos = 300000;

// Tempo decorrido de contrato. Se for maior que 60 meses, o aluno não deve mais nada.
const mesesDecorridos = 12;

// Soma das parcelas já pagas pelo aluno nos meses anteriores (em centavos). Se for igual a 18 mil reais, o aluno não deve pagar mais nada, pois já quitou a dívida.
const totalJaPagoPeloAluno = 1000000;


const rendaMinimaParaPagar = 200000;

const valorTotalDoCurso = 1800000;

let valorParcela = 0;

if (mesesDecorridos <= 60) {
  if (totalJaPagoPeloAluno < valorTotalDoCurso) {
    if (rendaMensalEmCentavos > rendaMinimaParaPagar) {
      valorParcela = (rendaMensalEmCentavos * 18) / 100;
    }
  }
}

const valorParcelaEmReais = (valorParcela / 100).toFixed(2);

if (valorParcela > 0) {
  console.log(`O valor da parcela desse mês é R$ ${valorParcelaEmReais} reais`);
} else {
  console.log("Nenhum valor é devido neste mês.");
}