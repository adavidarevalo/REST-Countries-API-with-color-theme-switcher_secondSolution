import getData from "./getData";

const getHash = () =>{
  const test =  location.hash.slice(1).toLocaleLowerCase().split('/')[1] || '/';
  console.log(test)
  return test
}
export default getHash();