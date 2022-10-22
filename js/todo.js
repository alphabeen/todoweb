const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");

const strToDo = "todos";
let localToDo = [];

function saveToDos(){
  localStorage.setItem(strToDo, JSON.stringify(localToDo));
}

function deleteToDo(argument){
  const delLi = argument.target.parentElement;
  delLi.remove();
  localToDo = localToDo.filter((delToDo) => Number(delToDo.id) !== Number(delLi.id));
  saveToDos();
}

function paintToDo(objectToDo){
  const li = document.createElement("li");
  li.id = objectToDo.id;
  const span = document.createElement("span");
  span.innerText = objectToDo.text;
  const button = document.createElement("button");
  button.innerText = "✓";
  button.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function submitToDo(event){
  event.preventDefault();
  const saveToDo = toDoInput.value;
  toDoInput.value = "";
  const ObjToDo = {
    text: saveToDo,
    id: Date.now(),
  };
  localToDo.push(ObjToDo);
  paintToDo(ObjToDo);
  saveToDos();
}

toDoForm.addEventListener("submit", submitToDo);

const savedToDos = localStorage.getItem(strToDo);
if (savedToDos !== null){
  const parsedToDos = JSON.parse(savedToDos);
  localToDo = parsedToDos;
  parsedToDos.forEach(paintToDo);
}