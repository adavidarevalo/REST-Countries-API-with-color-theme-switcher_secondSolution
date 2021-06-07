import Header from "../templates/Header"
import Search from "../templates/Search"
import Character from "../pages/Character"
import Home from "../pages/Home"
import Error404 from "../pages/Error404"
import getData from "../utils/getData"
import getHash from '../utils/getHash';

const routes = {
  "/": Home,
  "/:name": Character,
}

const router = async()=>{
  //Header Part
  const header = null || document.getElementById('header');
  header.innerHTML= Header();
  //Home
  let get = await getHash();
  const content = null ||document.getElementById('content');
  if(get === "/"){
    content.innerHTML = await Home();
  } else {
    content.innerHTML = await Character(get);
  }

}




export default router;
