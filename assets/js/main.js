/* Menu Burger JS*/
let headerBurger = document.querySelector(".header__burger");
let headerMenu = document.querySelector(".header__menu");
let body = document.getElementsByTagName("body");

function toggleBurgerMenu() {
  headerBurger.classList.toggle("active");
  headerMenu.classList.toggle("active");
  body.classList.toggle("lock");
}

headerBurger.addEventListener("click", toggleBurgerMenu);

/*----------Slider First-----------*/
$(document).ready(function () {
  $(".slider__first--lists").slick({});
});
