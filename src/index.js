import router from './routes';

window.addEventListener('load', router);
window.addEventListener('hashchange', router);

const searchACountry = document.querySelector("#searchForACountry")
const mainButtonSearch = document.querySelector("#mainButtonSearch")

//wrong
const mainContain =document.querySelector("#main-contain")

mainButtonSearch.addEventListener("click", ()=>{
  if(searchACountry.value == ""){
    mainContain.style="border:1px solid red;"
  } else{
    mainContain.style="border:none;"
    router();
  }
})
mainButtonSearch.addEventListener("blur", ()=>{
  mainContain.style="border: none"
})

//focus lost mainContainSearch
const darkStyle = document.querySelector("#darkStyle")
const body = document.querySelector("#body")
darkStyle.addEventListener("click", ()=>{
  body.classList.toggle("darkColor")
})
//Region
const mainRegion = document.querySelector("#mainRegion")
mainRegion.addEventListener("change", ()=>{
  router(mainRegion.value);
})
//flagPage
const buttonFlag= document.querySelector("#buttonFlag")
