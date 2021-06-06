import Header from "../templates/Header"
import Search from "../templates/Search"
import Character from "../pages/Character"
import Home from "../pages/Home"
import Error404 from "../pages/Error404"
import getHash from '../utils/getHash';
import resolveRoutes from '../utils/resolveRoutes';
import getData from "../utils/getData"

const router = async()=>{
  //Header Part
  const header = null || document.getElementById('header');
  let headerNav = await Header();
  let headerSearch = await Search();
  let prePrintHeader = [];
  prePrintHeader.push(headerNav)
  prePrintHeader.push(headerSearch)
  header.innerHTML= prePrintHeader;
  //Home
  if(getHash() == "/"){
    const content = null ||document.getElementById('content');
  content.innerHTML = await Home();
  } else {
    alert("Habrir el pais")
  }
}

const routerByName = async()=>{

}


export default router;
