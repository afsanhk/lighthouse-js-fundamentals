
const judgeVegetable = function(vegetables, metric) {

  let indexWin = 0;
  let max = 0;

  for (let i = 0; i < vegetables.length; i++) {
    if (vegetables[i][metric] > max) {
      max = vegetables[i][metric];
      indexWin = i;
    }
  }

  return vegetables[indexWin].submitter;

};




// TEST CODE



const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
];

const metric = 'plumpness';

console.log(judgeVegetable(vegetables, metric));

