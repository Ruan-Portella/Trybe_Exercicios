// crie uma função que receba como parâmetro o nome completo da nova pessoa colaboradora e que automaticamente gere um email no formato nome_da_pessoa@trybe.com;

// utilize a função newEmployees, definida abaixo, para receber a sua função como parâmetro e criar o objeto de cada pessoa contratada.

const newEmployees = (employeeGenerator) => {
  const employees = { 
    id1: employeeGenerator('Pedro Guerra'), 
    id2: employeeGenerator('Luiza Drumond'),
    id3: employeeGenerator('Carla Paiva'),
  }
  return employees;
};

const employeeGenerator = (fullName) => {
  const email = fullName.toLowerCase().split(' ').join('_')
  return {fullName, email: `${email}@betrybe.com`};

}

console.log(newEmployees(employeeGenerator));

// Crie uma HOF que receberá três parâmetros:
// O primeiro será um array de respostas corretas (soluções);

// O segundo será um array contendo as respostas fornecidas por uma pessoa estudante;

// O terceiro é uma função que compara os dois arrays e então dá uma pontuação baseada nos acertos. Para isso, essa função usará os seguintes critérios:

// Uma resposta correta adiciona 1 ponto à pontuação final;

// A ausência de uma resposta não altera a pontuação (quando for “N.A”);

// Uma resposta incorreta reduz a pontuação final em 0.5 ponto.

// Ao final, a HOF deve retornar o total de pontos obtidos através das respostas fornecidas pela pessoa estudante. Utilize os seguintes arrays:

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const compareAnswers = (rightAnswer, studentAnswer) => {
  if (rightAnswer === studentAnswer) {
    return 1;
  } if (studentAnswer === 'N.A') {
    return 0;
  }
  return -0.5;
};

const countPoints = (rightAnswer, studentAnswer, action) => {
  let contador = 0;
  for (let index = 0; index < rightAnswer.length; index += 1) {
  const actionReturn = action(rightAnswer[index], studentAnswer[index]);
  contador += actionReturn;
}
 return `Resultado Final: ${contador} pontos`;
};

console.log(countPoints(RIGHT_ANSWERS, STUDENT_ANSWERS, compareAnswers));