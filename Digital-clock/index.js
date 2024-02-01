const clock = document.querySelector(".clock");
const hour = document.querySelector("#hr");
const minutes = document.querySelector("#min");
const second = document.querySelector("#sec");
const ampm = document.querySelector("#ampm");

setInterval(() => {
  showTime();
}, 1000);

function showTime() {
  let curTime = new Date();
  let hr = curTime.getHours();
  let sec = curTime.getSeconds();
  let min = curTime.getMinutes();
  let ampm = curTime.getHours() >= 12 ? "AM" : "PM";
  hr = hr % 12;
  hour.textContent = hr;
  minutes.textContent = min;
  second.textContent = sec;
  ampm.textContent = ampm;
}

