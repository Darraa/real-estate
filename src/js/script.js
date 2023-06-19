// ----------------------- Burger-menu-----------------------
const burger = document.querySelector(".burger");
const headerMenu = document.querySelector(".header__content-nav");

burger.addEventListener("click", function () {
    this.classList.toggle("active");
    headerMenu.classList.toggle("open");
});

// ----------------------- Carousel-----------------------

var owl = $(".owl-carousel");
owl.owlCarousel({
    items: 3,
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1,
            nav: false,
        },
        600: {
            items: 2,
            nav: false,
        },
        1000: {
            items: 3,
            nav: false,
        },
    },
});
$(".play").on("click", function () {
    owl.trigger("play.owl.autoplay", [2000]);
});
$(".stop").on("click", function () {
    owl.trigger("stop.owl.autoplay");
});
