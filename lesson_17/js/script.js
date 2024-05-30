
document.addEventListener('click', function (e) {
   const targetElement = e.target;
   if (targetElement.closest('.menu-icon')) {
      document.documentElement.classList.toggle('menu-open');
   }
});
document.addEventListener('click', function (e) {
   const targetElement = e.target;
   if (targetElement.closest('.lang__menu')) {
      document.documentElement.classList.toggle('lang__open');
   }
});
document.addEventListener('click', function (e) {
   const targetElement = e.target;
   if (targetElement.closest('.menu-phone')) {
      document.documentElement.classList.toggle('menu-phone-open');
   }
});
document.addEventListener('click', function (e) {
   const targetElement = e.target;
   if (targetElement.closest('.menu-phone-icon')) {
      document.documentElement.classList.toggle('menu-phone-icon-open');
   }
});
document.addEventListener('click', function (e) {
   const targetElement = e.target;
   if (targetElement.closest('.action-icon')) {
      document.documentElement.classList.toggle('action-icon-open');
   }
});