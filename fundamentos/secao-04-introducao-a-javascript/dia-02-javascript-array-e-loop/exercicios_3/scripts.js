// 1. Crie uma constante que receba a nota de uma pessoa candidata em um desafio técnico, e atribua a ela um valor entre 1 e 100;
// 2. Implemente uma lógica que verifique se a pessoa candidata foi aprovada, reprovada ou se essa pessoa está na lista de espera. Para isso, considere as seguintes informações:
// 3. Se a nota for maior ou igual a 80, imprima “Parabéns, você foi aprovada(o)!”
// 5. Se a nota for menor que 80 e maior ou igual a 60, imprima “Você está na nossa lista de espera”
// 6. Se a nota for menor que 60, imprima “Você foi reprovada(o)”
// 7. Crie uma estrutura condicional utilizando o if, else if e else para criar o seu algoritmo, e os operadores lógicos que se aplicam a cada situação.
// 8. Altere o valor da nota para verificar se as condições que você implementou funcionam.

const candidata = 59;

    if (candidata >= 80) {
        console.log(`Parabéns, você foi aprovada(o)!`);
    } else if (candidata < 80 && candidata >= 60) {
        console.log(`Você está na nossa lista de espera`);
    } else {
        console.log(`Você foi reprovada(o)`);
    }

