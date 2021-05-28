import './sass/main.scss';
import '@pnotify/core/dist/BrightTheme.css';
//import API from './fetchCountries';
import countriesCard from "./templates/countri-card.hbs"









const cardContainer= document.querySelector('.js-card-container');
const search=document.querySelector(".form-control");


var  debounce  = require('lodash.debounce') ; 
search.addEventListener('input', debounce(onInput, 500));


function fetchCountries(countrieName){
 return fetch(`https://restcountries.eu/rest/v2/name/${countrieName}`).then(
   respons=>{
    return respons.json();
  });
} 

function onInput(e){
  e.preventDefault();
  const searchName=e.target.value;
  console.log(searchName);
  fetchCountries(searchName).then(renderCountriesCard);
  

}

function renderCountriesCard(countries){
  console.log(countries);
  if (countries.length>10){
    const { alert, notice, info, success, error } = require('@pnotify/core');

// Manually set the type.


const myError = error({
  text: "необходимо сделать запрос более специфичным"
});
  }
  const markup =countriesCard(countries);
  cardContainer.innerHTML=markup;
}