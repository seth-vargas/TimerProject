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
  startStopBtn.textContent = "Stop"
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
      if(currentMiliseconds < 10) {milisecondsSpan.textContent = `0${currentMiliseconds}`}
      else {milisecondsSpan.textContent = currentMiliseconds}
      if(currentSeconds < 10) {secondsSpan.textContent = `0${currentSeconds}`}
      else {secondsSpan.textContent = currentSeconds}
      if(currentMinutes < 10) {minutesSpan.textContent = `0${currentMinutes}`}
      else {minutesSpan.textContent = currentMinutes}
      if(currentHours < 10) {hoursSpan.textContent = `0${currentHours}`}
      else {hoursSpan.textContent = currentHours}
    }, 10)
  } else {
    startStopBtn.textContent = "Start"
    clearInterval(timerInterval)
  }
})

resetBtn.addEventListener("click", () =>{
  reset()
})

function reset() {
  clearInterval(timerInterval)
  startStopBtn.classList.remove("isClicked")
  startStopBtn.textContent = "Start"

  currentHours = 0
  currentMinutes = 0
  currentSeconds = 0
  currentMiliseconds = 0


  hoursSpan.textContent = `00`
  secondsSpan.textContent = `00`
  minutesSpan.textContent = `00`
}