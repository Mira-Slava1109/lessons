
document.addEventListener('click', function (e) {
   const targetElement = e.target;
   if (targetElement.closest('.menu-icon')) {
      document.documentElement.classList.toggle('menu-open');
   }
});
document.addEventListener('click', function (e) {
   const targetElement = e.target;
   if (targetElement.closest('.button__icon-search')) {
      document.documentElement.classList.toggle('search__open');
   }
});

const scrollToTop = document.querySelector('.bottom-footer__scroll-up');

scrollToTop.addEventListener("click",(e) =>{
   e.preventDefault()
   window.scroll({top: 0, behavior: "smooth"})
})