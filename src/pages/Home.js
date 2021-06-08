import getData from '../utils/getData'

const Home =async(name)=>{
  const characters = await getData(name);
  const view =`
  <div class="Characters">
    ${characters.map(character=>`
      <article class="Character-item">
      <a href="#/${character.name}">
        <img src="${character.flag}" alt="${character.name}">
        <h2>Name: <span>${character.name}</span></h2>
        <h3>Population: <span>${character.population}</span></h3>
        <h3>Region: <span>${character.region}</span></h3>
        <h3>Capital: <span>${character.capital}</span></h3>
      </a>
    </article>
    `)}
  </div>
  `
  return view;
}

export default Home;