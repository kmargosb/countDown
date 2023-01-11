// Variables

let countDownDate = new Date("Jan 1, 2025 00:00:00").getTime();
let time = setInterval(() => {
  let now = new Date().getTime();
  let daysLeft = countDownDate - now;

  var days = Math.floor(daysLeft / (1000 * 60 * 60 * 24));
  var hours = Math.floor((daysLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((daysLeft % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((daysLeft % (1000 * 60)) / 1000);

  document.querySelector(".hours").innerHTML = hours;
  document.querySelector(".minutes").innerHTML = minutes;
  document.querySelector(".seconds").innerHTML = seconds;
  document.querySelector(".days").innerHTML = days;

  if (daysLeft < 1) {
    clearInterval(time);
    document.querySelector(".hours").innerHTML = "00";
    document.querySelector(".minutes").innerHTML = "00";
    document.querySelector(".seconds").innerHTML = "00";
    document.querySelector(".days").innerHTML = "00";

    document.querySelector(".mensaje").innerHTML = "FIN DEL MUNDOOOOO!!!";
  }
}, 1000);
