const $clock = document.getElementById("js-clock");
const $hours = document.querySelector(".js-clock-hours"),
  $minutes = document.querySelector(".js-clock-minutes"),
  $seconds = document.querySelector(".js-clock-seconds"),
  $day = document.querySelector(".js-clock-day");

getHours = (currentDate) => {
  const hours = currentDate.getHours();
  //   if (hours < 10) {
  //     $hours.innerText = `0${hours}:`;
  //   } else {
  //     $hours.innerText = `${hours}:`;
  //   }
  $hours.innerText = `${hours < 10 ? `0${hours}` : `${hours}`}`;
};
getMinutes = (currentDate) => {
  const minutes = currentDate.getMinutes();
  //   if (minutes < 10) {
  //     $minutes.innerText = `0${minutes}:`;
  //   } else {
  //     $minutes.innerText = `${minutes}:`;
  //   }
  $minutes.innerText = `${minutes < 10 ? `0${minutes}` : `${minutes}`}`;
};
getSeconds = (currentDate) => {
  const seconds = currentDate.getSeconds();
  //   if (seconds < 10) {
  //     $seconds.innerText = `0${seconds}`;
  //   } else {
  //     $seconds.innerText = `${seconds}`;
  //   }
  $seconds.innerText = `${seconds < 10 ? `0${seconds}` : `${seconds}`}`;
};

transfromDay = (day) => {
  // Date 객체의 요일을 나타내는 정수를 해당 요일로 변환
  if (day == 0) {
    return "일요일";
  } else if (day == 1) {
    return "월요일";
  } else if (day == 2) {
    return "화요일";
  } else if (day == 3) {
    return "수요일";
  } else if (day == 4) {
    return "목요일";
  } else if (day == 5) {
    return "금요일";
  } else {
    return "토요일";
  }
};

getToDay = (currentDate) => {
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const date = currentDate.getDate();
  const day = currentDate.getDay();
  transfromDay(day);
  $day.innerText = `${year} ${month + 1} ${date + 1} ${transfromDay(day)}`;
};

function getTime() {
  const currentDate = new Date();
  getHours(currentDate);
  getMinutes(currentDate);
  getSeconds(currentDate);
  getToDay(currentDate);
}

function init() {
  getTime(); // 현재 시간을 불러오는 함수
  setInterval(getTime, 1000); // 1초 마다 현재 시간 갱신
}
init();
