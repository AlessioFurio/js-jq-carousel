$(document).ready(function(){


                        //ARROW-NEXT//
    $('.arrowNext i').click(function(){ // intercetto il click di .arrowNext i
        var sliderImg = $('img.active'); // salvo nella var

        sliderImg.removeClass('active'); // al click, rimuovo la classe active
        if (sliderImg.next('img').length) {  //prima di aggiungere, verifico che dopo img corrente ci sia un' altra img
            sliderImg.next('img').addClass('active'); // se si, passo la classe active alla img successiva
        }
        else {
            $('.slider :first-child').addClass('active'); // se non c'e', assegno la classe active alla prima img in modo da poter ricominciare a sfogliare lo slider
        }
    });


                    //ARROW-PREV//
    $('.arrowPrev i').click(function(){
        var sliderImg = $('img.active');

        sliderImg.removeClass('active');
        if (sliderImg.prev().length) {
            sliderImg.prev().addClass('active');
        }
        else {
            $('.slider :last-of-type').addClass('active');
        }
    });
});
