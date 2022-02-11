 $(function(){  

    _init();

    function _init(){
        cargarCliente();
        cargarTipoMascota();
        cargarGeneroMascota();
        cargarRazaModal();
        guardarMascota();

    }

    function cargarCliente(){
        let cliente = JSON.parse(sessionStorage.getItem('sesion'));
        let nombres = cliente.persona.nombre + ' ' + cliente.persona.apellido;
        $('#local-cliente').val(nombres);

        let cliente_id =JSON.parse(sessionStorage.getItem('sesion-3'));
        //console.log(cliente_id);
        $('#c-cli-id-c').val(cliente_id);

      
    }


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
                 //   cargarMascotaCliente();

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

 
  

 }); 


function seleccionar_raza(id) {
    let fila = '#fila-raza-c-' + id;
    let f = $(fila)[0].children;
    let raza = f[2].innerText;
    $('#new-raza-c').val(raza);
    $('#id-raza-c').val(id);

}
