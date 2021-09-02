/* eslint-disable linebreak-style */
/* eslint-disable no-return-await */
const sendDataScore = async (user, score) => await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/jUvbHW43kDpxYrXFp26c/scores/', {
  method: 'POST',
  body: JSON.stringify({ user, score }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((res) => res.json())
  .then((json) => json.result)
  .then(() => window.location.reload());

export default sendDataScore;