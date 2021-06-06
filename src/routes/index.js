import Header from "../templates/Header"
import Search from "../templates/Search"
import Character from "../pages/Character"
import Home from "../pages/Home"
import Error404 from "../pages/Error404"
import getHash from '../utils/getHash';
import resolveRoutes from '../utils/resolveRoutes';
import getData from "../utils/getData"

const routes = {
  "/": Home,
  "/:name": Character,
}

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
  let get = await getHash;
  console.log("This is getHash", get)
  const content = null ||document.getElementById('content');
  if(getHash === "/"){
  content.innerHTML = await Home();
  console.log("este:", getHash)
  } else {
    debugger
    console.log("este2:", getHash)
    content.innerHTML = await Character();
  }

}




export default router;
