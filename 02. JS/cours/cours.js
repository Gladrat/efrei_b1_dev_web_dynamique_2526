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

// document
//   .querySelectorAll("button")
//   .forEach((e) => e.addEventListener("click", (event) => console.log(event)));

// const eleves = ["Maxime", "Vinny", "Jules", "Mathéo"];
// JSON → JavaScript Object Notation
// JavaScript

// Objets → POO (2015) : Classes, méthodes, encapsulation, attributs, héritage, polymorphisme
//        → Objets littéraux (1997)

// const eleveMatheo = {
//   prenom: "Mathéo",
//   nom: "Dubois",
//   age: 18,
//   bde: false,
//   promotions: {
//     b1_dev: {
//       anneeDepart: 2025,
//       anneeFin: 2026,
//       notes: {
//         webDynamique: [],
//         algo: [4.0, 12.0],
//         c: [12.5, 19.0],
//       },
//     },
//   },
// };

// const json = JSON.stringify(eleveMatheo)

// // paire clef/valeur
// localStorage.setItem("eleveMatheo", json)
