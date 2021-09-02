/* eslint-disable linebreak-style */

const structure = () => {
  const container = document.querySelector('.container');

  container.innerHTML = `<div class="row">
  <div class="col-12 mt-5">
    <h1>Leaderboard</h1>
  </div>
  </div>
  <div class="row mt-5 mx-4">
  <div class="col-6">
    <div class="d-flex mb-3">
      <h2 class="me-3">Recent scores</h2>
      <button type="button" class="btn btn-light fs-5">Refresh</button>
    </div>
    <table class="table table-striped">
      <tbody>
        <tr>
          <th scope="row">Name: 100</th>
        </tr>
        <tr>
          <th scope="row">Name: 20</th>
        </tr>
        <tr>
          <th scope="row">Name: 50</th>
        </tr>
        <tr>
          <th scope="row">Name: 78</th>
        </tr>
        <tr>
          <th scope="row">Name: 125</th>
        </tr>
        <tr>
          <th scope="row">Name: 77</th>
        </tr>
        <tr>
          <th scope="row">Name: 42</th>
        </tr>
      </tbody>
    </table>
  </div>
  <div class="col-6">
    <h2 class="mb-4">Add your score</h2>
    <input type="text" class="form-control mb-4" id="name" placeholder="Your name">
    <input type="number" class="form-control mb-4" id="score" placeholder="Your score">
    <div class="d-flex justify-content-end">
      <button type="button" class="btn btn-light fs-5 ">Refresh</button>
    </div>
  </div>
  </div>`;
};

export default structure;
