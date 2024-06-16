const temperaturas = [25, 30, 15, 20];

console.log(`As temperaturas armazenadas são: ${temperaturas}`);

const temperaturaAleatoria = temperaturas[Math.floor(Math.random () * temperaturas.length)]

const temperaturaF = (temperaturaAleatoria * 9 / 5) + 32;

console.log(`A temperatura sorteada é: ${temperaturaAleatoria}ºew ' que corresponde a ${temperaturaF}`);