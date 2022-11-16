# Exercícios 

## Parte I - Comandos de Input e Output

### 1. Crie a pasta `unix_tests_skills` e navegue até ela.

Resolução: 

- Parte I - mkdir Desktop/Trybe/trybe_exercicios/fundamentos/secao-01-unix-e-bash/dia-02-unix-e-bash/unix_tests_skills
- Parte II - cd Desktop/Trybe/trybe_exercicios/fundamentos/secao-01-unix-e-bash/dia-02-unix-e-bash/unix_tests_skills

### 2. Crie um arquivo texto pelo terminal com o nome `skills2.txt` e adicione os valores `Internet`, `Unix` e `Bash`, um em cada linha.

Resolução: 

- Parte I - touch skills2.txt
- Parte II - echo Internet/Unix/Bash > skills2.txt 

### 3. Conte quantas linhas tem o arquivo `skills2.txt`.

Resolução: echo skills2.txt | wc -l

### 4. Crie um arquivo chamado `top_skills.txt` usando o `skills2.txt`, contendo as 3 primeiras skills em ordem alfabética.

Resolução: sort < skills2.txt | head -n 3 > top_skills.txt

## Parte I - Permissões

### 1. Crie a pasta `unix_tests_permissions` e navegue até ela.

Resolução: 

- Parte I - mkdir Desktop/Trybe/trybe_exercicios/fundamentos/secao-01-unix-e-bash/dia-02-unix-e-bash/unix_tests_permissions
- Parte II - cd Desktop/Trybe/trybe_exercicios/fundamentos/secao-01-unix-e-bash/dia-02-unix-e-bash/unix_tests_permissions

### 2. Rode o comando `ls -l`e veja quais as permissões dos arquivos

Resolução: ls - l

### 3. Crie o arquivo `arquivo_teste.txt``

Resolução: touch arquivo_teste.txt

### 4. Mude a permissão do arquivo `arquivo_teste.txt` para que todas as pessoas usuárias possam ter acesso à leitura e escrita, e verifique se está correto com o comando `ls -l``

Resolução: 

- Parte I: chmod a+rw arquivo_teste.txt
- Parte II: ls -l

### 5. Volte a permissão do arquivo `arquivo_teste.txt` para todas as pessoas usuárias, verifique se está correto com o comando ls -l

Resolução: 

- Parte I: chmod a-w arquivo_teste.txt
- Parte II: ls -l

### 6. Volte a permissão do arquivo `arquivo_teste.txt` para a listada inicialmente utilizando o comando `chmod 644 arquivo_teste.txt`

Resolução: chmod 644 arquivo_teste.txt

# Parte I - Processos e Jobs

### 1. liste todos os processos.

Resolução: ps

### 2. Agora use o comando `sleep 30 &`.

Resolução: sleep 30 &

### 3. Use a listagem de processos para encontrar o PID do processo que está executando o comando `sleep 30` e termine a sua execução.

Resolução: 

- Parte I - ps | grep sleep
- Parte II - kill 8391

### 4. Execute novamente o comando `sleep 30`, mas agora sem o `&`. Depois, faça com que ele continue executando em background.

Resolução:

- Parte I: sleep 30
- Parte II: bg






