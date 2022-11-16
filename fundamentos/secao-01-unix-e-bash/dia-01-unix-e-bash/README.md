# Exercícios 

## Parte I - Criação de arquivos e diretórios

### 1. Utilizando o terminal, aplique o comando de criação de diretórios que você aprendeu, crie um diretório chamado `unix_tests` e navegue até ele.

Resolução: 

- Parte I - mkdir Desktop/Trybe/trybe_exercicios/fundamentos/secao-01-unix-e-bash/unix_tests
- Parte 2 - cd Desktop/Trybe/trybe_exercicios/fundamentos/secao-01-unix-e-bash/unix_tests

### 2. Crie um arquivo de texto com o nome `trybe.txt`.

Resolução: touch trybe.txt

### 3. Crie uma cópia do arquivo `trybe.txt` com o nome `trybe_backup.txt`.

Resolução: cp trybe.txt trybe_backup.txt

### 4. Renomeie o arquivo `trybe.txt`.

Resolução: mv trybe.txt trybe1.txt

### 5. Dentro de `unix_tests`, crie um novo diretório chamado `backup`.

Resolução: mkdir backup

### 6. Mova o arquivo `trybe_backup.txt` para o diretório `backup`.

Resolução: mv trybe_backup.txt backup

### 7. Dentro de `unix_tests`, crie um novo diretório chamado `backup2`.

Resolução: mkdir backup2

### 8. Mova o arquivo `trybe_backup.txt` da pasta `backup` para a pasta `backup2`.

Resolução: mv backup/trybe_backup.txt backup2

### 9. Apague a pasta `backup`.

Resolução: rm -rf backup

### 10. Renomeie a pasta `backup2` para `backup`.

Resolução: mv backup2 backup

### 11. Dentro de `unix_tests`, crie um novo diretório chamado `backup`.

Resolução: mkdir backup

### 12. Apague o diretório `backup`.

Resolução: rm -rf backup

### 13. Apague o diretório `trybe1.txt`.

Resolução: rm -rf trybe1.txt

## Parte II - Manipulação e Busca

### 1. Crie um novo diretório chamado `unix_tests_search` e entre nele.

Resolução: 

- Parte I: mkdir unix_tests_search
- Parte II: cd unix_tests_search

### 2. Na pasta `unix_tests_search`, baixe um arquivo com os nomes de todos os países do mundo utilizando o comando `curl`.

Resolução: curl -o countries.txt "https://gist.githubusercontent.com/kalinchernev/486393efcca01623b18d/raw/daa24c9fea66afb7d68f8d69f0c4b8eeb9406e83/countries"

### 3. Mostre todo o conteúdo do arquivo `countries.txt` na tela.

Resolução: cat countries.txt

### 4. Mostre o conteúdo de `countries.txt`, página por página, até encontrar a Zambia.

Resolução: less countries.txt

### 5. Mostre novamente o conteúdo de `countries.txt` página por página, mas agora utilize um comando para buscar por Zambia.

Resolução: 

- Parte I: less countries.txt
- Parte II: /Zambia

### 6. Apague o diretório `countries.txt`. 

Resolução: rm -rf countries.txt
