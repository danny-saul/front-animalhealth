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
                   console.log(response.status);
                    let sesion = response.usuario;
                    let doctor_id = response.doctor;
                    let cliente_id = response.cliente;

     
                    sessionStorage.setItem('sesion', JSON.stringify(sesion));
                    sessionStorage.setItem('sesion-2', JSON.stringify(doctor_id));
                    sessionStorage.setItem('sesion-3', JSON.stringify(cliente_id));


                    redirigir(sesion.roles.id);

               }else{
                 /*    new Toast({
                        message: response.mensaje,
                        type: 'danger'
                    }); */ 
                    toastr.options = {
                        "closeButton": true,
                        "preventDuplicates": true,
                        "positionClass": "toast-top-center",
                    };
        
                    toastr["error"](response.mensaje, "Usuario")

                    //alert(response.mensaje);
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
            toastr.options = {
                "closeButton": true,
                "preventDuplicates": true,
                "positionClass": "toast-top-center",
            };
            toastr["error"]('Ingrese Correo', "Login")
          
            return false;
        }else
        if(clave.length == 0){
            toastr.options = {
                "closeButton": true,
                "preventDuplicates": true,
                "positionClass": "toast-top-center",
            };
            toastr["error"]('Ingrese su contraseña', "Login")
         
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