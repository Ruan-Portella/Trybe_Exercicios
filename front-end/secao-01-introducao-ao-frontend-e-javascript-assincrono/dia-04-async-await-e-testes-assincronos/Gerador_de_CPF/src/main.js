import "./style.css"
const buttonEl = document.querySelector('button');
const inputEl = document.querySelector('input');
const preEl = document.querySelector('pre');

buttonEl.addEventListener('click', handleClick);

async function handleClick() {
  const cep = inputEl.value;

  try {
    const result = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const data = await result.json();

    if(JSON.stringify(data.logradouro) === undefined) {
        throw new Error('CEP NÃO ENCONTRADO')
    }
    preEl.innerHTML = `Rua: ${JSON.stringify(data.logradouro)} <br><br>Cidade: ${JSON.stringify(data.localidade)}`
    return data;
  } catch (error) {
    preEl.innerHTML = error.message
  }
}

