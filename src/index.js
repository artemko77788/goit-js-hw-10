import './css/styles.css';
import seachCountry from '../src/fetchCountries.js';

const DEBOUNCE_DELAY = 300;

const refs = {
  input: document.querySelector('#search-box'),
};

refs.input.addEventListener('input', fetchCountries);

function fetchCountries(name) {
  seachCountry(name);
}
