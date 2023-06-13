// ----------------------- Burger-menu-----------------------
const burger = document.querySelector(".burger");
const headerMenu = document.querySelector(".header__content-nav");

burger.addEventListener("click", function () {
    this.classList.toggle("active");
    headerMenu.classList.toggle("open");
});