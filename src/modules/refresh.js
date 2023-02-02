const getScores = async () => {
    const response = await fetch(
      'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/lXNnVhgvUH8F2e4Sg5m5/scores/',
    );
    const getScore = await response.json();
    return getScore.result;
  };
  
  export default getScores;