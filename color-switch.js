const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const buttonStart = document.querySelector("[data-action='start']");
const buttonStop = document.querySelector("[data-action='stop']");
const bodyEl = document.querySelector("body");

buttonStart.addEventListener('click', onButtonStartClick)
// buttonStop.addEventListener('click', onButtonStopClick)






function onButtonStartClick(e) {
    bodyEl.style.backgroundColor = "red";
   console.log(bodyEl)
}