$(function () {

    _init();

    function _init() {
        cargarTipoMascota();
        cargarGeneroMascota();
        cargarRaza();
        cargarCliente();
        visualizarMascota();
        visualizarTipoMascota();
        guardarMascota();
        reseteandodatos();
        fecha();
        cargarTabla();
      


    }

    function cargarTipoMascota() {
        $.ajax({
            url: urlServidor + 'tipo_mascota/listar',
            type: 'GET',
            dataType: 'json',
            success: function (response) {
                // console.log(response);
                if (response.status) {
                    let option = '<option value="0">Tipo</option>';
                    response.tipo_mascota.forEach(element => {
                        option += `<option value=${element.id}>${element.nombre_tipo}</option>`;
                    });

                    $('#new-tipo-mascota').html(option);

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
                    $('#new-genero').html(option);

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

    function cargarCliente() {
        $.ajax({
            url: urlServidor + 'cliente/listar',
            type: 'GET',
            dataType: 'json',
            success: function (response) {
                //console.log(response);
                if (response.status) { 
                    let tr = '';
                    let i = 1;
                    response.cliente.forEach(element => {
                    tr += ` <tr id="fila-cliente-${element.id}">
                    <td>${i}</td>
                    <td style="display: none">${element.id}</td>
                    <td>${element.persona.cedula}</td>
                    <td>${element.persona.nombre}</td>
                    <td>${element.persona.apellido}</td>
                    <td>${element.persona.direccion}</td>
                    <td>${element.persona.telefono}</td>
                    <td>
                        <div class="div">
                            <button data-dismiss="modal" class="btn btn-primary btn-sm" onclick="seleccionar_cliente(${element.id})">
                                <i class="fas fa-check"></i>
                            </button>
                        </div>
                    </td>
                </tr> `;
                        i++;
                    });
                    $('#cliente-body').html(tr);
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

    function cargarRaza() {

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
                        tr += ` <tr id="fila-raza-${element.id}">
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
                    $('#raza-body').html(tr);
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

    function guardarMascota() {
        $('#nueva-mascota').submit(function (e) {
            e.preventDefault();
            let cliente_id = $('#c-cli-id').val();
            let tipo_mascota_id = $('#new-tipo-mascota option:selected').val();
            let genero_mascota_id = $('#new-genero option:selected').val();
            let raza_id = $('#id-raza').val();
            let nombre = $('#new-nombre').val();
            let edad = $('#new-edad').val();
            let peso = $('#new-peso').val();
            let fecha_nacimiento = $('#new-fecha').val();
            let imagen = $('#new-img-mascota')[0].files[0];
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
           // console.log(json);
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
                     cargarTabla();
                    $('#nueva-mascota')[0].reset();
                    reseteandodatos();

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

    function reseteandodatos() {

 
        $('#v-Cedula').text('---------');
        $('#v-Cliente').text('---------');
        $('#v-Tipo').text('---------');
        $('#v-Mascota').text('---------');
        
        $('#c-cli-cedula').val('');
        $('#c-cli-nombre').val('');
        $('#c-cli-apellido').val('');
        $('#c-cli-direccion').val('');
        $('#c-cli-telefono').val('');
        
    
    }

    function fecha(){
        var d= new Date;
        var anio = d.getFullYear();
        console.log(anio);

        
    }

    function cargarTabla(){
        tabla = $('#tabla-mascota').DataTable({
            "lengthMenu": [ 5, 10, 25, 75, 100],//mostramos el menú de registros a revisar
            "responsive": true, "lengthChange": false, "autoWidth": false,
            "aProcessing": true,//Activamos el procesamiento del datatables
            "aServerSide": true,//Paginación y filtrado realizados por el servidor
            "ajax":
                {
                    url:  urlServidor + 'mascota/datatable',
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

    



});

function eliminar_mascota(id){
    let data = {
        mascota: {
            id: id,
        }
    };
    $.ajax({
        // la URL para la petición
        url : urlServidor + 'mascota/eliminar',
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
    
                toastr["success"]("Se Ha eliminado la mascota del sistema", "Mascota")
            
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


function visualizarTipoMascota() {

    $('#new-tipo-mascota').blur(function () {
        let tipo_mascota = $('#new-tipo-mascota option:selected').text();
        $('#v-Tipo').text(tipo_mascota);
    });


}

function seleccionar_raza(id) {
    let fila = '#fila-raza-' + id;
    let f = $(fila)[0].children;
    let raza = f[2].innerText;
    $('#new-raza').val(raza);
    $('#id-raza').val(id);

}

function seleccionar_cliente(id) {
    let fila = '#fila-cliente-' + id;

    let f = $(fila)[0].children;

    let cedula = f[2].innerText;
    let nombre = f[3].innerText;
    let apellido = f[4].innerText;
    let telefono = f[5].innerText;
    let direccion = f[6].innerText;

    $('#c-cli-id').val(id);
    $('#c-cli-cedula').val(cedula);
    $('#c-cli-nombre').val(nombre);
    $('#c-cli-apellido').val(apellido);
    $('#c-cli-telefono').val(telefono);
    $('#c-cli-direccion').val(direccion);

    $('#v-Cedula').text(cedula);
    $('#v-Cliente').text(nombre + ' ' + apellido);

}

function visualizarMascota() {
    $('#new-nombre').keyup(function () {
        $('#new-nombre').val()
        let nombreMascota = $('#new-nombre').val();
        $('#v-Mascota').text(nombreMascota);

    });
}



 