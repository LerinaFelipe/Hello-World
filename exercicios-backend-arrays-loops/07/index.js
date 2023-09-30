const nomes = ["Ana", "Joana", "Carlos", "amanda"];

let nomesQueComecamComA = [];

for (let nome of nomes) {
  const letraInicial = nome[0];

  const comecaComALetraA = letraInicial === "A" || letraInicial === "a";

  if (comecaComALetraA) nomesQueComecamComA.push(nome);
}

console.log(nomesQueComecamComA);