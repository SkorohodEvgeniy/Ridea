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
  $(".slider__first--lists").slick({
    autoplay: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    dots: true,
  });
});

/*----------Slider Catalog Home-----------*/
$(document).ready(function () {
  $(".catalog__home--lists").slick({
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 2,
    dots: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          rows: 2,
        },
      },
    ],
  });
});

/*----------Slider Blog Home-----------*/
$(document).ready(function () {
  $(".blog__body--lists").slick({
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    dots: true,
  });
});
