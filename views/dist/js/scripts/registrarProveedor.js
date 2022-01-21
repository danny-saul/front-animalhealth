var opciones = {
    strict: true,              // va a validar siempre, aunque la cantidad de caracteres no sea 10 ni 13
    events: "change",          // evento que va a disparar la validación
    the_classes: "invalid",    // clase que se va a agregar al nodo en el que se realiza la validación
    onValid: function () {},   // callback cuando la cédula es correcta.
    onInvalid: function () {}  // callback cuando la cédula es incorrecta.
};

//$(function () { 
    _init();


    function _init(){
        guardarProveedor();
        cargarTabla();
        editandoProveedorModal();
        cargarRuc();






    }

 
 

    function guardarProveedor(){
        $('#nuevo-proveedor').submit(function(e){
            e.preventDefault();
          
            let ruc = $('#new-proveedor-ruc').val();
            let razon_social=  $('#new-proveedor-razon').val();
            let telefono= $('#new-proveedor-telefono').val();
            let correo= $('#new-proveedor-correo').val(); 
            let direccion= $('#new-proveedor-direccion').val();
      
            let json = {
            proveedor:{
                    ruc,
                    razon_social,
                    telefono,
                    correo,
                    direccion,
                    
                },
                

            };
            console.log(json);

                guardandoproveedor(json);    

        });
    } 
       
    function guardandoproveedor(json){
        $.ajax({
            url:urlServidor  +'proveedor/guardar',
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
        
                    toastr["success"](response.mensaje, "Proveedor")
                    $('#nuevo-proveedor')[0].reset();
                    cargarTabla();

                } else{
                    toastr.options = {
                        "closeButton": true,
                        "preventDuplicates": true,
                        "positionClass": "toast-top-center",
                    };
        
                    toastr["error"](response.mensaje, "Proveedor")

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

    function cargarTabla(){
        tabla = $('#tabla-proveedores').DataTable({
            "lengthMenu": [ 5, 10, 25, 75, 100],//mostramos el menú de registros a revisar
            "responsive": true, "lengthChange": false, "autoWidth": false,
            "aProcessing": true,//Activamos el procesamiento del datatables
            "aServerSide": true,//Paginación y filtrado realizados por el servidor
            "ajax":
                {
                    url:  urlServidor + 'proveedor/datatable',
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

    function cargarRuc(){
       $('#new-proveedor-ruc').blur(function(){
        let ruc = $('#new-proveedor-ruc').val();
        cedula = ruc.substring(0,10);
        extraruc = ruc.substring(10,13);
        toastr.options = {
            "closeButton": true,
            "preventDuplicates": true,
            "positionClass": "toast-top-center",
        };
        if(validarruc(cedula,extraruc)){

            toastr["success"]("El ruc valido", "Proveedor");
        }else{
            toastr["error"]("El ruc es invalido", "Proveedor");

        }
       });


    }

    function validarruc(cedula,extraruc){
        ced = validarcedula(cedula);
        bandera = false;
        if(extraruc==='001'){
            bandera = true;
        }else{
            bandera = false;

        }
        if(ced && bandera){
            return true;

        }else{
            return false;

        }
    }



 //}); 

function editar_proveedor(id){
   $('#modal-editar-proveedor').modal('show');
   cargarProveedor(id);
}

function cargarProveedor(id){
    $.ajax({
        url:urlServidor  +'proveedor/listar/'+id,
        type:'GET',
        dataType:'json',
        success:function(response){
            //console.log(response);
            if(response.status){            
                $('#proveedor-id').val(response.proveedor.id);
                $('#upd-proveedor-ruc').val(response.proveedor.ruc);
                $('#upd-proveedor-razon').val(response.proveedor.razon_social);
                $('#upd-proveedor-telefono').val(response.proveedor.telefono);
                $('#upd-proveedor-correo').val(response.proveedor.correo);
                $('#upd-proveedor-direccion').val(response.proveedor.direccion);



            } 
        },
        error : function(jqXHR, status, error) {
            console.log('Disculpe, existió un problema');
        },
        complete : function(jqXHR, status) {
        }
    });

}

function editandoProveedorModal(){
    $('#btn-update-proveedor').click(function(){
        let id = $('#proveedor-id').val();
        let ruc =$('#upd-proveedor-ruc').val();
        let razon_social = $('#upd-proveedor-razon').val();
        let telefono = $('#upd-proveedor-telefono').val();
        let correo = $('#upd-proveedor-correo').val();
        let direccion = $('#upd-proveedor-direccion').val();

                
        let json = {
            proveedor: {
                id:id,
                ruc: ruc,
                razon_social: razon_social,
                telefono:telefono,
                correo:correo,  
                direccion:direccion, 
            }
        };

        //console.log(json);

        $.ajax({
            // la URL para la petición
            url : urlServidor + 'proveedor/editar',
            type : 'POST',
            data: {data: JSON.stringify(json)},
            dataType : 'json',
            success : function(response){
                //console.log(response);
                if(response.status){
                    toastr.options = {
                        "closeButton": true,
                        "preventDuplicates": true,
                        "positionClass": "toast-top-center",
                    };
        
                    toastr["success"](response.mensaje, "Listo !")

                    $('#modal-editar-proveedor').modal('hide');
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

function eliminar_proveedor(id){
    let data = {
        proveedor: {
            id: id,
        }
    };
    $.ajax({
        // la URL para la petición
        url : urlServidor + 'proveedor/eliminar',
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
    
                toastr["success"]("Se Ha eliminado el Proveedor del sistema", "Proveedor")
            
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