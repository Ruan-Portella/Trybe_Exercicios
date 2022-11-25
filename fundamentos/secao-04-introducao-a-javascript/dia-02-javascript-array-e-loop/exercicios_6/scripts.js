// 1. Crie uma variável para armazenar o status da pessoa candidata no processo seletivo, que pode ser: 'aprovada', 'lista' ou 'reprovada';
// 2. Crie uma estrutura condicional com o switch/case que irá imprimir as seguintes mensagens:
// 3. Caso 'aprovada', imprima “Parabéns, você foi aprovada(o)!”.
// 4. Caso 'lista', imprima “Você está na nossa lista de espera”.
// 5. Caso 'reprovada', imprima “Você foi reprovada(o)”.
// 6. Caso default, imprima a mensagem de “Informação incorreta”.

var candidata = 'aprovada';

    switch (candidata) {
        case `aprovada`:
            console.log('Parabéns, você foi aprovada(o)!');
            break;
        case `lista`:
        console.log('Você está na nossa lista de espera');
            break;
        case `reprovada`:
        console.log('Você foi reprovada(o)');
            break;
    default:
        console.log('Informação incorreta');        
    }