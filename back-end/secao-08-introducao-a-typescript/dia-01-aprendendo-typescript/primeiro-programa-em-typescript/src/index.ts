import users from './data';
import * as Functions from './myFunctions';

console.log(`Lista de pessoas: ${Functions.getUserNames(users)}.`);
console.log(`Lista de pessoas com mais de 20 repositórios: ${Functions.getUsersByRepoQyantity(users, 20)}.`);

