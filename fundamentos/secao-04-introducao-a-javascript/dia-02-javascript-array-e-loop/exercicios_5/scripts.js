// 1. Crie uma variável chamada “weekDay” que receba a string “quarta-feira”.

// 2. Utilizando if/else, implemente condicionais para que:

// 3. Se nossa variável “weekDay” for “segunda-feira”, “terça-feira”, “quarta-feira”, “quinta-feira” ou “sexta-feira”, imprima “Oba, mais um dia de aprendizado na Trybe >:D”.

// 4. Se for algum dia de fim de semana, imprima “FINALMENTE, descanso merecido UwU”.

var weekDay = 'quarta-feira';

    if (weekDay === 'segunda-feira' || weekDay === 'terça-feira' || weekDay === 'quarta-feira'|| weekDay === 'quinta-feira' || weekDay ==='sexta-feira') {
        console.log('Oba, mais um dia de aprendizado na Trybe >:D');
    } else {
        console.log('FINALMENTE, descanso merecido UwU')
    }