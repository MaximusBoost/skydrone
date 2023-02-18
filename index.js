import Swiper, {Navigation, Pagination, Autoplay, EffectFade} from 'swiper';
Swiper.use([Navigation, Pagination, Autoplay, EffectFade]);
new Swiper('.image-slider', {
    modules: [Navigation,Pagination],
    slidesPerView: 'auto',
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    autoHeight: true,
    loop: true,
    speed: 2500,
    effect: 'fade',
    fadeEffect: {
        crossFade: true,
    },
})