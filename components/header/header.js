class Header {
    constructor() {
        this.menuBurger = document.querySelector('.header__icon');
        this.listenerMenuBurger = ''
    }
    smoothNavigation() {
        let menuLinks = document.querySelectorAll('._smooth-link[data-goto]');
        if(menuLinks.length != 0) {
            for(let menuLink of menuLinks) {
                menuLink.addEventListener('click', (event) => {
                    let target = event.target;
                    if(target.dataset.goto && document.querySelector(target.dataset.goto)) {
                        const gotoBlock = document.querySelector(target.dataset.goto)
                        const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset;

                        window.scrollTo({
                            top: gotoBlockValue,
                            behavior: 'smooth'
                        })
                        event.preventDefault();
                        if(this.menuBurger.nextElementSibling.classList.contains('header__nav_clicked')){
                            this.listenerMenuBurger()
                        }
                    }
                })
                


                
            }
        }
    };

    addMenuBurger() {
        
        this.menuBurger.addEventListener('click', this.listenerMenuBurger = () => {
            document.body.classList.toggle('_lock')
            this.menuBurger.classList.toggle('header__icon_clicked')
            this.menuBurger.previousElementSibling.classList.toggle('logo_clicked')
            this.menuBurger.nextElementSibling.classList.toggle('header__nav_clicked')
            this.menuBurger.parentNode.classList.toggle('header_clicked')
            
        })
    }
};

export default new Header();