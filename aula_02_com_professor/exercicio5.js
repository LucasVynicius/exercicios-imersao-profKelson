var notaDoAluno = [7.2, 8.0, 7.0]; 
const mediaParaAprovacao = 7.0;

const mediaAluno = (notaDoAluno[0] + notaDoAluno[1] + notaDoAluno[2]) / notaDoAluno.length;

console.log(`Nota 1: ${notaDoAluno[0]}| Nota 2: ${notaDoAluno[1]}| Nota 3: ${notaDoAluno}`);
console.log(`A MÉDIA DO ALUNO É: ${mediaAluno.toFixed(2)}`);
if (mediaAluno >= mediaParaAprovacao){
    console.log (`O aluno foi APROVADO por média: ${mediaAluno.toFixed(2)}`);
} else{
    console.log(`O aluno foi REPROVADO`);
}