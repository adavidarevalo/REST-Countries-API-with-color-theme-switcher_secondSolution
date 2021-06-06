const API = "https://restcountries.eu/rest/v2/all"
const APIRegion = "https://restcountries.eu/rest/v2/region/${mainRegion.value}"
const APIName = "https://restcountries.eu/rest/v2/name/${nameCountry.value}"

import getHash from './getHash';

const getData = async(id)=>{
  const apiURL  = id? `${APIName}${getHash}` : API;
  console.log(apiURL)
  try {
    const response = await fetch(apiURL);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('Fetch Error', error);
  };
}

export default getData;