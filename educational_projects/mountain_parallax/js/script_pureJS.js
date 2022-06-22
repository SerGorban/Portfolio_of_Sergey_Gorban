window.onload = function() {
    window.addEventListener('scroll', function() {
        let picScr = this.pageYOffset;
        let winWidth = window.innerWidth;
        let contHeight = document.querySelector('.content').offsetHeight;
        let parallaxHeight = document.querySelector('.parallax').offsetHeight;
        let percentScroll = picScr/contHeight*100;
        let percentParallax = picScr/parallaxHeight*100;
        let opacityFog = 1-1/100*percentParallax;
        
        // туман
        let zoom_1 = 1+(winWidth/10000*percentParallax);
        document.querySelector('.parallax__fog').style.transform = `scale(${zoom_1})`;
        document.querySelector('.parallax__fog').style.opacity = opacityFog;

        // гора дальняя
        let zoom_2 = 1+(winWidth/5000000*percentScroll);
        document.querySelector('.parallax__montain_1').style.transform = `scale(${zoom_2})`;

        // гора правая
        let hr_1 = winWidth/2000*percentParallax;
        let zoom_3 = 1+(winWidth*0.000006*percentParallax);
        document.querySelector('.parallax__montain_2').style.transform = `translate3d(${hr_1}px, 0, 0) scale(${zoom_3})`;

        // гора левая
        let hr_2 = winWidth/1500*percentParallax;
        let zoom_4 = 1+(winWidth*0.00001*percentParallax);
        document.querySelector('.parallax__montain_3').style.transform = `translate3d(${hr_2}px, 0, 0) scale(${zoom_4})`;
    });
};