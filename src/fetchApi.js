// eslint-disable-next-line import/no-cycle
import displayPokemon from './displayPokes.js';

const fetchApi = () => {
  fetch('https://pokeapi.co/api/v2/pokemon?limit=9&offset=0')
    .then((response) => response.json())
    .then((Allpokes) => displayPokemon(Allpokes.results));
};

export default fetchApi;