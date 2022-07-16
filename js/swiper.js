var bannerSwiper = new Swiper(".bannerSwiper", {
    pagination: {
        el: ".banner-swiper-pagination",
        type: 'custom',
        renderCustom: function (swiper, current, total) {
            return ('0' + current) + '/' + ('0' + total);
        }
    },
    navigation: {
        nextEl: ".banner-swiper-button-next",
        prevEl: ".banner-swiper-button-prev",
    },
});

var topNewsSwiper = new Swiper(".topNewsSwiper", {
    navigation: {
        nextEl: ".topnews-swiper-button-next",
        prevEl: ".topnews-swiper-button-prev",
    },
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
        rotate: 0,
        stretch: '40%',
        depth: 350,
        modifier: 1,
        slideShadows: false,
    },
    initialSlide: 1,
});

var noticeSwiper = new Swiper(".noticeSwiper", {
    pagination: {
        el: ".notice-swiper-pagination",
        type: 'custom',
        renderCustom: function (swiper, current, total) {
            return ('0' + current) + '/' + ('0' + total);
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
    slidesPerGroup: 2,
    spaceBetween: 30,
    navigation: {
        nextEl: ".feature-swiper-button-next",
        prevEl: ".feature-swiper-button-prev",
    },
});
