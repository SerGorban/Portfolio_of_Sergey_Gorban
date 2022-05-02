"use strict"

const cardsGallerys = document.querySelectorAll('.card-rotate-gallery');

if (cardsGallerys) {
    for (let cardsGallery of cardsGallerys) {
        cardsGallery.addEventListener('mouseover', (e) => {
            let targetItem = e.target;
            if (targetItem.closest('.card-rotate')) {
                let card = targetItem.closest('.card-rotate');
                const cardСhildren = card.children;
                for (let innerElement of cardСhildren) {
                    if (innerElement.hasAttribute('data-perspective-element-coords')) {
                        const coords = innerElement.getAttribute('data-perspective-element-coords').split(',');
                        innerElement.style.transform = `translate3d(${coords[0]}px, ${coords[1]}px, ${coords[2]}px)`;
                        card.style.transformStyle = 'preserve-3d';
                    }
                } 
            }
        });

        cardsGallery.addEventListener('mousemove', (e) => {
            let targetItem = e.target;
            if (targetItem.closest('.card-rotate')) {
                let card = targetItem.closest('.card-rotate');
                const coefficient = card.getAttribute('data-rotate-coefficient');
                let cardСoord = card.getBoundingClientRect();
                let x = (event.pageX - cardСoord.x - (cardСoord.width / 2)) / coefficient;
                let y = (event.pageY - cardСoord.y - (cardСoord.height / 2)) / coefficient;
                card.style.transform = `rotateY(${x}deg) rotateX(${-y}deg) scale(1.05)`;
                card.style.transition = 'none';
            }
        });

        cardsGallery.addEventListener('mouseout', (e) => {
            let targetItem = e.target;
            if (targetItem.closest('.card-rotate')) {
                let card = targetItem.closest('.card-rotate');
                card.style.transform = `rotateY(0deg) rotateX(0deg) scale(1)`;
                card.style.transition = '0.6s all 0s';
                card.style.transformStyle = 'none';
            }
        });  
    }
}