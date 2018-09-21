 $(document).ready(function(){

//mobile menu   

    $( '.burger' ).click( function() { 
        $( '.navbar' ).slideToggle();
        $( '.burger' ).toggleClass( 'active' ); 
    });  
     
    $('.menu li' ).click(function(){
        $(this).find('.submenu').slideToggle(500);
    });
     
//question-answer
     
    $(".answer").hide();
    $('.question').click(function(){
            $(this).next().slideToggle(500);
            $(this).toggleClass('active');
    });
});