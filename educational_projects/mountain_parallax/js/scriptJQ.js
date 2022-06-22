$(document).ready(function() {
    $(window).scroll(function(event) {
        let s = $(this).scrollTop();  // прокрученые пиксели
        let w = $(this).outerWidth(); // ширина окна
        let h = $('.content').outerHeight();  // высота контентной части
        let h_b = $('.parallax').outerHeight(); // высота верхнего блока
        let p = s/h*100;  // процент прокрутки всей контентной части
        let p_b = s/h_b*100; // процент прокрутки верхнего блока
        let o = 1-1/100*p_b;  // напрозрачность

        // туман
        let z_1 = 1+(w/10000*p_b);
        $('.parallax__fog').css('transform', 'scale('+z_1+')');
        $('.parallax__fog').css('opacity', o);

        // гора дальняя
        let z_2 = 1+(w/5000000*p);
        $('.parallax__montain_1').css('transform', 'scale('+z_2+')');

        // гора правая
        let hr_1 = w/2000*p_b;
        let z_3 = 1+(w*0.000006*p_b);
        $('.parallax__montain_2').css('transform', 'translate3d('+hr_1+'px, 0, 0) scale('+z_3+')');

        // гора левая
        let hr_2 = w/1500*p_b;
        let z_4 = 1+(w*0.00001*p_b);
        $('.parallax__montain_3').css('transform', 'translate3d('+hr_2+'px, 0, 0) scale('+z_4+')');
    });
});