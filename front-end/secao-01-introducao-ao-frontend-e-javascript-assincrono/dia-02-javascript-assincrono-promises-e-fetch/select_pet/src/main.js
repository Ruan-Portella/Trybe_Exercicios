import './style.css'

const surprise = document.querySelector('#surprise')
const imagem = document.querySelector('#imagem')
const random_dog = document.querySelector('#dog')
const random_cat = document.querySelector('#cat')

random_dog.addEventListener('click', () => {
    const api = `https://dog.ceo/api/breeds/image/random`;
    fetch(api).then((Response) => Response.json()).then((data) => {
        const petUrl = data.message;

        imagem.src = petUrl;
    })
})

random_cat.addEventListener('click', () => {
    const api = `https://aws.random.cat/meow`;
    fetch(api).then((res) => res.json()).then((data) => {
        const petUrl = data.file;

        imagem.src = petUrl;
    })
})

surprise.addEventListener('click', () => {
    Promise.any([
        fetch("https://aws.random.cat/meow"),
        fetch("https://dog.ceo/api/breeds/image/random"),
      ])
      .then((res) => res.json()).then((data) => {
        const petUrl = data.file || data.message;
        imagem.src = petUrl;
      })
});