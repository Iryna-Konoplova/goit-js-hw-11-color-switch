const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const min = 0;
const max = colors.length-1;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

let intervalId;

const buttonStart = document.querySelector("[data-action='start']");
const buttonStop = document.querySelector("[data-action='stop']");
const bodyEl = document.querySelector("body");

buttonStart.addEventListener('click', onButtonStartClick)
buttonStop.addEventListener('click', onButtonStopClick)

function onButtonStartClick(e) {
   intervalId = setInterval(() => {
    bodyEl.style.backgroundColor = colors[randomIntegerFromInterval(min, max)];
  }, 1000);
  
  buttonStart.setAttribute('disabled', false);
  return intervalId;
}

function onButtonStopClick(e) {
  buttonStart.removeAttribute('disabled');
  clearInterval(intervalId);
}