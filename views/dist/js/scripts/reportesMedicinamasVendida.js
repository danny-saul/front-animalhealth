$(function () {

    _init();

    function _init() {
        cargarmedicinavendida();
    }


    function cargarmedicinavendida(){
        $('#btn-consulta-v').click(function () {
            let fecha_inicio = $('#fecha-inicio-r-v').val();
            let fecha_fin = $('#fecha-fin-r-v').val();
            let limite = $('#limite option:selected').val();

            toastr.options = {
                "closeButton": true,
                "preventDuplicates": true,
                "positionClass": "toast-top-center",
            };

            if (fecha_inicio.length == 0) {
                toastr["warning"]('Seleccione una fecha de inicio', "Reporte Servicios Adquiridos");
            } else if (fecha_fin.length == 0) {
                toastr["warning"]('Seleccione una fecha fin', "Reporte Servicios Adquiridos");
            } else if (moment(fecha_inicio).isAfter(fecha_fin)) {
                toastr["warning"]('La fecha fin no puede ser menor', "Reporte Servicios Adquiridos");
            }else if(limite == 0 ){
                toastr["warning"]('Seleccione un Limite', "Reporte Servicios Adquiridos");
            } else {

                let f = new Date();
                let fecha = f.getDate() + '/' + (f.getMonth() + 1) + '/' + f.getFullYear();
                let hora = f.getHours() + ':' + (f.getMinutes()) + ':' + f.getSeconds();


                $('#fecha-inicio-r-v2').text(fecha_inicio);
                $('#fecha-fin-r-v2').text(fecha_fin);
                $('#fecha-consulta-s').text(fecha);
                $('#hora-consulta-s').text(hora);

                $('#tabla-reporte-v').removeClass('d-none');
            }


            $.ajax({
                url: urlServidor + 'ventas/masvendido/' + fecha_inicio + '/' + fecha_fin + '/' + limite,
                type: 'GET',
                dataType: 'json',
                    success: function (response) {
                   console.log(response);
                    let tr = '';  
                     if(response){
                        let i = 1;
                        response.lista.forEach(element => {
                            
                            tr += `
                            <tr>
                                <th>${i}</th>
                                <th>${element.producto.nombre}</th>
                                <th>${element.cantidad}</th>
                                <th>${element.producto.precio_venta}</th>
                                <th>${element.total}</th> 
                            </tr>
                        `;
                        i++;                             
                        });

                        $('#body-reporte-servicio-v').html(tr);
                        $('#totales-v').html('Totales');
                        $('#total-general-v').html(response.totalgeneral.toFixed(2));
                             /* Canvas Dashboard */

                             $('#canvas1').html('');

                             let canvas1 = `
                                 <canvas id="box-barra1" 
                                     style="min-height: 300px; height: 300px; max-height: 300px; max-width: 100%; margin-top:22px">
                                 </canvas>`;
                                 $('#canvas1').html(canvas1);

                             let areaChartData = {
                                 labels : response.data.labels,
                                 datasets: [
                                     {
                                         label: 'Cantidad',
                                         backgroundColor : ['#109dfa','#ff0000','#ffde00','#008f39','#b89ec4','#2f5264','#af4aad','#6de81e','#ff6961','#77dd77','#fdfd96','#84b6f4'],
                                         pointRadius: false,
                                         pointColor: '#3b8bba',
                                         pointStrokeColor : 'rgba(60,141,188,1)',
                                         pointHighlightFill: '#fff',
                                         pointHighlightStroke: 'rgba(60,141,188,1)',
                                         data : response.data.masvendidos
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
                                 type: 'pie',
                                 data: barChartData,
                                 options: barChartOptions

                                 
                             });
                             

                         
                         
                    }else{
                        toastr["warning"]('No hay informacion disponible', "Reporte Compras");

                   } 
                }
            });            

        });

    }





});