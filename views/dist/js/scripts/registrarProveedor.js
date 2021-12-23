/* $(function () { */
    _init();

    function _init(){
        guardarProveedor();
        cargarTabla();
        editandoProveedorModal();



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



/* }); */

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