document.addEventListener("DOMContentLoaded", function() {
  const toggler = document.querySelector(".nav--toggler");
  const nav = document.querySelector(".nav");
  
  toggler.addEventListener("click", function () {
      nav.classList.toggle("collapsible--expanded");
  });
});
