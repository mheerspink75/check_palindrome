// check palindrome
const checkPalindrome = (inputString) => {
  const reverseString = inputString.split("").reverse().join("");
  return inputString === reverseString;
};

// display results
const results = () => {
  let inputString = document.querySelector("#textInput").value.toUpperCase();
  if (checkPalindrome(inputString) === true) {
    document.getElementById(
      "app"
    ).innerHTML = `<h1>${inputString} is a palindrome!</h1>`;
    document.getElementById("results").style.backgroundColor = "green";
  } else {
    document.getElementById(
      "app"
    ).innerHTML = `<h1>${inputString} is not a palindrome!</h1>`;
    document.getElementById("results").style.backgroundColor = "red";
  }
};

results();
