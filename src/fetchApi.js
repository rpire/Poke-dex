const fetchEachPoke = (pokemon) => {
  const pokemonUrl = pokemon.url;
  fetch(pokemonUrl)
    .then((response) => response.json)
    .then((data) => {
      displayPokemons(data);
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