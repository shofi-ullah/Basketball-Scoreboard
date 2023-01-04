let homeCount = 0;
let guestCount = 0;
let homeScore = document.getElementById("home-score");
let guestScore = document.getElementById("guest-score");
let resetScore = document.getElementById("reset-score");

function incrementHomeByOne() {
  homeCount += 1;
  homeScore.textContent = homeCount;
}

function incrementHomeByTwo() {
  homeCount += 2;
  homeScore.textContent = homeCount;
}

function incrementHomeByThree() {
  homeCount += 3;
  homeScore.textContent = homeCount;
}

function incrementGuestByOne() {
  guestCount += 1;
  guestScore.textContent = guestCount;
}

function incrementGuestByTwo() {
  guestCount += 2;
  guestScore.textContent = guestCount;
}

function incrementGuestByThree() {
  guestCount += 3;
  guestScore.textContent = guestCount;
}

function reset() {
  homeCount = 0;
  guestCount = 0;
  homeScore.textContent = homeCount;
  guestScore.textContent = guestCount;
}
