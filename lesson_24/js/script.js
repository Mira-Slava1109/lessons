"use strict"
//Завдання №1

// const items = document.querySelectorAll(`.item`)

// items.forEach(item => {
//    item.addEventListener("click", () => {
//       item.classList.toggle(`active`)
//    })
// })

document.addEventListener("click", documentAction)

function documentAction(e) {
   const elementTarget = e.target
   if (elementTarget.closest(`.item`)) {
      const itemTarget = elementTarget.closest(`.item`)
      elementTarget.classList.toggle(`active`)
   }
}

//Завдання №2

window.addEventListener(`load`, () => document.body.classList.add(`loaded`))

// Кнопка перезавантаження

document.querySelector(`.task__button`).addEventListener("click", () => location.reload())

//Завдання №3

const header = document.querySelector(`.header`)
const footer = document.querySelector('.footer')
if (header && footer) {
   header.addEventListener('mouseover', () => {
      footer.style.backgroundColor = 'grey'
   })
   header.addEventListener('mouseleave', () => {
      footer.style.backgroundColor = ``
   })
}

//Завдання №4

const options = {
   root: null,
   rootMargin: "0px 0px 0px 0px",
   threshold: 1,
}

const callback = (entries, observer) => {
   entries.forEach((entry) => {
      item.setAttribute("data-number", "7")
      const number = parseInt(item.dataset.number)
      item.setAttribute("data-delay", "700")
      const delay = parseInt(item.dataset.delay)
      const currentElement = entry.target
      if (entry.isIntersecting) {
         let i = 0
         let timer = setInterval(() => {
            currentElement.textContent = `${i}`
            i === number ? clearInterval(timer) : null
            ++i
         }, delay)
         observer.unobserve(currentElement)
      }
   })
}

const observer = new IntersectionObserver(callback, options);
const item = document.querySelector(".item--count");
if (item) {
   observer.observe(item);
}

