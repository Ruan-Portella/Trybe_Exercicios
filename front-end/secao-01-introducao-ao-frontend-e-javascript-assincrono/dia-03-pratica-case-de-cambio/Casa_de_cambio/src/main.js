import './style.css'
import Swal from 'https://cdn.jsdelivr.net/npm/sweetalert2@11.7.1/+esm';

const coinInput = document.querySelector('input')
const button = document.querySelector('button')
const h2 = document.querySelector('h2')
const coinElement = document.querySelector('.container-coins')

const cleanTable = () => {
    if(coinElement.innerHTML.length > 0) {
        coinElement.innerHTML = '';
    }
};

const createElements = () => {
    const divCoin = document.createElement('div')
    const imgCoin = document.createElement('img')
    const nameCoin = document.createElement('span')
    const valueCoin = document.createElement('span')
    return { divCoin, imgCoin, nameCoin, valueCoin };
}

const verifyCoin = (array) => array.some((coin) => coin[0] === coinInput.value.toUpperCase());


const errorCoin = () => {
    Swal.fire({
        icon: 'error',
        title: 'Oops..',
        text: 'Você precisa passar uma moeda',
    });
}

const makeTableCoin = (rates) => {
    const arrayRates = Object.entries(rates);
    if (verifyCoin(arrayRates)) {
        const toFixed = 3;
        h2.innerHTML = `Valores referentes a 1 ${coinInput.value.toUpperCase()}`;
        cleanTable();
        arrayRates.forEach((coin) => {
            const [name, value] = coin;
            const { divCoin, imgCoin, nameCoin, valueCoin } = createElements();
            imgCoin.src = './src/assets/coins.svg';
            nameCoin.innerHTML = name;
            valueCoin.innerHTML = value.toFixed(toFixed);
            divCoin.className = 'coin';
            coinElement.appendChild(divCoin);
            divCoin.appendChild(imgCoin);
            divCoin.appendChild(nameCoin);
            divCoin.appendChild(valueCoin);
        });
     } else {
            errorCoin();
        }
};

    const searchCoin = () => {
    const coin = coinInput.value;
    const URL_REQUEST = `https://api.exchangerate.host/latest?base=${coin}`;
    return fetch(URL_REQUEST)
      .then((response) => response.json())
      .then((data) => makeTableCoin(data.rates));
  };

button.addEventListener('click', searchCoin);