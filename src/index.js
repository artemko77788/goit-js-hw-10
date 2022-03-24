import './css/styles.css';
import seachCountry from '../src/fetchCountries.js';
import debounce from 'lodash.debounce';

const DEBOUNCE_DELAY = 300;

const refs = {
  input: document.querySelector('#search-box'),
};

refs.input.addEventListener('input', debounce(fetchCountries, DEBOUNCE_DELAY));

function fetchCountries(event) {
  seachCountry(event);
}
