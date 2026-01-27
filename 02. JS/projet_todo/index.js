const list = document.querySelector("#list");
const input = document.querySelector("#input");
const add = document.querySelector("#add");
const clear = document.querySelector("#clear");
const url = document.querySelector("#url");
const load = document.querySelector("#load");

const tasks = ["Apprendre HTML", "Apprendre le CSS", "Apprendre le JS"];

const h1 = document.querySelector("h1");
h1.textContent = "MA TODO LIST:";

for (const t of tasks) {
  if (typeof t === "string" && t) {
    const li = document.createElement("li");
    const remove = document.createElement("button");

    li.textContent = t;
    remove.textContent = "REMOVE";

    li.append(remove);
    list.append(li);
  }
}
