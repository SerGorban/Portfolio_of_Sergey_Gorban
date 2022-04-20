"use strict"

document.addEventListener('DOMContentLoaded', function() {

    let isMobile = {
        Android: function() {return navigator.userAgent.match(/Android/i);},
        BlackBerry: function() {return navigator.userAgent.match(/BlackBerry/i);},
        iOS: function() {return navigator.userAgent.match(/iPhone|iPad|iPod/i);},
        Opera: function() {return navigator.userAgent.match(/Opera Mini/i);},
        Windows: function() {return navigator.userAgent.match(/IEMobile/i);},
        any: function() {return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());}
    };

    const circularMenus = document.querySelectorAll('.circular-menu');

    for (let menu of circularMenus) {
        let itemsMenu = menu.querySelectorAll('.circular-menu__item');
        let buttonMenu = menu.querySelector('.circular-menu__button');

        let active = false;
        
        const length = itemsMenu.length;
        const arc = 2 * Math.PI / length;
        const radius = 45;

        buttonMenu.addEventListener('click', function(event) {
            event.preventDefault();
            active = !active;

            if (active) {
                this.classList.add('circular-menu__button_active');
                
                for (let i = 0; i < itemsMenu.length; i++) {
                    const angle = i * arc;
                    const x = radius * Math.cos(angle);
                    const y = radius * Math.sin(angle);
                    itemsMenu[i].style.left = 50 + x + '%';
                    itemsMenu[i].style.top = 50 + y + '%';

                    const namesConteiner = menu.querySelector('.circular-menu__name-item');
                    const namesConteinerLink = menu.querySelector('.circular-menu__name-item a');
                    let name = '';
                    function switchItemsMenu(itemMenu, swtc) {
                        if (swtc) {
                            name = itemMenu.getAttribute('data-name').toUpperCase();
                            namesConteiner.classList.add('_active');
                        } else {
                            name = '';
                            namesConteiner.classList.remove('_active');
                        }
                        namesConteinerLink.innerHTML = name;
                    }
                
                    if (isMobile.any()) {
                        itemsMenu[i].setAttribute('href', '#');
                        itemsMenu[i].addEventListener('click', (event) => {
                            event.preventDefault();

                        });
                        itemsMenu[i].addEventListener('focus', () => {
                            setTimeout(() => {
                                switchItemsMenu(itemsMenu[i], true);
                                let link = itemsMenu[i].getAttribute('data-link');
                                namesConteinerLink.setAttribute('href', link);
                            }, 1);
                            
                        });
                        itemsMenu[i].addEventListener('blur', () => {
                            setTimeout(() => {
                                switchItemsMenu(itemsMenu[i], false);
                            }, 0);
                        });
                            
                    } else {
                        itemsMenu[i].addEventListener('mouseenter', () => {
                            switchItemsMenu(itemsMenu[i], true);
                        });
                        itemsMenu[i].addEventListener('mouseleave', () => {
                            switchItemsMenu(itemsMenu[i], false);
                        });
                    }
                    
                }
            } else {
                this.classList.remove('circular-menu__button_active')

                for (let i = 0; i < itemsMenu.length; i++) {
                    itemsMenu[i].removeAttribute('style');
                }
            }
        });
    }

    /// button shell animate
    const buttonShells = document.querySelectorAll('.button-shell');
    for (let i of buttonShells) {
        let delay =  Math.random() + 's';
        i.style.animationDelay = delay;
    }
});