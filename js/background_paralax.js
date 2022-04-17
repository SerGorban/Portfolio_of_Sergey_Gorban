"use strict"

document.addEventListener('DOMContentLoaded', function() {

    const paralaxBackground = document.querySelector('.parallax');

    if (paralaxBackground) {
        const paralaxItem = document.querySelector('.parallax__item');
        const coefficientParalaxItem = 20;
        const speed = 0.05;

        let positionX = 0, positionY = 0;
        let coordXprocent = 0, coordYprocent = 0;

        function setMouseParallaxStyle() {
            const distX = coordXprocent - positionX;
            const distY = coordYprocent - positionY;

            positionX = positionX + (distX * speed);
            positionY = positionY + (distY * speed);

            paralaxItem.style.cssText = `transform: translate(${positionX / coefficientParalaxItem}%,${positionY / coefficientParalaxItem}%);`;
            
            requestAnimationFrame(setMouseParallaxStyle);
        }
        setMouseParallaxStyle();

        paralaxBackground.addEventListener("mousemove", function (e) {
            
            const parallaxWidth = paralaxBackground.offsetWidth;
            const parallaxHeight = paralaxBackground.offsetHeight;

            const coordX = e.pageX - parallaxWidth / 2;
            const coordY = e.pageY - parallaxHeight / 2;

            coordXprocent = coordX / parallaxWidth * 100;
            coordYprocent = coordY / parallaxHeight * 100;
        });
    }
});