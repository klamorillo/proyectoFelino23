 // Agrega el script para manejar el comportamiento sticky
 window.onscroll = function() { stickyNavbar() };

 var navbar = document.querySelector('.navbar');
 var sticky = navbar.offsetTop;

 function stickyNavbar() {
     if (window.pageYOffset >= sticky) {
         navbar.classList.add('sticky');
     } else {
         navbar.classList.remove('sticky');
     }
 }


 