const API = "https://restcountries.eu/rest/v2/all"
const APIRegion = "https://restcountries.eu/rest/v2/region/${mainRegion.value}"
const APIName = "https://restcountries.eu/rest/v2/name/"

import getHash from './getHash';


const getData = async (id) => {
  const apiURl = id ? `${APIName}${id}` : API;
  try {
    const response = await fetch(apiURl);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('Fetch Error', error);
  };
};


export default getData;