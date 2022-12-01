// DOM elements in JS
// buttons
const startStopBtn = document.querySelector("#start-stop")
const splitBtn = document.querySelector("#split")
const resetBtn = document.querySelector("#reset")
// Time spans
const milisecondsSpan = document.querySelector(".miliseconds-span")
const secondsSpan = document.querySelector(".seconds-span")
const minutesSpan = document.querySelector(".minutes-span")
const hoursSpan = document.querySelector(".hours-span")

// useful variables for this eventListener
let currentMiliseconds = 0
let currentSeconds = 0
let currentMinutes = 0
let currentHours = 0
let timerInterval

startStopBtn.addEventListener("click", () => {
  startStopBtn.classList.toggle("isClicked")
  if (startStopBtn.className === "isClicked") {
    timerInterval = setInterval(() => {
      currentMiliseconds++
      if(currentMiliseconds === 100) {
        currentSeconds++
        currentMiliseconds = 0
      } 
      if (currentSeconds === 60) {
        currentMinutes++
        currentSeconds = 0
      }
      if (currentMinutes === 60) {
        currentHours++
        currentMinutes = 0
      }      
    }, 10)
  } else {
    clearInterval(timerInterval)
  }
})