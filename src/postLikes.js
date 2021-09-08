const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/ewWKj7zRfM05pYQRcA4r/likes/';

const postLikes = (item1) => {
  fetch(url, {
    method: 'POST',
    body: JSON.stringify({
      item_id: item1,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json());
};

export default postLikes;