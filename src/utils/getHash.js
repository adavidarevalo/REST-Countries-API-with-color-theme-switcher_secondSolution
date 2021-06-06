import getData from "./getData";

const getHash = () => {
  const info = location.hash.slice(1).split('/')[1] || '/';
  return info
  }

export default getHash;