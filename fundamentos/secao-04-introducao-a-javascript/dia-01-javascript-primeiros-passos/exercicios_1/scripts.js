// 1. Crie uma constante chamada myName e atribua a ela o seu nome (Exemplo: Carolina).
// 2. Crie uma constante chamada birthCity e atribua a ela a sua cidade natal.
// 3. Crie uma variável let chamada birthYear e atribua a ela o ano em que você nasceu.
// 4. Utilize o console.log() para imprimir as constantes e variáveis que você criou.
// 5. Altere o valor atribuído à variável birthYear para 2030. Faça um console.log(birthYear) novamente para ver o que acontece!
// 6. Altere o valor atribuído à constante birthCity. Faça um console.log(birthCity) novamente! Você saberia explicar por que recebemos uma mensagem de erro? 🤔

const myName = 'Ruan';
const birthCity = 'Nova Iguacu';
let birthYear = 2004;

console.log(myName, birthCity, birthYear);

birthYear = 2030;

console.log(birthYear);

// birthCity = 'New Iguacu'; Esse valor não pode ser reatribuido por ser uma const

console.log(birthCity)
