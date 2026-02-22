(() => {
  const refs = {
    openModalBtns: document.querySelectorAll("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
    concertInfo: document.querySelector(".modal-concert-info"),
  };

  refs.openModalBtns.forEach((btn) => {
    btn.addEventListener("click", onOpenModal);
  });

  refs.closeModalBtn.addEventListener("click", closeModal);
  refs.modal.addEventListener("click", onBackdropClick);
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !refs.modal.classList.contains("is-hidden")) {
      closeModal();
    }
  });
  function onOpenModal(event) {
    const button = event.currentTarget;

    // 🔥 находим строку
    const row = button.closest("tr");

    // 🔥 берём ячейки
    const cells = row.querySelectorAll("td");

    const place = cells[0].textContent.trim();
    const date = cells[2].textContent.trim();

    // 🔥 вставляем текст
    refs.concertInfo.innerHTML = `
  <span class="modal-title">
    Замовити квиток на концерт <br> «Грим та Грім»
  </span>
  <br>
  <span class="modal-place">${place}</span>
  <br>
  <span class="modal-date">${date}</span>
`;
    openModal();
  }

  function openModal() {
    refs.modal.classList.remove("is-hidden");
    document.body.classList.add("modal-open");
  }

  function closeModal() {
    refs.modal.classList.add("is-hidden");
    document.body.classList.remove("modal-open");
  }
  // function toggleModal() {
  //   refs.modal.classList.toggle("is-hidden");
  // }

  function onBackdropClick(event) {
    if (event.target === event.currentTarget) {
      toggleModal();
    }
  }
})();
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav__link");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute("id");

        navLinks.forEach((link) => {
          link.classList.remove("active");

          if (link.getAttribute("href") === `#${id}`) {
            link.classList.add("active");
          }
        });
      }
    });
  },
  {
    threshold: 0.6, // сколько секции должно быть видно
  },
);
// КОД ДЛЯ ПРОВЕРКИ ШИРИНЫ ЭЛЕМЕНТА В КОНСОЛИ
// sections.forEach((section) => {
//   observer.observe(section);
// });
// [...document.querySelectorAll("*")].forEach((el) => {
//   if (el.offsetWidth > document.documentElement.clientWidth) {
//     console.log(el);
//   }
// });
// ........................

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
// function solution(string) {
//   let arrStr = string.split("");
//   let arr = string.toUpperCase().split("");
//   let el = "";
//   for (let index = 0; index < arrStr.length; index++) {
//     if (arrStr[index] !== arr[index]) {
//       el += arrStr[index];
//     } else {
//       el += " " + arrStr[index];
//     }
//   }
//   return el;
// }
// console.log(solution("camelCasing"));

// solution("camelCasing");

// ЗАМЕНИТЬ ОДИНОЧНЫЕ СИМВОЛЫ В СТРОКЕ НА ( А ПОВТОРЯЮЩИЕСЯ НА )
// МОЁ РЕШЕНИЕ
// function duplicateEncode(word) {
//   let arr = [];
//   let w = word.toLowerCase();
//   for (const element of word.toLowerCase()) {
//     w.replace(element, "").includes(element) ? arr.push(")") : arr.push("(");
//     // console.log(w);
//     // console.log(word.includes(element));
//   }
//   return arr.join("");
// }
// console.log(duplicateEncode("Dind"));
//  КЛАССНОЕ РЕШЕНИЕ,,,,,,,,,,,,,,,,,,решение с ластиндекс,,,,,,,,,,,,,,
// function duplicateEncode(word){
//   return word
//     .toLowerCase()
//     .split('')
//     .map( function (a, i, w) {
//       return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
//     })
//     .join('');
// }
