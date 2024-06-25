"use strict"

//  Оголошення зміної
let userName
//  Присвоєння змінній значення
userName = `Mira`
console.log(userName)
// оператор typeof
console.log(typeof userName);
//  Копіювання значення
let number = 18
console.log(number)

let othernumber
othernumber = number
console.log(typeof othernumber)
console.log(othernumber)

// Визначення довжини стрічки

let someString = `Hello, how are you?`
console.log(typeof someString);
console.log(someString.length);

//  Пошук в усьому рядку. Повертає булеве значення.Таке слово є, тому в консоль повертає "true"

console.log( someString.includes(`how`));
//  Починається з. Повертає булеве значення. Немає значення яке починається з `ow`, тому "false"

console.log(someString.startsWith(`ow`));
// Отримання частини рядка

let someNewString = someString.slice(5, 10);
console.log(someNewString);
// Пошук та заміна

someString = someString.replace(`Hello`, `Hi`)
console.log(someString);

let someDay = 25
let someMonth = `June`
let someDate = `Day: ${someDay}, Month: ${someMonth}`
console.log(someDate);

// Методи чисел
//  Округлення в меньшу сторону
let someNum = 17.6
console.log(Math.floor(someNum))

//  Округлення в більшу сторону
console.log(Math.round(someNum))

// Модуль числа
// Math.abs(), яка повертає абсолютне значення числа (тобто відстань від нуля без урахування знаку).

console.log(Math.abs(someNum))

// Рандом числа від 0 до 1
console.log(Math.random())

//  Виведення в консоль найбільшого та найменьшого з переданих чисел
console.log(Math.max(0.5, 17, -4))
console.log(Math.min(0.1, -4, 32))

// Оперетор " - "

let number1 = 34
let number2 = 12
let varRes = number1 - number2
console.log(varRes)

// Оперетор множення
let varRes1 = number1 * number2
console.log(varRes1)

// Оперетор ділення
let varRes2 = number1 / number2
console.log(varRes2)


// Взяття залишку від ділення (%)

let varRes3 = number1 % number2
console.log(typeof varRes3)
console.log(varRes3)

// Унарний операнд " + " перетворює рядок "34" в число
let num = +"34"
console.log(num);

// Інкремент та декремент. Збільшення або зменьшення значення на одиницю

++number1
--number2

console.log(number1)
console.log(number2)

// Комбінація операторів

let number3 = 7
// До значення 7 додалось значення 5. Отже в консоль поверне 12.
number3 += 5

console.log(number3)


//  ДЗ №21 , задача №3
let varOne = 20
let varTwo = `20`

let varSumm = varOne + varTwo
console.log(varSumm)
