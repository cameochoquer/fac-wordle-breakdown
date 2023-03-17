function equal(actual, expected, message) {
  if (actual === expected) {
    const defaultMessage = `Expected ${expected} and received ${actual}`;
    console.info("Pass: " + (message || defaultMessage));
  } else {
    const defaultMessage = `Expected ${expected} but received ${actual} instead`;
    console.error("Fail: " + (message || defaultMessage));
  }
}
function test(name, testFunction) {
  console.group(name);
  testFunction();
  console.groupEnd(name);
}

test("check for 5 letter word", () => {
  let word = "hello";
  const result = validateWord(word);
  equal(result, true);
});
test("check the array matches the 5 letter word pattern", () => {
    const result = checkWordArray(WORDS)
    equal(result, true);
  });
