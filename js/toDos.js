const $toDosForm = document.querySelector("#js-toDosForm");
const $toDos = $toDosForm.querySelector("input");
const $toDoList = document.querySelector(".js-toDoList");

const toDos = [];

saveToDos = () => {
  localStorage.setItem("toDos", JSON.stringify(toDos));
};

creatToDoList = (toDo) => {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const text = document.createElement("div");
  text.innerText = toDo;
  delBtn.innerText = "X";
  delBtn.classList.add("js-delToDoBtn", "toDos_delBtn");
  li.appendChild(text);
  li.appendChild(delBtn);
  li.classList.add("toDoList_toDo");
  $toDoList.appendChild(li);
  toDos.push(toDo);
  saveToDos();
};

handleToDoSumit = (e) => {
  e.preventDefault();
  const toDo = $toDos.value;
  $toDos.value = "";
  if (toDos.indexOf(toDo) !== -1) {
    alert("이미 있는 내용입니다! 다른 내용을 적어주세요!");
    return;
  }
  creatToDoList(toDo);
};

putToDoList = (item) => {
  creatToDoList(item);
};

hasToDos = () => {
  const parsetoDos = JSON.parse(localStorage.getItem("toDos"));
  if (parsetoDos) {
    parsetoDos.forEach(putToDoList);
  }
};

handleRemoveToDo = (e) => {
  if (e.target.nodeName !== "BUTTON") return;
  $toDoList.removeChild(e.target.parentNode);
  const toDo = e.target.parentNode.firstChild.innerText;
  const toDoIndex = toDos.indexOf(toDo);
  toDos.splice(toDoIndex, 1);
  saveToDos();
};

function init() {
  $toDosForm.addEventListener("submit", handleToDoSumit);
  $toDoList.addEventListener("click", handleRemoveToDo);
  hasToDos();
}

init();
