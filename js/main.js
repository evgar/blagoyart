$(document).ready(function () {
    $('.slider').slick({
        dots: true,
        fade: true,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 1000,
        responsive: true,
        prevArrow: '.slider__prev-button',
        nextArrow: '.slider__next-button',
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    dots: false
                }
            },
        ]
    });
});