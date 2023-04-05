$(document).ready(function(){
   //permite que se oculte la seccion de quienes somos en s y xs
    $(window).resize(function() {
        if ($(window).width() < 576) {
            $('.ocultar').hide();
        } else {
            $('.ocultar').show();
        }
    });
//tooltip sobre los iconos en la sección de Quienes somos
    $('[data-toggle="tooltip"]').tooltip(
    
    );
//   dobleclick y cambio a color rojo en viajes chile
    $(".viajecito").dblclick(function(){  
        $(this).css({
            "color":"red"
        });
        });
    //card toggle: cuando haga click sobre el anunciado "Destacados", se esconde el texto
        $("#destacados").click(function () {
            $(".cuerpo").toggle(500);
        });  
    
    //fin principal
    });   