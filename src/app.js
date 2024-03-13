/* eslint-disable */
import "./style.css";

const SUITS = ["♦", "♥", "♠", "♣"];
const VALUES = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];

let interval = 10000;

window.onload = function() {
  generateRandomCard();

  setInterval(generateRandomCard, interval);

  document.querySelector("#btn").onclick = function() {
    generateRandomCard();
  };
};

function generateRandomCard() {
  const suitTexts = document.querySelectorAll(".suit");
  const valueText = document.querySelector(".value");

  let randomSuit = SUITS[Math.floor(Math.random() * SUITS.length)];
  let color = randomSuit === "♠" || randomSuit === "♣" ? "black" : "red";

  suitTexts.forEach(function(text) {
    text.textContent = randomSuit;
    text.style.color = color;
  });

  valueText.textContent = VALUES[Math.floor(Math.random() * VALUES.length)];
  valueText.style.color = color;

  interval = 10000;
}
