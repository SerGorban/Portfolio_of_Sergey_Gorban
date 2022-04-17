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

        buttonMenu.addEventListener('click', function(event) {
            event.preventDefault()
            active = !active;

            if (active) {
                buttonMenu.classList.add('circular-menu__button_active');
                
                for (let i = 0; i < itemsMenu.length; i++) {
                    const angle = i * arc;
                    const x = radius * Math.cos(angle);
                    const y = radius * Math.sin(angle);
                    itemsMenu[i].style.left = 50 + x + '%';
                    itemsMenu[i].style.top = 50 + y + '%';

                    const namesConteiner = menu.querySelector('.circular-menu__name-item');
                    let name = '';

                    namesConteiner.insertAdjacentHTML("afterbegin", name);

                    itemsMenu[i].addEventListener('mouseenter', function() {
                        name = itemsMenu[i].getAttribute('data-name').toUpperCase();
                        namesConteiner.innerHTML = name;
                        namesConteiner.classList.add('_active');
                    });
                    itemsMenu[i].addEventListener('mouseleave', function() {
                        name = '';
                        namesConteiner.innerHTML = name;
                        namesConteiner.classList.remove('_active');
                    });
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