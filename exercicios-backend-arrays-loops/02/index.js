const letras = ["A", "a", "B", "C", "E", "e"];

let quantidadeDeLetrasEs = 0;

for (let letra of letras) {
  const aLetraE = letra === "E" || letra === "e";

  if (aLetraE) quantidadeDeLetrasEs++;
}

const totalDeLetraE = quantidadeDeLetrasEs > 0;

if (totalDeLetraE) {
  const mensagemBonitinha =
    quantidadeDeLetrasEs > 1
      ? `A quantidade de letras são: ${quantidadeDeLetrasEs}`
      : `A quantidade de letras é: ${quantidadeDeLetrasEs}`;

  console.log(mensagemBonitinha);
} else {
  console.log("Não tem letras!");
}