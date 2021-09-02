/* eslint-disable linebreak-style */

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

  divThree.appendChild(buttonOne);

  const table = document.createElement('table');
  table.classList.add('table', 'table-striped');

  divTwo.appendChild(table);

  const tbody = document.createElement('tbody');
  
  table.appendChild(tbody);

  const trOne = document.createElement('tr');

  tbody.appendChild(trOne);

  const thOne = document.createElement('th');
  thOne.setAttribute('scope', 'row');
  thOne.textContent = 'Name: 100';

  trOne.appendChild(thOne);

  const trTwo = document.createElement('tr');

  tbody.appendChild(trTwo);

  const thTwo = document.createElement('th');
  thTwo.setAttribute('scope', 'row');
  thTwo.textContent = 'Name: 20';

  trTwo.appendChild(thTwo);

  const trThree = document.createElement('tr');

  tbody.appendChild(trThree);

  const thThree = document.createElement('th');
  thThree.setAttribute('scope', 'row');
  thThree.textContent = 'Name: 50';

  trThree.appendChild(thThree);

  const trFour = document.createElement('tr');

  tbody.appendChild(trFour);

  const thFour = document.createElement('th');
  thFour.setAttribute('scope', 'row');
  thFour.textContent = 'Name: 78';

  trFour.appendChild(thFour);

  const trFive = document.createElement('tr');

  tbody.appendChild(trFive);

  const thFive = document.createElement('th');
  thFive.setAttribute('scope', 'row');
  thFive.textContent = 'Name: 125';

  trFive.appendChild(thFive);

  const trSix = document.createElement('tr');

  tbody.appendChild(trSix);

  const thSix = document.createElement('th');
  thSix.setAttribute('scope', 'row');
  thSix.textContent = 'Name: 77';

  trSix.appendChild(thSix);

  const trSeven = document.createElement('tr');

  tbody.appendChild(trSeven);

  const thSeven = document.createElement('th');
  thSeven.setAttribute('scope', 'row');
  thSeven.textContent = 'Name: 42';

  trSeven.appendChild(thSeven);

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
  inputOne.setAttribute('id', 'name');
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
};

export default structure;
