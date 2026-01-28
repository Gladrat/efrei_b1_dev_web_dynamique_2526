// function hello() {
//     console.log("Hello!");
// }

// setTimeout(hello, 2500);

// // ======== EQUIVALENT (ou presque) ========

// setTimeout(() => {
//   console.log("Hello!");
// }, 2500);

// function detectClick() {
//   console.log("click detected!!!");

// }

document
  .querySelectorAll("button")
  .forEach((e) => e.addEventListener("click", (event) => console.log(event)));
