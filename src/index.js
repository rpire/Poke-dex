import './style.css';
import fetchApi from './modules/fetchApi.js';
import displayPokemon from './modules/displayPokes.js';
import itemsCounter from './modules/itemCounter.js';

const pokeTitle = document.querySelector('.poke-title');

window.addEventListener('load', async () => {
  const res = await fetchApi();
  pokeTitle.innerHTML = `Pokemon(${itemsCounter(res.results)})`;
  await displayPokemon(res.results);
});