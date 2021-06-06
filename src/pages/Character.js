import getData from '../utils/getData'
import getHash from '../utils/getHash';

const Character = async()=>{
  const id = getHash();
  const character = await getData(id)
  const view = `
    <div class="Characters-inner">
      <article class="Characters-card">
        <img src="${character.flag}" alt="${character.name}">
      </article>
      <article class="Characters-card">
        <h2>Name: <span>${character.name}</span></h2>
        <h3>Population: <span>${character.population}</span></h3>
        <h3>Region: <span>${character.region}</span></h3>
        <h3>Capital: <span>${character.capital}</span></h3>
        <h3>Region: <span>${character.region}</span></h3>
        <h3>Demonym: <span>${character.demonym}</span></h3>
        <h3>Native Name: <span>${character.nativeName}</span></h3>
      </article>
    </div>
  `
  return view;
}

export default Character;