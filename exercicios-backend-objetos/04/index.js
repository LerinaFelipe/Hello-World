const usuarios = [
    {
        nome: "João",
        idade: 25,
    },
    {
        nome: "Ana",
        idade: 18,
    },
    {
        nome: "Beatriz",
        idade: 15,
    },
    {
        nome: "Carlos",
        idade: 16,
    },
    {
        nome: "Antonio",
        idade: 32,
    },
]


const usuarioMaiordeIdade = usuarios.map(usuario =>  {const maiorIdade = usuario.idade > 17
    return{
        ...usuario,
        MaiordeIdadeMap: maiorIdade
    }
})


console.log(usuarioMaiordeIdade)

//Exemplo com for


for (let i = 0; i < usuarios.length; i++){   //Anotação: definir variaves para melhor compreesão quando o código precisar fazer condicionais
    const usuario = usuarios[i]
    const IdadeMaior = usuario.idade > 17
    usuario.MaiordeIdadecomFor = IdadeMaior
}


console.log(usuarios)