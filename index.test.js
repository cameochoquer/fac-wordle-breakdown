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
  let word = "hedllo";
  const result = validateWord(word);
  equal(result, true);
});
