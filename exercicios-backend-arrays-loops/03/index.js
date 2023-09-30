const numeros = [54, 22, 14, 87, 10, 284];

let flagBooleana = true;

let indice = 0;

let dezEncontrado = false;

while (flagBooleana) {
  if (numeros[indice] === 10) {
    flagBooleana = false;
    dezEncontrado = true;
  } else if (indice === numeros.length) {
    flagBooleana = false;
  }
  indice++;
}

if (dezEncontrado) {
  console.log(indice - 1);
} else {
  console.log(-1);
}