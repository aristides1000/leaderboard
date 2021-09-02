/* eslint-disable linebreak-style */
/* eslint-disable no-return-await */
const receiveDataScore = async () => await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/jUvbHW43kDpxYrXFp26c/scores/')
  .then((res) => res.json())
  .then((json) => json.result);

export default receiveDataScore;