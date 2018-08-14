// my current age
const myAge = 22;
// first 
let earlyYears = 2;
earlyYears *= 10.5;
let laterYears = myAge - 2;
// my later years in dog years
laterYears *= 4;
console.log(laterYears);
console.log(earlyYears);
let myAgeInDogYears = earlyYears + laterYears;
console.log(myAgeInDogYears);
let myName = 'Allen Buckley'.toLowerCase();
console.log(`My name is ${myName}. I am ${myAgeInDogYears} years old in dog years.`);