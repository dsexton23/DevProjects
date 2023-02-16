//Functions as Data
const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
    for(let i = 1; i <= 1000000; i++) {
      if ( (2 + 2) != 4) {
        console.log('Something has gone very wrong :( ');
      }
    }
  };
  
  // establishes a less busy variable type to use
  const isTwoPlusTwo = checkThatTwoPlusTwoEqualsFourAMillionTimes;
  
  isTwoPlusTwo(); //function is invoked
  
  console.log(isTwoPlusTwo.name); // displays the original name of the function




//functions as parameters
  const addTwo = num => {
    return num + 2;
  }
  
  const checkConsistentOutput = (func, val) => {
    const checkA = val + 2;
    const checkB = func(val);
    if(checkA === checkB){
      return checkA;
    }else{
      return 'Inconsistent Results'
    }
  }
  
  console.log(checkConsistentOutput(addTwo, 5));
  




// the .forEach() method
  const fruits = ['mango', 'papaya', 'pineapple', 'apple'];

// Iterates over fruits below
fruits.forEach(fruitType =>
console.log(`I want to eat a ${fruitType}`))





// the .map() method
const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

// iterates through the animals array and prints the first letter
const secretMessage = animals.map(animal => animal[0]);


console.log(secretMessage.join('')); // prints hello world

const bigNumbers = [100, 200, 300, 400, 500];

// takes each of the bigNumbers and divides them by 100 to store in a smallNumbers array
const smallNumbers = bigNumbers.map(number =>{
  return number / 100;
})







// the .filter() method
const randomNumbers = [375, 200, 3.14, 7, 13, 852];

// filters out the numbers less than 250 from randomNumbers and saves them to smallNumbers array
const smallNumbers = randomNumbers.filter(number => {
  return number < 250;
});

const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];


// filters out words with more than 7 characters in favoriteWords and saves them to longFavoriteWords array
const longFavoriteWords = favoriteWords.filter(word => {
  return word.length > 7
})






// the .findIndex() Method
const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

//iterates through animals and stores the index point for elephant and stores it to foundAnimal Array
const foundAnimal = animals.findIndex(animal => {
  return animal === 'elephant';
})

//iterates through animals and stores animals whos names start with s to startsWithS array
const startsWithS = animals.findIndex(animal => {
  return animal[0] === 's';
})




// the .reduce() Method
const newNumbers = [1, 3, 5, 7];

//iterates through the array adding each index as an accumulator to the increasing currentValue
const newSum = newNumbers.reduce((accumulator, currentValue) => {
  console.log('The value of accumulator: ', accumulator);
  console.log('The value of currentValue: ', currentValue);
  return accumulator + currentValue;
},10) // starts as an initial value for the accumulator

console.log(newSum);





// Iterator Documentation
const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];

// checks if at least some of the words are less than 6 letters
console.log(words.some((word) => {
  return word.length < 6;
}));

// filters out the words that have more than 5 characters and stores them in interestingWords array
const interestingWords = words.filter( word => {
  return word.length > 5;
})


// checks to see if every word in the interestingWords array has more than 6 letters
console.log(interestingWords.every((word) => { 
  return word.length > 5
} ));







//choose the right iterator
const cities = ['Orlando', 'Dubai', 'Edinburgh', 'Chennai', 'Accra', 'Denver', 'Eskisehir', 'Medellin', 'Yokohama'];

const nums = [1, 50, 75, 200, 350, 525, 1000];

//  Choose a method that will return undefined
cities.forEach(city => console.log('Have you visited ' + city + '?'));

// Choose a method that will return a new array
const longCities = cities.filter(city => city.length > 7);

// Choose a method that will return a single value
const word = cities.reduce((acc, currVal) => {
  return acc + currVal[0]
}, "C");

console.log(word)

// Choose a method that will return a new array
const smallerNums = nums.map(num => num - 5);

// Choose a method that will return a boolean value
nums.some(num => num < 0);


//reverses the order of the elements in an array

function reverseArray(array){
  let newArray =[];
  array.forEach(element => newArray.splice(0,0,element));
  return newArray;
};              
