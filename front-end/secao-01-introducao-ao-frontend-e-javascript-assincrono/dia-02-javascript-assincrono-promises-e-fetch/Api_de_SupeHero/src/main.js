import Swal from 'sweetalert2';
import './style.css';

const img = document.querySelector('#image');
const name = document.querySelector('#name');
const button = document.querySelector('#button');

const BASE_URL = 'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/id';

const MAX_HEROES = 700;

const randomId = () => Math.floor(Math.random() * MAX_HEROES);

button.addEventListener('click', (event) => {
  event.preventDefault();
  const id = randomId();
  fetch(`${BASE_URL}/${id}.json`).then((result) => result.json()).then((data) => {
    img.src = data.images.lg;
    name.innerHTML = data.name;
  }).catch((error) => Swal.fire({
    title: 'Hero not found',
    text: 'Aperte de novo no botão',
    icon: 'error',
    confirmButtonText: 'Ok',
    error: `${error}`,
  }));
});
