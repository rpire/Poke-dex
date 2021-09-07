const displayPokemon = (pokemon) => {
  const cardSection = document.getElementById('card-section');
  const pokemonTypes = pokemon.types;
  const pokemonImage = pokemon.sprites.other;

  let displayHTML = `<li class="card">
  <img src="${pokemonImage['official-artwork'].front_default}" alt="Pokemon">
  <h1>${pokemon.name}</h1>
  <ul>`;
  for (let i = 0; i < pokemonTypes.length; i += 1) {
    displayHTML += `<li>${pokemonTypes[i].type.name}</li>`;
  }
  displayHTML += `</ul>
  <button type="submit">Comment</button>
</li>`;

  cardSection.innerHTML += displayHTML;
};

export default displayPokemon;
