var bannerSwiper = new Swiper(".bannerSwiper", {
    pagination: {
        el: ".banner-swiper-pagination",
        type: 'custom',
        renderCustom: function (swiper, current, total) {
            return ('0'+current) + '/' + ('0'+ total); 
        }
    },
    navigation: {
        nextEl: ".banner-swiper-button-next",
        prevEl: ".banner-swiper-button-prev",
    },
});

var swiper3 = new Swiper(".mySwiper3", {
    slidesPerView: 3,
    centeredSlides: true,
});

var noticeSwiper = new Swiper(".noticeSwiper", {
    pagination: {
        el: ".notice-swiper-pagination",
        type: 'custom',
        renderCustom: function (swiper, current, total) {
            return ('0'+current) + '/' + ('0'+ total); 
        }
    },
    navigation: {
        nextEl: ".notice-swiper-button-next",
        prevEl: ".notice-swiper-button-prev",
    },
});

var featureSwiper = new Swiper(".featureSwiper", {
    slidesPerView: 2,
    slidesPerColumn: 2,
    slidesPerGroup :2,
    spaceBetween: 30,
    navigation: {
        nextEl: ".feature-swiper-button-next",
        prevEl: ".feature-swiper-button-prev",
    },
});
