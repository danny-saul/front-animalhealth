$(function(){

    init();

    function init(){
        let sesion = JSON.parse(sessionStorage.getItem("sesion"));

        if(sesion){
            redirigir(sesion.rol_id);
        }else{
            loguearse();
        }
        
    }

    function loguearse(){
        $('#btn-ingresar').click(function(e){
            e.preventDefault();

            let correo = $('#dato-correo').val();
            let clave = $('#dato-clave').val();
        
            let json = {
                "credenciales":{
                    "entrada":correo, 
                    "clave": clave
                }
            };

            if(validar(correo, clave)){
                ajax(json);
           }
           
        });
    }

    function ajax(data){

        $.ajax({
            url : urlServidor + 'usuario/login',
            data : "data=" + JSON.stringify(data),
            type : 'POST',
            dataType : 'json',
            success : function(response) {
                 console.log(response);
                
               if(response.status){
                   //console.log(response.status);
                    let sesion = response.usuario;
                    let doctor_id = response.doctor;

                   
                    sessionStorage.setItem('sesion', JSON.stringify(sesion));
                    sessionStorage.setItem('sesion-2', JSON.stringify(doctor_id));

                    redirigir(sesion.roles.id);

               }else{
                 /*    new Toast({
                        message: response.mensaje,
                        type: 'danger'
                    }); */ 
                    alert(response.mensaje);
               }
            },
            error : function(xhr, status) {
                console.log('Disculpe, existió un problema');
            },
            complete : function(xhr, status) {
                // console.log('Petición realizada');
            }
        });
    }
    
    function validar(correo, clave){
        if(correo.length == 0){
          /*   new Toast({
                message: 'Ingrese una cédula',
                type: 'danger'
            }); */
            alert(' Ingrese correo');
            return false;
        }else
        if(clave.length == 0){
           /*  new Toast({
                message: 'Ingrese una clave',
                type: 'danger'
            }); */
            alert(' Ingrese clave');
            return false;
        }else
        {
            return true;
        }
    }

  
    function redirigir(rol){
        switch(rol){
            case 1:
                window.location = urlCliente  + 'inicio/administrador';
                break;
            
            case 2:
                window.location = urlCliente  + 'inicio/recepcionista';
                break;
            
            case 3: 
                window.location = urlCliente  + 'inicio/doctor';
                break;

            case 4: 
                window.location = urlCliente  + 'inicio/asistente';
                break; 

            case 5: 
                window.location = urlCliente  + 'inicio/cliente';
                break; 
                  
            
            default:
                 window.location = urlCliente  + 'inicio/administrador';
                 break;
        }
    }
})