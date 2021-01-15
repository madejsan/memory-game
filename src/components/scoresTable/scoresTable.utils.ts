export const headers = [
  {
    id: 'no',
    name: 'No.'
  },
  {
    id: 'player',
    name: 'Player'
  },
  {
    id: 'score',
    name: 'Score'
  },
  {
    id: 'time',
    name: 'Time'
  },
  {
    id: 'date',
    name: 'Date'
  }
];

export const sortScores = (scores) => scores.sort((a, b) => parseFloat(b.score) - parseFloat(a.score));
