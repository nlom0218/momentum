const $clock = document.getElementById("js-clock");
const $hours = document.querySelector(".js-clock-hours"),
  $minutes = document.querySelector(".js-clock-minutes"),
  $seconds = document.querySelector(".js-clock-seconds");

getHours = (date) => {
  const hours = date.getHours();
  //   if (hours < 10) {
  //     $hours.innerText = `0${hours}:`;
  //   } else {
  //     $hours.innerText = `${hours}:`;
  //   }
  $hours.innerText = `${hours < 10 ? `0${hours}:` : `${hours}:`}`;
};
getMinutes = (date) => {
  const minutes = date.getMinutes();
  //   if (minutes < 10) {
  //     $minutes.innerText = `0${minutes}:`;
  //   } else {
  //     $minutes.innerText = `${minutes}:`;
  //   }
  $minutes.innerText = `${minutes < 10 ? `0${minutes}` : `${minutes}`}`;
};
getSeconds = (date) => {
  const seconds = date.getSeconds();
  //   if (seconds < 10) {
  //     $seconds.innerText = `0${seconds}`;
  //   } else {
  //     $seconds.innerText = `${seconds}`;
  //   }
  $seconds.innerText = `${seconds < 10 ? `0${seconds}` : `${seconds}`}`;
};

function getTime() {
  const date = new Date();
  getHours(date);
  getMinutes(date);
  getSeconds(date);
}

function init() {
  getTime(); // 현재 시간을 불러오는 함수
  setInterval(getTime, 1000); // 1초 마다 현재 시간 갱신
}
init();
