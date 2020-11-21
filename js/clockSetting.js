const $lastColume = document.querySelector("#lastColume");
const $settingIcon = document.querySelector("#js-settingIcon");
const $settingList = document.querySelector("#js-settingList");
const $clockSetting = document.querySelector("#js-clockSetting");
const $changeColorTitle = document.querySelector(".changeColor_title");
const $changeColorOrder = document.querySelector(".changeColor_order");
const $selectValue = document.querySelector(".selectValue");
const $varietyColor = document.querySelector(".varietyColor");
const $clockDoneBtn = document.querySelector(".clock-doneBtn");
const $clockResetBtn = document.querySelector(".clock-resetBtn");

let selectedValue = [];

paintDate = (value) => {
  value.forEach((item) => {
    if ($hours.id === item.value) {
      $hours.style.color = item.color;
    } else if ($minutes.id === item.value) {
      $minutes.style.color = item.color;
    } else if ($seconds.id === item.value) {
      $seconds.style.color = item.color;
    } else if ($day.id === item.value) {
      $day.style.color = item.color;
    }
  });
};

handleClickVarietyColor = (e) => {
  if (e.target.nodeName === "UL") return;
  const color = e.target.style.backgroundColor;
  selectedValue.forEach((item) => {
    item.color = color;
    localStorage.setItem(item.value, item.color);
  });
  paintDate(selectedValue);
};

handleClickSelectValue = (e) => {
  if (e.target.nodeName === "UL") return;
  const dateValue = e.target;
  selectedValueObj = {
    value: dateValue.innerText,
  };
  if (!dateValue.classList.contains("selected")) {
    dateValue.classList.add("selected");
    selectedValue.push(selectedValueObj);
  } else {
    dateValue.classList.remove("selected");
    const reSelectedValue = selectedValue.filter((item) => {
      return item.value !== dateValue.innerText;
    });
    selectedValue = reSelectedValue;
  }
};

handleClickSettingIcon = () => {
  if ($settingList.classList.contains("hiding")) {
    $settingList.classList.remove("hiding");
  } else {
    $settingList.classList.add("hiding");
    $clockSetting.classList.add("hiding");
    document.querySelector("#js-clock-settingItem").style.fontWeight = 500;
  }
};

handleClickChangeColorOrder = () => {
  if ($changeColorOrder.classList.contains("hiding")) {
    $changeColorOrder.classList.remove("hiding");
    document.querySelector(
      ".changeColor_title_icon"
    ).innerHTML = `<i class="fas fa-caret-up"></i>`;
  } else {
    $changeColorOrder.classList.add("hiding");
    document.querySelector(
      ".changeColor_title_icon"
    ).innerHTML = `<i class="fas fa-caret-down"></i>`;
  }
};

clockSetting = (e) => {
  const settingItem = e.target;
  if ($clockSetting.classList.contains("hiding")) {
    $clockSetting.classList.remove("hiding");
    settingItem.style.fontWeight = 900;
  } else {
    $clockSetting.classList.add("hiding");
    settingItem.style.fontWeight = 500;
  }
};

handleClickSettingList = (e) => {
  if (e.target.id === "js-settingList") {
    return;
  } else if (e.target.innerText === "시계설정") {
    clockSetting(e); // 시계설정
  }
};

hasLocalStorageDateColor = () => {
  if (localStorage.getItem("시")) {
    $hours.style.color = localStorage.getItem("시");
  }
  if (localStorage.getItem("분")) {
    $minutes.style.color = localStorage.getItem("분");
  }
  if (localStorage.getItem("초")) {
    $seconds.style.color = localStorage.getItem("초");
  }
  if (localStorage.getItem("날짜&요일")) {
    $day.style.color = localStorage.getItem("날짜&요일");
  }
};

handleClickClockDoneBtn = () => {
  $clockSetting.classList.add("hiding");
  document.querySelector("#js-clock-settingItem").style.fontWeight = 500;
};

handleClickClockResetBtn = () => {
  selectedValue = [
    { value: "시", color: "black" },
    { value: "분", color: "black" },
    { value: "초", color: "black" },
    { value: "날짜&요일", color: "black" },
  ];
  paintDate(selectedValue);
  selectedValue = [];
  localStorage.setItem("시", "black");
  localStorage.setItem("분", "black");
  localStorage.setItem("초", "black");
  localStorage.setItem("날짜&요일", "black");
};

function init() {
  $settingIcon.addEventListener("click", handleClickSettingIcon);
  // 설정아이콘 누르기
  $settingList.addEventListener("click", handleClickSettingList);
  // 설정목록 누르기
  $changeColorTitle.addEventListener("click", handleClickChangeColorOrder);
  // 색상바꾸기 누르기
  $selectValue.addEventListener("click", handleClickSelectValue);
  // 색상바꾸기의 시, 분, 초, 날짜 및 요일 누르기
  $varietyColor.addEventListener("click", handleClickVarietyColor);
  // 색상바꾸기의 색상 누르기
  hasLocalStorageDateColor();
  //
  $clockDoneBtn.addEventListener("click", handleClickClockDoneBtn);
  $clockResetBtn.addEventListener("click", handleClickClockResetBtn);
}
init();
