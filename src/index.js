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
window.addEventListener("click", e=>{
  downFlag(e)
})
const downFlag = e =>{
  if(e.target.classList.contains("fa-expand-arrows-alt")){
    const flagPage = document.querySelector(".flagPage")
    body.style="overflow:hidden;"
    flagPage.classList.add("downFlag")
  } else if(e.target.classList.contains("fa-times-circle")){
    const flagPage = document.querySelector(".flagPage")
    flagPage.classList.remove("downFlag")
    body.style="overflow:visible;"
  }
}

