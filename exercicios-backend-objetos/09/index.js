const participantes = [
    { nome: "João" },
    { nome: "Ana" },
    { nome: "Beatriz" },
    { nome: "Maria" },
    { nome: "Ana Clara" },
    { nome: "Joana" },
    { nome: "Augusto" },
    { nome: "Renan" },
    { nome: "Patricia" },
    { nome: "Carlos" },
    { nome: "Renato" },
    { nome: "José" },
    { nome: "Roberto" },
    { nome: "Sara" },
    { nome: "Junior" },
    { nome: "Pedro" },
    { nome: "Vitor" },
    { nome: "Antonio" },
]


const NomeAprocurar = "Carlos"

for (let i = 0; i < participantes.length; i++){
    const participates = participantes[i]
    if (participates.nome === NomeAprocurar){
            const Resultado = i + 1
            console.log(`A Galera  o ${NomeAprocurar} está na posição ${Resultado},corre lá`)
        }
}