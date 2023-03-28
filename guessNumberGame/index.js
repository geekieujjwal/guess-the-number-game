// DOM
const inputBtn = document.querySelector("#input-btn");
const submitBtn = document.querySelector("#submit-btn");
const startGameBtn = document.querySelector("#startGame-btn");
const result = document.querySelector("#result");
const guesses = document.querySelector("#guesses");

// Random Number Generator
let randomNumber = Math.floor(Math.random() * 100);
console.log(randomNumber);

// addEventListeners
submitBtn.addEventListener("click", function () {
  const value = inputBtn.value;
  inputBtn.value = "";
  result.textContent = guessTheNumber(value);
  guesses.textContent += ` ${value}`;
  console.log(guessTheNumber(value));
  if (
    guessTheNumber(value) === "Too High" ||
    guessTheNumber(value) === "Too Low" ||
    guessTheNumber(value) === "Type a number between 0 and 100"
  ) {
    changeColor("red");
  } else if (guessTheNumber(value) === "Congratulations, you won!") {
    changeColor("green");
  }
});

inputBtn.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("submit-btn").click();
  }
});

startGameBtn.addEventListener("click", function () {
  window.location.reload();
});

// Function
const guessTheNumber = (num) => {
  if (num > randomNumber && num <= 100) {
    return "Too High";
  } else if (num < randomNumber && num >= 1) {
    return "Too Low";
  } else if (num < 1 || num > 100 || num === "") {
    return "Type a number between 0 and 100";
  } else {
    return "Congratulations, you won!";
  }
};

function changeColor(color) {
  result.style.backgroundColor = color;
  console.log("called");
}
