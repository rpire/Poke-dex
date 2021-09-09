const involvementURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/ewWKj7zRfM05pYQRcA4r/comments';

const postComments = (name, comment1, pokemon) => fetch(involvementURL, {
  method: 'POST',
  body: JSON.stringify({
    item_id: pokemon,
    username: name,
    comment: comment1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
});
export default postComments;