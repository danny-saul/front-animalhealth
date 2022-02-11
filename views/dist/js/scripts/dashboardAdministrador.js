$(function () {

    _init();

    function _init() {
        cargandoDatos();
        iniciar_grafico();
        kpisatisfaccion();
        kpi_ventas();
    }

    function cargandoDatos() {
        cantidadUsuarios();
        function cantidadUsuarios() {
            $.ajax({
                url: urlServidor + 'usuario/cantidad',
                type: 'GET',
                dataType: 'json',
                success: function (response) {
                    //    console.log(response);
                    if (response.status) {
                        $('#cantidad-usuarios').text(response.cantidad);
                        $('#nombre-usuario').text(response.modelo);

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

        cantidadClientes();
        function cantidadClientes() {
            $.ajax({
                url: urlServidor + 'cliente/cantidad',
                type: 'GET',
                dataType: 'json',
                success: function (response) {
                    //    console.log(response);
                    if (response.status) {
                        $('#cantidad-clientes').text(response.cantidad);
                        $('#nombre-clientes').text(response.modelo);

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

        totalcomprasxmes();
        function totalcomprasxmes() {
            $.ajax({
                url: urlServidor + 'compras/totales',
                type: 'GET',
                dataType: 'json',
                success: function (response) {
                    if (response.status) {

                        $('#total-compras').text('$' + response.total);
                        $('#mes-compras').text('Compras' + ' - ' + response.mes);

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

        totalventasxmes();
        function totalventasxmes() {
            $.ajax({
                url: urlServidor + 'ventas/totales',
                type: 'GET',
                dataType: 'json',
                success: function (response) {
                    //    console.log(response);
                    if (response.status) {

                        $('#total-ventas').text('$' + response.total);
                        $('#mes-ventas').text('Ventas' + ' - ' + response.mes);

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

        cantidadProducto();
        function cantidadProducto() {
            $.ajax({
                url: urlServidor + 'producto/cantidad',
                type: 'GET',
                dataType: 'json',
                success: function (response) {
                    //    console.log(response);
                    if (response.status) {
                        $('#conta_producto').text(response.cantidad);
                        $('#nombre-productos').text(response.modelo);

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

        cantidadProveedores();
        function cantidadProveedores() {
            $.ajax({
                url: urlServidor + 'proveedor/cantidad',
                type: 'GET',
                dataType: 'json',
                success: function (response) {
                    //    console.log(response);
                    if (response.status) {
                        $('#conta_proveedor').text(response.cantidad);
                        $('#nombre-proveedor').text(response.modelo);

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

        cantidadCategoria();
        function cantidadCategoria() {
            $.ajax({
                url: urlServidor + 'categoria/cantidad',
                type: 'GET',
                dataType: 'json',
                success: function (response) {
                    //    console.log(response);
                    if (response.status) {
                        $('#conta_categoria').text(response.cantidad);
                        $('#nombre-categoria').text(response.modelo);

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


        cantidadMascotas();
        function cantidadMascotas() {
            $.ajax({
                url: urlServidor + 'mascota/cantidad',
                type: 'GET',
                dataType: 'json',
                success: function (response) {
                    //    console.log(response);
                    if (response.status) {
                        $('#conta_mascota').text(response.cantidad);
                        $('#nombre-mascota').text(response.modelo);

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

    function iniciar_grafico() {

        grafica_cantidad();
        function grafica_cantidad() {
            $.ajax({
                // la URL para la petición
                url: urlServidor + 'categoria/grafica_porcentaje',
                // especifica si será una petición POST o GET
                type: 'GET',
                // el tipo de información que se espera de respuesta
                dataType: 'json',
                success: function (response) {
                    if (response.status) {

                        let donutData = {
                            labels: response.datos.labels,
                            datasets: [
                                {
                                    data: response.datos.data,
                                    backgroundColor: ['#3e95cd', '#8e5ea2', '#3cba9f', '#e8c3b9', '#c45850', '#f56954', '#00a65a', '#f39c12', '#00c0ef', '#3c8dbc', '#d2d6de', '#ffff00'],
                                }
                            ]
                        }

                        var pieChartCanvas = $('#cantidad_productos').get(0).getContext('2d')
                        var pieData = donutData;
                        var pieOptions = {
                            maintainAspectRatio: false,
                            responsive: true,
                        }
                        //Create pie or douhnut chart
                        // You can switch between pie and douhnut using the method below.
                        new Chart(pieChartCanvas, {
                            type: 'pie',
                            data: pieData,
                            options: pieOptions
                        })
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

        grafica_porcentaje();
        function grafica_porcentaje() {
            $.ajax({
                // la URL para la petición
                url: urlServidor + 'categoria/grafica_porcentaje',
                // especifica si será una petición POST o GET
                type: 'GET',
                // el tipo de información que se espera de respuesta
                dataType: 'json',
                success: function (response) {
                    if (response.status) {

                        let donutData = {
                            labels: response.datos.labels,
                            datasets: [
                                {
                                    data: response.datos.porcentaje,
                                    backgroundColor: ['#f56954', '#00a65a', '#f39c12', '#ff00ff', '#800000', '#00c0ef', '#3c8dbc', '#d2d6de', '#ffff00', '#3e95cd', '#8e5ea2', '#3cba9f', '#e8c3b9', '#c45850', '#3e95cd', '#8e5ea2', '#3cba9f', '#e8c3b9', '#c45850', '#66cdaa', '#0000cd', '#006400	'],
                                }
                            ]
                        }

                        var pieChartCanvas = $('#porcentaje_productos').get(0).getContext('2d')
                        var pieData = donutData;
                        var pieOptions = {
                            maintainAspectRatio: false,
                            responsive: true,
                        }
                        //Create pie or douhnut chart
                        // You can switch between pie and douhnut using the method below.
                        new Chart(pieChartCanvas, {
                            type: 'doughnut',
                            data: pieData,
                            options: pieOptions
                        })
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

        stock_productos();

        function stock_productos() {
            let f1 = new Morris.Bar({
                element: 'stock-productos',
                data: [
                    { x: 'Producto', valor: 100 },
                    { x: 'Producto', valor: 75 },
                    { x: 'Producto', valor: 50 },
                    { x: 'Producto', valor: 75 },
                    { x: 'Producto', valor: 50 },
                    { x: 'Producto', valor: 75 },
                    { x: 'Producto', valor: 100 }
                ],
                xkey: 'x',
                ykeys: ['valor'],
                labels: ['Stock'],
                resize: true,
                barColors: ['#ff6565', '#ff9c9c', '#eb9cff', '#edb8fa', '#fadc9b', '#77dd77']
            });
            $.ajax({
                // la URL para la petición
                url: urlServidor + 'producto/grafica_stock',
                // especifica si será una petición POST o GET
                type: 'GET',
                // el tipo de información que se espera de respuesta
                dataType: 'json',
                success: function (response) {
                    if (response.status) {
                        f1.setData(response.data);
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

    reporte_compras();

    function reporte_compras() {
        $.ajax({
            // la URL para la petición
            url: urlServidor + 'compras/grafica_general',
            // especifica si será una petición POST o GET
            type: 'GET',
            // el tipo de información que se espera de respuesta
            dataType: 'json',
            success: function (response) {
                Morris.Bar({
                    element: 'compras-reporte',
                    data: response,
                    xkey: 'x',
                    ykeys: ['compras', 'ventas'],
                    labels: ['Compras', 'Ventas'],
                    resize: true,
                    barColors: ['#84b6f4', '#00a65a']
                });
            },
            error: function (jqXHR, status, error) {
                console.log('Disculpe, existió un problema');
            },
            complete: function (jqXHR, status) {
                // console.log('Petición realizada');
            }
        });
    }

    function kpisatisfaccion() {
        $.ajax({
            // la URL para la petición
            url: urlServidor + 'sastifaccion/sastifaccionkpi',
            // especifica si será una petición POST o GET
            type: 'GET',
            // el tipo de información que se espera de respuesta
            dataType: 'json',
            success: function (response) {
                console.log(response);
                if (response) {
                    var gaugeOptions = {
                        chart: {
                            type: 'solidgauge'
                        },
    
                        title: null,
    
                        pane: {
                            center: ['50%', '85%'],
                            size: '140%',
                            startAngle: -90,
                            endAngle: 90,
                            background: {
                                backgroundColor:
                                    Highcharts.defaultOptions.legend.backgroundColor || '#EEE',
                                innerRadius: '60%',
                                outerRadius: '100%',
                                shape: 'arc'
                            }
                        },
    
                        exporting: {
                            enabled: false
                        },
    
                        tooltip: {
                            enabled: false
                        },
    
                        // the value axis
                        yAxis: {
                            stops: [
                                [0.1, '#55BF3B'], // green
                                [0.5, '#DDDF0D'], // yellow
                                [0.9, '#DF5353'] // red
                            ],
                            lineWidth: 0,
                            tickWidth: 0,
                            minorTickInterval: null,
                            tickAmount: 2,
                            title: {
                                y: -70
                            },
                            labels: {
                                y: 16
                            }
                        },
    
                        plotOptions: {
                            solidgauge: {
                                dataLabels: {
                                    y: 5,
                                    borderWidth: 0,
                                    useHTML: true
                                }
                            }
                        }
                    };
    
                    // The speed gauge
                    var chartSpeed = Highcharts.chart('container-speed', Highcharts.merge(gaugeOptions, {
                        yAxis: {
                            min: 0,
                            max: 100,
                            title: {
                                text: 'CSAT (Promedio) (+)'
                            }
                        },
    
                        credits: {
                            enabled: false
                        },
    
                        series: [{
                            name: 'Positivo',
                            data: response.data,
                            dataLabels: {
                                format:
                                    '<div style="text-align:center">' +
                                    '<span style="font-size:25px">{y}</span><br/>' +
                                    '<span style="font-size:12px;opacity:0.4">Escala de Satisfacción</span>'+
                                    '</div>' 
                            },
                            tooltip: {
                                valueSuffix: ' km/h'
                            }
                        }]

            
                    }));

                    var chartPor1 = Highcharts.chart('container-por1', Highcharts.merge(gaugeOptions, {
                        yAxis: {
                            min: 0,
                            max: 100,
                            title: {
                                text: 'CSAT (Porcentaje) (%)'
                            }
                        },
    
                        credits: {
                            enabled: false
                        },
    
                        series: [{
                            name: 'Positivo',
                            data: response.datapor,
                            dataLabels: {
                                format:
                                    '<div style="text-align:center">' +
                                    '<span style="font-size:25px">{y}</span><br/>' +
                                    '<span style="font-size:12px;opacity:0.4">Sastifacion del cliente</span>' +
                                    '</div>'
                            },
                            tooltip: {
                                valueSuffix: ' km/h'
                            }
                        }]
    
                    }));
    
                    // The RPM gauge
                    var chartRpm = Highcharts.chart('container-rpm', Highcharts.merge(gaugeOptions, {
                        yAxis: {
                            min: 0,
                            max: 100,
                            title: {
                                text: 'CSAT (Promedio) (-)' 
                            }
                        },

                        credits: {
                            enabled: false
                        },
    
                        series: [{
                            name: 'Negativo',
                            data: response.data2,
                            dataLabels: {
                                format:
                                '<div style="text-align:center">' +
                                '<span style="font-size:25px">{y}</span><br/>' +
                                '<span style="font-size:12px;opacity:0.4">Insastifacion del cliente</span>' +
                                '</div>'
                            },
                            tooltip: {
                                valueSuffix: ' revolutions/min'
                            }
                        }]
    
                    }));

               

                    var chartPor2 = Highcharts.chart('container-por2', Highcharts.merge(gaugeOptions, {
                        yAxis: {
                            min: 0,
                            max: 100,
                            title: {
                                text: 'CSAT (Porcentaje) (%)'
                            }
                        },
    
                        credits: {
                            enabled: false
                        },
    
                        series: [{
                            name: 'Positivo',
                            data: response.datapor2,
                            dataLabels: {
                                format:
                                    '<div style="text-align:center">' +
                                    '<span style="font-size:25px">{y}</span><br/>' +
                                    '<span style="font-size:12px;opacity:0.4">Insastifacion del cliente</span>' +
                                    '</div>'
                            },
                            tooltip: {
                                valueSuffix: ' km/h'
                            }
                        }]
    
                    }));

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

    function kpi_ventas(){
        $('#btn-consulta').click(function(){
            let fecha_inicio = $('#fecha-inicio-kpi').val();
            let fecha_fin = $('#fecha-fin-kpi').val();
            let year = $('#year-select option:selected').val();
            let presupuesto = $('#presupuesto-kpi').val();

            toastr.options = {
                "closeButton": true,
                "preventDuplicates": true,
                "positionClass": "toast-top-center",
            };

            if (fecha_inicio.length == 0) {
                toastr["warning"]('Seleccione una fecha de inicio', "Dashboard Administrador");
            } else if (fecha_fin.length == 0) {
                toastr["warning"]('Seleccione una fecha fin', "Dashboard Administrador");
            } else if (moment(fecha_inicio).isAfter(fecha_fin)) {
                toastr["warning"]('La fecha fin no puede ser menor', "Dashboard Administrador");
            }else if(year == 0 ){
                toastr["warning"]('Seleccione un año', "Dashboard Administrador");
            } else {

                $('#tabla-reporte-v').removeClass('d-none');
            }

            $.ajax({
                url: urlServidor + 'ventas/kpiVenta/' + fecha_inicio + '/' + fecha_fin + '/' + year + '/' + presupuesto,
                type: 'GET',
                dataType: 'json',
                    success: function (response) {
                   console.log(response);
                   if(response){
                        /* Canvas Dashboard */

                        $('#canvas-kpi-ventas').html('');

                        let canvas1 = `
                            <canvas id="box-barra1" 
                                style="min-height: 300px; height: 300px; max-height: 300px; max-width: 100%; margin-top:22px">
                            </canvas>`;
                            $('#canvas-kpi-ventas').html(canvas1);

                        let areaChartData = {
                            labels : response.orden.labels,
                            datasets: [
                                {
                                    label: 'Cantidad',
                                    backgroundColor : ['#109dfa','#ff0000','#ffde00','#008f39','#b89ec4','#2f5264','#af4aad','#6de81e','#ff6961','#77dd77','#fdfd96','#84b6f4'],
                                    pointRadius: false,
                                    pointColor: '#3b8bba',
                                    pointStrokeColor : 'rgba(60,141,188,1)',
                                    pointHighlightFill: '#fff',
                                    pointHighlightStroke: 'rgba(60,141,188,1)',
                                    data : response.orden.data
                                },
                            ]
                            
                        }

                        var barChartCanvas = $('#box-barra1').get(0).getContext('2d');
                        var barChartData = $.extend(true, {}, areaChartData);
                        var temp0 = areaChartData.datasets[0];
                  

                        areaChartData.datasets[0] = temp0;
                    

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

                        $('#data-pre').removeClass('d-none');
                        $('#eje-pre').text(response.orden.ejecucionPresupuestal);
                   }
                }
            });  

        });
    }





});

