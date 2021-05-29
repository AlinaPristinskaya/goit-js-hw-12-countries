import './sass/main.scss';
import '@pnotify/core/dist/BrightTheme.css';
import API from './fetchCountries';
import countriesCard from "./templates/countri-card.hbs"
import countriesItem from "./templates/countriItems.hbs"


const cardContainer= document.querySelector('.js-card-container');
const search=document.querySelector(".form-control");

var  debounce  = require('lodash.debounce') ; 

search.addEventListener('input', debounce(onInput, 500));

function onInput(e){
  e.preventDefault();
  const searchName=e.target.value;
  if (e.target.value===true ||e.target.value!=='' ){
    API.fetchCountries(searchName).then(renderCountriesCard)
    .catch(onError)  

  }
 
  
}

function renderCountriesCard(countries){  
  if (countries.length>10){    
    const { alert, notice, info, success, error } = require('@pnotify/core');
    const myError = error({
    text: "необходимо сделать запрос более специфичным"});
    cardContainer.innerHTML="";
    return  } 
  else if(countries.length>2 && countries.length<10){
   const items= countriesItem(countries);
   cardContainer.innerHTML=items;
   return  }
  const markup =countriesCard(countries);
  cardContainer.innerHTML=markup;
}

function onError(){
  const { alert, notice, info, success, error } = require('@pnotify/core');
    const myError = error({
    text: "Немає такої назви держави"});
    cardContainer.innerHTML="";
}