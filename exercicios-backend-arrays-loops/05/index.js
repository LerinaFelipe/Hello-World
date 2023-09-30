const original = [1, 4, 12, 21, 53, 88, 112];

const numeros = [1, 4, 12, 21, 53, 88, 112];

let pares = [];

for (let numero of numeros) {
  const restoDivisao = numero % 2;

  if (restoDivisao === 0) pares.push(numero);
}

console.log(pares);