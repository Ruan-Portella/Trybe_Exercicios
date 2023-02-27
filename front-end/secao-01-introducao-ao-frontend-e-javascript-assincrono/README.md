# Seção 01: Introdução ao FrontEnd e JavaScript Assíncrono

>"Essa seção pertence ao módulo [Fundamentos](https://github.com/Ruan-Portella/Trybe_Exercicios/tree/main/front-end) do curso da [Trybe](https://www.betrybe.com/). Nessa seção aprendi sobre Introdução ao FrontEnd e JavaScript Assíncrono

## Comandos Aprendidos

- 1 `npm init -y` - cria na raiz do projeto um arquivo package.json
- 2 `npm install nanoid` - Instala a biblioteca de NanoID
- 3 `npx vite --open` - cria um servidor local e executar a aplicação que se encontra no arquivo index.html.
- 4 `npm install vite` - Instala o vite
- 5 `npm init @eslint/config` - Instala o lint
- 6 `npm install @trybe/eslint-config-frontend` - Instala o lint da Trybe
- 7 `npx vite build` - Instala o diretório dist 
- 8 `npm install -g surge` - Instala o surge
- 9 `surge dist` - Realiza o deploy do diretório dist
- 10 `promisse` - é um objeto usado para processamento assíncrono
- 11 `new Promise(resolve, reject)` - lida com códigos assíncronnos
- 12 `.then(response)` -  Pega o valor do parametro de promisse
- 13 `.cath(error)` - Pega o valor e se for reject retorna um erro
- 14 `.finally()` - Executa algo independente se for resolvida ou não
- 15 `.fetch(url)` - retorna um promise
- 16 `.json()` - transforma um resposta recebida da API em um objeto no formato JSON, que retorna um promise
- 17 `JSON.stringify()` - transforma os dados em texto
- 18 `promise.all([])` - Retorna o valor das promisses, se alguma for rejeitada, retorna ela
- 19 `promise.race([]` - Retorna o valor da primeira promisse resolvida ou rejeitada
- 20 `promise.any([])` - Retorna a primeira promisse resolvida e se todas forem rejeitada retorna um objeto delas
- 21 `promise.allSettled` - Retorna um array de objetos com o valor de cada promisse
- 22 `async` - Configura a função para ser assincrona
- 23 `await` - Fala pra o javaScript esperar resolver a promisse