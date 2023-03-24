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

const triggerSquares = () => {
  squares.forEach((square) => square.classList.add("horizontal-shake-trigger"));
  setTimeout(
    () =>
      squares.forEach((square) =>
        square.classList.remove("horizontal-shake-trigger")
      ),
    350
  );
};

const isAWord = (word, array) => {
  if(array.includes(word)){return true}
  if(!array.includes(word)){triggerSquares();return false;};
};

const guess = (array) => {
  if (array.length === 5) {
    return array.join("");
  } else if (array.length < 5) {
    triggerSquares();
  }
};
const removeLetter = (array) => {
  if (array.length > 0) {
    array.pop();
    squares[array.length].textContent = "";
  }
};
const addLetter = (array, char) => {
  if (array.length < 5) {
    array.push(char);
    squares[array.length - 1].textContent = char;
  }
};

document.addEventListener("keydown", (e) => {
  const letter = e.key.toLowerCase();

  if (letter.match(/^[a-z]$/)) {
    addLetter(wordArray, letter);
  }
  if (e.key === "Backspace") {
    removeLetter(wordArray);
  }
  if (e.key === "Enter") {
    // guess(wordArray);
    isAWord(guess(wordArray),WORDS)
  }
});

//alternative approach using switch statements
// document.addEventListener("keydown", (e) => {
//   const letter = e.key.toLowerCase();

//   switch (letter) {
//     case "backspace":
//       removeLetter(wordArray);
//       break;
//     case "enter":
//       guess(wordArray);
//       break;
//     default:
//       if (letter.match(/^[a-z]$/)) {
//         addLetter(wordArray, letter);
//       }
//       break;
//   }
// });
