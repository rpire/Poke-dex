// eslint-disable-next-line import/no-cycle
import displayPokemon from './displayPokes.js';

const fetchApi = () => {
  fetch('https://pokeapi.co/api/v2/pokemon?limit=9&offset=0')
    .then((response) => response.json())
    .then((Allpokes) => {
      Allpokes.results.forEach((poke) => {
        const pokemonUrl = poke.url;
        fetch(pokemonUrl)
          .then((response) => response.json())
          .then((pokemonData) => {
            displayPokemon(pokemonData);
          });
      });
    });
};

export default fetchApi;