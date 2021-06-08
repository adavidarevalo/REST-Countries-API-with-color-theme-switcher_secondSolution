import Character from "../pages/Character"
import Home from "../pages/Home"
import Error404 from "../pages/Error404"
import getData from "../utils/getData"
import getHash from '../utils/getHash';
const searchACountry = document.querySelector("#searchForACountry")

const routes = {
  "/": Home,
  "/:name": Character,
}

const reagionComprovation = ["Asia", "Americas", "Europe", "Africa", "Oceania"]

const router = async(infoName)=>{
  //Home
  let get = await getHash();
  const content = null ||document.getElementById('content');
  let result=[];
  if(reagionComprovation.includes(infoName)){
    result.push(await Home(infoName))
    content.innerHTML = await result;
  } else if(searchACountry.value == ""){
    if(get === "/"){
    result.push(await Home())
    content.innerHTML = await result;
  } else{
    result.push(await Character(get))
    content.innerHTML = result;
  }
  } else{
    try{
      result.push(await Character(searchACountry.value))
    content.innerHTML = result;
    } catch (error){
      content.innerHTML = Error404();
    }
  }
  searchACountry.value = ""
}




export default router;
