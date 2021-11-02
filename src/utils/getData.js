const API = "https://restcountries.com/v3.1/all"
const APIRegion = "https://restcountries.com/v3.1/region/"
const APIName = "https://restcountries.com/v3.1/name/"

import getHash from './getHash';

const reagionComprovation = ["Asia", "Americas", "Europe", "Africa", "Oceania"]
const getData = async (name) => {
  let apiURl;
  if(name=== undefined){
    apiURl = API;
  } else if(reagionComprovation.includes(name)){
    apiURl = `${APIRegion}${name}`
  } else if (name !== ""){
    apiURl = `${APIName}${name}`
  }
  try {
    const response = await fetch(apiURl);
    const data = await response.json();
    console.log('data ', data)
    return data;
  } catch (error) {
    console.log('Fetch Error', error);
  };
};


export default getData;