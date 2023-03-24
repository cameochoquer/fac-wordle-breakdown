//as a user I want to get feedback from the app if I've written a word that doesn't exist
//as a user I want to get feedback from the app if I've written less than 5 letters
//make sure word matches list in an array
//make sure word is no more than 5 letters
//make sure letters are letters and no characters

//create 5 letter word pattern
const isFiveLetterWord = (word) => {
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
  if (array.every(isFiveLetterWord)) {
    return true;
  } else {
    return false;
  }
};
//get a word for the day
const wordOfTheDay = (array) => {
  const index = Math.floor(Math.random() * array.length);
  console.log(array[index]);
};
wordOfTheDay(WORDS);

const row = document.getElementById("row-1");
const squares = row.querySelectorAll(".square");
const wordArray = [];

document.addEventListener("keydown", (e) => {
  const letter = e.key.toLowerCase();

  if (letter.match(/^[a-z]$/)) {
    if (wordArray.length < 5) {
      wordArray.push(letter);
      squares[wordArray.length - 1].textContent = letter;
    }
  }
  if (e.key === "Backspace") {
    if (wordArray.length > 0) {
      wordArray.pop();
      squares[wordArray.length].textContent = "";
    }
  }
  if (e.key === "Enter") {
    if ((wordArray.length === 5)) {
      const guess = wordArray.join("")
      isAWord(guess, WORDS)
    }
  }
});

const isAWord = (word, array) => {
  array.includes(word);
};
