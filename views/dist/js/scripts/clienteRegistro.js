/* $(function(){ */

    _init();

    function _init(){
        cargarTabla();
        cargarSexo();
        changecedula();
        guardarCliente();
        recuperarsexo();
        editandoclienteModal();

    }

    function cargarTabla(){
        tabla = $('#tabla-cliente').DataTable({
            "lengthMenu": [ 5, 10, 25, 75, 100],//mostramos el menú de registros a revisar
            "responsive": true, "lengthChange": false, "autoWidth": false,
            "aProcessing": true,//Activamos el procesamiento del datatables
            "aServerSide": true,//Paginación y filtrado realizados por el servidor
            "ajax":
                {
                    url:  urlServidor + 'cliente/datatable',
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
                   $('#new-cli-sexo').html(option);

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
       
        if(persona.cedula.length==0){
            return false;
        }else if(persona.nombre.length==0){
            return false;
        }else if(persona.apellido.length==0){
            return false;
        }else if(persona.cedula.length<10 || persona.nombre.length <2 || persona.apellido.length <2){
            return false;
        }else if (persona.length==0){
            return false;
        }else if (!validarcedula(persona.cedula)){
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
            let cedula = $('#new-cli-cedula').val();
            //console.log(cedula);
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

    function guardarCliente(){
        $('#nuevo-cliente').submit(function(e){
           e.preventDefault();
    
           let cedula = $('#new-cli-cedula').val();
           let nombre=  $('#new-cli-nombre').val();
           let apellido= $('#new-cli-apellido').val();
           let telefono= $('#new-cli-telefono').val();
           let direccion= $('#new-cli-direccion').val();   
           let sexo_id = $('#new-cli-sexo option:selected').val();
           
           let json = {
               persona:{
                   cedula,
                   nombre,
                   apellido,
                   telefono,
                   direccion,
                   sexo_id      
               }
           };
           console.log(json);
           //validacion para datos de usuario
           if(!validarPersona(json)){
               console.log('llene los datos de usuario');
           }else{
               guardandocliente(json);
           }
        });
    }

    function guardandocliente(json){
    $.ajax({
        url:urlServidor  +'cliente/guardar',
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
                toastr["success"](response.mensaje, "Cliente")
                $('#nuevo-cliente')[0].reset();
                cargarTabla();

            } else{
                toastr.options = {
                    "closeButton": true,
                    "preventDuplicates": true,
                    "positionClass": "toast-top-center",
                };
                toastr["error"](response.mensaje, "Cliente")
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
                   $('#e-cli-sexo').html(option);

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


function editar_cliente(id){
    $('#modal-editar-cliente').modal('show');
    cargarCliente(id);   
    
}

function cargarCliente(id){
    $.ajax({
        url:urlServidor  +'cliente/listar/'+id,
        type:'GET',
        dataType:'json',
        success:function(response){
            //console.log(response);
            if(response.status){

                $('#e-cli-id').val(response.cliente.id);//cliente_id
                $('#e-cli-persona-id').val(response.cliente.persona.id);//persona_id
                $('#e-cli-cedula').val(response.cliente.persona.cedula);
                $('#e-cli-nombre').val(response.cliente.persona.nombre);
                $('#e-cli-apellido').val(response.cliente.persona.apellido);
                $('#e-cli-telefono').val(response.cliente.persona.telefono);
                $('#e-cli-direccion').val(response.cliente.persona.direccion);
                $('#e-cli-sexo').val(response.cliente.persona.sexo_id);//sexo_id    
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

function eliminar_cliente(id){
    let data = {
        cliente: {
            id: id,
        }
    };
    $.ajax({
        // la URL para la petición
        url : urlServidor + 'cliente/eliminar',
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
                toastr["success"]("Se Ha eliminado el cliente", "Cliente")
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

function editandoclienteModal(){
    $('#btn-cli-update').click(function(){
        let id = $('#e-cli-id').val();//cliente_id
        let persona_id = $('#e-cli-persona-id').val();
        let nombre =$('#e-cli-nombre').val();
        let apellido =$('#e-cli-apellido').val();
        let telefono  =$('#e-cli-telefono').val();
        let direccion = $('#e-cli-direccion').val();
        let sexo_id = $('#e-cli-sexo option:selected').val();//sexo_id
                
        let json = {
            cliente: {
                id:id,
                persona_id: persona_id,
                nombre: nombre,
                apellido: apellido,
                telefono:telefono,
                direccion:direccion,
                sexo_id:sexo_id
            }
        };

        $.ajax({
            // la URL para la petición
            url : urlServidor + 'cliente/editar',
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

                    $('#modal-editar-cliente').modal('hide');
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