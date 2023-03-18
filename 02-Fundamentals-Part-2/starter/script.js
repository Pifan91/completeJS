// const calcAverage = (...scores) => {
//   let totalScore = 0;
//   scores.forEach((score) => { totalScore += score; });
//   return +(totalScore / scores.length).toFixed(1);
// };

// const checkWinner = (avgDolphins, avgKoalas) => {
//   if (avgDolphins >= avgKoalas * 2) {
//     console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`);
//   } else if (avgKoalas >= avgDolphins * 2) {
//     console.log(`Dolphins win (${avgKoalas} vs ${avgDolphins})`);
//   } else if (avgKoalas === avgDolphins) {
//     console.log(`Draw (${avgKoalas} vs ${avgDolphins})`);
//   } else {
//     console.log(`No team wins.....`);
//   }
// };

// const avgDolphins1 = calcAverage(44, 23, 71);
// const avgKoalas1 = calcAverage(65, 54, 49);

// const avgDolphins2 = calcAverage(85, 54, 41);
// const avgKoalas2 = calcAverage(23, 34, 27);

// console.log(avgDolphins1);
// console.log(avgKoalas1);
// console.log(avgDolphins2);
// console.log(avgKoalas2);

// checkWinner(avgDolphins1, avgKoalas1);
// checkWinner(avgDolphins2, avgKoalas2);
//=======================================================================================================================================

// bills = [125, 555, 44];
// tips = [];
// total = [];

// const calcTip = (bill) => {
//   const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
//   tips.push(tip);
//   total.push(bill + tip);
// };

// calcTip(bills[0]);
// calcTip(bills[1]);
// calcTip(bills[2]);

// console.log(tips);
// console.log(total);
//=======================================================================================================================================

// const jonas = {
//   firstName: 'Jonas',
//   lastName: 'Schmedtmann',
//   age: 2037 - 1991,
//   job: 'teacher',
//   friends: ['Michael', 'Peter', 'Steven'],
//   location: 'Portugal',
//   twitter: '@jonasschmedtman',
// };

// console.log(`Jonas has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}.`);
//=======================================================================================================================================

const jonas = {
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  birthYeah: 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven'],
  hasDriversLicense: true,

  calcAge: function () {
    this.age = 2037 - this.birthYeah;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old teacher, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`
  },
};

// Challenge
// "Jonas is a 46-year old teacher, and he has a/no driver's license"
console.log(jonas.getSummary());