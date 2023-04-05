$(document).ready(function(){
    $(window).resize(function() {
        if ($(window).width() < 576) {
            $('.ocultar').hide();
        } else {
            $('.ocultar').show();
        }
    });

    $('[data-toggle="tooltip"]').tooltip(
    
    );

    $(".viajecito").dblclick(function(){
        $(this).css({
            "color":"red"
        });
        });
    
    
    //fin principal
    });   