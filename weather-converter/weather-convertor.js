//todays forcasted weather value
const kelvin = 325;

//Kelvin is 273 degrees higher than celsius
const celsius = kelvin - 273;

//formula converting celsius to farenheit
let fahrenheit = celsius * (9/5) + 32;

//farenheit decimal rounded down
fahrenheit = Math.floor(fahrenheit);


console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`);