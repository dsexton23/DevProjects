document.querySelector('h1').innerHTML = '<h1>Most popular Harry Potter characters</h1>';// changes h1 element to text given
document.getElementById('fourth').innerHTML = 'Professor Snape'; // changes element w/id fourth to professor snape
document.getElementsByClassName('slytherin')[0].innerHTML = 'Salazar Slytherin'; //changes first element with class slytherin to salazar slytherin
document.getElementsByTagName('li')[0].innerHTML = 'Dobby'; // changes the first list item to Dobby


document.querySelector('body').style.backgroundColor = '#201F2E'; // changes background color of the body to given color

document.querySelector('.heading').style.fontFamily = 'Roboto'; // changes font family of element w/ class heading to roboto



const first = document.body.children[0]; // creates a variable 'first' and sets it to the child of the document body
first.innerHTML = 'BROWN BEARS ARE AWESOME!'; // sets the inner HTML of the first element to ... 
first.parentNode.style.backgroundColor = 'beige'; // uses parentNode property to access parent element to change backgound color to beige


const newAttraction = document.createElement('li'); // creates a li element using createElement method stored as variable newAttraction
newAttraction.id = 'vespa'; // assigns newAttraction the id of Vespa
newAttraction.innerHTML = 'Rent a Vespa'; // assigns innerhtml text to Rent a vespa
document.getElementById('italy-attractions').appendChild(newAttraction); // appends newAttraction element to the list of top attractions with the ID of italy-attractions


let elementToRemove = document.getElementById('vespa'); // saves element with ID vespa as variable elementToRemove
document.getElementById('italy-attractions').removeChild(elementToRemove); // removes elementToRemove element from its parent 'italy-attractions'




let element = document.querySelector('button'); // names button elements to a variable

function turnButtonRed(){ //function to turn the button red
  // Add code to turn button red
 element.style.backgroundColor = 'red'; // sets the background color 
 element.style.color = 'white'; // sets the font color
 element.innerHTML = 'Red Button'; // modifies the text on the button
}

element.onclick = turnButtonRed; // calls the turnbuttonred function on click





//adding event handlers
let view = document.getElementById('view-button');
let close = document.getElementById('close-button');
let codey = document.getElementById('codey');

let open = function() {
  codey.style.display = 'block';
  close.style.display = 'block';
};

let hide = function() {
  codey.style.display = 'none';
  close.style.display = 'none';
};

view.addEventListener('click', open);
close.addEventListener('click', hide);

// Write your code here
function textChange(){ // creates a textChange function that changes the innerHTML to hello world
  view.innerHTML = 'Hello, World!';
}

function textReturn(){ // creates a function to view the innerHTML of an element
  view.innerHTML = 'View';
}

view.addEventListener('click', textChange); // on click activates textChange function for view
close.addEventListener('click', textReturn); // on click activates textReturn function for close





// Removing Event Handlers
let fortunes = ["A beautiful, smart, and loving person will be coming into your life.",
  "A fresh start will put you on your way.",
  "A golden egg of opportunity falls into your lap this month.",
  "A smile is your personal welcome mat.",
  "All your hard work will soon pay off."
]

let button = document.getElementById('fortuneButton');
let fortune = document.getElementById('fortune');

function fortuneSelector(){
  let randomFortune = Math.floor(Math.random() * fortunes.length);
  return fortunes[randomFortune];
}

function showFortune(){
  fortune.innerHTML = fortuneSelector();
  button.innerHTML = "Come back tomorrow!";
  button.style.cursor = "default";

  //add your code here
  button.removeEventListener('click', showFortune); // removes the ability to run the fortune more than once.
}

button.addEventListener('click', showFortune);


//Event Object Properties
let social = document.getElementById('social-media');
let share = document.getElementById('share-button');
let text = document.getElementById('text');

// Write your code below
let sharePhoto = function(event) {
  event.target.style.display = 'none';
  text.innerHTML = (event.timeStamp);
}

share.addEventListener('click', sharePhoto);




// This variable stores the "Pick a Color" button
let button = document.getElementById('color-button');

// This variable stores the "Mystery Color" button
let mysteryButton = document.getElementById('next-button');

// This random number function will create color codes for the randomColor variable
function colorValue() {
  return Math.floor(Math.random() * 256);
}

function colorChange(event){ // this function generates a random color
let randomColor = 'rgb(' + colorValue() + ',' + colorValue() + ',' + colorValue() + ')';
event.target.style.backgroundColor = randomColor;
}

button.addEventListener('click', colorChange); // calls colorChange function on button click
mysteryButton.addEventListener('wheel', colorChange);  //calls colorChange function on mysteryButton mouse scroll











// These variables store the boxes on the side
let itemOne = document.getElementById('list-item-one');
let itemTwo = document.getElementById('list-item-two');
let itemThree = document.getElementById('list-item-three');
let itemFour = document.getElementById('list-item-four');
let itemFive = document.getElementById('list-item-five');
let resetButton = document.getElementById('reset-button');

// This function programs the "Reset" button to return the boxes to their default styles
let reset = function() {
  itemOne.style.width = ''
  itemTwo .style.backgroundColor = ''
  itemThree.innerHTML = 'The mouse must leave the box to change the text'
  itemFive.style.display = "none"
};
resetButton.onclick = reset;

// Write your code here
 let increaseWidth = function() {
   itemOne.style.width = '500px';
 };
 itemOne.onmouseover = increaseWidth; // increases teh width of itemOne to 500px when mouse hovers over it

 let changeBackground = function(){
   itemTwo.style.backgroundColor = 'green';
 };
 itemTwo.onmouseup = changeBackground; // changes background color to green on mouse click release

 let changeText = function(){
   itemThree.innerHTML = 'The mouse has left the element';
 };
 itemThree.onmouseout = changeText; // changes text when mouse leavs the box

 let showItem = function(){
   itemFive.style.display = 'block';
 };
 itemFour.onmousedown = showItem; // displays item 5 when item 4 is pressed down on






// KEYBOARD EVENTS
 let ball = document.getElementById('float-circle');

 // Write your code below
 let up = function() { // moves the bottom positon of the ball to 250px
   ball.style.bottom = '250px';
 }
 
 let down = function() { // moves the bottom position of the ball to 50px
   ball.style.bottom = '50px';
 };
 document.onkeydown = up; // activates up function when a key is pressed down
 document.onkeyup = down; // activates down function when a key is released