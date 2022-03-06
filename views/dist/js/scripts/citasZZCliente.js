$(function () {

    _init();

    function _init() {
        cargarCliente();
        cargarDoctor();
        cargarServicios();
     
       
       cargarTipoMascota();
       cargarGeneroMascota();
       cargarRazaModal();
       guardarMascota();
       cargarMascotaCliente();
       guardarCitas();
       cargarTabla();

       guardarkpi();
      // cargarquestionkapei();
      guardarkpiservicio();


    
    }

    function cargarTabla(){

        let cliente_id =JSON.parse(sessionStorage.getItem('sesion-3'));

        tabla = $('#tabla-citas-cliente').DataTable({
            "lengthMenu": [ 5, 10, 25, 75, 100],//mostramos el menú de registros a revisar
            "responsive": true, "lengthChange": false, "autoWidth": false,
            "aProcessing": true,//Activamos el procesamiento del datatables
            "aServerSide": true,//Paginación y filtrado realizados por el servidor
            "ajax":
                {
                    url:  urlServidor + 'citas/datatableclientecitaId/' + cliente_id,
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

    function cargarCliente(){
        let cliente = JSON.parse(sessionStorage.getItem('sesion'));
        let nombres = cliente.persona.nombre + ' ' + cliente.persona.apellido;
        $('#local-cliente').val(nombres);

        let cliente_id =JSON.parse(sessionStorage.getItem('sesion-3'));
        //console.log(cliente_id);
        $('#c-cli-id-c').val(cliente_id);

      
    }

    function cargarMascotaCliente(){
        let cliente_id =JSON.parse(sessionStorage.getItem('sesion-3'));
      //  console.log(cliente_id);

        $.ajax({
            url: urlServidor + 'mascota/cargarMascotaCliente/' + cliente_id,
            type: 'GET',
            dataType: 'json',
            success: function (response) {
               // console.log(response);
                 if (response.status) {
                    let option = '<option value="0">Seleccione su mascota</option>';
                    response.mascota.forEach(element => {
                        option += `<option value=${element.id}>${element.nombre}</option>`;
                    });

                    $('#new-mascota-cita').html(option);

                } 
            },
            error: function (jqXHR, status, error) {
                console.log('Disculpe, existió un problema');
            },
            complete: function (jqXHR, status) {
                // console.log('Petición realizada');
            }
        });


    }


    function cargarDoctor() {
        $('#buscar-doctor').click(function (e) {
            e.preventDefault();

            $('#modal-doctor').modal('show');
            $.ajax({
                url: urlServidor + 'doctor/listar',
                type: 'GET',
                dataType: 'json',
                success: function (response) {
                    //    console.log(response);
                    if (response.status) {
                        let tr = '';
                        let i = 1;
                        response.doctor.forEach(element => {
                            tr += ` <tr id="fila-doctor-${element.id}">
                        <td>${i}</td>
                        <td style="display: none">${element.id}</td>
                        <td>${element.persona.nombre} ${element.persona.apellido}</td>
                        <td>${element.persona.telefono}</td>
                        <td>${element.persona.direccion}</td>
                        <td>
                            <div class="div">
                                <button data-dismiss="modal" class="btn btn-primary btn-sm" onclick="seleccionar_doctor(${element.id})">
                                    <i class="fas fa-check"></i>
                                </button>
                            </div>
                        </td>
                    </tr> `;
                            i++;
                        });
                        $('#doctor-body').html(tr);
                    }
                },
                error: function (jqXHR, status, error) {
                    console.log('Disculpe, existió un problema');
                },
                complete: function (jqXHR, status) {
                    // console.log('Petición realizada');
                }
            });
        })
    }

    function cargarServicios() {
        $.ajax({
            url: urlServidor + 'servicios/listar',
            type: 'GET',
            dataType: 'json',
            success: function (response) {
                // console.log(response);
                if (response.status) {
                    let option = '<option value="0">Seleccione un Servicio</option>';
                    response.servicios.forEach(element => {
                        option += `<option value=${element.id}>${element.nombre_servicio}</option>`;
                    });

                    $('#new-servicio').html(option);

                }
            },
            error: function (jqXHR, status, error) {
                console.log('Disculpe, existió un problema');
            },
            complete: function (jqXHR, status) {
                // console.log('Petición realizada');
            }
        });
    }

    
        ////aqui empezamos
    function cargarTipoMascota() {
        $.ajax({
            url: urlServidor + 'tipo_mascota/listar',
            type: 'GET',
            dataType: 'json',
            success: function (response) {
             //    console.log(response);
                if (response.status) {
                    let option = '<option value="0">Tipo</option>';
                    response.tipo_mascota.forEach(element => {
                        option += `<option value=${element.id}>${element.nombre_tipo}</option>`;
                    });

                    $('#new-tipo-mascota-c').html(option);

                }
            },
            error: function (jqXHR, status, error) {
                console.log('Disculpe, existió un problema');
            },
            complete: function (jqXHR, status) {
                // console.log('Petición realizada');
            }
        });
    }
  
    function cargarGeneroMascota() {
        $.ajax({
            url: urlServidor + 'genero_mascota/listar',
            type: 'GET',
            dataType: 'json',
            success: function (response) {
                // console.log(response);
                if (response.status) {
                    let option = '<option value="0">Genero</option>';
                    response.genero_mascota.forEach(element => {
                        option += `<option value=${element.id}>${element.genero}</option>`;
                    });
                    $('#new-genero-c').html(option);

                }
            },
            error: function (jqXHR, status, error) {
                console.log('Disculpe, existió un problema');
            },
            complete: function (jqXHR, status) {
                // console.log('Petición realizada');
            }
        });
    }

    
    function cargarRazaModal() {

        $('#nueva-mascota-c').submit(function (e) {
            e.preventDefault();

            $('#modal-raza-cliente').modal('show');

            $.ajax({
                url: urlServidor + 'raza/listar',
                type: 'GET',
                dataType: 'json',
                success: function (response) {
                  //  console.log(response);
                    if (response.status) {
                        let tr = '';
                        let i = 1;
                        response.raza.forEach(element => {
                            tr += ` <tr id="fila-raza-c-${element.id}">
                        <td>${i}</td>
                        <td style="display: none">${element.id}</td>
                        <td>${element.raza}</td>
                        <td>
                            <div class="div">
                                <button data-dismiss="modal" class="btn btn-primary btn-sm" onclick="seleccionar_raza(${element.id})">
                                    <i class="fas fa-check"></i>
                                </button>
                            </div>
                        </td>
                    </tr> `;
                            i++;
                        });
                        $('#raza-body-c').html(tr);
                    }
                },
                error: function (jqXHR, status, error) {
                    console.log('Disculpe, existió un problema');
                },
                complete: function (jqXHR, status) {
                    // console.log('Petición realizada');
                }
            });

        });

       /*  */
    }

    function guardarMascota() {
        $('#btn-guardar-mascota-cliente').click(function (e) {
        //    e.preventDefault();
            let cliente_id = $('#c-cli-id-c').val();
            let tipo_mascota_id = $('#new-tipo-mascota-c option:selected').val();
            let genero_mascota_id = $('#new-genero-c option:selected').val();
            let raza_id = $('#id-raza-c').val();
            let nombre = $('#new-nombre-c').val();
            let edad = $('#new-edad-c').val();
            let peso = $('#new-peso-c').val();
            let fecha_nacimiento = $('#new-fecha-c').val();
            let imagen = $('#new-img-mascota-c')[0].files[0];
            let def = (imagen == undefined) ? 'mascotasdefault.jpg' : imagen.name;

            let json = {
                mascota: {
                    cliente_id,
                    tipo_mascota_id,
                    genero_mascota_id,
                    raza_id,
                    nombre,
                    edad,
                    peso,
                    fecha_nacimiento,
                    imagen: def
                },
            };
         //   console.log(json);
            //validacion para datos de usuario
            if (!validarMascota(json)) {
             //   console.log('llene los datos de usuario');
            } else {
                guardandomascota(json);
                

            }

        });
    }

    function guardandomascota(json) {
        $.ajax({
            url: urlServidor + 'mascota/guardar',
            type: 'POST',
            data: 'data=' + JSON.stringify(json),
            dataType: 'json',
            success: function (response) {
                //    console.log(response);
                if (response.status) {
                    toastr.options = {
                        "closeButton": true,
                        "preventDuplicates": true,
                        "positionClass": "toast-top-center",
                    };

                    toastr["success"](response.mensaje, "Mascota")
             
                    reseteandodatos();
                    cargarMascotaCliente();

                } else {
                    toastr.options = {
                        "closeButton": true,
                        "preventDuplicates": true,
                        "positionClass": "toast-top-center",
                    };

                    toastr["error"](response.mensaje, "Mascota")

                }
            },
            error: function (jqXHR, status, error) {
                console.log('Disculpe, existió un problema');
            },
            complete: function (jqXHR, status) {
                // console.log('Petición realizada');
            }
        });
        if (json.mascota.imagen == 'mascotasdefault.jpg') {

        } else {
            let imagen = $('#new-img-mascota')[0].files[0];
            let formData = new FormData();
            formData.append('fichero', imagen);

            $.ajax({
                // la URL para la petición
                url: urlServidor + 'mascota/fichero',
                // especifica si será una petición POST o GET
                type: 'POST',
                // el tipo de información que se espera de respuesta
                data: formData,
                contentType: false,
                processData: false,

                dataType: 'json',
                success: function (responseImg) {
                    if (responseImg.status) {

                    } else {

                    }
                },
                error: function (jqXHR, status, error) {
                    console.log('Disculpe, existió un problema');
                },
                complete: function (jqXHR, status) {
                    // console.log('Petición realizada');
                }
            });
        }


    }


    function validarMascota(json) {
        let mascota = json.mascota;

        if (mascota.cliente_id == 0) {
            return false;
        } else if (mascota.tipo_mascota_id == 0) {
            return false;
        } else if (mascota.genero_mascota_id == 0) {
            return false;
        } else if (mascota.raza_id == 0) {
            return false;
        } else if (mascota.nombre.length == 0) {
            return false;
        } else if (mascota.edad.length == 0) {
            return false;
        } else if (mascota.peso.length == 0) {
            return false;
        } else if (mascota.fecha_nacimiento.length == 0) {
            return false;
        } else {
            return true;

        }




    }


  /* GUARDAR CITAS ORIGINAL


    
  function guardarCitas() {
        $('#btn-guardar-cita-cliente').click(function (e) {

            let doctor_id =$('#doctor-id').val();
            let servicios_id = $('#new-servicio option:selected').val();
            let mascota_id = $('#new-mascota-cita option:selected').val();
            let cliente_id =$('#c-cli-id-c').val();
            let horarios_atencion_id=$('#new-hora-cita option:selected').val();
          //  console.log(horarios_atencion_id);

        
            let json = {
                cita: {
                    doctor_id,
                    servicios_id,
                    mascota_id,
                    cliente_id,
                    horarios_atencion_id
                },
            };
            console.log(json);
            //validacion para datos de usuario
            if (!validarCita(json)) {
             //   console.log('llene los datos de usuario');
            } else {
               guardandocitas(json);

            }
        
        });
    }

    function guardandocitas(json){

        $.ajax({
            url: urlServidor + 'citas/guardar',
            type: 'POST',
            data: 'data=' + JSON.stringify(json),
            dataType: 'json',
            success: function (response) {
                //    console.log(response);
                toastr.options = {
                    "closeButton": true,
                    "preventDuplicates": true,
                    "positionClass": "toast-top-center",
                };

                if (response.status) {
                    toastr["success"](response.mensaje, "Citas")
                    reseteandodatos(); 
                    cargarTabla();           
                } else {
                    toastr["error"](response.mensaje, "Citas")
                }
            },
            error: function (jqXHR, status, error) {
                console.log('Disculpe, existió un problema');
            },
            complete: function (jqXHR, status) {
                // console.log('Petición realizada');
            }
        });

    } */
    
    
    function guardarCitas() {
 /*        $('#modal-kpi-evaluacion').modal('show');
        $.ajax({
            url: urlServidor + 'detalle/listardetalle',
            type: 'GET',
            dataType: 'json',
            success: function (response) {
                // console.log(response);
                if (response.status) {
                    let option = '<option value="0">Seleccione Grado de Sastifaccion </option>';
                    response.detalle.forEach(element => {
                        option += `<option value=${element.id}>${element.detalle}</option>`;
                    });

                    $('#new-kpi-pregunta').html(option);

                }
            },
            error: function (jqXHR, status, error) {
                console.log('Disculpe, existió un problema');
            },
            complete: function (jqXHR, status) {
                // console.log('Petición realizada');
            }
        }); */

        $('#btn-guardar-cita-cliente').click(function (e) {

            let doctor_id =$('#doctor-id').val();
            let servicios_id = $('#new-servicio option:selected').val();
            let mascota_id = $('#new-mascota-cita option:selected').val();
            let cliente_id =$('#c-cli-id-c').val();
            let horarios_atencion_id=$('#new-hora-cita option:selected').val();
          //  console.log(horarios_atencion_id);

        
            let json = {
                cita: {
                    doctor_id,
                    servicios_id,
                    mascota_id,
                    cliente_id,
                    horarios_atencion_id
                },
            };
            console.log(json);




            //validacion para datos de usuario
            if (!validarCita(json)) {
             //   console.log('llene los datos de usuario');
            } else {
               guardandocitas(json);

            }
        
        });
    }

    function guardandocitas(json){

        $.ajax({
            url: urlServidor + 'citas/guardar',
            type: 'POST',
            data: 'data=' + JSON.stringify(json),
            dataType: 'json',
            success: function (response) {
                //    console.log(response);
                toastr.options = {
                    "closeButton": true,
                    "preventDuplicates": true,
                    "positionClass": "toast-top-center",
                };

                if (response.status) {
                    toastr["success"](response.mensaje, "Citas")
                    reseteandodatos(); 
                    cargarTabla();  
                    cargarquestionkapei();   
                    cargarquestionkapeiservicio();      
                } else {
                    toastr["error"](response.mensaje, "Citas")
                }
            },
            error: function (jqXHR, status, error) {
                console.log('Disculpe, existió un problema');
            },
            complete: function (jqXHR, status) {
                // console.log('Petición realizada');
            }
        });

    }
    
    function validarCita(json) {
        let cita = json.cita;
        toastr.options = {
            "closeButton": true,
            "preventDuplicates": true,
            "positionClass": "toast-top-center",
        };

        if (cita.cliente_id == 0) {
            return false;
        } else if (cita.doctor_id == 0) {
            
            toastr["error"]("Ingrese un doctor", "Citas")
            return false;
        } else if (cita.servicios_id == 0) {
            toastr["error"]("Ingrese un Servicios", "Citas")
            return false;
        } else if (cita.mascota_id == 0) {
            toastr["error"]("Ingrese una Mascota", "Citas")
            return false;
        } else if (cita.horarios_atencion_id == 0) {
            toastr["error"]("Ingrese una Hora", "Citas")
            return false;
        } else {
            return true;

        }




    }


    function reseteandodatos(){
        $('#new-nombre-c').val('');
        $('#new-edad-c').val('');
        $('#new-tipo-mascota-c').val('');
        $('#new-genero-c').val('');
        $('#new-raza-c').val('');
        $('#new-peso-c').val('');
        $('#new-fecha-c').val('');
        $('#new-img-mascota-c').val('');


        $('#new-doctor-nombre').val('');
        $('#new-servicio').val('');
        $('#new-doctor-telefono').val('');
        $('#fecha-doctor').val('');

        $('#new-mascota-cita').val('');
        $('#new-hora-cita').val('');
        $('#new-dias-d-c').val('');
        
    }



//cargar podria eliminarse
    function cargarquestionkapei() {
      
            $('#modal-kpi-evaluacion').modal('show');

            $.ajax({
                url: urlServidor + 'detalle/listardetalle',
                type: 'GET',
                dataType: 'json',
                success: function (response) {
                    // console.log(response);
                    if (response.status) {
                        let option = '<option value="0">Seleccione Grado de Sastifaccion </option>';
                        response.detalle.forEach(element => {
                            option += `<option value=${element.id}>${element.detalle}</option>`;
                        });
    
                        $('#new-kpi-pregunta').html(option);
    
                    }
                },
                error: function (jqXHR, status, error) {
                    console.log('Disculpe, existió un problema');
                },
                complete: function (jqXHR, status) {
                    // console.log('Petición realizada');
                }
            });
       
       
    
    }

    function cargarquestionkapeiservicio() {
      
        $('#modal-kpi-evaluacion').modal('show');

        $.ajax({
            url: urlServidor + 'detalle/listardetalle',
            type: 'GET',
            dataType: 'json',
            success: function (response) {
                // console.log(response);
                if (response.status) {
                    let option = '<option value="0">Seleccione Grado de Sastifaccion </option>';
                    response.detalle.forEach(element => {
                        option += `<option value=${element.id}>${element.detalle}</option>`;
                    });

                    $('#new-kpi-producto').html(option);

                }
            },
            error: function (jqXHR, status, error) {
                console.log('Disculpe, existió un problema');
            },
            complete: function (jqXHR, status) {
                // console.log('Petición realizada');
            }
        });
   
   

}

  
    function guardarkpi() {
        $('#btn-guardar-kpi-cliente').click(function (e) {

            let cliente_id =$('#c-cli-id-c').val();
            let detalle_id = $('#new-kpi-pregunta option:selected').val();
            let valoracion = '';
            

            toastr.options = {
                "closeButton": true,
                "preventDuplicates": true,
                "positionClass": "toast-top-center",
            };


            if(cliente_id == 0){
                toastr["warning"]("Selecione un Cliente", "Cliente");
            }else
            if(detalle_id == 0){
                toastr["warning"]("Selecione un Detalle", "Detalle");
            }else
            if(detalle_id >= 3 && detalle_id < 6){
                valoracion = 'P';
            }else 
            if(detalle_id <=3){
                valoracion = 'N';
            }
                let json = {
                    sastifaccion: {
                        cliente_id,
                        detalle_id,
                        valoracion
                
                    },
                };
              //  console.log(json);

            
   
          
            //validacion para datos de usuario
           // if (!validarCita(json)) {
        
           // } else {
               guardandokpi(json);
               $('#modal-kpi-evaluacion').modal('hide');

        //    }
        
        });
    }

    function guardandokpi(json){

        $.ajax({
            url: urlServidor + 'sastifaccion/guardar',
            type: 'POST',
            data: 'data=' + JSON.stringify(json),
            dataType: 'json',
            success: function (response) {
                //    console.log(response);
                toastr.options = {
                    "closeButton": true,
                    "preventDuplicates": true,
                    "positionClass": "toast-top-center",
                };

                if (response.status) {
                    toastr["success"](response.mensaje, "kpi")
                //    reseteandodatos(); 
                  //  cargarTabla();           
                } else {
                    toastr["error"](response.mensaje, "kpi")
                }
            },
            error: function (jqXHR, status, error) {
                console.log('Disculpe, existió un problema');
            },
            complete: function (jqXHR, status) {
                // console.log('Petición realizada');
            }
        });

    } 
    


    //guardar servicio calificacion

    function guardarkpiservicio() {
        $('#btn-guardar-kpi-cliente').click(function (e) {

            let cliente_id =$('#c-cli-id-c').val();
            let detalle_id = $('#new-kpi-producto option:selected').val();
            let valoracion = '';
            

            toastr.options = {
                "closeButton": true,
                "preventDuplicates": true,
                "positionClass": "toast-top-center",
            };


            if(cliente_id == 0){
                toastr["warning"]("Selecione un Cliente", "Cliente");
            }else
            if(detalle_id == 0){
                toastr["warning"]("Selecione un Detalle", "Detalle");
            }else
            if(detalle_id >= 3 && detalle_id < 6){
                valoracion = 'P';
            }else 
            if(detalle_id <=3){
                valoracion = 'N';
            }
                let json = {
                    evaluar_servicio: {
                        cliente_id,
                        detalle_id,
                        valoracion
                
                    },
                };
              //  console.log(json);

            
   
          
            //validacion para datos de usuario
           // if (!validarCita(json)) {
        
           // } else {
            guardandokpievaluacionservicio(json);
               $('#modal-kpi-evaluacion').modal('hide');

        //    }
        
        });
    }

    function guardandokpievaluacionservicio(json){

        $.ajax({
            url: urlServidor + 'evaluar_servicio/guardar',
            type: 'POST',
            data: 'data=' + JSON.stringify(json),
            dataType: 'json',
            success: function (response) {
                //    console.log(response);
                toastr.options = {
                    "closeButton": true,
                    "preventDuplicates": true,
                    "positionClass": "toast-top-center",
                };

                if (response.status) {
                    toastr["success"](response.mensaje, "kpi")
                //    reseteandodatos(); 
                  //  cargarTabla();           
                } else {
                    toastr["error"](response.mensaje, "kpi")
                }
            },
            error: function (jqXHR, status, error) {
                console.log('Disculpe, existió un problema');
            },
            complete: function (jqXHR, status) {
                // console.log('Petición realizada');
            }
        });

    } 
    


   


});

function cargarTabla2(){

    let cliente_id =JSON.parse(sessionStorage.getItem('sesion-3'));

    tabla = $('#tabla-citas-cliente').DataTable({
        "lengthMenu": [ 5, 10, 25, 75, 100],//mostramos el menú de registros a revisar
        "responsive": true, "lengthChange": false, "autoWidth": false,
        "aProcessing": true,//Activamos el procesamiento del datatables
        "aServerSide": true,//Paginación y filtrado realizados por el servidor
        "ajax":
            {
                url:  urlServidor + 'citas/datatableclientecitaId/' + cliente_id,
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

function seleccionar_doctor(id) {
    let fila = '#fila-doctor-' + id;

    let f = $(fila)[0].children;

    let nombres = f[2].innerText;
    let telefono = f[3].innerText;
    let doctor_id = id;

    $('#doctor-id').val(id);
    $('#new-doctor-nombre').val(nombres);
    $('#new-doctor-telefono').val(telefono);
    $('#hora-cita-a').removeClass('d-none');
    
  
    $('#buscar-datos-c').click(function (e) {
        e.preventDefault();
        
        let dias = $('#new-dias-d-c').val();
        let d = dias.substring(8, 10); //2022-01-15 date
        //let d = dias.substring(3, 5);  //01-15-2022 datepicker   
        console.log(d);


    $.ajax({
        url: urlServidor + 'doctor_horario/listarDoctorHorario/' + doctor_id + '/' + d,
        type: 'GET',
        dataType: 'json',
        success: function (response) {
             console.log(response);
            let option = ''; 

            toastr.options = {
                "closeButton": true,
                "preventDuplicates": true,
                "positionClass": "toast-top-center",
            };

            if (response.status) {
                
                let diasDisponibles = response.datos;
               
                if(diasDisponibles == null){
                    toastr["error"]('No hay horas disponibles', "Horario Doctor"); 
                                          
                }else{
                    option = '<option value="0">Selecione hora</option>';
                        diasDisponibles.forEach(element => {
                         option += `<option value=${element.id}>${element.horario} </option>`;
                    });
                
                toastr["success"]('Si hay horas disponibles', "Horario Doctor");
                    
                }
                
            } else {
                toastr["error"]('No hay datos', "Horario Doctor");
            }
            
            $('#new-hora-cita').html(option);

            $('#new-hora-cita').prop('selectedIndex',0);
            //$('#new-hora-cita').val('');
            
            

        },
        error: function (jqXHR, status, error) {
            console.log('Disculpe, existió un problema');
        },
        complete: function (jqXHR, status) {
            // console.log('Petición realizada');
        }
    });
});



    
}

function seleccionar_raza(id) {
    let fila = '#fila-raza-c-' + id;
    let f = $(fila)[0].children;
    let raza = f[2].innerText;
    $('#new-raza-c').val(raza);
    $('#id-raza-c').val(id);

}

function cancelar_cita(id_cita,estado_id){

    var estado_id = 3;
    $.ajax({
        // la URL para la petición
        url : urlServidor + 'citas/cancelar/' + id_cita + '/' + estado_id,
        // especifica si será una petición POST o GET
        type : 'GET',
        // el tipo de información que se espera de respuesta
        dataType : 'json',
        success : function(response) { 
            if(response.status){
                toastr.options = {
                    "closeButton": true,
                    "preventDuplicates": true,
                    "positionClass": "toast-top-center",
                };
                toastr["success"]('La cita ha sido cancelada', "Citas")
              
               cargarTabla2();
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
