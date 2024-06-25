// document.addEventListener("DOMContentLoaded", function() {
//   const toggler = document.querySelector(".nav__toggler");
//   const nav = document.querySelector(".nav");
  
//   toggler.addEventListener("click", function () {
//       nav.classList.toggle("collapsible--expanded");
//   });
// });
document.addEventListener('DOMContentLoaded', function() {
  const navToggler = document.querySelector('.nav__toggler');
  const nav = document.querySelector('.nav');

  navToggler.addEventListener('click', function() {
      console.log('Toggler clicked'); // Debugging log
      nav.classList.toggle('collapsible--expanded');
  });
});
