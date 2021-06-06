const Search = () =>{
  const view = `
  <div class="Header-search">
    <div>
      <i class="fas fa-search"></i>
      <input type="text" placeholder="Search for a country...">
    </div>
      <select name="" id="mainRegion">
        <option value="Undefine">Filter by Region</option>
        <option value="Asia">Asia</option>
        <option value="Americas">America</option>
        <option value="Europe">Europe</option>
        <option value="Africa">Africa</option>
        <option value="Oceania">Oceania</option>
      </select>
  </div>
  `
  return view
}

export default Search;