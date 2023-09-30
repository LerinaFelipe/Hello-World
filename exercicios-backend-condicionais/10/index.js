const caractere = "E";


if (
    (caractere >= "A" && caractere <= "Z" && "AEIOU".includes(caractere)) ||
    (caractere >= "a" && caractere <= "z" && "aeiou".includes(caractere))
  ) {
    if (caractere === caractere.toUpperCase()) {
      console.log("Categoria: Vogal (maiúscula)");
    } else {
      console.log("Categoria: Vogal (minúscula)");
    }
  }
  else if (
    (caractere >= "A" && caractere <= "Z" && !"AEIOU".includes(caractere)) ||
    (caractere >= "a" && caractere <= "z" && !"aeiou".includes(caractere))
  ) {
    console.log("Categoria: Consoante");
  }
  else if (caractere >= "0" && caractere <= "9") {
    console.log("Categoria: Número");
  }
  else {
    console.log("Categoria: Caractere Inválido");
  }