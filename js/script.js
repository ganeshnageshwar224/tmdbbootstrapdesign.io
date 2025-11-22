// First small slider
var swiper1 = new Swiper(".mySwiper", {
    loop: false,
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 20,

    pagination: {
        el: ".swiper-pagination-1",
        clickable: true,
    },
    
    navigation: {
        nextEl: ".swiper-next-1",
        prevEl: ".swiper-prev-1",
    }
});

// Second big slider
var swiper2 = new Swiper(".myCardsSwiper", {
    loop: true,
    slidesPerView: 4,
    slidesPerGroup: 1,
    spaceBetween: 20,

    pagination: {
        el: ".swiper-pagination-2",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-next-2",
        prevEl: ".swiper-prev-2",
    },

    breakpoints: {
        0: { slidesPerView: 1 },
        576: { slidesPerView: 2 },
        768: { slidesPerView: 3 },
        992: { slidesPerView: 4 }
    }
});
