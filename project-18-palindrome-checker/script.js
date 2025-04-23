const inputText = document.getElementById("input-text");
const form = document.getElementById("form");
const output = document.getElementById("output");

const checkPalindrome = (sentence) => {
  const regex = /[a-zA-Z0-9_]/g;
  const word = sentence.match(regex).join("");
  console.log(word);
  let result = true;
  for (let i = 0; i < word.length / 2; i++) {
    if (word[i] !== word[word.length - 1 - i]) {
      result = false;
      break;
    }
  }
  return result
    ? `<em>${word}</em> is a palindrome.`
    : `<em>${word}</em> isn't a palindrome.`;
};

const formHandler = (e) => {
  e.preventDefault();
  const word = inputText.value;
  const result = checkPalindrome(word);
  output.innerHTML = result;
};

form.addEventListener("submit", formHandler);
