const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/ewWKj7zRfM05pYQRcA4r/likes/';

const fetchLikes = (pokemon, item) => fetch(url)
  .then((response) => response.json())
  .then((likes) => {
    likes.forEach((pkLike) => {
      if (pkLike.item_id === pokemon.name) {
        item.innerHTML = `${pkLike.likes} likes`;
      }
    });
  });

export default fetchLikes;