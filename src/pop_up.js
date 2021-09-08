import getComments from './get_comment.js';
import postComments from './post_comments.js';

const popUp = (pokemon) => {
  const modal = document.createElement('article');
  modal.classList.add('modal');

  const modalContent = document.createElement('div');
  modalContent.classList.add('modal-content');

  const imgFrame = document.createElement('div');
  imgFrame.classList.add('img-frame');

  const modalCross = document.createElement('i');
  modalCross.classList.add('fas', 'fa-times', 'modal-cross');
  modalCross.addEventListener('click', () => modal.remove());

  const innerFrame = document.createElement('div');
  innerFrame.classList.add('inner-frame');

  const img = document.createElement('img');
  img.setAttribute('src', pokemon.sprites.other['official-artwork'].front_default);
  img.setAttribute('alt', `${pokemon.name} official artwork`);
  img.classList.add('modal-image');

  const pkmName = document.createElement('h3');
  pkmName.classList.add('pkm-name');
  pkmName.innerHTML = pokemon.name;

  const pkmTypes = document.createElement('h4');
  pkmTypes.innerHTML = 'Type';

  const typeList = document.createElement('ul');
  typeList.classList.add('type-list');

  const type1 = document.createElement('li');
  type1.innerHTML = pokemon.types[0].type.name;

  let type2 = document.createElement('li');
  if (pokemon.types.length === 2) {
    type2.innerHTML = pokemon.types[1].type.name;
  } else {
    typeList.classList.add('centering');
    type2 = false;
  }

  const locationTitle = document.createElement('h4');
  locationTitle.innerHTML = 'Location';

  const location = document.createElement('p');
  fetch(pokemon.location_area_encounters)
    .then((response) => response.json())
    .then((locations) => {
      if (locations.length > 1) {
        location.innerHTML = locations[0].location_area.name || 'Evolution';
      } else {
        location.innerHTML = 'Evolution';
      }
    });

  const commentsTitle = document.createElement('h4');
  commentsTitle.innerHTML = 'Comments';

  const comments = document.createElement('ul');
  comments.classList.add('comments');

  const showComments = () => {
    comments.innerHTML = '';
    getComments(pokemon.name).then((pkmComments) => {
      pkmComments.forEach((pkmComment) => {
        const comment = document.createElement('li');
        comment.innerHTML = `
          ${pkmComment.creation_date} 
          ${pkmComment.username}: 
          ${pkmComment.comment}
          `;
        comments.appendChild(comment);
      });
    });
  };

  showComments();

  const addCommentTitle = document.createElement('h4');
  addCommentTitle.innerHTML = 'Add a comment';

  const addComment = document.createElement('form');
  addComment.classList.add('add-comment');

  const nameInput = document.createElement('input');
  nameInput.setAttribute('type', 'text');
  nameInput.setAttribute('name', 'name');
  nameInput.setAttribute('placeholder', 'Your name');
  nameInput.setAttribute('id', 'name');

  const textArea = document.createElement('textarea');
  textArea.setAttribute('name', 'comment');
  textArea.setAttribute('id', 'comment');
  textArea.setAttribute('placeholder', 'Your Comment');

  const msg = document.createElement('small');
  msg.classList.add('error');
  msg.innerHTML = '';

  const submitBtn = document.createElement('button');
  submitBtn.setAttribute('type', 'button');
  submitBtn.setAttribute('id', 'submit-btn');
  submitBtn.innerHTML = 'Submit';
  submitBtn.addEventListener('click', () => {
    if (nameInput.value.length < 1 || nameInput.value.length > 8) {
      nameInput.classList.add('red');
      textArea.classList.remove('red');
      msg.innerHTML = '*Your name should have between 1 and 8 characters*';
    } else if (textArea.value.length < 5 || textArea.value.length > 100) {
      nameInput.classList.remove('red');
      textArea.classList.add('red');
      msg.innerHTML = 'Comment should have between 5 and 100 characters';
    } else {
      postComments(nameInput.value, textArea.value, pokemon.name)
        .then(() => (getComments(pokemon.name)).then(() => showComments()));
      nameInput.classList.remove('red');
      textArea.classList.remove('red');
      addComment.reset();
    }
  });

  innerFrame.appendChild(img);

  imgFrame.appendChild(modalCross);
  imgFrame.appendChild(innerFrame);

  typeList.appendChild(type1);
  if (type2) {
    typeList.appendChild(type2);
  }

  addComment.appendChild(nameInput);
  addComment.appendChild(textArea);
  addComment.appendChild(msg);
  addComment.appendChild(submitBtn);

  modalContent.appendChild(imgFrame);
  modalContent.appendChild(pkmName);
  modalContent.appendChild(pkmTypes);
  modalContent.appendChild(typeList);
  modalContent.appendChild(locationTitle);
  modalContent.appendChild(location);
  modalContent.appendChild(commentsTitle);
  modalContent.appendChild(comments);
  modalContent.appendChild(addCommentTitle);
  modalContent.appendChild(addComment);

  modal.appendChild(modalContent);

  document.body.appendChild(modal);
};

export default popUp;