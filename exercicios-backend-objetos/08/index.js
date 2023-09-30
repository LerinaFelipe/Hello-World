const usuarios = [
    {
        nome: "João",
        pets: [],
    },
    {
        nome: "Ana",
        pets: ["Pingo", "Lulu"],
    },
    {
        nome: "Beatriz",
        pets: ["Lessie"],
    },
    {
        nome: "Carlos",
        pets: ["Farofa", "Salsicha", "Batata"],
    },
    {
        nome: "Antonio",
        pets: ["Naninha"],
    },
]

for(usuario of usuarios) {
    const Nome = usuario.nome;
    const QtdadeDePets = usuario.pets.length;
    let mensagem = ``;
    if(QtdadeDePets == 0) {
        mensagem = `Sou ${Nome} e não tenho pets`;
}else if(QtdadeDePets == 1){
    mensagem = `Sou ${Nome} e tenho 1 pet`;
}else {
    mensagem = `Sou ${Nome} e tenho ${QtdadeDePets} pets`;
    }

    console.log(mensagem);
}

console.log(Object.entries(usuarios));