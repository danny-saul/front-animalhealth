$(function () {

    _init();

    function _init() {
        cargar();
        cargarCliente();
        abrirModalCliente();
    }

    function abrirModalCliente() {
        $('#buscar-datos-cliente').click(function () {
            $('#modal-cargar-cliente').modal('show');
        });
    }


    function cargarCliente() {


        $.ajax({
            url: urlServidor + 'cliente/listar',
            type: 'GET',
            dataType: 'json',
            success: function (response) {
                //        console.log(response);
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


    function cargar() {
        $('#btn-consulta').click(function () {
            let fecha_inicio = $('#fecha-inicio-r-s').val();
            let fecha_fin = $('#fecha-fin-r-s').val();
            let cliente_id = $('#cliente-id-reporte').val();

            toastr.options = {
                "closeButton": true,
                "preventDuplicates": true,
                "positionClass": "toast-top-center",
            };

            if (fecha_inicio.length == 0) {
                toastr["warning"]('Seleccione una fecha de inicio', "Reporte Mascota mas Atendida");
            } else if (fecha_fin.length == 0) {
                toastr["warning"]('Seleccione una fecha fin', "Reporte Mascota mas Atendida");
            } else if (moment(fecha_inicio).isAfter(fecha_fin)) {
                toastr["error"]('La fecha fin no puede ser menor', "Reporte Mascota mas Atendida");
            } else if (cliente_id.length == 0) {
                toastr["warning"]('Seleccione un Cliente', "Reporte Mascota mas Atendida");
            } else {

                let f = new Date();
                let fecha = f.getDate() + '/' + (f.getMonth() + 1) + '/' + f.getFullYear();
                let hora = f.getHours() + ':' + (f.getMinutes()) + ':' + f.getSeconds();


                $('#fecha-inicio-r-s2').text(fecha_inicio);
                $('#fecha-fin-r-s2').text(fecha_fin);
                $('#fecha-consulta-s').text(fecha);
                $('#hora-consulta-s').text(hora);

                $('#tabla-reporte-mascotas').removeClass('d-none');
            }



            $.ajax({
                url: urlServidor + 'citas/mascotasmasantendidas/' + fecha_inicio + '/' + fecha_fin + '/' + cliente_id,
                type: 'GET',
                dataType: 'json',
                success: function (response) {
                    console.log(response);
                    let tr = '';
                    if (response) {
                        let i = 1;


                        response.lista.data.forEach(element => {

                            tr += `
                            <tr>
                                <th>${i}</th>
                                <th>${element.nombreMascota}</th>
                                <th>${element.tipomascota}</th>
                                <th>${element.cantidadDeMascotaMasAtendida}</th>
                                <th>${element.servicios}</th> 
                            </tr>
                        `;
                            i++;
                        });

                        $('#body-reporte-reoprte-c').html(tr);


                        /* Canvas Dashboard */

                        $('#canvas1').html('');

                        let canvas1 = `
                  <canvas id="box-barra1" 
                      style="min-height: 300px; height: 300px; max-height: 300px; max-width: 100%; margin-top:22px">
                  </canvas>`;
                        $('#canvas1').html(canvas1);

                        let areaChartData = {
                            labels: response.grafico.labels,
                            datasets: [
                                {
                                    label: 'Cantidad',
                                    backgroundColor: ['#109dfA  ', '#FF0000', '#FFDE00', '#008f39', '#ef280f', '#e7d40a'],
                                    pointRadius: false,
                                    pointColor: '#3b8bba',
                                    pointStrokeColor: 'rgba(60,141,188,1)',
                                    pointHighlightFill: '#fff',
                                    pointHighlightStroke: 'rgba(60,141,188,1)',
                                    data: response.grafico.datos
                                },


                            ]

                        }




                        var barChartCanvas = $('#box-barra1').get(0).getContext('2d');
                        var barChartData = $.extend(true, {}, areaChartData);
                        var temp0 = areaChartData.datasets[0];


                        areaChartData.datasets[0] = temp0;


                        var barChartOptions = {
                            responsive: true,
                            maintainAspectRadio: false,
                            datasetFill: false

                        }

                        new Chart(barChartCanvas, {
                            type: 'pie',
                            data: barChartData,
                            options: barChartOptions


                        });



                    } else {
                        toastr.options = {
                            "closeButton": true,
                            "preventDuplicates": true,
                            "positionClass": "toast-top-center",
                        };
                        toastr["info"]('No hay informacion disponible', "Reporte Mascotas mas Atendidas");
                    }
                }
            });





        });

    }

});


function seleccionar_cliente(id) {
    let fila = '#fila-cliente-' + id;

    let f = $(fila)[0].children;

    let nombre = f[3].innerText;
    let apellido = f[4].innerText;

    $('#cliente-id-reporte').val(id);
    $('#cliente-reporte').val(nombre + ' ' + apellido);


}