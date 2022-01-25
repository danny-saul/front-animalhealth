//$(function () {


_init();


function _init() {
    generarCodigos();

    cargarMascotaCliente();
    guardarHistorial();
  


    //    validarDias();

}

function generarCodigos() {
    $.ajax({
        url: urlServidor + '/historial_clinico/generar_codigos/historial',
        type: 'GET',
        dataType: 'json',
        success: function (response) {
            //console.log(response);
            if (response.status) {
                $('#num-consulta').text(response.codigo);
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

function guardarCodigo() {
    let codigo = $('#num-consulta').text();

    let json = {
        codigo: {
            codigo: codigo,
            tipos: 'historial'
        }
    }

    $.ajax({
        url: urlServidor + 'historial_clinico/aumentar',
        type: 'POST',
        data: 'data=' + JSON.stringify(json),
        dataType: 'json',
        success: function (response) {
            //    console.log(response);
            generarCodigos();
        },
        error: function (jqXHR, status, error) {
            console.log('Disculpe, existió un problema');
        },
        complete: function (jqXHR, status) {
            // console.log('Petición realizada');
        }
    });



}

function cargarMascotaCliente() {
    $.ajax({
        url: urlServidor + 'mascota/listarmascota',
        type: 'GET',
        dataType: 'json',
        success: function (response) {
            // console.log(response);
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

}

function guardarHistorial() {
    $('#guardar-historial').click(function () {
        toastr.options = {
            "closeButton": true,
            "preventDuplicates": true,
            "positionClass": "toast-top-center",
        };

        let cliente_id = $('#h-cli-id').val();
        let mascota_id = $('#h-masc-id').val();
        let numero_historia = $('#num-consulta').text();
        let motivo_consulta = $('#motivo-consulta').val();
        let fecha_h = $('#c-h-fecha').val();

        let cirugias = $('#h-cirugias').val();
        let descripcion = $('#motivo-cirugia').val();
        let fecha_cirugia = $('#c-h-fecha-cirugia').val();
        let antecedente = [];
        let examen = [];
        let perscripcionf = [];


        let temperatura = $('#h-temperatura').val();
        let peso = $('#h-peso').val();
        let hidratacion = $('#h-hidratacion').val();
        let frecuencia_cardiaca = $('#h-f-c').val();
        let pulso = $('#h-pulso').val();
        let frecuencia_respiratoria = $('#h-f-r').val();
        let diagnostico = $('#motivo-diagnostico').val();
        let tratamiento = $('#motivo-tratamiento').val();
        let descripcionP = $('#motivo-prescripcion').val();

        if (mascota_id.length == 0) {
            toastr["error"]('Debe seleccionar un paciente', "Historial Clinico")
        } else if (cliente_id.length == 0) {
            toastr["error"]('Debe seleccionar un cliente', "Historial Clinico")
        } else if (motivo_consulta.length == 0) {
            toastr["error"]('Debe llenar el campo cirugias', "Historial Clinico")
        } else if (cirugias.length == 0) {
            toastr["error"]('Debe llenar el campo cirugias', "Historial Clinico")
        } else if (temperatura.length == 0) {
            toastr["error"]('Debe llenar el campo temperatura', "Historial Clinico")
        } else if (peso.length == 0) {
            toastr["error"]('Debe llenar el campo peso', "Historial Clinico")
        } else if (hidratacion.length == 0) {
            toastr["error"]('Debe llenar el campo hidratacion', "Historial Clinico")
        } else if (frecuencia_cardiaca.length == 0) {
            toastr["error"]('Debe llenar el campo frecuencia cardiaca', "Historial Clinico")
        } else if (pulso.length == 0) {
            toastr["error"]('Debe llenar el campo pulso', "Historial Clinico")
        } else if (frecuencia_respiratoria.length == 0) {
            toastr["error"]('Debe llenar el campo frecuencia respiratoria', "Historial Clinico")
        } else if (diagnostico.length == 0) {
            toastr["error"]('Debe llenar el campo diagnostico', "Historial Clinico")
        } else if (tratamiento.length == 0) {
            toastr["error"]('Debe llenar el campo tratamiento', "Historial Clinico")
        } else if (tratamiento.length == 0) {
            toastr["error"]('Debe llenar el campo tratamiento', "Historial Clinico")
        } else if (descripcionP.length == 0) {
            toastr["error"]('Debe llenar el campo prescripcion', "Historial Clinico")

        } else {

            let aux = {
                cirugias,
                descripcion,
                fecha_cirugia,

            }
            antecedente.push(aux);

            let aux2 = {
                temperatura,
                peso,
                hidratacion,
                frecuencia_cardiaca,
                pulso,
                frecuencia_respiratoria,
                diagnostico,
                tratamiento,

            }
            examen.push(aux2);

            let aux3 = {
                descripcionP,

            }
            perscripcionf.push(aux3);


            let json = {
                historial_clinico: {
                    cliente_id,
                    mascota_id,
                    numero_historia,
                    motivo_consulta,
                    fecha_h,

                },

                antecedentes: antecedente,
                examen_fisico: examen,
                perscripcion: perscripcionf,



            }
            console.log(json);

            ajaxGuardandohistorial(json);
        }



    });
}

function ajaxGuardandohistorial(json) {
    $.ajax({
        url: urlServidor + 'historial_clinico/guardarhistorial_clinico',
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
                toastr["success"](response.mensaje, "Historial Clinico")
                reset_datos();
                guardarCodigo();

            } else {
                toastr.options = {
                    "closeButton": true,
                    "preventDuplicates": true,
                    "positionClass": "toast-top-center",
                };
                toastr["error"](response.mensaje, "Compra")
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

function reset_datos() {
    $('#h-cli-id').val('');
    $('#h-masc-id').val('');
    $('#motivo-consulta').val('');
    $('#h-cirugias').val('');
    $('#motivo-cirugia').val('');
    $('#c-h-fecha-cirugia').val('');
    $('#c-h-paciente').val('');
    $('#c-h-propietario').val('');


    $('#h-temperatura').val('');
    $('#h-peso').val('');
    $('#h-hidratacion').val('');
    $('#h-f-c').val('');
    $('#h-pulso').val('');
    $('#h-f-r').val('');
    $('#motivo-diagnostico').val('');
    $('#motivo-tratamiento').val('');
    $('#motivo-prescripcion').val('');




}



//});


function seleccionar_mascota(id) {
    let fila = '#fila-mascota-' + id;
    let f = $(fila)[0].children;
    let nombre = f[2].innerText;

    $('#mascota-id').val(id);
    $('#c-h-paciente').val(nombre);

    $.ajax({
        url: urlServidor + 'mascota/listarmascota/' + id,
        type: 'GET',
        dataType: 'json',
        success: function (response) {
            console.log(response);
            if (response.status) {
                let cliente_id = response.mascota.cliente.id;
                let mascota_id = response.mascota.id;

                //console.log(cliente_id);
                $('#h-cli-id').val(cliente_id);
                $('#h-masc-id').val(mascota_id);

                $('#cliente-id').val(response.mascota.cliente.id);
                $('#c-h-propietario').val(response.mascota.cliente.persona.nombre + ' ' + response.mascota.cliente.persona.apellido);
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