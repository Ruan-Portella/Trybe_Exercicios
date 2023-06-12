const fs = require('fs').promises;

async function main() {
try {
    const data = await fs.writeFile('./meu-arquivo.txt', 'Ruan Programador');
    console.log('Arquivo Escrito com Sucesso');
} catch (err) {
    console.log(`Erro ao escrever no arquivo: ${err.message}`);
}
}

main()