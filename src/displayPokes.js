import popUp from './pop_up.js';
import fetchLikes from './fetchLikes.js';
import postLikes from './postLikes.js';

const displayPokemon = async (pokemon) => {
  pokemon.forEach((pkm) => {
    fetch(pkm.url)
      .then((response) => response.json())
      .then(async (pkmData) => {
        const cardSection = document.getElementById('card-section');
        const pokemonTypes = pkmData.types;
        const pokemonImage = pkmData.sprites.other;

        const outerLi = document.createElement('li');
        outerLi.classList.add('card');

        const pokeImg = document.createElement('img'); // Creates pokemon image element
        pokeImg.setAttribute('src', `${pokemonImage['official-artwork'].front_default}`);
        pokeImg.setAttribute('alt', 'Pokemon');

        const h1 = document.createElement('h1'); // Creates Pokemon name element
        h1.innerHTML = `${pkmData.name}`;

        const likesDiv = document.createElement('div'); // Creates div to hold heart icon and likes count element
        likesDiv.className = 'likes-div';

        const likeImg = document.createElement('i'); // Creates heart icon
        likeImg.classList.add('fas', 'fa-heart', 'heart');
        likeImg.setAttribute('id', `${pkmData.name}`);

        const span = document.createElement('span'); // Creates likes count element
        span.setAttribute('id', 'like');

        const ul = document.createElement('ul'); // Creates types list element
        pokemonTypes.forEach((pokemon) => {
          ul.innerHTML += `<li>${pokemon.type.name}</li>`;
        });

        const btn = document.createElement('button'); // Creates button element
        btn.setAttribute('type', 'button');
        btn.classList.add(pkmData.name, 'btn');
        btn.innerHTML = 'Comment';
        btn.addEventListener('click', () => {
          popUp(pkmData);
        });

        outerLi.appendChild(pokeImg); // Append Image To Li
        outerLi.appendChild(h1); // Append Pokemon Name To Li
        likesDiv.appendChild(likeImg); // Append Heart Icon To Parent Div
        likesDiv.appendChild(span); // Append Likes Count To Parent Div
        outerLi.appendChild(likesDiv); // Append Pokemon Name To Li
        outerLi.appendChild(ul); // Append Types List To Li
        outerLi.appendChild(btn); // Append Comment Button To Li

        cardSection.appendChild(outerLi); // Append Li To Parent Element

        await fetchLikes(pkmData, span); // Displays number of likes in UI

        // EventListener To Increment Likes Count On Click
        likeImg.addEventListener('click', async () => {
          await postLikes(likeImg.id);
          await fetchLikes(pkmData, span);
        });
      });
  });
};

export default displayPokemon;