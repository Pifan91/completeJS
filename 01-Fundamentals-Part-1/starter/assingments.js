// const massMarks = 78;
// const heightMarks = 1.69;

// const massJohns = 92;
// const heightJohns = 1.95;

// const markBMI = massMarks / heightMarks ** 2;
// const johnBMI = massJohns / heightJohns ** 2;

// console.log(markBMI);
// console.log(johnBMI);

// if (markBMI > johnBMI) {
//   console.log(`Mark's BMI is higher than John's!`);
// } else {
//   console.log(`John's BMI is higher than Mark's!`);
// }
//===============================================================================================================
// const averageScoreCalc = (...scores) => {
//   let totalScore = 0;
//   scores.forEach((score) => { totalScore += score; });
//   return +(totalScore / scores.length).toFixed(1);
// };

// Data 1
// const averageScoreDolphins = averageScoreCalc(96, 108, 89);
// const averageScoreKoalas = averageScoreCalc(88, 91, 110);
// const MINIMUM_SCORE = 100;

// Data Bonus 1
// const averageScoreDolphins = averageScoreCalc(97, 112, 101);
// const averageScoreKoalas = averageScoreCalc(109, 95, 123);

// Data Bonus 2
// const averageScoreDolphins = averageScoreCalc(80, 110, 120);
// const averageScoreKoalas = averageScoreCalc(80, 110, 120);

// console.log(averageScoreDolphins);
// console.log(averageScoreKoalas);

// if (averageScoreDolphins >= MINIMUM_SCORE && averageScoreDolphins > averageScoreKoalas) {
//   console.log('Dolphins wins!!!');
// } else if (averageScoreKoalas >= MINIMUM_SCORE && averageScoreDolphins < averageScoreKoalas) {
//   console.log('Koalas wins!!!');
// } else if ((averageScoreDolphins >= MINIMUM_SCORE && averageScoreKoalas >= MINIMUM_SCORE) && averageScoreDolphins === averageScoreKoalas) {
//   console.log('Draw in competition.');
// } else {
//   console.log('No team wins the trophy =(');
// }

function pow(x, n) {
  return x ** n;
}

let x = prompt("x?", '');
let n = prompt("n?", '');

if (n < 1) {
  alert(`Степень ${n} не поддерживается, используйте натуральное число`);
} else {
  alert(pow(x, n));
}