/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
import _ from 'lodash';
import structure from './structure.js';
import './style.css';

const component = () => {
  const element = document.createElement('div');

  structure();

  return element;
};

document.body.appendChild(component());