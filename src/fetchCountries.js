
function fetchCountries(countrieName){
    return fetch(`https://restcountries.eu/rest/v2/name/${countrieName}`).then(
      respons=>{
        console.log(respons);
        if(respons.ok){
         return respons.json();   
        }
         });
   }
export default {fetchCountries}

