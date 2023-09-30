const ladoA = 3;
const ladoB = 3;

const nomesDasBuchas = {
  0: "Branco",
  1: "Ás",
  2: "Duque",
  3: "Terno",
  4: "Quadra",
  5: "Quina",
  6: "Sena",
};

if (ladoA === ladoB) {
  const nomeBucha = nomesDasBuchas[ladoA];
  console.log(`Bucha de ${nomeBucha}`);
} else {
  console.log("NÃO");
}