# Seção 01: Utilizando Containers - Docker

>Essa seção pertence ao módulo [Fundamentos](https://github.com/Ruan-Portella/Trybe_Exercicios/tree/main/back-end) do curso da [Trybe](https://www.betrybe.com/). Nessa seção aprendi sobre Docker.

## Comandos Aprendidos

- 1 `Imagens` - É a aplicação empacotada com as dependências necessárias;
- 2 `Containers` - É um processo que representa a execução de uma imagem;
- 3 `docker <comando> <subcomando> <parâmetros>` - Formato padrão para comandos não-abreviados no CLI;
- 4 `docker container --help` - Mostra a relação completa do que pode ser executado a partir deles;
- 5 `<parâmetros>` - São opcionais na execução dos comandos;
- 6 `docker images` - Visualiza todas as imagens Docker presentes na máquina;
- 7 `docker container ls || docker ps -a` - Lista todos os containers em execução na máquina;
- 8 `docker container run <flags>? <imagem>:<tag> <argumentos>?` - Executa um container utilizando a imagem identificada, os parâmetros `<flags>? e <argumentos>?` são opcionais;
- 9 `--name <nome-da-sua-escolha>` - Comando para dar um nome específico ao container criado;
- 10 `container run --rm` - Indica para o Docker que o container seja removido ao final da execução;
- 10 `-d || --detach` - Faz a execução do container ocorrer em segundo plano;
- 11 `sleep 300` - Faz com que o container continue sua execução por 300 segundos;
- 12 `docker exec -it <nome-do-container> sh` - Permite simular um acesso de terminal dentro do container que já está em execução;
- 13 `docker stop` - Para a execução de um container;
- 14 `docker logs <flags> <nome-do-container>` - Mostra os logs do container;
- 15 `docker top <nome-do-container>` - Mostra as informações sobre os processos que estão sendo rodados dentro do container;
- 16 `docker container prune` - Remove todos os containers que não estão sendo utilizados;
- 17 `docker start <id>` - Inicia o containers novamente;
- 18 `docker attach <id>` - Entra no container;
- 19 `exit` - Encerra o terminal;
- 20 `docker pull <nome-da-imagem>` - Pega a imagem deixando no computador;
- 21 `docker system prune -af` - Remove todos os containers e imagens Docker do computador;
- 22 `docker build -t <nome-da-imagem>` - Cria a imagem Docker;
- 23 `docker rmi <nome-da-image>` - Remove a Imagem;
- 24 `config.toml` - Configuração para o Hugo;
- 25 `index.html` - Template que o Hugo utilizará para gerar páginas;
- 26 `_index.md` - Será o arquivo de conteúdo de fato;
- 27 `FROM` - pega a imagem de referência;
- 28 `RUN` - Indica que o comando deve ser executado durante a execução da imagem Docker;
- 29 `ENTRYPOINT` - Indica qual é o comando que deve ser executado ao iniciar esta imagem Docker;
- 30 `CMD` - Indica qual é o comando que pode ser executado ao iniciar esta imagem Docker;