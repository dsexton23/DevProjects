let myAge = 25; //my age

let earlyYears = 2; //step 2

earlyYears *= 10.5; //multiplies and reassigns value of earlyYears

let laterYears = (myAge - 2) * 4; //subtracts 2 from myage and multiplies it by 4 and saves value as laterYears

console.log(earlyYears);
console.log(laterYears);

let myAgeInDogYears = earlyYears + laterYears;

let myName = 'Darren'.toLowerCase();

console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);