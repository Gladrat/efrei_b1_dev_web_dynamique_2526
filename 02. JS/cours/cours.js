console.log("Début");

// setTimeout(() => {
//   console.log("requête pour récupérer le profil Github de Maxime");
//   setTimeout(() => {
//     console.log("lister l'ensemble des repo dans le profil de Maxime");
//     setTimeout(() => {
//       console.log("extraire le nombre de commit de chaque repo");
//     }, 1500);
//   }, 500);
// }, 100*20);

// const p = new Promise((resolve, reject) => {
//   // appel http https://randomuser.me/api/
//   setTimeout(() => resolve("Hello world!"), 4000);
//   setTimeout(() => reject("Nos serveurs sont saturés, déso."), 4000);
// });

// console.log(p);

// p.then((value) => {
//   console.log(value);
//   console.log(p);
// });

// p.catch((err) => console.log(err));

fetch("https://randomuser.me/api/")
  .then((r2) => r2.json())
  .then((j) => {
    console.log("render de la réponse API");
  })
  .catch((err) => console.log(err));

console.log("render UI");

// ======== EQUIVALENT ========

async function callAPI() {
  try {
    const r = await fetch("https://randomuser.me/api/");
    const j = await r.json();
    console.log("render de la réponse API");
  } catch (error) {
    console.log(error);
  }
}

callAPI();
console.log("render UI");
