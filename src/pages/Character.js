import getData from '../utils/getData'
import getHash from '../utils/getHash';

import { makeStyles } from '@material-ui/core/styles';

const Character = async(name)=>{
  function getModalStyle() {
    const top = 50 ;
    const left = 50;
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }

  const useStyles = makeStyles(theme => ({
    paper: {
      position: 'absolute',
      width: `75%`,
      maxWidth: "350px",
      overflow: "auto",
      height: "80%",
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));
  const character= await getData(name)
  let content = character[0]
  const view = `
    <button><a href="/dist/">Return</a></button>
    <div class="Characters-inner">
      <article class="Characters-card">
        <div class="Characters-open">
          <img src="${content.flag}" alt="${content.name}" class="Characters-img">

        </div>
      </article>
      <article class="Characters-info">
        <h2>Name:<span> ${content.name}</span></h2>
        <h3>Population: <span>${content.population}</span></h3>
        <h3>Region: <span>${content.region}</span></h3>
        <h3>Capital: <span>${content.capital}</span></h3>
        <h3>Region: <span>${content.region}</span></h3>
        <h3>Demonym: <span>${content.demonym}</span></h3>
        <h3>Native Name: <span>${content.nativeName}</span></h3>
        <a href="https://es.wikipedia.org/wiki/${content.name}" target="_blank">Reed More</a>
      </article>
    </div>
  `
  return view;
}

export default Character;