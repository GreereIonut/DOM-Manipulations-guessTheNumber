"use strict";

const random = function () {
  const randomNumber = Math.trunc(Math.random() * 30) + 1;
  return randomNumber;
};

let fixScore = 30;
let max = 1;
const tooManyTries = function () {
  document.querySelector(".score").textContent = `☠️ You lost the game :PP`;
};
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};
const displayScore = function (score) {
  document.querySelector(".score").textContent = score;
};
const setBackgroundColor = function (color) {
  document.querySelector("body").style.backgroundColor = color;
};

const displayNumber = function (number, width) {
  document.querySelector(".number").textContent = number;
  document.querySelector(".number").style.width = width;
};

let number = random();
const checkNumber = function () {
  console.log(number);
  console.log(document.querySelector(".guess").value);
  const guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    displayMessage("⛔No number bici");
  } else if (guess === number) {
    displayMessage(`🥳Congrats the number is indeed ${number}`);
    displayScore(fixScore);

    if (fixScore > max) {
      max = fixScore;
      document.querySelector(".highscore").textContent = max;
    }

    setBackgroundColor("#60b347");
    displayNumber(number, "30rem");

    return;
  } else if (guess !== number) {
    displayMessage(number < guess ? `📈TO HIGH MAN ` : `📉LOW LOW LOW`);

    fixScore--;
    displayScore(fixScore);
    if (!fixScore) {
      tooManyTries();
      displayNumber(0);
    }
  }
};
document.querySelector(".check").addEventListener("click", checkNumber);

const againButton = function () {
  number = random();
  fixScore = 30;
  displayScore(30);
  displayMessage("Start guessing...");
  displayNumber("?", "15rem");
  setBackgroundColor("#222");
  document.querySelector(".guess").value = "";
};

document.querySelector(".again").addEventListener("click", againButton);
