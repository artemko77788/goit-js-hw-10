import Notiflix from 'notiflix';
import { clearePageDiv, clearePageLi, makeMarcup, makeMarcupOneCountry } from './marcup';

export default function seachCountry(event) {
  const seachValue = event.target.value.trim();
  const BASE_URL = 'https://restcountries.com/v3.1/name';
  const DATA_URL = 'fields=name,capital,flags,languages,population';
  fetch(`${BASE_URL}/${seachValue}?fullText=true?${DATA_URL}`)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
    })
    .then(countrys => {
      if (countrys.length === 1) {
        makeMarcup(countrys);
        makeMarcupOneCountry(countrys);
      } else if (countrys.length <= 5) {
        clearePageDiv();
        makeMarcup(countrys);
      } else {
        clearePageDiv();
        clearePageLi();
        Notiflix.Notify.info('Too many matches found. Please enter a more specific name.');
      }
    })
    .catch(error => {
      Notiflix.Notify.failure('Something wrong');
    });
}
