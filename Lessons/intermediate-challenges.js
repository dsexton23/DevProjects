//reverses the order of the elements in an array

function reverseArray(array){
    let newArray =[];
    array.forEach(element => newArray.splice(0,0,element));
    return newArray;
  };              
  const sentence = ['sense.','make', 'all', 'will', 'This'];

console.log(reverseArray(sentence));






//uses for loop to greet each of the aliens stored in the array aliens
const greetAliens = (aliens) => {
    for(let i = 0; i < aliens.length; i++){
      console.log(`Oh powerful ${aliens[i]}, we humans offer our unconditional surrender!`);
    }
  }
  
  const aliens = ["Blorgous", "Glamyx", "Wegord", "SpaceKing"];

greetAliens(aliens);


//uses a loop to change all the animal types to baby
onst convertToBaby = (animals) => {
    for(let i = 0; i < animals.length; i++){
      animals[i] = `baby ${animals[i]}`;
    }
    return animals;
  }
  const animals = ['panda', 'turtle', 'giraffe', 'hippo', 'sloth', 'human'];

console.log(convertToBaby(animals));





//searches for the smallest power of 2 greater than the array value
const numbers = [5, 3, 9, 30];

const smallestPowerOfTwo = arr => {
      let results = [];
      // The 'outer' for loop - loops through each element in the array
      for (let i = 0; i < arr.length; i++) {
             number = arr[i];
            // The 'inner' while loop - searches for smallest power of 2 greater than the given number
            let j = 1;
            while (j < number) {
                  j = j * 2;
            }
            results.push(j);
      }
      return results
}

console.log(smallestPowerOfTwo(numbers)) 
// Should print the returned array [ 8, 4, 16, 32 ] instead prints the returned array [8]




// functions to decline or accept items in the veggies array
const veggies = ['broccoli', 'spinach', 'cauliflower', 'broccoflower'];

const politelyDecline = (veg) => {
      console.log('No ' + veg + ' please. I will have pizza with extra cheese.');
}
// Write your code here:
const declineEverything = veggies => {
  veggies.forEach(politelyDecline)
  };

const acceptEverything = veggies => {
  for(let i = 0; i < veggies.length; i++){
    console.log(`Ok, I guess I will eat some ${veggies[i]}.`);
  }
}

//console.log(declineEverything(veggies));
acceptEverything(veggies);



//squares the numbers in the array
const numbers = [2, 7, 9, 171, 52, 33, 14]

const toSquare = num => num * num

// Write your code here:
const squareNums = numbers => numbers.map(toSquare);
console.log(squareNums(numbers));




//takes an array of strings, capitalizes the letters, and adds an !
const shoutGreetings = arr => arr.map(greeting => greeting.toUpperCase() + '!');

// Feel free to uncomment out the code below to test your function!
const greetings = ['hello', 'hi', 'heya', 'oi', 'hey', 'yo'];
console.log(shoutGreetings(greetings));
// Should print [ 'HELLO!', 'HI!', 'HEYA!', 'OI!', 'HEY!', 'YO!' ]




//sorts the array in descending order
const sortYears = arr => arr.sort((x, y) => y - x);

// Feel free to uncomment the below code to test your function:

const years = [1970, 1999, 1951, 1982, 1963, 2011, 2018, 1922]

console.log(sortYears(years))
// Should print [ 2018, 2011, 1999, 1982, 1970, 1963, 1951, 1922 ]




//filters out items that are included in both arrays
const justCoolStuff = (arr1, arr2) => {
    return arr1.filter(item => arr2.includes(item))
  }

  const coolStuff = ['gameboys', 'skateboards', 'backwards hats', 'fruit-by-the-foot', 'pogs', 'my room', 'temporary tattoos'];

const myStuff = [ 'rules', 'fruit-by-the-foot', 'wedgies', 'sweaters', 'skateboards', 'family-night', 'my room', 'braces', 'the information superhighway']; 

console.log(justCoolStuff(myStuff, coolStuff))
// Should print [ 'fruit-by-the-foot', 'skateboards', 'my room' ]




// takes an array and checks to see if every food has a source of plant
const isTheDinnerVegan = food => food.every(food =>food.source === 'plant');

// Feel free to comment out the code below to test your function

const dinner = [{name: 'hamburger', source: 'meat'}, {name: 'cheese', source: 'dairy'}, {name: 'ketchup', source:'plant'}, {name: 'bun', source: 'plant'}, {name: 'dessert twinkies', source:'unknown'}];

console.log(isTheDinnerVegan(dinner))
// Should print false




// sorts the array in assending order based on numTeeth
const speciesArray = [ {speciesName:'shark', numTeeth:50}, {speciesName:'dog', numTeeth:42}, {speciesName:'alligator', numTeeth:80}, {speciesName:'human', numTeeth:32}];

// Write your code here:
const sortSpeciesByTeeth = arr => arr.sort((x, y) => x.numTeeth > y.numTeeth);

console.log(sortSpeciesByTeeth(speciesArray))




// checks to find teh index of 'keys' in the array
const findMyKeys = arr => arr.findIndex(item => item === 'keys');

// Feel free to comment out the code below to test your function

const randomStuff = ['credit card', 'screwdriver', 'receipt', 'gum', 'keys', 'used gum', 'plastic spoon'];

console.log(findMyKeys(randomStuff))






// dog factory allows adding dogs info 
const dogFactory = (name, breed, weight) => {
    return {
      _name: name,
      _breed: breed,
      _weight: weight,
      get name() {
        return this._name;
      },
      set name(newName) {
        this._name = newName;
      },
      get breed() {
        return this._breed;
      },
      set breed(newBreed) {
        this._breed = newBreed;
      },
      get weight() {
        return this._weight
      },
      set weight(newWeight) {
        this._weight = newWeight;
      },
      bark(){
        return 'ruff! ruff!'
      },
      eatTooManyTreats(){
        this._weight ++;
      }
    }
  }