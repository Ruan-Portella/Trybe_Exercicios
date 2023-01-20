// loginValidation.test.js
const {
    greetingMessage,
    loginErrorMessage,
    verifyCredentials,
  } = require('./loginValidation.js');
  describe('a função verifyCredentials()', () => {
    // veja que testamos o objeto `user` agora com outros dados
    const user = {
      userName: 'Bob',
      password: 123456,
    };
    
    it('verifyCredentials() calls the correct function depending on the user and password input', () => {
      expect(verifyCredentials(user)).toBe(
        'Hello, Joana! Que bom ter você de volta'
      );
    });
    it('greetingMessage() returns a message in the format: `Hello, ${user}! Que bom ter você de volta`', () => {
      expect(greetingMessage('Lucas')).toBe(
        'Hello, Lucas! Que bom ter você de volta'
      );
    });
    it('loginErrorMessage() returns a message in the format: `Pessoa usuária ${user} não encontrada, tente novamente!`', () => {
      expect(loginErrorMessage('Bob')).toBe(
        'Pessoa usuária Bob não encontrada, tente novamente!'
      );
    });
  });