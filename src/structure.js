/* eslint-disable linebreak-style */
/* eslint-disable no-use-before-define */

import { forEach } from "lodash";
import receiveDataScore from './receive-data-from-game.js';
import sendDataScore from './send-data-to-game.js';

const structure = () => {
  const container = document.querySelector('.container');

  const rowOne = document.createElement('div');
  rowOne.classList.add('row');

  container.appendChild(rowOne);

  const divOne = document.createElement('div');
  divOne.classList.add('col-12', 'mt-5');

  rowOne.appendChild(divOne);

  const h1 = document.createElement('h1');
  h1.textContent = 'Leaderboard';

  divOne.appendChild(h1);

  const rowTwo = document.createElement('div');
  rowTwo.classList.add('row', 'mt-5', 'mx-4');

  container.appendChild(rowTwo);

  const divTwo = document.createElement('div');
  divTwo.classList.add('col-6');

  rowTwo.appendChild(divTwo);

  const divThree = document.createElement('div');
  divThree.classList.add('d-flex', 'mb-3');

  divTwo.appendChild(divThree);

  const h2One = document.createElement('h2');
  h2One.classList.add('me-3');
  h2One.textContent = 'Recent scores';

  divThree.appendChild(h2One);

  const buttonOne = document.createElement('button');
  buttonOne.setAttribute('type', 'button');
  buttonOne.classList.add('btn', 'btn-light', 'fs-5');
  buttonOne.textContent = 'Refresh';

  buttonOne.addEventListener('click', () => {
    tbody.innerHTML = '';
    updateTable();
  });

  divThree.appendChild(buttonOne);

  const table = document.createElement('table');
  table.classList.add('table', 'table-striped');

  divTwo.appendChild(table);

  const tbody = document.createElement('tbody');

  table.appendChild(tbody);

  const updateTable = async () => {
    const scores = await receiveDataScore();

    scores.forEach((row) => {
      const tr = document.createElement('tr');

      tbody.appendChild(tr);

      const td = document.createElement('td');
      td.setAttribute('scope', 'row');
      td.textContent = `${row.user}: ${row.score}`;

      tr.appendChild(td);
    });
  };

  updateTable();

  const divFour = document.createElement('div');
  divFour.classList.add('col-6');

  rowTwo.appendChild(divFour);

  const h2Two = document.createElement('h2');
  h2Two.classList.add('mb-4');
  h2Two.textContent = 'Add your score';

  divFour.appendChild(h2Two);

  const form = document.createElement('form');

  divFour.appendChild(form);

  const inputOne = document.createElement('input');
  inputOne.setAttribute('type', 'text');
  inputOne.setAttribute('placeholder', 'Your name');
  inputOne.setAttribute('id', 'user');
  inputOne.classList.add('form-control', 'mb-4');

  form.appendChild(inputOne);

  const inputTwo = document.createElement('input');
  inputTwo.setAttribute('type', 'number');
  inputTwo.setAttribute('placeholder', 'Your score');
  inputTwo.setAttribute('id', 'score');
  inputTwo.classList.add('form-control', 'mb-4');

  form.appendChild(inputTwo);

  const divFive = document.createElement('div');
  divFive.classList.add('d-flex', 'justify-content-end');

  form.appendChild(divFive);

  const buttonTwo = document.createElement('button');
  buttonTwo.setAttribute('type', 'button');
  buttonTwo.classList.add('btn', 'btn-light', 'fs-5');
  buttonTwo.textContent = 'Submit';

  divFive.appendChild(buttonTwo);

  buttonTwo.addEventListener('click', () => {
    const user = document.getElementById('user').value;
    const score = document.getElementById('score').value;

    if (user === '' || score === '') {
      alert('Please fill in all fields');
    } else {
      sendDataScore(user, score);
    }
  });
};

export default structure;
