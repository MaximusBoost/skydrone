import Swiper, {Navigation, Pagination, Autoplay, EffectFade} from 'swiper';
import mySwiper from './components/swiper/swipper.js'
Swiper.use([Navigation, Pagination, Autoplay, EffectFade]);
let swiper = new Swiper('.image-slider', {
    modules: [Navigation,Pagination],
    slidesPerView: 'auto',
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    autoHeight: true,
    loop: true,
    speed: 500,
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    }
})

// mySwiper.addPagination()
let links = document.querySelectorAll('.navigation-menu__link')
// let sliders = document.querySelectorAll('.swiper-slide')
for(let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function() {
        swiper.slideTo(i,300,true);
        return false;
    })
}