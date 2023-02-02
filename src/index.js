import './style.css';
import getScores from './modules/refresh.js';
import submitScores from './modules/submission.js';
import renderScores from './modules/board.js';

const nameInput = document.querySelector('#name');
const scoreInput = document.querySelector('#score');
const submitBtn = document.querySelector('#submit-btn');
const refreshButton = document.querySelector('.refresh-btn');


  submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    submitScores();
    nameInput.value = '';
    scoreInput.value = '';
  });
  
  refreshButton.addEventListener('click', (e) => {
    e.preventDefault();
    getScores();
    renderScores();
  });

  
window.addEventListener('load', () => {
  renderScores();
});