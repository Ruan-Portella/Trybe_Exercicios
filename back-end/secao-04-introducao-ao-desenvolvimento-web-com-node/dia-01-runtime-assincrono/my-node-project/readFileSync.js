const fs = require('fs').promises;

async function main() {
try {
    const data = await fs.readFile('./meu-arquivo.txt', 'utf-8');
    console.log(data);
} catch (err) {
    console.log(`Erro ao ler o arquivo: ${err.path}`);
}
}

main()