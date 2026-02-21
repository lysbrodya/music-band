(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
    openMenuBtn: document.querySelector(".mobile-menu-button"),
    menu: document.querySelector(".mobile-menu"),
    closeMenuBtn: document.querySelector(".mobile-menu-close-button"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);
  refs.modal.addEventListener("click", onBackdropClick);
  refs.openMenuBtn.addEventListener("click", toggleMenu);
  refs.closeMenuBtn.addEventListener("click", toggleMenu);
  function toggleMenu() {
    refs.menu.classList.toggle("is-hidden");
  }
  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
  function onBackdropClick(event) {
    // если кликнули именно по бекдропу, а не по модалке
    if (event.target === event.currentTarget) {
      toggleModal();
    }
  }
})();

// import './style.css'
// import javascriptLogo from "./javascript.svg";
// import viteLogo from "/vite.svg";
// import { setupCounter } from "./counter.js";

// document.querySelector("#app").innerHTML = `
//   <div>
//     <a href="https://vite.dev" target="_blank">
//       <img src="${viteLogo}" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
//       <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
//     </a>
//     <h1>Hello Vite!</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite logo to learn more
//     </p>
//   </div>
// `;

// setupCounter(document.querySelector("#counter"));
// function accum(s) {
//   // your code
//   const ar = s.split("");
//   console.log(s.toUpperCase());
//   const answer = ar.map((e, i) => e.toUpperCase() + e.repeat(i)).join("-");
//   return s
//     .split("")
//     .map((e, i) => e.toUpperCase() + e.toLowerCase().repeat(i))
//     .join("-");
// }
// console.log(accum("asd"));
// ///////////////////////////
// function findUniq(arr) {
//   // do magic
//   // const arr1 = [...arr].pop();
//   const arr1 = new Set(arr);
//   console.log(arr1);
//   // console.log(arr1);
//   return arr.find((el) => el === arr[0]);
// }
// console.log(findUniq([1, 0, 0]));

// function findUniq(arr) {
//   arr.sort((a, b) => a - b);
//   return arr[0] == arr[1] ? arr.pop() : arr[0];
//   // if (arr[0] === arr[1]) {
//   //   return arr.find((el) => el !== arr[0]);
//   // }
//   // if (arr[0] === arr[2]) {
//   //   return arr[1];
//   // } else return arr[0];
// }
// console.log(findUniq([1, 1, 1, 2, 1, 1]));

// function findUniq(arr) {
//   for (let index = 0; index < arr.length - 1; index++) {
//     arr.every();
//     //  return arr[index] !== arr[arr.length-1]?;
//     // console.log(arr[arr.length - 1]);
//     // console.log(arr[index] === arr[arr.length - 1]);
//   }
// }
// console.log(findUniq([1, 1, 1, 2, 1, 1]));
// function findUniq(arr) {
//   let [a, b, c] = arr.slice(0, 3);
//   console.log([a, b, c]);
//   console.log(arr.lastIndexOf(1));
//   console.log(arr.indexOf(1));
//   return arr.find(
//     (n) => arr.indexOf(n) === arr.lastIndexOf(n),
//     // console.log(arr.indexOf(n)),
//     // console.log(arr.lastIndexOf(n)),
//   );
// }
// console.log(findUniq([1, 1, 1, 1, 1, 2]));
// windowWight;
function solution(string) {
  let arrStr = string.split("");
  let arr = string.toUpperCase().split("");
  let el = "";
  for (let index = 0; index < arrStr.length; index++) {
    if (arrStr[index] !== arr[index]) {
      el += arrStr[index];
    } else {
      el += " " + arrStr[index];
    }
  }
  return el;
}
console.log(solution("camelCasing"));

solution("camelCasing");
