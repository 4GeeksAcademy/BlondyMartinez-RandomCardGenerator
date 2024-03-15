/* eslint-disable */
import "./style.css";

const SUITS = ["♦", "♥", "♠", "♣"];
const VALUES = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];

let intervalTime = 10000;
let interval;

const CARD = document.querySelector(".card");
const INITIAL_WIDTH = CARD.offsetWidth;
const INITIAL_HEIGHT = CARD.offsetHeight;

const WIDTH_SLIDER = document.querySelector("#width-range");
const HEIGHT_SLIDER = document.querySelector("#height-range");

generateRandomCard();
startInterval();
setSliderValues(WIDTH_SLIDER, INITIAL_WIDTH, INITIAL_WIDTH * 4);
setSliderValues(HEIGHT_SLIDER, INITIAL_HEIGHT, INITIAL_HEIGHT * 1.1);

document.querySelector("#btn").onclick = function() {
  generateRandomCard();
  resetInterval();
};

WIDTH_SLIDER.addEventListener("input", updateSize);
HEIGHT_SLIDER.addEventListener("input", updateSize);

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
}

function startInterval() {
  interval = setInterval(generateRandomCard, intervalTime);
}

function resetInterval() {
  clearInterval(interval);
  startInterval();
}

function setSliderValues(slider, min, max) {
  slider.min = min;
  slider.max = max;
}

function updateSize() {
  setAspectRatioLock(false);

  const currentWidth = CARD.offsetWidth;

  CARD.style.width = WIDTH_SLIDER.value + "px";
  CARD.style.height = HEIGHT_SLIDER.value + "px";

  centerPivot(currentWidth);
}

function centerPivot(previousWidth) {
  const newWidth = CARD.offsetWidth;
  const offsetChange = (newWidth - previousWidth) / 2;
  CARD.style.marginLeft =
    parseFloat(CARD.style.marginLeft || 0) - offsetChange + "px";
}

function setAspectRatioLock(enabled) {
  enabled
    ? CARD.classList.add("aspect-ratio")
    : CARD.classList.remove("aspect-ratio");
}
