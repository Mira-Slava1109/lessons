"use strict"
//  Завдання №1

const bodyElement = document.body
console.log(bodyElement);

//  Завдання № 2

function addList(item = 5) {
   const ulElement = document.createElement('ul')
   for (let i = 1; i <= item; i++) {
      const liElement= document.createElement('li')
      liElement.textContent = `Item ${i}`
      ulElement.append(liElement)
   }
   // document.body.prepend(ulElement)
   bodyElement.insertAdjacentElement("beforeend", ulElement)
}
// За замовченням
addList()
//  Інша кількість елементів
addList(3)

//  Завдання №3

bodyElement.classList.add(`loaded`)

if (bodyElement.classList.contains(`loaded`)) {
   // bodyElement.style.color = `green`
}

//  Завдання №4

const items = document.querySelectorAll('.item');
if (items.length) {
	items.forEach((item, index) => {
		item.classList.add('active');
		item.textContent = `Елемент №${index + 1}`
	});
}
console.log(items);

//  Завдання №5

const button = document.querySelector('.task__button')
function scrollToBlock(element) {
	const block = element.dataset.scroll;
	element.scrollIntoView({
		block: "start",
		inline: "nearest",
		behavior: "smooth"
	});
}
scrollToBlock(button);

//  Завдання №6

const link = document.querySelector('.task__link');
link.dataset.Attribute = 100;
const linkAttribute = parseFloat(link.dataset.Attribute)
if (linkAttribute < 200) {
	link.style.color = 'red';
}