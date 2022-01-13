$(function () {

    _init();

    function _init() {
        cargarServicios();
        cargarDoctor();
        cargarMascotaCliente();
        guardarCita();
        cargarTabla();
      
   

        /*cargarRaza();
        cargarCliente();
        visualizarMascota();
        visualizarTipoMascota();
        guardarMascota();
        reseteandodatos();
        fecha();
        cargarTabla(); */
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
   

    function cargarMascotaCliente() {
        $('#buscar-mascota').click(function (e) {
            e.preventDefault();

            $('#modal-mascota').modal('show');
            $.ajax({
                url: urlServidor + 'mascota/listarmascota',
                type: 'GET',
                dataType: 'json',
                success: function (response) {
                    //console.log(response);
                    if (response.status) {
                        let tr = '';
                        let i = 1;
                        response.mascota.forEach(element => {
                            tr += ` <tr id="fila-mascota-${element.id}">
                        <td>${i}</td>
                        <td style="display: none">${element.id}</td>
                        <td>${element.nombre}</td>
                        <td>${element.tipo_mascota.nombre_tipo}</td>
                        <td>${element.genero_mascota.genero}</td>
                        <td>${element.raza.raza}</td>
                        <td>${element.edad}</td>
                        <td>
                            <div class="div">
                                <button data-dismiss="modal" class="btn btn-primary btn-sm" onclick="seleccionar_mascota(${element.id})">
                                    <i class="fas fa-check"></i>
                                </button>
                            </div>
                        </td>
                    </tr> `;
                            i++;
                        });
                        $('#mascota-body').html(tr);
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

  /*   function guardarCita() {
        $('#nueva-cita').submit(function (e) {
            e.preventDefault();
            let doctor_id = $('#doctor-id').val();
            let servicios_id = $('#new-servicio option:selected').val();
            let mascota_id = $('#mascota-id').val();
            let cliente_id = $('#cliente-id').val();
            let horarios_citas_id = $('#new-hora option:selected').val();

            let json = {
                cita: {
                    doctor_id,
                    servicios_id,
                    mascota_id,
                    cliente_id,
                    horarios_citas_id
                },
            };
            //console.log(json);

            guardandocita(json);

        });
    } */

    function guardarCita() {
        $('#nueva-cita').submit(function (e) {
            e.preventDefault();
            let doctor_id = $('#doctor-id').val();
            let servicios_id = $('#new-servicio option:selected').val();
            let mascota_id = $('#mascota-id').val();
            let cliente_id = $('#cliente-id').val();
            let horarios_atencion_id = $('#new-hora-cita option:selected').val();

            let json = {
                cita: {
                    doctor_id,
                    servicios_id,
                    mascota_id,
                    cliente_id,
                    horarios_atencion_id
                },
            };
           // console.log(json);

            guardandocita(json);

        });
    }

  /*   function guardandocita(json) {
        $.ajax({
            url: urlServidor + 'citas/guardar',
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

                    toastr["success"](response.mensaje, "Citas")
                    cargarTabla();
                    $('#nueva-cita')[0].reset();
                    cargarHorasCitas();
                    //reseteandodatos();

                } else {
                    toastr.options = {
                        "closeButton": true,
                        "preventDuplicates": true,
                        "positionClass": "toast-top-center",
                    };

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


    function guardandocita(json) {
        $.ajax({
            url: urlServidor + 'citas/guardar',
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

                    toastr["success"](response.mensaje, "Citas")
                    cargarTabla();
                    $('#nueva-cita')[0].reset();
                    $('#hora-cita-a').addClass('d-none');
                    $('#fecha-doctor').addClass('d-none');
                    $('#modal-agendar-citas').modal('hide');
                    //   cargarHorasCitas();
                    //reseteandodatos();


                } else {
                    toastr.options = {
                        "closeButton": true,
                        "preventDuplicates": true,
                        "positionClass": "toast-top-center",
                    };

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

    function cargarTabla() {
        tabla = $('#tabla-citas').DataTable({
            "lengthMenu": [5, 10, 25, 75, 100],//mostramos el menú de registros a revisar
            "responsive": true, "lengthChange": false, "autoWidth": false,
            "aProcessing": true,//Activamos el procesamiento del datatables
            "aServerSide": true,//Paginación y filtrado realizados por el servidor
            "ajax":
            {
                url: urlServidor + 'citas/datatable',
                type: "get",
                dataType: "json",
                error: function (e) {
                    console.log(e.responseText);
                }
            },
            destroy: true,
            "iDisplayLength": 5,//Paginación
            "language": {

                "sProcessing": "Procesando...",

                "sLengthMenu": "Mostrar _MENU_ registros",

                "sZeroRecords": "No se encontraron resultados",

                "sEmptyTable": "Ningún dato disponible en esta tabla",

                "sInfo": "Mostrando un total de _TOTAL_ registros",

                "sInfoEmpty": "Mostrando un total de 0 registros",

                "sInfoFiltered": "(filtrado de un total de _MAX_ registros)",

                "sInfoPostFix": "",

                "sSearch": "Buscar:",

                "sUrl": "",

                "sInfoThousands": ",",

                "sLoadingRecords": "Cargando...",

                "oPaginate": {

                    "sFirst": "Primero",

                    "sLast": "Último",

                    "sNext": "Siguiente",

                    "sPrevious": "Anterior"

                },

                "oAria": {

                    "sSortAscending": ": Activar para ordenar la columna de manera ascendente",

                    "sSortDescending": ": Activar para ordenar la columna de manera descendente"

                }

            }//cerrando language
        });
    }

});


function seleccionar_mascota(id) {
    let fila = '#fila-mascota-' + id;

    let f = $(fila)[0].children;

    let nombre = f[2].innerText;
    let tipo_mascota = f[3].innerText;

    $('#mascota-id').val(id);
    $('#new-mascota-nombre').val(nombre);
    $('#new-mascota-tipo').val(tipo_mascota);
    $('#modal-mascota').modal('hide');

    $.ajax({
        url: urlServidor + 'mascota/listarmascota/' + id,
        type: 'GET',
        dataType: 'json',
        success: function (response) {
            //console.log(response);
            if (response.status) {
                $('#cliente-id').val(response.mascota.cliente.id);
                $('#new-cliente-cedula').val(response.mascota.cliente.persona.cedula);
                $('#new-cliente-nombre').val(response.mascota.cliente.persona.nombre);
                $('#new-cliente-apellido').val(response.mascota.cliente.persona.apellido);
                $('#new-cliente-telefono').val(response.mascota.cliente.persona.telefono);
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

function seleccionar_doctor(id) {
    let fila = '#fila-doctor-' + id;

    let f = $(fila)[0].children;

    let nombres = f[2].innerText;
    let telefono = f[3].innerText;

    $('#doctor-id').val(id);
    $('#new-doctor-nombre').val(nombres);
    $('#new-doctor-telefono').val(telefono);
    $('#hora-cita-a').removeClass('d-none');
    
    $.ajax({
        url: urlServidor + 'doctor_horario/listarDoctorHorario/' + id,
        type: 'GET',
        dataType: 'json',
        success: function (response) {
            console.log(response);
            let div = ''; let i = 1; let option =''; let span ='';
 
            if (response.status) {
               
                span += ` 
                <div class="form-group">  
                    <span class="ml-3"> Fecha: <b>${response.horario[0].fecha}  </b></span>
                </div>
                `;
              
                    option = '<option value="0">Selecione hora</option>';
                    response.disponibles.forEach(element => {
                        option += `<option value=${element.id}>${element.horario}  </option>`;
                    });
                
            } else {
                toastr.options = {
                    "closeButton": true,
                    "preventDuplicates": true,
                    "positionClass": "toast-top-center",
                };
                toastr["error"]('No hay horario', "Horarios")
            }
            $('#fecha-doctor').html(span);
            //$('#id-intervalos-doctor').html(div);
             $('#new-hora-cita').html(option);

        },
        error: function (jqXHR, status, error) {
            console.log('Disculpe, existió un problema');
        },
        complete: function (jqXHR, status) {
            // console.log('Petición realizada');
        }
    });
}



