const submitScores = async () => {
  const nameInputValue = document.querySelector('#name').value;
  const scoreInputValue = document.querySelector('#score').value;
  const alert = document.querySelector('.alert');
  if (!nameInputValue && !scoreInputValue) {
    alert.innerHTML = 'Please fill all input fields';
  }
  const response = await fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/lXNnVhgvUH8F2e4Sg5m5/scores/',
    {
      method: 'POST',
      body: JSON.stringify({
        user: document.querySelector('#name').value,
        score: document.querySelector('#score').value,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    },
  );
  const userScore = await response.json();
  return userScore;
};

export default submitScores;