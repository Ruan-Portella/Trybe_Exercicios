import { nanoid } from 'nanoid';
import copy from 'clipboard-copy';

import './style.css';

const passwordBtnEl = document.querySelector('button');

const displayPassowrdEl = document.querySelector('h2');

passwordBtnEl.addEventListener('click', () => {
    displayPassowrdEl.innerHTML = nanoid();
});

displayPassowrdEl.addEventListener('click', (event) => {
    copy(event.target.innerHTML);
    alert('Senha Copiada!');
});