const $clock = document.getElementById("js-clock");
const $hours = document.querySelector(".js-clock-hours"),
  $minutes = document.querySelector(".js-clock-minutes"),
  $seconds = document.querySelector(".js-clock-seconds"),
  $day = document.querySelector(".js-clock-day");
const $change24HoursBtn = document.querySelector(".change24Hours_order");

let statusHours = "24시";
function saveStatusHours() {
  localStorage.setItem("24시/12시", statusHours);
}

get12Hours = (currentDate) => {
  const hours = currentDate.getHours();
  const transHours = hours % 12 === 0 ? 12 : hours % 12;
  $hours.innerText = `${transHours < 10 ? `0${transHours}` : `${transHours}`}`;
};

get24Hours = (currentDate) => {
  const hours = currentDate.getHours();
  $hours.innerText = `${hours < 10 ? `0${hours}` : `${hours}`}`;
};
getMinutes = (currentDate) => {
  const minutes = currentDate.getMinutes();
  $minutes.innerText = `${minutes < 10 ? `0${minutes}` : `${minutes}`}`;
};
getSeconds = (currentDate) => {
  const seconds = currentDate.getSeconds();
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

get24Times = () => {
  const currentDate = new Date();
  get24Hours(currentDate);
  getMinutes(currentDate);
  getSeconds(currentDate);
  getToDay(currentDate);
};

get12Times = () => {
  const currentDate = new Date();
  get12Hours(currentDate);
  getMinutes(currentDate);
  getSeconds(currentDate);
  getToDay(currentDate);
};

clearClock = () => {
  $hours.innerText = "00";
  $minutes.innerText = "00";
  $seconds.innerText = "00";
};

handleClickChange24HoursBtn = (e) => {
  if (e.target.nodeName === "DIV") return;
  const curStatus = e.target.innerText;
  if (curStatus === "24시") {
    get24Times();
    const get24TimesIn = setInterval(() => {
      const currentDate = new Date();
      get24Hours(currentDate);
      getMinutes(currentDate);
      getSeconds(currentDate);
      getToDay(currentDate);
      if (localStorage.getItem("24시/12시") === "12시") {
        clearClock();
        clearInterval(get24TimesIn);
      }
    }, 1000);
    statusHours = "24시";
    saveStatusHours();
  } else {
    get12Times();
    const get12TimesIn = setInterval(() => {
      const currentDate = new Date();
      get12Hours(currentDate);
      getMinutes(currentDate);
      getSeconds(currentDate);
      getToDay(currentDate);
      if (localStorage.getItem("24시/12시") === "24시") {
        clearClock();
        clearInterval(get12TimesIn);
      }
    }, 1000);
    statusHours = "12시";
    saveStatusHours();
  }
};

savedClockStatus = () => {
  if (localStorage.getItem("24시/12시") === "24시") {
    get24Times();
    const get24TimesIn = setInterval(() => {
      const currentDate = new Date();
      get24Hours(currentDate);
      getMinutes(currentDate);
      getSeconds(currentDate);
      getToDay(currentDate);
      if (localStorage.getItem("24시/12시") === "12시") {
        clearClock();
        clearInterval(get24TimesIn);
      }
    }, 1000);
    statusHours = "24시";
    saveStatusHours();
  } else {
    get12Times();
    const get12TimesIn = setInterval(() => {
      const currentDate = new Date();
      get12Hours(currentDate);
      getMinutes(currentDate);
      getSeconds(currentDate);
      getToDay(currentDate);
      if (localStorage.getItem("24시/12시") === "24시") {
        clearClock();
        clearInterval(get12TimesIn);
      }
    }, 1000);
  }
};

function init() {
  $change24HoursBtn.addEventListener("click", handleClickChange24HoursBtn);
  savedClockStatus();
}
init();
