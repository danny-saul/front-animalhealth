$(function () {

    _init();

    function _init() {
        cargarTablaVentas();
        imprimir();
    }

    function cargarTablaVentas() {

        $('#buscar-datos-ventas').click(function () {
            let fecha_inicio = $('#fecha-inicio-r').val();
            let fecha_fin = $('#fecha-fin-r').val();

            toastr.options = {
                "closeButton": true,
                "preventDuplicates": true,
                "positionClass": "toast-top-center",
            };
            if (fecha_inicio.length == 0) {
                toastr["warning"]('Seleccione una fecha de inicio', "Reporte Compras");
            } else if (fecha_fin.length == 0) {
                toastr["warning"]('Seleccione una fecha fin', "Reporte Compras");
            } else if (moment(fecha_inicio).isAfter(fecha_fin)) {
                toastr["error"]('La fecha fin no uede ser menor', "Reporte Compras");
            } else {
                let f = new Date();
                let fecha = f.getDate() + '/' + (f.getMonth() + 1) + '/' + f.getFullYear();
                let hora = f.getHours() + ':' + (f.getMinutes()) + ':' + f.getSeconds();

                $('#inicio-r-v').text(fecha_inicio);
                $('#fin-r-v').text(fecha_fin);
                $('#fecha-consulta').text(fecha);
                $('#hora-consulta').text(hora);

                $('#tabla-reporte-venta').removeClass('d-none');

                $.ajax({
                url: urlServidor + 'ventas/ventasmensuales/' + fecha_inicio + '/' + fecha_fin,
                    type: 'GET',
                        dataType: 'json',
                            success: function (response) {
                                console.log(response);
                                if(response.lista.length > 0){
                                    let tr = ''; let i = 1;

                                    response.lista.forEach(element => {
                                    tr += `
                                        <tr>
                                            <th>${i}</th>
                                            <th>${element.data.mes}</th>
                                            <th>${element.data.subtotal}</th>
                                            <th>${element.data.iva}</th>
                                            <th>${element.data.total}</th> 
                                        </tr>
                                    `;
                                    i++;   
                                    });
                                    $('#body-reporte-venta').html(tr);
                                    $('#totales').html('Totales');
                                    $('#subtotal-general').html(response.totales.subtotal.toFixed(2));
                                    $('#iva-general').html(response.totales.iva.toFixed(2));
                                    $('#total-general').html(response.totales.total.toFixed(2));

                                    /* Canvas Dashboard */

                                    $('#canvas1').html('');

                                    let canvas1 = `
                                        <canvas id="box-barra1" 
                                            style="min-height: 340px; height: 340px; max-height: 300px; max-width: 100%; margin-top:22px">
                                        </canvas>`;
                                        $('#canvas1').html(canvas1);

                                    let areaChartData = {
                                        labels : response.barra.labels,
                                        datasets: [
                                            {
                                                label: 'Iva',
                                                backgroundColor : '#f56954',
                                                pointRadius: false,
                                                pointColor: '#3b8bba',
                                                pointStrokeColor : 'rgba(60,141,188,1)',
                                                pointHighlightFill: '#fff',
                                                pointHighlightStroke: 'rgba(60,141,188,1)',
                                                data : response.barra.dataiva
                                            },
                                            {
                                                label: 'Subtotal',
                                                backgroundColor : '#00a65a',
                                                pointRadius: false,
                                                pointColor: 'rgba(210,214,222,1)',
                                                pointStrokeColor : '#c1c7d1',
                                                pointHighlightFill: '#fff',
                                                pointHighlightStroke: 'rgba(220,220,220,1)',
                                                data : response.barra.datasubtotal
                                            },
                                            {
                                                label: 'Total',
                                                backgroundColor : '#f39c12',
                                                pointRadius: false,
                                                pointColor: 'rgba(210,214,222,1)',
                                                pointStrokeColor : '#c1c7d1',
                                                pointHighlightFill: '#fff',
                                                pointHighlightStroke: 'rgba(220,220,220,1)',
                                                data : response.barra.datatotal
                                            },
                                        ]
                                    }


                                    var barChartCanvas = $('#box-barra1').get(0).getContext('2d');
                                    var barChartData = $.extend(true, {}, areaChartData);
                                    var temp0 = areaChartData.datasets[0];
                                    var temp1 = areaChartData.datasets[1];
                                    var temp2 = areaChartData.datasets[2];

                                    areaChartData.datasets[0] = temp1;
                                    areaChartData.datasets[1] = temp0;
                                    areaChartData.datasets[2] = temp2;

                                    var barChartOptions = {
                                        responsive : true,
                                        maintainAspectRadio : false,
                                        datasetFill : false
                                    }

                                    new Chart(barChartCanvas,{
                                        type: 'bar',
                                        data: barChartData,
                                        options: barChartOptions
                                    });
                                }else{
                                     toastr["warning"]('No hay informacion disponible', "Reporte Ventas");

                                }


                            },
                
            });





    }



});


        
    }

    function imprimir(){
        $('#btn-imprimir').click(function(){
                let element = document.getElementById('tabla-reporte');
                let opt = {
                margin:       0.5,
                filename:     'Reporte Ventas.pdf',
                image:        { type: 'jpeg', quality: 3 },
                html2canvas:  { scale: 2 },
                jsPDF:        { unit: 'mm', format: 'legal', orientation: 'portrait' }
                };
  
                html2pdf().set(opt).from(element).save();
        });
    }

});

