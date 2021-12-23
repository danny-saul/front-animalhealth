/* $(function(){ */

    _init();

    function _init(){
        cargarTabla();
        editandoDoctor();

    }

    function cargarTabla(){
        tabla = $('#tabla-doctor').DataTable({
            "lengthMenu": [ 5, 10, 25, 75, 100],//mostramos el menú de registros a revisar
            "responsive": true, "lengthChange": false, "autoWidth": false,
            "aProcessing": true,//Activamos el procesamiento del datatables
            "aServerSide": true,//Paginación y filtrado realizados por el servidor
            "ajax":
                {
                    url:  urlServidor + 'doctor/datatable',
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

    function editar_doctor(id){
        $('#modal-editar-doctor').modal('show');
        cargarDoctor(id);
    }

    function cargarDoctor(id){
        $.ajax({
            url:urlServidor  +'doctor/listar/'+id,
            type:'GET',
            dataType:'json',
            success:function(response){
                //console.log(response);
                if(response.status){
                    $('#e-d-doctor-id').val(response.doctor.id);//doctor_id
                    $('#e-d-persona-id').val(response.doctor.persona.id);//persona_id
                    $('#e-d-cedula').val(response.doctor.persona.cedula);//cedula
                    $('#e-d-nombre').val(response.doctor.persona.nombre);//nombre
                    $('#e-d-apellido').val(response.doctor.persona.apellido);//apellido
                    $('#e-d-telefono').val(response.doctor.persona.telefono);//telefono
                    $('#e-d-direccion').val(response.doctor.persona.direccion);//direccion
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

    function editandoDoctor(){
        $('#btn-d-update').click(function(){
            let id = $('#e-d-doctor-id').val();
            let persona_id = $('#e-d-persona-id').val();
            let nombre = $('#e-d-nombre').val();
            let apellido = $('#e-d-apellido').val();
            let telefono = $('#e-d-telefono').val();
            let direccion = $('#e-d-direccion').val();

        let json = {
            doctor: {
                id :id,
                persona_id : persona_id,
                nombre: nombre, 
                apellido : apellido, 
                telefono : telefono,
                direccion : direccion
            }
        }

        $.ajax({
            // la URL para la petición
            url : urlServidor + 'doctor/editar',
            type : 'POST',
            data: {data: JSON.stringify(json)},
            dataType : 'json',
            success : function(response){
               // console.log(response);
                if(response.status){
                    toastr.options = {
                        "closeButton": true,
                        "preventDuplicates": true,
                        "positionClass": "toast-top-center",
                    };
        
                    toastr["success"](response.mensaje, "Listo !")

                    $('#modal-editar-doctor').modal('hide');
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



    function eliminar_doctor(id){
        let data = {
            doctor: {
                id: id,
            }
        };
        $.ajax({
            // la URL para la petición
            url : urlServidor + 'doctor/eliminar',
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
        
                    toastr["success"]("Se Ha eliminado el doctor del sistema", "Doctor")
                
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

  











