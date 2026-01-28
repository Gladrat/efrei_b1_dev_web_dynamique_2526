const list = document.querySelector("#list");
const input = document.querySelector("#input");
const add = document.querySelector("#add");
const clear = document.querySelector("#clear");
const url = document.querySelector("#url");
const load = document.querySelector("#load");

const KEY = "todo-list";

function getLocalStorage() {
  if (!localStorage.getItem(KEY)) {
    localStorage.setItem(KEY, "[]");
  }

  return JSON.parse(localStorage.getItem(KEY));
}

let TASKS = getLocalStorage();

function setLocalStorage(value) {
  TASKS.push(value);
  localStorage.setItem(KEY, JSON.stringify(TASKS));
}

function removeFromLocalStorage(value) {
  TASKS = TASKS.splice(TASKS.indexOf(value), 1);
  localStorage.setItem(KEY, JSON.stringify(TASKS));
}

function clearLocalStorage() {
  TASKS = [];
  localStorage.setItem(KEY, "[]");
}

const h1 = document.querySelector("h1");
h1.textContent = "MA TODO LIST:";

function addTask(t) {
  if (typeof t === "string" && t) {
    const li = document.createElement("li");
    const remove = document.createElement("button");

    li.textContent = t;
    remove.textContent = "REMOVE";

    remove.addEventListener("click", (event) => {
      event.target.parentNode.remove();
      removeFromLocalStorage(t);
    });

    li.append(remove);
    list.append(li);
  }
  input.value = "";
  input.focus();
}

for (const t of TASKS) {
  addTask(t);
}

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    setLocalStorage(input.value);
    addTask(input.value);
  }
});

add.addEventListener("click", (e) => {
  setLocalStorage(input.value);
  addTask(input.value);
});

clear.addEventListener("click", () => {
  list.innerHTML = "";
  clearLocalStorage();
});
