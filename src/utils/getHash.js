import getData from "./getData";

const getHash = () =>{
  const test =  location.hash.slice(1).toLocaleLowerCase().split('/')[1] || '/';
  return test
}
export default getHash;