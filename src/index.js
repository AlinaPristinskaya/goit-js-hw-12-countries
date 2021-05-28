import './sass/main.scss';
//import API from './fetchCountries';
import countriesCard from "./templates/countri-card.hbs"


const cardContainer= document.querySelector('.js-card-container');
const search=document.querySelector(".form-control");


var  debounce  = require('lodash.debounce') ; 
search.addEventListener('input', onInput);


function fetchCountries(countrieName){
 return fetch(`https://restcountries.eu/rest/v2/name/${countrieName}`).then(
   respons=>{
    return respons.json();
  });
} 

function onInput(e){
  e.preventDefault();
  const searchName=e.currentTarget.value;
  console.log(searchName);
  fetchCountries(searchName).then(renderCountriesCard);

}

function renderCountriesCard(countries){
  const markup =countriesCard(countries);
  cardContainer.innerHTML=markup;
}