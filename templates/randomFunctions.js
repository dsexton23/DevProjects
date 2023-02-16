//The following code takes a number representing age and returns boolean true if eligible to vote:

const canIVote = age => {
 if(age >= 18){
   return true;
 }else{
   return false;
 }
}


//The Following code checks if 3 strings are equal and returns if the two are in agreement
const agreeOrDisagree = (stringA, stringB) => {
  if(stringA  === stringB){
    return 'You agree!'
  }else{
    return 'You disagree!'
  }
}



//The following code checks the age and returns life stage
const lifePhase = age =>{
  if(age < 0 || age > 140){
    return 'This is not a valid age';
  }else if(age < 4){
    return 'baby';
  }else if (age < 13){
    return 'child';
  }else if (age < 20){
    return 'teen';
  }else if (age < 65){
    return 'adult';
  }else{
    return 'senior citizen';
  }
}



//The following code takes 3 scores and tells you the average letter grade:

const finalGrade = (num1, num2, num3) => {
  let avGrade = ((num1 + num2 + num3)/3)
  
  if ((num1 < 0 || num1 > 100) || (num2 < 0 || num2 > 100) || (num3 < 0 || num3 > 100)){
    return 'You have entered an invalid grade.';
  }else if (avGrade >= 0 && avGrade < 60){
    return 'F';
  }else if (avGrade < 70){
    return 'D';
  }else if (avGrade < 80){
    return 'C';
  }else if (avGrade < 90){
    return 'B';
  }else if (avGrade <= 100){
    return 'A';
  }
}
// Uncomment the line below when you're ready to try out your function
console.log(finalGrade(99, 93, 95)) // Should print 'A'




//The following code takes the paramaters rank and lastName and returns a string 

const reportingForDuty = (rank, lastName) =>{
 return `${rank} ${lastName} reporting for duty!`;
}

//The following code rolls 2 imaginary dice and gives the sum-
const rollTheDice = () => {
  // Math.random() gives us a random number from 0 up to, but not including, 1
  // We multiplied that by 6 to get a number between 0 and up to, but not including, 6
  // But since we actually wanted numbers from 1 to 6, inclusive, we added 1
    let die1 = Math.floor(Math.random() * 6) + 1;
    let die2 = Math.floor(Math.random() * 6) + 1;
    return die1 + die2;
}
console.log(rollTheDice());





//The following code calculates weight on other planets relative to earth weight

// Write your function here:
const calculateWeight = (earthWeight, planet) => {
  if(planet === 'Mercury'){
    return earthWeight * 0.378;
  }else if (planet === 'Venus'){
    return earthWeight * 0.907;
  }else if (planet === 'Mars'){
    return earthWeight * 0.377;
  }else if (planet === 'Jupiter'){
    return earthWeight * 2.36;
  }else if (planet === 'Saturn'){
    return earthWeight * 0.916;
  }else{
    return 'Invalid Planet Entry. Try: Mercury, Venus, Mars, Jupiter, or Saturn.'
  }
}
console.log(calculateWeight(100, 'Jupiter')) // Should print 236





//The following code takes any value and returns true if truthy and false if falsy

const truthyOrFalsy = value =>{
  if (value){
    return true;
  }else{
    return false;
  }
}





//The following code takes a number and divides it by 4 and rounds up

const numImaginaryFriends = numFriends =>{
  return Math.ceil(numFriends * .25 );
}
console.log(numImaginaryFriends(20)) // Should print 5
console.log(numImaginaryFriends(10)) // Should print 3 (2.5 rounded up!)






//Code does mad libs style strings

const sillySentence = (adjective, verb, noun) =>{
  return `I am so ${adjective} because I ${verb} coding! Time to write some more awesome ${noun}!`
}
console.log(sillySentence('excited', 'love', 'functions')) 






//The following code takes am age and a year and can tell you how old they will be or were in that year

const howOld = (age, year) =>{
  const currentYear = 2023;
  const yearDiff = Math.abs(year - 2023);
  const birthYear = 2023 - age;
  if(year > currentYear){
    return `You will be ${year - birthYear} in the year ${year}`;
  }else if (year < birthYear){
    return `The year ${year} was ${yearDiff - age} years before you were born`;
  } else{
    return `You were ${year - birthYear} in the year ${year}`;
  }
}

// Once your function is written, write function calls to test your code!
console.log(howOld(25, 2045))



//The following code calculates a tip amount based on the quality of service and total cost

 const tipCalculator = (quality, total) => {
   if(quality === 'bad'){
     return total * .05;
   }else if (quality === 'ok'){
     return total * .15;
   }else if (quality === 'good'){
     return total * .20;
   }else if (quality === 'excellent'){
     return total * .30;
   }else{
     return total * .18;
   }
 }

console.log(tipCalculator('good', 100)) //should return 20



//The following code takes key words and displays corresponding emotes

const toEmoticon = (emote) => {
  if (emote === 'shrug'){
    return '|_{"}_|'
  }else if (emote === 'smiley face'){
    return ':)'
  }else if (emote === 'frowny face'){
    return ':('
  }else if (emote === 'winky face'){
    return ';)'
  }else if (emote === 'heart'){
    return '<3'
  }else{
    return '|_(* ~ *)_|'
  }
}

// Uncomment the line below when you're ready to try out your function
console.log(toEmoticon("smiley face")) 
