# Seção 02: Introdução à SQL

>Essa seção pertence ao módulo [Fundamentos](https://github.com/Ruan-Portella/Trybe_Exercicios/tree/main/back-end) do curso da [Trybe](https://www.betrybe.com/). Nessa seção aprendi sobre SQL.

## Comandos Aprendidos

- 1 `SQL` - é a linguagem mais usada para criar, pesquisar, extrair e também manipular dados dentro de um banco de dados relacional;
- 2 `SHOW DATABASES` - Ver todos os bancos de dados que são instalados atualmente;
- 3 `USE` - Serve para definir a referência do banco de dados que será utilizado na query;
- 4 `SHOW TABLES` - Retorna todas as tabelas inicializadas;
- 5 `DESCRIBE` - Visualizar estrutura de uma tabela;
- 6 `CREATE DATABASE` - Cria um banco de dados;
- 7 `docker container run --name <nome> -e MYSQL_ROOT_PASSWORD=<senha> -dp 3306:3306 mysql:8.0.31` - Comando para criar o container de mysql;
- 8 `docker exec -it <nome> bash` - comando entrar no container;
- 9 `mysql -u root -p` - Cria a rota para o mysql;
- 10 `NOT NULL` - Garante que o campo não tenha valores nulos;
- 11 `UNIQUE` - Garante que o valor inserido é único;
- 12 `PRIMARY KEY` - Garante que o valor seja a chave primária;
- 13 `FOREIGN KEY` - Garante que seja uma chave estrangeira;
- 14 `DEFAULT` - Garante que se não passar valor, será fornecido um valor padrão;
- 15 `DDL` - (DATA DEFINITION LANGUAGE) Todos os comandos que lidam com o esquema, a descrição e o modo como os dados devem existir em um banco de dados;
- 16 `CREATE` - Para criar bancos de dados, tabelas, índices, views, procedures, functions e triggers;
- 17 `ALTER` - Para alterar a estrutura de qualquer objeto;
- 18 `DROP` - Permite deletar objetos;
- 19 `TRUNCATE` - Apenas esvazia os dados dentro de uma tabela, mas a mantém no banco de dados;
- 20 `DML` - (DATA MANIPULATION LANGUAGE) Comandos que são usados para manipular dados. São utilizados para armazenar, modificar, buscar e excluir dados em um banco de dados;
- 21 `SELECT` - Usado para buscar dados em um banco de dados;
- 22 `INSERT` - Insere dados em uma tabela;
- 23 `UPDATE` - Altera dados dentro de uma tabela;
- 24 `DELETE` - Exclui dados de uma tabela;
- 25 `DCL` - (DATA CONTROL LANGUAGE) Mais focado nos comandos que concedem direitos; permissões e outros tipos de controle ao sistema de banco de dados;
- 26 `GRANT` - Concede acesso a um usuário;
- 27 `REVOKE` - Remove acessos concedidos através do comando GRANT;
- 28 `TCL` - (Transactional Control Language) Lida com as transações dentro de suas pesquisas;
- 29 `COMMIT` - Muda suas alterações de temporárias para permanentes no seu banco de dados;
- 30 `ROLLBACK` - Desfaz todo o impacto realizado por um comando;
- 31 `SAVEPOINT` - Define pontos para os quais uma transação pode voltar;
- 32 `TRANSACTION` - Comandos que definem onde, como e em que escopo suas transações são executadas;
- 33 `CONCAT` - Função que junta dados em apenas uma coluna; 
- 34 `DISTINCT` - Função que remove valores dados repetidos;
- 35 `COUNT` - Função que conta quanto dados existem na tabela;
- 36 `LIMIT` - Função que limita a quantidade de dados na tabela;
- 37 `OFFSET` - Função que pula as linhas;
- 38 `ORDER BY` - Função que ordena a coluna por DESC ou ASC;
- 39 `WHERE` - (onde) funciona como comparação;
- 40 `LIKE` - é utilizado para buscar por meio de uma sequência específica de caracteres;
- 41 `IN` - é utilizado para fazer operações de OR em apenas uma linha;
- 42 `BETWEEN` - Pega todos os valores que estão dentro do parâmetro inicial e final;
- 43 `INSERT INTO -- VALUES --` - insira valores nas colunas da tabela;
- 44 `INSERT INTO -- SELECT -- FROM --` - Inseri valores de outra coluna na coluna escolhida;
- 45 `UPDATE -- SET -- WHERE` - Atualiza algum valor da coluna na tabela;
- 46 `DELETE -- FROM -- WHERE` - Deleta algum valor da coluna na tabela;
