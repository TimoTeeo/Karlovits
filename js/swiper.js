// import Swiper from "swiper";

const swiper = new Swiper('.mySwiper', {
    spaceBetween: 10,
    slidesPerView: 4.2,
    // freeMode: true,
    watchSlidesProgress: true
})

const swiperThumb = new Swiper('.mySwiper2', {
    grabCursor: true,
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    
    thumbs: {
      swiper: swiper,
    },
    zoom: {
        maxRatio: 1.5,
        minRation: 1
    },
})