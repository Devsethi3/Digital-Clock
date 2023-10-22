let dateContainer = document.querySelector(".date-container");
let clockContainer = document.querySelector(".clock-container");

const weekDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const MonthNames = [
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

const dateClock = setInterval(function dateTime() {
  const today = new Date();
  let date = today.getDate();
  let day = weekDays[today.getDay()];
  let month = MonthNames[today.getMonth()];

  let hours = today.getHours();
  let minutes = today.getMinutes();
  let seconds = today.getSeconds();

  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  dateContainer.innerHTML = `<p>${day}</p><span>${date}</span><p>${month}</p>`;
  clockContainer.innerHTML = `${hours - 12} : ${minutes} : ${seconds}`;
}, 1000);
