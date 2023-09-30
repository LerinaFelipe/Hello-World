const prova = {
    aluno: "João",
    materia: "Português",
    valor: 10,
    questoes: [
        {
            resposta: "a",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        },
        {
            resposta: "e",
            correta: "b"
        },
        {
            resposta: "b",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        }
    ]
};

//1 passo calculo dos valores
function corrigirProva(prova){
    let total = 0;   //contagem
    const totalQuestoes = prova.questoes.length //tamnhoo
    const ValordasQuestoes = prova.valor/totalQuestoes // calculo dos valores

    //2 percorre os acertos das questoes

    for(let percorre of prova.questoes){
        if(percorre.resposta === percorre.correta){  // qudo a resposta for igua a correta
            total++ //atribui  o valor a quantidade de acertos
        }
    }
        const nota = total * ValordasQuestoes;
        console.log(`O aluno(a) ${prova.aluno} acertou ${total} questões e obteve nota ${nota}`); 
}

corrigirProva(prova);
