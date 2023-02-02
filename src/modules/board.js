import getScores from './refresh.js';

const listContainer = document.querySelector('.scores-list');

const renderScores = async () => {
  const score = await getScores();
  listContainer.innerHTML = '';
  score.forEach((item) => {
    const leaderBoard = 
          `<li>
               ${item.user}: ${item.score}
           </li>`;
    listContainer.insertAdjacentHTML('beforeend', leaderBoard);
  });
};

export default renderScores;