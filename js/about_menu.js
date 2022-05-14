const menuConteiner = document.querySelector('.about-menu__conteiner');
const itemsMenu = document.querySelectorAll('.about-menu__item');
const buttonsClockwise = document.querySelector('.about-menu__control-buttons_clockwise');
const buttonsCounterClockwise = document.querySelector('.about-menu__control-buttons_counter-clockwise');
const contentConteiners = document.querySelectorAll('.about-content__conteiner');

const length = itemsMenu.length;
const arc = 2 * Math.PI / length;
const radius = 50;

for (let i = 0; i < itemsMenu.length; i++) {
    const angle = i * arc;
    const x = radius * -Math.cos(angle);
    const y = radius * -Math.sin(angle);
    itemsMenu[i].style.left = 50 + x + '%';
    itemsMenu[i].style.top = 50 + y + '%';    
}

let rotationAngle = 0; 
let nth = 1;
buttonsClockwise.addEventListener('click', function(event) {
    rotationAngle = rotationAngle + 180/length*2;
    menuConteiner.style.transform = `rotate(${rotationAngle}deg)`;
    for (let i = 0; i < itemsMenu.length; i++) {
        itemsMenu[i].style.transform = `translate(-50%, -50%) rotate(${-rotationAngle}deg)`;
    }

    (nth == 1) ? nth = length : nth--;
    contentActive();
});

buttonsCounterClockwise.addEventListener('click', function(event) {
    rotationAngle = rotationAngle - 180/length*2;
    menuConteiner.style.transform = `rotate(${rotationAngle}deg)`;
    for (let i = 0; i < itemsMenu.length; i++) {
        itemsMenu[i].style.transform = `translate(-50%, -50%) rotate(${-rotationAngle}deg)`;
    }

    (nth == length) ? nth = 1 : nth++;
    contentActive();
});

function contentActive() {
    for (let i = 0; i < contentConteiners.length; i++) {
        if (contentConteiners[i].classList.contains(`about-content__conteiner_${nth}`)) {
            contentConteiners[i].classList.add('_active');
        } else {
            contentConteiners[i].classList.remove('_active');
        }  
    }
}

contentActive();