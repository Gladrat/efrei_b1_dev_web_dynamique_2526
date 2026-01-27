const list = document.querySelector("#list");
const input = document.querySelector("#input");
const add = document.querySelector("#add");
const clear = document.querySelector("#clear");
const url = document.querySelector("#url");
const load = document.querySelector("#load");

const tasks = ["Apprendre HTML", "Apprendre le CSS", "Apprendre le JS"];

const h1 = document.querySelector("h1");
h1.textContent = "MA TODO LIST:";

function addTask(t) {
  if (typeof t === "string" && t) {
    const li = document.createElement("li");
    const remove = document.createElement("button");

    li.textContent = t;
    remove.textContent = "REMOVE";

    remove.addEventListener("click", (event) =>
      event.target.parentNode.remove(),
    );

    li.append(remove);
    list.append(li);
  }
  input.value = "";
  input.focus();
}

for (const t of tasks) {
  addTask(t);
}

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    addTask(input.value);
  }
});

add.addEventListener("click", (e) => {
  addTask(input.value);
});

// Remove all
// Fichiers
// Fetch
// localStorage