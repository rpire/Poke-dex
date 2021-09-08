import popUp from './pop_up.js';

const displayPokemon = (pokemon) => {
  pokemon.forEach((pkm) => {
    fetch(pkm.url)
      .then((response) => response.json())
      .then((pkmData) => {
        const cardSection = document.getElementById('card-section');
        const pokemonTypes = pkmData.types;
        const pokemonImage = pkmData.sprites.other;

        const outerLi = document.createElement('li');
        outerLi.classList.add('card');

        let displayHTML = `
        <img src="${pokemonImage['official-artwork'].front_default}" alt="Pokemon">
        <h1>${pkmData.name}</h1>
        <ul>`;
        for (let i = 0; i < pokemonTypes.length; i += 1) {
          displayHTML += `<li>${pokemonTypes[i].type.name}</li>`;
        }
        displayHTML += '</ul>';

        outerLi.innerHTML = displayHTML;

        const btn = document.createElement('button');
        btn.setAttribute('type', 'button');
        btn.classList.add(pkmData.name, 'btn');
        btn.innerHTML = 'Comment';
        btn.addEventListener('click', () => {
          popUp(pkmData);
        });

        outerLi.appendChild(btn);

        cardSection.appendChild(outerLi);
      });
  });
};
export default displayPokemon;