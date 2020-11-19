const $askNameForm = document.querySelector("#js-askNameForm");
const $askName = $askNameForm.querySelector("input");
const $greeting = document.querySelector(".js-greeting");
const $delNameBtn = document.querySelector(".js-delNameBtn");

saveName = (name) => {
  localStorage.setItem("currentUser", name);
};

printGreeting = (name) => {
  $askName.classList.add("hiding");
  $greeting.classList.remove("hiding");
  $delNameBtn.classList.remove("hiding");
  $greeting.innerText = `${name}님 안녕하십니까?`;
  saveName(name);
};

handleNameSumit = (e) => {
  e.preventDefault();
  const name = $askName.value;
  printGreeting(name);
};

askName = () => {
  $askName.classList.remove("hiding");
  $greeting.classList.add("hiding");
  $delNameBtn.classList.add("hiding");
  $askName.value = "";
  $askNameForm.addEventListener("submit", handleNameSumit);
};

hasCurrentUser = () => {
  const currentUser = localStorage.getItem("currentUser");
  if (currentUser) {
    printGreeting(currentUser);
  } else {
    askName();
  }
};

removeCurrentUser = () => {
  localStorage.removeItem("currentUser");
  askName();
};

function init() {
  hasCurrentUser();
  $delNameBtn.addEventListener("click", removeCurrentUser);
}

init();
