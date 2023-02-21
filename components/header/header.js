class Header {
    smoothNavigation() {
        let menuLinks = document.querySelectorAll('._smooth-link[data-goto]');
        if(menuLinks.length != 0) {
            for(let menuLink of menuLinks) {
                menuLink.addEventListener('click', function(event) {
                    let target = event.target;
                    if(target.dataset.goto && document.querySelector(target.dataset.goto)) {
                        const gotoBlock = document.querySelector(target.dataset.goto)
                        const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset;

                        window.scrollTo({
                            top: gotoBlockValue,
                            behavior: 'smooth'
                        })
                        event.preventDefault();
                    }
                })
            }
        }
    };

    addMenuBurger() {
        let menuBurger = document.querySelector('.header__icon')
        menuBurger.addEventListener('click', function() {
            this.classList.toggle('header__icon_clicked')
            this.previousElementSibling.classList.toggle('logo_clicked')
            this.nextElementSibling.classList.toggle('header__nav_clicked')
            this.parentNode.classList.toggle('header_clicked')
        })
    }
};

export default new Header();