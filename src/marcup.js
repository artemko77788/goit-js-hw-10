function makeMarcup(countrys) {
  const list = document.querySelector('.country-list');

  const marcup = countrys
    .map(country => {
      return `<li><img src="${country.flags.svg}" width=30 alt=""> ${country.name.common}</li>`;
    })
    .join('');
  list.innerHTML = marcup;
}

function makeMarcupOneCountry(countrys) {
  const makeDivInf = document.querySelector('.country-info');

  const marcup = countrys
    .map(country => {
      const language = country.languages;

      return `capital: ${country.capital}<br>population: ${country.population}<br>official name: ${
        country.name.official
      }<br>language: ${Object.values(language)}`;
    })
    .join('');

  makeDivInf.innerHTML = marcup;
}

function clearePageLi() {
  const list = document.querySelector('.country-list');
  list.innerHTML = '';
}
function clearePageDiv() {
  const makeDivInf = document.querySelector('.country-info');
  makeDivInf.innerHTML = '';
}

export { makeMarcup, makeMarcupOneCountry, clearePageLi, clearePageDiv };
