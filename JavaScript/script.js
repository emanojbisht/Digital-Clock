//HEADING : Variables
const hourEl = document.querySelector("#hour");
const minutesEl = document.querySelector("#minutes");
const secondsEl = document.querySelector("#seconds");
const amPmEl = document.querySelector("#showam-pm");
const dayEl = document.querySelector("#day");
let weekName = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let MonthName = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function print() {
  const date = new Date();
  const hour = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const month = date.getMonth();
  const day = date.getDay();
  const dateToday = date.getDate();
  amPmEl.textContent = hour > 12 ? "PM" : "AM";
  hourEl.textContent = hour > 12 ? hour - 12 : hour;
  dayEl.textContent = `${MonthName[month]}, ${weekName[day]} ${dateToday}`;
  minutesEl.textContent = minutes;
  secondsEl.textContent = seconds;
  setTimeout("print()", 1000);
}

print();
