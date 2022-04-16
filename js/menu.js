"use strict"

document.addEventListener('DOMContentLoaded', function() {

    const circularMenus = document.querySelectorAll('.circular-menu');

    for (let menu of circularMenus) {
        let itemsMenu = menu.querySelectorAll('.circular-menu__item');
        let buttonMenu = menu.querySelector('.circular-menu__button');

        let active = false;
        
        const length = itemsMenu.length;
        const arc = 2 * Math.PI / length;
        const radius = 45;

        buttonMenu.addEventListener('click', function() {

            active = !active;

            if (active) {
                buttonMenu.classList.add('circular-menu__button_active');
                
                for (let i = 0; i < itemsMenu.length; i++) {
                    const angle = i * arc;
                    const x = radius * Math.cos(angle);
                    const y = radius * Math.sin(angle);

                    itemsMenu[i].style.left = 50 + x + '%';
                    itemsMenu[i].style.top = 50 + y + '%';
                }
            } else {
                buttonMenu.classList.remove('circular-menu__button_active')

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