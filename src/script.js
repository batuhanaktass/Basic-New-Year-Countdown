let yearString = "1 Jan 2022";
// Elements
const daysContainer = document.getElementById("days");
const hoursContainer = document.getElementById("hours");
const minutesContainer = document.getElementById("minutes");
const secondsContainer = document.getElementById("seconds");
// Count Function
const Counter = () => {
  // Date
  let currentYear = new Date();
  let newYear = new Date(yearString);
  // Total Second
  const totalSec = (newYear - currentYear) / 1000;
  // Calculations
  const seconds = Math.floor(totalSec % 60);
  const minutes = Math.floor(totalSec / 60) % 60;
  const hours = Math.floor(totalSec / (60 * 60)) % 24;
  const days = Math.floor(totalSec / (60 * 60 * 24));
  // HTML
  daysContainer.innerHTML = days;
  hoursContainer.innerHTML = hours;
  minutesContainer.innerHTML = minutes;
  secondsContainer.innerHTML = seconds;
};
// Initial Call
Counter();
// Interval Method
setInterval(Counter, 1000);
