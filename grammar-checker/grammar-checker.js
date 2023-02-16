let story = 'Last weekend, I took literally the most beautifull bike ride of my life. The route is called "The 9W to Nyack" and it stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it literally took me an entire day. I stopped at Riverbank State Park to take some artsy photos. It was a short stop, though, because I had a freaking long way to go. After a quick photo op at the very popular Little Red Lighthouse I began my trek across the George Washington Bridge into New Jersey. The GW is a breathtaking 4,760 feet long! I was already very tired by the time I got to the other side. An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautifull park along the coast of the Hudson. Something that was very surprising to me was that near the end of the route you literally cross back into New York! At this point, you are very close to the end.';


let storyWords = story.split(' ');
let unnecessaryWord = 'literally';
let misspelledWord = 'beautifull';
let badWord = 'freaking';
//console.log(storyWords);
let count = 0;
storyWords.forEach(word => {
  count ++});
console.log(count);


// filters out all of the unnecessary 'literally's
storyWords = storyWords.filter(word => {
  return word !== unnecessaryWord;
 });

 
//fixes the misspelling of the word beautiful
storyWords = storyWords.map(word => {
  if(word === misspelledWord){
    return 'beautiful'
  }else{
    return word
  }
});



//finds the index of any bad words and replaces them with really
let badWordIndex = storyWords.findIndex(word => {
  return word === badWord;
});
//console.log(badWordIndex)

//changes bad word 'freaking' to really
storyWords[badWordIndex] = 'really';


//checks to see if all words are <= 10 characters
let lengthCheck = storyWords.every(word => {
  word.length <= 10;
});
//console.log(lengthCheck); //prints false



// finds any words longer than 10 characters
let longWords = storyWords.filter(word => {
  return word.length > 10;
});
//console.log(longWords); //prints breathtaking

//replaces the long word breathtaking with stunning
storyWords = storyWords.map(word => {
  if (word === longWords){
    return 'stunning';
  }else{
    return word;
  }
});



// recombines all the words to form the story
console.log(storyWords.join(' '));