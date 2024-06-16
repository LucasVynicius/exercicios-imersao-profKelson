

let pessoa = {
  nome: "Lucas",
  cpf: "124.567.677-27",
  cidade: "João Pessoa",
  notas: [
    8.5, 9.0, 6.7, 7.2
]
};
const mediaNota = () => {
    return mediaNotaF = (pessoa.notas[0] + pessoa.notas[1] + pessoa.notas[2] + pessoa.notas[3]) / pessoa.notas.length
}
console.log(`Nome: ${pessoa.nome}| cpf: ${pessoa.cpf}| cidade: ${pessoa.cidade}`);
console.log(
  `1ª Nota: ${pessoa.notas[0]}| 2ª Nota: ${pessoa.notas[1]} | 3ª Nota: ${pessoa.notas[2]}| 4ª Nota: ${pessoa.notas[3]}}`
);
console.log(`Media Final: ${mediaNota().toFixed(2)}`);

const notaAleatoria = pessoa.notas[Math.floor(Math.random() * pessoa.notas.length)];
let notaConvertida = notaAleatoria * 10;

console.log(`A nota sorteada foi: ${notaAleatoria} e convertida de 0-100 é: ${notaConvertida}`)





