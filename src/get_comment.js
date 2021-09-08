const involvementURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/ewWKj7zRfM05pYQRcA4r/comments';

const getComments = (itemID) => fetch(`${involvementURL}?item_id=${itemID}`)
  .then((response) => response.json());

export default getComments;