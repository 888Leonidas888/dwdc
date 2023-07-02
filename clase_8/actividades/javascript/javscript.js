// alert("Bienvenido a mi web site");

const menu = document.querySelector("button.button-menu-toggle");
menu.addEventListener("click", function () {
  document.querySelector(".nav-links").classList.toggle("nav-links-responsive");
});
