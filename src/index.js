import router from './routes';

window.addEventListener('load', router);
window.addEventListener('hashchange', router);

const searchACountry = document.querySelector("#searchForACountry")
const mainButtonSearch = document.querySelector("#mainButtonSearch")

mainButtonSearch.addEventListener("click", ()=>{
  if(searchACountry.value == ""){
    alert("No vale")
  } else{
    router();
  }
})