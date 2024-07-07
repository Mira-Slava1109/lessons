"use strict"
//  Завдання №1

let someVar = 0;
++someVar;

if (someVar) {
   console.log(someVar);
}

//  Завдання 

for (let i = 1; i <= 10; i++) {
   console.log(`Пункт №${i}`)
}

//  Завдання №3

function calcDividing(a, b) {
   const result = a / b
   if (Number.isNaN(result)) {
      return `Дані помилкові`
   }
   else if (b === 0) {
      return `Результат ділення: На нуль ділити не можна!`
   }
   else {
      return `Результат ділення: ${result}`

   }
}
console.log(calcDividing(0, ""));
console.log(calcDividing(40, 0));
console.log(calcDividing("", ""));
console.log(calcDividing(40, 2));
console.log(calcDividing("40", "Василь"));
console.log(calcDividing());

//  Завдання №5

let someArray = ["Hello", true, 10, undefined, "27"]
someArray.forEach((item) => {
   if (item === 10) {
      console.log(item);
   }
})

// або

//  Код знайшла в інтернеті )))
const titleText = "Урок №22 (Основи JavaScript. Частина №2)";
const titleElement = document.getElementById("title");
let charIndex = 0;

function typeTitle() {
   if (charIndex < titleText.length) {
      titleElement.textContent += titleText.charAt(charIndex);
      charIndex++;
      setTimeout(typeTitle, 100); // Затримка між символами
   }
}

typeTitle();
