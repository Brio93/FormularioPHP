$(document).ready(function(){
    $('#btnSend').click(function(){
        
        var errores = '';

        //Validando Nombre==================================
        if( $('#names').val() == '' ){
            errores += '<p>Escriba un Nombre</p>';
            $('#names').css("border-bottom-color", "#F14B4B");
        }else{
            $('#names').css("border-bottom-color", "#D1D1D1");
        }

        //Validando Correo Electronico====================== 
        if( $('#email').val() == '' ){
            errores += '<p>Escriba un Correo Electronico</p>';
            $('#email').css("border-bottom-color", "#F14B4B"); 
        }else{
            $('#email').css("border-bottom-color", "#D1D1D1");
        }

        //Validando Mensaje=================================
        if( $('#mensaje').val() == '' ){
            errores += '<p>Escriba un Correo Electronico</p>';
            $('#mensaje').css("border-bottom-color", "#F14B4B"); 
        }else{
            $('#mensaje').css("border-bottom-color", "#D1D1D1");
        }
        
        //Enviando Mensaje==================================
        if(errores == '' == false){
            var mensajeModal = '<div class="modal_wrap">'+
                                '<div class="mensaje_modal">'+
                                    '<h3>Errores Encontrados</h3>'+
                                        errores+
                                    '<span id="btnClose">Cerrar</span>'+
                                '</div>'+
                               '</div>';
            $('body').append(mensajeModal);
        }

        //Cerrando Modal===================================
        $('#btnClose').click(function(){
            $('.modal_wrap').remove();
        });
    });
});