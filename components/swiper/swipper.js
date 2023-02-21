import Swiper, {Navigation, Pagination, Autoplay, EffectFade} from 'swiper';
Swiper.use([Navigation, Pagination, Autoplay, EffectFade]);
class mySwiper {
    addPagination() {     
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

        let links = document.querySelectorAll('.navigation-menu__link')
        for(let i = 0; i < links.length; i++) {
            links[i].addEventListener('click', function() {
            swiper.slideTo(i,300,true);
            return false;
            });
        };
    };
};

export default new mySwiper();