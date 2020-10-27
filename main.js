$(document).ready(function(){


                        //ARROW-NEXT//
    $('.arrowNext i').click(function(){ // intercetto il click di .arrowNext i
        var sliderImg = $('img.active'); // salvo nella var
        var bullets = $('span.active');

        sliderImg.removeClass('active'); // al click, rimuovo la classe active
        bullets.removeClass('active');
        if (sliderImg.next('img').length) {  //prima di aggiungere, verifico che dopo img corrente ci sia un' altra img
            sliderImg.next('img').addClass('active'); // se si, passo la classe active alla img successiva
            bullets.next().addClass('active');
        }
        else {
            $('.slider :first-child').addClass('active'); // se non c'e', assegno la classe active alla prima img in modo da poter ricominciare a sfogliare lo slider
        }
    });


                    //ARROW-PREV//
    $('.arrowPrev i').click(function(){
        var sliderImg = $('img.active');
        var bullets = $('span.active');

        sliderImg.removeClass('active');
        bullets.removeClass('active');
        if (sliderImg.prev().length) {
            sliderImg.prev().addClass('active');
            bullets.prev().addClass('active');
        }
        else {
            $('.slider :last-of-type').addClass('active');
        }
    });

                //DARK-MODE//
    $('.BtnDarkMode').click(function(){
        $('body').toggleClass('BodyDarkMode');
        $('.arrowPrev i').toggleClass('ArrowDarkMode');
        $('.arrowNext i').toggleClass('ArrowDarkMode');
        $('.bullets span').toggleClass('BulletsDarkMode');
    });
});
