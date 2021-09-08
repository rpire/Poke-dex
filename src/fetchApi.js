// // eslint-disable-next-line import/no-cycle
// import displayPokemon from './displayPokes.js';

const fetchApi = async () => {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=9&offset=0');
  return response.json();
    // .then((response) => response.json())
    // .then((Allpokes) => displayPokemon(Allpokes.results));
};

export default fetchApi;