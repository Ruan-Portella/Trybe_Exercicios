# Exercícios 

## Parte I - Comandos de Input e Output

### 1. Crie a pasta `unix_tests_skills` e navegue até ela.

Resolução: 

Parte I - mkdir Desktop/Trybe/trybe_exercicios/fundamentos/secao-01-unix-e-bash/dia-02-unix-e-bash/unix_tests_skills
Parte II - cd Desktop/Trybe/trybe_exercicios/fundamentos/secao-01-unix-e-bash/dia-02-unix-e-bash/unix_tests_skills

### 2. Crie um arquivo texto pelo terminal com o nome `skills2.txt` e adicione os valores `Internet`, `Unix` e `Bash`, um em cada linha.

Resolução: 

Parte I - touch skills2.txt
Parte II - echo Internet/Unix/Bash > skills2.txt 

### 3. Conte quantas linhas tem o arquivo `skills2.txt`.

Resolução: echo skills2.txt | wc -l

### 4. Crie um arquivo chamado `top_skills.txt` usando o `skills2.txt`, contendo as 3 primeiras skills em ordem alfabética.

Resolução: sort < skills2.txt | head -n 3 > top_skills.txt

## Parte I - Permissões

### 1. Crie a pasta `unix_tests_permissions` e navegue até ela.

Resolução: 





