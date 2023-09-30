const disjuntores = [false, false, true, false, false, true, false, false];

const ligados = [];
let indice = 0;

for (let disjuntor of disjuntores) {
  if (disjuntor) ligados.push(indice);
  indice += 1;
}

console.log(ligados);