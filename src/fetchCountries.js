export default function fetchCountries(event) {
  const seachValue = event.currentTarget.value;
  const BASE_URL = 'https://restcountries.com/v3.1/name';
  const DATA_URL = 'fields=name,capital,flags';

  fetch(`${BASE_URL}/${seachValue}?${DATA_URL}`)
    .then(r => {
      return r.json();
    })
    .then(countrys => {
      makeMarcup(countrys);
    })
    .catch(error => {});
}

function makeMarcup(countrys) {
  const list = document.querySelector('.country-list');
  const marcup = countrys
    .map(country => {
      return `<li><img src="${country.flags.svg}" width=30 alt=""> ${country.name.common}</li>`;
    })
    .join('');

  list.innerHTML = marcup;
}
