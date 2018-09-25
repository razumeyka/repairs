 $(document).ready(function(){

//mobile menu   

    $( '.burger' ).click( function() { 
        $( '.navbar' ).slideToggle();
        $( '.burger' ).toggleClass( 'active' ); 
    });  
     
    $('.menu li' ).click(function(){
        $(this).find('.sub-menu').slideToggle(500);
    });
         
//mobile menu 
     
    $(".wpcf7-tel").mask("8(999) 999-99-99");
     
//portfolio carousel
    $('.carousel .next,.carousel .prev').click(function(){
        console.log('click carousel');
        var countslides=jQuery('.review_container').children().children().length-Math.round(parseFloat(jQuery('.review_wrapper').css('width'))/parseFloat(jQuery('.one_doc').css('width')));
        var slide=$(this).closest('.carousel').data('slide');
        console.log(countslides);
        if($(this).hasClass('next')){
            slide++;
            if(slide>countslides)slide=0;
        }
        if($(this).hasClass('prev')){
            slide--;
            if(slide<0)slide=countslides;
        }
         $(this).closest('.carousel').find('.long').css('margin-left','-'+(slide*25)+'%');
		$(this).closest('.carousel').data('slide',slide);
    });
     
//question-answer
     
    $(".answer").hide();
    $('.question').click(function(){
            $(this).next().slideToggle(500);
            $(this).toggleClass('active');
    });
});