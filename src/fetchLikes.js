const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/ewWKj7zRfM05pYQRcA4r/likes/';

const fetchLikes = () => fetch(url)
  .then((response) => response.json());

export default fetchLikes;