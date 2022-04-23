"use strict"

const cards = document.querySelectorAll('.card-rotate');

if (cards) {
    for (let card of cards) {
        card.addEventListener('mousemove', cardRotate);
        card.addEventListener('mouseout', cardBack);

        function cardRotate() {
            let cardcoord = card.getBoundingClientRect();
            let x = (event.pageX - cardcoord.x - (cardcoord.width / 2)) / 7;
            let y = (event.pageY - cardcoord.y - (cardcoord.height / 2)) / 7;
            console.log(x, y);
            card.style.transform = `rotateY(${x}deg) rotateX(${y}deg) scale(1.05)`;
            card.style.transition = 'none'
        }

        function cardBack() {
            card.style.transform = `rotateY(0deg) rotateX(0deg) scale(1)`;
            card.style.transition = '0.6s all 0s';
        }
    }
}

