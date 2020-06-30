$(document).ready(function () {

    // Modal
    $('.header__button').on('click', () => {
        $('.modal').fadeIn().attr('style', 'display:flex');
    })

    $('.s-hero__button').on('click', () => {
        $('.modal').fadeIn().attr('style', 'display:flex');
    })

    $('.modal__close').on('click', () => {
        $('.modal').fadeOut();
    })


    // burger
    $('.burger-menu-icon').on('click', () => {
        $('.burger-menu').fadeIn();
    })

    $('.burger-menu-modal__close').on('click', () => {
        $('.burger-menu').fadeOut();
    })


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

    $('.owl-carousel__s-hero').owlCarousel({
        loop: true,
        margin: 25,
        // navText: ["<img src='assets/img/svg/slider-arrow-prev.svg'>", "<img src='assets/img/svg/slider-arrow-next.svg'>"],
        nav: false,
        dots: false,
        responsive: {
            0: {
                items: 1
            }
        }
    })


    $('.owl-carousel__s-clients').owlCarousel({
        loop: true,
        margin: 25,
        navText: ["<img src='assets/img/svg/slider-arrow-prev.svg'>", "<img src='assets/img/svg/slider-arrow-next.svg'>"],
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 3
            },

        }
    })

    $('.page-slider').owlCarousel({
        loop: true,
        margin: 22,
        navText: ["<img src='assets/img/svg/slider-arrow-prev-gray.svg'>", "<img src='assets/img/svg/slider-arrow-next-gray.svg'>"],
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 3,
            }
        }
    })

});





let swiperClients = new Swiper('.s-clients__swiper-container', {
    slidesPerView: 1,
    spaceBetween: 15,
    centeredSlides: true,
    loop: true,
    navigation: false,
    allowTouchMove: true,
    breakpoints: {
        768: {
            slidesPerView: 3,
            spaceBetween: 25,
            centeredSlides: false,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        },
    }
});

let swiperCertificates = new Swiper('.s-certificates__swiper-container', {
    slidesPerView: 1,
    spaceBetween: 15,
    centeredSlides: true,
    loop: true,
    navigation: false,
    allowTouchMove: true,
    breakpoints: {
        768: {
            slidesPerView: 4,
            spaceBetween: 35,
            centeredSlides: false,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        },
    }
});

let swiperReviews = new Swiper('.s-reviews__swiper-container', {
    slidesPerView: 1,
    spaceBetween: 15,
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
});

let swiperProduction = new Swiper('.p-production__swiper-container', {
    slidesPerView: 2,
    spaceBetween: 15,
    centeredSlides: true,
    loop: true,
    navigation: false,
    allowTouchMove: true,
    breakpoints: {
        768: {
            slidesPerView: 3,
            spaceBetween: 35,
            centeredSlides: false,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        },
    }
});

let baseSlider = document.querySelectorAll('.base-slider__swiper-container');
baseSlider.forEach((el) => {
    let swiperProduction = new Swiper(el, {
        slidesPerView: 1,
        spaceBetween: 15,
        centeredSlides: true,
        loop: true,
        navigation: false,
        allowTouchMove: true,
        breakpoints: {
            768: {
                slidesPerView: 3,
                spaceBetween: 35,
                centeredSlides: false,
                navigation: {
                    prevEl: el.querySelector('.swiper-button-prev'),
                    nextEl: el.querySelector('.swiper-button-next')
                },
            },
        }
    });
})

