//as a user I want to get feedback from the app if I've written a word that doesn't exist
//as a user I want to get feedback from the app if I've written less than 5 letters
//make sure word matches list in an array
//make sure word is no more than 5 letters
//make sure letters are letters and no characters

//create 5 letter word pattern
const validateWord = (word) => {
  const pattern = /\b[a-zA-Z]{5}\b/;
  const matches = word.match(pattern);
  if (matches !== null) {
    return true;
  } else {
    return false;
  }
};
//check the array of 5 letters words that it matches the pattern
const checkWordArray = (array) => {
  if (array.every(validateWord)) {
   return true
  } else {
    return false;
  }
};
//get a word for the day
const wordOfTheDay = (array)=>{
const index = Math.floor(Math.random() * array.length);
console.log(array[index]);
}
wordOfTheDay(WORDS)