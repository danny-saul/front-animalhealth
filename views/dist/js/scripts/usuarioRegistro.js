/* $(function(){ */

    _init();

    function _init(){
        cargarTabla();
        cargarSexo();
        cargarRol();
        guardarUsuario();
        changecedula();
        cargardatosdoctor();
        cargarHorario();
        recuperarsexo();
        recuperarrol();
        editarCargarHorario();
        editandousuarioModal();
    }

    function cargarTabla(){
        tabla = $('#tabla-usuario').DataTable({
            "lengthMenu": [ 5, 10, 25, 75, 100],//mostramos el menú de registros a revisar
            "responsive": true, "lengthChange": false, "autoWidth": false,
            "aProcessing": true,//Activamos el procesamiento del datatables
            "aServerSide": true,//Paginación y filtrado realizados por el servidor
            "ajax":
                {
                    url:  urlServidor + 'usuario/datatable',
                    type : "get",
                    dataType : "json",						
                    error: function(e){
                        console.log(e.responseText);	
                    }
                },
            destroy: true,
            "iDisplayLength": 5,//Paginación
            "language": {
 
			    "sProcessing":     "Procesando...",
			 
			    "sLengthMenu":     "Mostrar _MENU_ registros",
			 
			    "sZeroRecords":    "No se encontraron resultados",
			 
			    "sEmptyTable":     "Ningún dato disponible en esta tabla",
			 
			    "sInfo":           "Mostrando un total de _TOTAL_ registros",
			 
			    "sInfoEmpty":      "Mostrando un total de 0 registros",
			 
			    "sInfoFiltered":   "(filtrado de un total de _MAX_ registros)",
			 
			    "sInfoPostFix":    "",
			 
			    "sSearch":         "Buscar:",
			 
			    "sUrl":            "",
			 
			    "sInfoThousands":  ",",
			 
			    "sLoadingRecords": "Cargando...",
			 
			    "oPaginate": {
			 
			        "sFirst":    "Primero",
			 
			        "sLast":     "Último",
			 
			        "sNext":     "Siguiente",
			 
			        "sPrevious": "Anterior"
			 
			    },
			 
			    "oAria": {
			 
			        "sSortAscending":  ": Activar para ordenar la columna de manera ascendente",
			 
			        "sSortDescending": ": Activar para ordenar la columna de manera descendente"
			 
			    }

			   }//cerrando language
        });
    }

    function cargarSexo(){
        $.ajax({
            url:urlServidor  +'sexo/listar',
            type:'GET',
            dataType:'json',
            success:function(response){
            //    console.log(response);
                if(response.status){
                   let option = '<option value="0">Seleccione Sexo</option>';
                   response.sexo.forEach(element=>{
                    option +=`<option value=${element.id}>${element.tipo}</option>`;
                   });
                   $('#new-sexo').html(option);

                } 
            },
            error : function(jqXHR, status, error) {
                console.log('Disculpe, existió un problema');
            },
            complete : function(jqXHR, status) {
                // console.log('Petición realizada');
            }
        });
    }

    function cargarRol(){
        $.ajax({
            url:urlServidor  +'rol/listar',
            type:'GET',
            dataType:'json',
            success:function(response){
                //console.log(response);

                 if(response.status){
                   let option = '<option value="0">Seleccione Rol</option>';
                   response.rol.forEach(element=>{
                    option +=`<option value=${element.id}>${element.rol}</option>`;
                   });
                   $('#new-rol').html(option);

                }  
            },
            error : function(jqXHR, status, error) {
                console.log('Disculpe, existió un problema');
            },
            complete : function(jqXHR, status) {
                // console.log('Petición realizada');
            }
        });
    }
    
    function validarPersona(json){
        let persona = json.persona;
        let usuario = json.usuario;
        //expresion regular -> validar correo electronico
        var caract = new RegExp(/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/);
        if(persona.cedula.length==0){
            return false;
        }else if(persona.nombre.length==0){
            return false;
        }else if(persona.apellido.length==0){
            return false;
        }else if(usuario.correo.length==0){
            return false;
        }else if(persona.cedula.length<10 || persona.nombre.length <2 || persona.apellido.length <2){
            return false;
        }else if (caract.test(usuario.correo)==false){
            return false;
        }else if (persona.length==0){
            return false;
        }else if(usuario.password.length==0){
            return false;
        }else if (usuario.password2.length==0){
            return false;
        }else if (usuario.password !== usuario.password2){
            toastr.options = {
                "closeButton": true,
                "preventDuplicates": true,
                "positionClass": "toast-top-center",
            };
            toastr["error"]("Las contraseña no coinciden", "Usuario")
            return false;
        }
        else if (!validarcedula(persona.cedula)){
            toastr.options = {
                "closeButton": true,
                "preventDuplicates": true,
                "positionClass": "toast-top-center",
            };
            
            toastr["error"]("La cedula es incorrecta", "Usuario")
            return false; 
        }else {
            return true;

        }
    


        
    }
    
    function validarcedula(cedula){
        if(cedula.length == 10){
        
            //Obtenemos el digito de la region que sonlos dos primeros digitos
            var digito_region = cedula.substring(0,2);
            
            //Pregunto si la region existe ecuador se divide en 24 regiones
            if( digito_region >= 1 && digito_region <=24 ){
              
              // Extraigo el ultimo digito
              var ultimo_digito   = cedula.substring(9,10);
    
              //Agrupo todos los pares y los sumo
              var pares = parseInt(cedula.substring(1,2)) + parseInt(cedula.substring(3,4)) + parseInt(cedula.substring(5,6)) + parseInt(cedula.substring(7,8));
    
              //Agrupo los impares, los multiplico por un factor de 2, si la resultante es > que 9 le restamos el 9 a la resultante
              var numero1 = cedula.substring(0,1);
              var numero1 = (numero1 * 2);
              if( numero1 > 9 ){ var numero1 = (numero1 - 9); }
    
              var numero3 = cedula.substring(2,3);
              var numero3 = (numero3 * 2);
              if( numero3 > 9 ){ var numero3 = (numero3 - 9); }
    
              var numero5 = cedula.substring(4,5);
              var numero5 = (numero5 * 2);
              if( numero5 > 9 ){ var numero5 = (numero5 - 9); }
    
              var numero7 = cedula.substring(6,7);
              var numero7 = (numero7 * 2);
              if( numero7 > 9 ){ var numero7 = (numero7 - 9); }
    
              var numero9 = cedula.substring(8,9);
              var numero9 = (numero9 * 2);
              if( numero9 > 9 ){ var numero9 = (numero9 - 9); }
    
              var impares = numero1 + numero3 + numero5 + numero7 + numero9;
    
              //Suma total
              var suma_total = (pares + impares);
    
              //extraemos el primero digito
              var primer_digito_suma = String(suma_total).substring(0,1);
    
              //Obtenemos la decena inmediata
              var decena = (parseInt(primer_digito_suma) + 1)  * 10;
    
              //Obtenemos la resta de la decena inmediata - la suma_total esto nos da el digito validador
              var digito_validador = decena - suma_total;
    
              //Si el digito validador es = a 10 toma el valor de 0
              if(digito_validador == 10)
                var digito_validador = 0;
    
              //Validamos que el digito validador sea igual al de la cedula
              if(digito_validador == ultimo_digito){
                return true;
              }else{
                return false;
              }
              
            }else{
              // imprimimos en consola si la region no pertenece
              return false;
            }
         }else{
            //imprimimos en consola si la cedula tiene mas o menos de 10 digitos
            return false;
         }    
          
    }

    function changecedula(){
         $('#new-cedula').blur(function(){
             let cedula = $('#new-cedula').val();
             console.log(cedula);
             if(!validarcedula(cedula)){
                toastr.options = {
                    "closeButton": true,
                    "preventDuplicates": true,
                    "positionClass": "toast-top-center",
                };
                
                toastr["error"]("La cedula es invalida", "Usuario")

             } 
         });

    }

    function cargardatosdoctor(){
        $('#new-rol').change(function(){
           let rol_id = $('#new-rol option:selected').val();
           console.log(rol_id);  
           if(rol_id=='1'){
               $('#horario-doctor').addClass('d-none');
           }else if(rol_id=='2'){
                $('#horario-doctor').addClass('d-none');
           }else if(rol_id=='3'){
            $('#horario-doctor').removeClass('d-none');
           }else if(rol_id=='4'){
                $('#horario-doctor').addClass('d-none');
           }
        })
    }

    function cargarHorario(){
        $.ajax({
            url:urlServidor  +'horarios_atencion/listar',
            type:'GET',
            dataType:'json',
            success:function(response){
            //    console.log(response);
                if(response.status){
                   let option = '<option value="0">Seleccione Horario</option>';
                   response.horario.forEach(element=>{
                    option +=`<option value=${element.id}>${element.horaE} ${element.horaS}</option>`;
                   });
                   $('#new-horario').html(option);

                } 
            },
            error : function(jqXHR, status, error) {
                console.log('Disculpe, existió un problema');
            },
            complete : function(jqXHR, status) {
                // console.log('Petición realizada');
            }
        });

    }

    function guardarUsuario(){
         $('#nuevo-usuario').submit(function(e){
            e.preventDefault();
            let roles_id = $('#new-rol option:selected').val();

            let cedula = $('#new-cedula').val();
            let nombre=  $('#new-nombre').val();
            let apellido= $('#new-apellido').val();
            let telefono= $('#new-telefono').val();
            let direccion= $('#new-direccion').val();   
            let sexo_id = $('#new-sexo option:selected').val();
            let usuario= $('#new-usuario').val();  
            let horarios_atencion_id = $('#new-horario option:selected').val();
            let password= $('#new-password').val();   
            let password2= $('#new-password').val();   
            let correo= $('#new-correo').val();   
            let imagen= $('#new-img-usuario')[0].files[0]; 
            let def = (imagen == undefined) ? 'userdefault.png' : imagen.name;

            let json = {
                usuario:{
                    roles_id,
                    usuario,
                    correo,
                    password,
                    password2,
                    imagen:def
                },
                persona:{
                    cedula,
                    nombre,
                    apellido,
                    telefono,
                    direccion,
                    sexo_id      
                },
                doctor:{
                },
                doctorhorario:{
                    horarios_atencion_id
                },
                cliente:{

                },

            };
            console.log(json);
            //validacion para datos de usuario
            if(!validarPersona(json)){
                console.log('llene los datos de usuario');
            }else{
                guardandousuario(json);

            }

         });
    }

    function guardandousuario(json){
        $.ajax({
            url:urlServidor  +'usuario/guardar',
            type:'POST',
            data: 'data=' + JSON.stringify(json),
            dataType:'json',
            success:function(response){
            //    console.log(response);
                if(response.status){
                    toastr.options = {
                        "closeButton": true,
                        "preventDuplicates": true,
                        "positionClass": "toast-top-center",
                    };
        
                    toastr["success"](response.mensaje, "Usuario")
                    $('#nuevo-usuario')[0].reset();
                    cargarTabla();

                } else{
                    toastr.options = {
                        "closeButton": true,
                        "preventDuplicates": true,
                        "positionClass": "toast-top-center",
                    };
        
                    toastr["error"](response.mensaje, "Usuario")

                }
            },
            error : function(jqXHR, status, error) {
                console.log('Disculpe, existió un problema');
            },
            complete : function(jqXHR, status) {
                // console.log('Petición realizada');
            }
        });
        if(json.usuario.imagen=='userdefault.png'){

        }else{
            let imagen=$('#new-img-usuario')[0].files[0];
            let formData= new FormData();
            formData.append('fichero',imagen);

            $.ajax({
                // la URL para la petición
                url : urlServidor + 'usuario/fichero',
                // especifica si será una petición POST o GET
                type : 'POST',
                // el tipo de información que se espera de respuesta
                data: formData,
                contentType: false,
                processData: false,

                dataType : 'json',
                success : function(responseImg) {
                    if(responseImg.status){
                      /*    toastr.options = {
                            "closeButton": true,
                            "preventDuplicates": true,
                            "positionClass": "toast-top-center",
                        };
            
                        toastr["success"](responseImg.mensaje, "Usuario") */
                    }else{
                        /* toastr.options = {
                            "closeButton": true,
                            "preventDuplicates": true,
                            "positionClass": "toast-top-center",
                        };
            
                        toastr["error"](responseImg.mensaje, "Usuario") */

                    }
                },
                error : function(jqXHR, status, error) {
                    console.log('Disculpe, existió un problema');
                },
                complete : function(jqXHR, status) {
                    // console.log('Petición realizada');
                }
            });
        }


    }

    function recuperarsexo(){
        $.ajax({
            url:urlServidor  +'sexo/listar',
            type:'GET',
            dataType:'json',
            success:function(response){
            //    console.log(response);
                if(response.status){
                   let option = '<option value="0">Seleccione Sexo</option>';
                   response.sexo.forEach(element=>{
                    option +=`<option value=${element.id}>${element.tipo}</option>`;
                   });
                   $('#e-sexo').html(option);

                } 
            },
            error : function(jqXHR, status, error) {
                console.log('Disculpe, existió un problema');
            },
            complete : function(jqXHR, status) {
                // console.log('Petición realizada');
            }
        });

    }

    function recuperarrol(){
        $.ajax({
            url:urlServidor  +'rol/listar',
            type:'GET',
            dataType:'json',
            success:function(response){
                //console.log(response);

                 if(response.status){
                   let option = '<option value="0">Seleccione Rol</option>';
                   response.rol.forEach(element=>{
                    option +=`<option value=${element.id}>${element.rol}</option>`;
                   });
                   $('#e-rol').html(option);

                }  
            },
            error : function(jqXHR, status, error) {
                console.log('Disculpe, existió un problema');
            },
            complete : function(jqXHR, status) {
                // console.log('Petición realizada');
            }
        });

    }

    function editarCargarHorario(){
        $.ajax({
            url:urlServidor  +'horarios_atencion/listar',
            type:'GET',
            dataType:'json',
            success:function(response){
            //    console.log(response);
                if(response.status){
                   let option = '<option value="0">Seleccione Horario</option>';
                   response.horario.forEach(element=>{
                    option +=`<option value=${element.id}>${element.horaE} ${element.horaS}</option>`;
                   });
                   $('#e-horario').html(option);
    
                } 
            },
            error : function(jqXHR, status, error) {
                console.log('Disculpe, existió un problema');
            },
            complete : function(jqXHR, status) {
                // console.log('Petición realizada');
            }
        });
    
    }
 
    
/* }); */



    function eliminar_usuario(id){
        let data = {
            usuario: {
                id: id,
            }
        };
        $.ajax({
            // la URL para la petición
            url : urlServidor + 'usuario/eliminar',
            // especifica si será una petición POST o GET
            type : 'POST',
            // el tipo de información que se espera de respuesta
            data: {data: JSON.stringify(data)},
            dataType : 'json',
            success : function(response) {
                if(response.status){
                    toastr.options = {
                        "closeButton": true,
                        "preventDuplicates": true,
                        "positionClass": "toast-top-center",
                    };
        
                    toastr["success"]("Se Ha eliminado el usuario del sistema", "Docente")
                
                    cargarTabla();
                }
            },
            error : function(jqXHR, status, error) {
                console.log('Disculpe, existió un problema');
            },
            complete : function(jqXHR, status) {
                // console.log('Petición realizada');
            }
        });
    } 

    function editar_usuario(id){
        $('#modal-editar-usuario').modal('show'); 
        cargarUsuario(id);
        
        
        
    }

    function cargarUsuario(id){
        $.ajax({
            url:urlServidor  +'usuario/listar/'+id,
            type:'GET',
            dataType:'json',
            success:function(response){
                console.log(response);
                if(response.status){
                    let doctor= response.usuario.persona.doctor;
                    
                    doctor.forEach(function(element){
                        let doctor_id = element.id;
                        $('#e-doctor-id').val(doctor_id);//doctor_id

                        let doctorH= element.doctor_horario;
                        doctorH.forEach(function(e){    
                            $('#e-doctor-horario').val(e.id);//doctor_horario_id   
                            $('#e-horario').val(e.horarios_atencion.horaE);
                            
                            let ha_id =  e.horarios_atencion.id;
                            $('#e-horario').val(ha_id); //horario_atencion.id  
                        });
                });
                
                    $('#e-usuario-id').val(response.usuario.id);//usuario_id
                    $('#e-persona-id').val(response.usuario.persona.id);//persona_id
                    $('#id-rol').val(response.usuario.roles.id);//rol_id
                    $('#e-usuario').val(response.usuario.usuario);//nombre_usuario
                    $('#e-correo').val(response.usuario.correo);//correo_usuario
                    $('#e-cedula').val(response.usuario.persona.cedula);
                    $('#e-nombre').val(response.usuario.persona.nombre);
                    $('#e-apellido').val(response.usuario.persona.apellido);
                    $('#e-telefono').val(response.usuario.persona.telefono);
                    $('#e-direccion').val(response.usuario.persona.direccion);
                    $('#e-sexo').val(response.usuario.persona.sexo_id);//sexo_id
                    $('#e-rol').val(response.usuario.roles.rol);//nombre_del_rol
                

                    let rol_id = $('#id-rol').val();
                    //console.log('rol_id :',rol_id);

                    /* tarea para galarza en ocultar un boton cuando seleccionel rol = 3 doctor
                    se muestra el horario del docotor */    
                    if(rol_id == 1){//administrador        
                        $('#e-horario-doctor').addClass('d-none');
                    }else if(rol_id == 2){//secretaria  
                        $('#e-horario-doctor').addClass('d-none');      
                    }else if(rol_id == 3){//doctor         
                        $('#e-horario-doctor').removeClass('d-none');
                    }else if(rol_id == 4){ //Asistente de Ventas        
                        $('#e-horario-doctor').addClass('d-none');      
                    } 
                    
                    
                } 
            },
            error : function(jqXHR, status, error) {
                console.log('Disculpe, existió un problema');
            },
            complete : function(jqXHR, status) {
                // console.log('Petición realizada');
            }
        });
    }

    function editandousuarioModal(){
        $('#btn-update').click(function(){
            let id = $('#e-usuario-id').val();//usuario_id
            let persona_id = $('#e-persona-id').val();
            let roles_id = $('#id-rol').val();//rol_id
            let usuario =  $('#e-usuario').val();//nombre_usuario
            let correo = $('#e-correo').val();//correo_usuario
            let nombre =$('#e-nombre').val();
            let apellido =$('#e-apellido').val();
            let telefono  =$('#e-telefono').val();
            let direccion = $('#e-direccion').val();
            let sexo_id = $('#e-sexo option:selected').val();//sexo_id
            let doctor_id= $('#e-doctor-id').val();//doctor_id
            let doctor_horario_id = $('#e-doctor-horario').val();//doctor_horario_id 
            let horario_atencion_id =  $('#e-horario option:selected').val(); //horario_atencion.id 
                    
            let json = {
                usuario: {
                    id:id,
                    persona_id: persona_id,
                    roles_id: roles_id,
                    usuario:usuario,
                    correo:correo,
                    nombre: nombre,
                    apellido: apellido,
                    telefono:telefono,
                    direccion:direccion,
                    sexo_id:sexo_id,
                    doctor_id:doctor_id,
                    doctor_horario_id:doctor_horario_id,
                    horario_atencion_id:horario_atencion_id,

                }
            };

            $.ajax({
                // la URL para la petición
                url : urlServidor + 'usuario/editar',
                type : 'POST',
                data: {data: JSON.stringify(json)},
                dataType : 'json',
                success : function(response){
                   /*  console.log(response); */
                    if(response.status){
                        toastr.options = {
                            "closeButton": true,
                            "preventDuplicates": true,
                            "positionClass": "toast-top-center",
                        };
            
                        toastr["success"](response.mensaje, "Listo !")

                        $('#modal-editar-usuario').modal('hide');
                        cargarTabla();
                    }else{
                        toastr.options = {
                            "closeButton": true,
                            "preventDuplicates": true,
                            "positionClass": "toast-top-center",
                        };
            
                        toastr["error"](response.mensaje, "Error")
                    }
                },
                error : function(jqXHR, status, error) {
                 console.log('Disculpe, existió un problema');
             },
             complete : function(jqXHR, status) {
                 // console.log('Petición realizada');
             } 
             });

        });


    }










