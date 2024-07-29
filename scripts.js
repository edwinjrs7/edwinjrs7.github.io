//menu scroll
window.addEventListener("scroll", function () {
   var header = document.querySelector("header");
   header.classList.toggle("abajo", window.scrollY > 0)
});

//scrollReveal
ScrollReveal({
   reset: true,
   distance: "80px",
   duration: 2000,
   delay: 200
});
ScrollReveal().reveal('.home-content, .headind', { origin: 'top' });
ScrollReveal().reveal('.home-img', { origin: 'bottom' });

//Typed
const typed = new Typed('.multiple-text',{
   strings: ['Desarrollador Web', 'Diseñador UX'],
   typeSpeed: 100,
   backSpeed: 100,
   backDelay: 1000,
   loop: true

});