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

//Exemplo com filter

const jovens1 = usuarios.filter(usuario => usuario.idade < 18)
const adultos1 = usuarios.filter(usuario => usuario.idade >= 18)


console.log(jovens1)

console.log(adultos1)



console.log("-----------------------------------------------------------")

//Exemplo com For 
const adultos = []
const jovens = []

for(let i = 0; i < usuarios.length; i++){
    if(usuarios[i].idade >= 18){
        adultos.push(usuarios[i])
    }else{
        jovens.push(usuarios[i])

    }
}

console.log(adultos)
console.log(jovens)