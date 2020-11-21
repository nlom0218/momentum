const $toDosForm = document.querySelector("#js-toDosForm");
const $toDos = $toDosForm.querySelector("input");
const $toDoList = document.querySelector(".js-toDoList");

let toDos = [];

saveToDos = () => {
  localStorage.setItem("toDos", JSON.stringify(toDos));
};

handleDelToDoBtn = (e) => {
  const li = e.target.parentNode;
  $toDoList.removeChild(li);
  const newToDos = toDos.filter((item) => {
    return item.id !== Number(li.id);
  });
  toDos = newToDos;
  saveToDos();
};

creatToDoList = (toDo) => {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const text = document.createElement("div");
  const emoji = document.createElement("div");
  const liId = toDos.length + 1;
  li.id = liId;
  delBtn.addEventListener("click", handleDelToDoBtn);
  text.innerText = toDo;
  delBtn.innerText = "X";
  emoji.innerText = "👉";
  text.classList.add("toDoList_text");
  delBtn.classList.add("js-delToDoBtn", "toDoList_delBtn");
  emoji.classList.add("toDoList_emoji");
  li.appendChild(emoji);
  li.appendChild(text);
  li.appendChild(delBtn);
  li.classList.add("toDoList_toDo");
  $toDoList.appendChild(li);
  toDoObj = {
    text: toDo,
    id: liId,
  };
  toDos.push(toDoObj);
  saveToDos();
};

handleToDoSumit = (e) => {
  e.preventDefault();
  const toDo = $toDos.value;
  $toDos.value = "";
  creatToDoList(toDo);
};

putToDoList = (item) => {
  creatToDoList(item.text);
};

hasToDos = () => {
  const parsetoDos = JSON.parse(localStorage.getItem("toDos"));
  if (parsetoDos) {
    parsetoDos.forEach(putToDoList);
  }
};

function init() {
  $toDosForm.addEventListener("submit", handleToDoSumit);
  hasToDos();
}

init();
