$(document).ready(function () {

    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        asNavFor: '.slider-nav'
    });

    $('.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: false,
        focusOnSelect: true
    });


    $('.owl-carousel__s-clients').owlCarousel({
        loop:true,
        margin: 25,
        navText: ["<img src='assets/img/svg/slider-arrow-prev.svg'>", "<img src='assets/img/svg/slider-arrow-next.svg'>"],
        nav:true,
        dots: false,
        responsive:{
            0:{
                items:3
            },
            
        }
    })

    $('.owl-carousel__s-partners').owlCarousel({
        loop:true,
        margin: 22,
        navText: ["<img src='assets/img/svg/slider-arrow-prev-gray.svg'>", "<img src='assets/img/svg/slider-arrow-next-gray.svg'>"],
        nav:true,
        dots: false,
        responsive:{
            0:{
                items:4
            },
            
        }
    })

});

