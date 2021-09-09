import './style.css';
import fetchApi from './fetchApi.js';
import displayPokemon from './displayPokes.js';
import { itemCounter } from './counters.js';

const pokeTitle = document.querySelector('.poke-title');

window.addEventListener('load', async () => {
  const res = await fetchApi();
  pokeTitle.innerHTML = `Pokemon(${itemCounter(res.results)})`;
  await displayPokemon(res.results);
});