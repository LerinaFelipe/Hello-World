const primeiroNome = "Mario";
const sobrenome = "";
const apelido = "";

const nomeCompleto = apelido || (primeiroNome + (sobrenome ? " " + sobrenome : ""));

console.log(nomeCompleto);