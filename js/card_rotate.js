"use strict"

const cards = document.querySelectorAll('.card-rotate');

if (cards) {
    for (let card of cards) {
        
        card.addEventListener('mouseover', () => {
            const cardСhildren = card.children;
            //console.log(cardСhildren);
            for (let innerElement of cardСhildren) {
                if (innerElement.hasAttribute('data-perspective-element-coords')) {
                    const coords = innerElement.getAttribute('data-perspective-element-coords').split(',');
                    innerElement.style.transform = `translate3d(${coords[0]}px, ${coords[1]}px, ${coords[2]}px)`;
                    card.style.transformStyle = 'preserve-3d';
                }
            } 
        }); 
        card.addEventListener('mouseout', cardBack);  
        card.addEventListener('mousemove', cardRotate);

        function cardRotate() {
            const coefficient = card.getAttribute('data-rotate-coefficient');
            let cardСoord = card.getBoundingClientRect();
            let x = (event.pageX - cardСoord.x - (cardСoord.width / 2)) / coefficient;
            let y = (event.pageY - cardСoord.y - (cardСoord.height / 2)) / coefficient;
            card.style.transform = `rotateY(${x}deg) rotateX(${-y}deg) scale(1.05)`;
            card.style.transition = 'none';
        }
        
        function cardBack() {
            card.style.transform = `rotateY(0deg) rotateX(0deg) scale(1)`;
            card.style.transition = '0.6s all 0s';
            card.style.transformStyle = 'none';
        }
    }
}