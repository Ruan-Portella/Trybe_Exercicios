// loginValidation.js
const greetingMessage = (user) => {
    return `Hello, ${user}! Que bom ter você de volta`;
  };
  const loginErrorMessage = (user) => {
    return `Pessoa usuária ${user} não encontrada, tente novamente!`;
  };
  // trazemos aqui esse objeto somente para demonstrar como funciona a função verifyCredentials, mas poderiam ser quaisquer outros dados.
  const user = {
    userName: 'Joana',
    password: 123456,
  };
  const verifyCredentials = (userInfo) => {
    const userName = userInfo.userName;
    const password = userInfo.password;
    if (password === 123456 && userName === 'Joana') {
      return greetingMessage(userName);
    } else {
      return loginErrorMessage(userName);
    }
  };
  module.exports = { greetingMessage, loginErrorMessage, verifyCredentials };