import getData from '../utils/getData'
import getHash from '../utils/getHash';

const Character = async(name)=>{
  const character= await getData(name)
  let content = character[0]
  const view = `
    <div class="Characters-inner">
      <article class="Characters-card">
        <img src="${content.flag}" alt="${content.name}">
      </article>
      <article class="Characters-info">
        <h2>Name: <span>${content.name}</span></h2>
        <h3>Population: <span>${content.population}</span></h3>
        <h3>Region: <span>${content.region}</span></h3>
        <h3>Capital: <span>${content.capital}</span></h3>
        <h3>Region: <span>${content.region}</span></h3>
        <h3>Demonym: <span>${content.demonym}</span></h3>
        <h3>Native Name: <span>${content.nativeName}</span></h3>
      </article>
    </div>
  `
  return view;
}

export default Character;