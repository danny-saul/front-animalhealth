$(function () {

    _init();

    function _init() {
        cargarCliente();
        cargarDoctor();
        cargarServicios();
    }

    function cargarCliente(){
        let cliente = JSON.parse(sessionStorage.getItem('sesion'));
        let nombres = cliente.persona.nombre + ' ' + cliente.persona.apellido;
        $('#local-cliente').val(nombres);
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

   

});


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

