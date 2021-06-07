const API = "https://restcountries.eu/rest/v2/all"
const APIRegion = "https://restcountries.eu/rest/v2/region/"
const APIName = "https://restcountries.eu/rest/v2/name/"

import getHash from './getHash';


const getData = async (name) => {
  let apiURl;
  if(name=== undefined){
    apiURl = API;
  } else if (name !== ""){
    apiURl = `${APIName}${name}`
  }
  try {
    const response = await fetch(apiURl);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('Fetch Error', error);
  };
};


export default getData;