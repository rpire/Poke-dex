// eslint-disable-next-line import/no-cycle
import displayPokemon from './displayPokes.js';

const fetchEachPoke = (pokemon) => {
  const pokemonUrl = pokemon.url;
  fetch(pokemonUrl)
    .then((response) => response.json())
    .then((pokemonData) => {
      displayPokemon(pokemonData);
    });
};

const fetchApi = () => {
  fetch('https://pokeapi.co/api/v2/pokemon?limit=9&offset=0')
    .then((response) => response.json())
    .then((Allpokes) => {
      Allpokes.results.forEach((poke) => {
        fetchEachPoke(poke);
      });
    });
};

export default fetchApi;