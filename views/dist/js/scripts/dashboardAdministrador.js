$(function(){
   
    _init();

    function _init(){
        cargandoDatos();
        iniciar_grafico();
    }

    function cargandoDatos(){
        cantidadUsuarios();
        function cantidadUsuarios(){
            $.ajax({
                url:urlServidor  +'usuario/cantidad',
                type:'GET',
                dataType:'json',
                success:function(response){
                //    console.log(response);
                    if(response.status){
                       $('#cantidad-usuarios').text(response.cantidad);
                       $('#nombre-usuario').text(response.modelo);
                      
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

        cantidadClientes();
        function cantidadClientes(){
            $.ajax({
                url:urlServidor  +'cliente/cantidad',
                type:'GET',
                dataType:'json',
                success:function(response){
                //    console.log(response);
                    if(response.status){
                       $('#cantidad-clientes').text(response.cantidad);
                       $('#nombre-clientes').text(response.modelo);
                      
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

    

        totalcomprasxmes();
        function totalcomprasxmes(){
            $.ajax({
                url:urlServidor  +'compras/totales',
                type:'GET',
                dataType:'json',
                success:function(response){
                    console.log(response);
                    if(response.status){
                    
                        $('#total-compras').text('$' + response.total);
                        $('#mes-compras').text('Compras' + ' - ' + response.mes);
                        
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


        totalventasxmes();
        function totalventasxmes(){
            $.ajax({
                url:urlServidor  +'ventas/totales',
                type:'GET',
                dataType:'json',
                success:function(response){
                //    console.log(response);
                    if(response.status){
                    
                        $('#total-ventas').text('$' + response.total);
                        $('#mes-ventas').text('Ventas' + ' - ' + response.mes);
                        
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
    }

    function iniciar_grafico(){
        
        grafica_cantidad();
        function grafica_cantidad(){   
            $.ajax({
                // la URL para la petición
                url : urlServidor + 'categoria/grafica_porcentaje',
                // especifica si será una petición POST o GET
                type : 'GET',
                // el tipo de información que se espera de respuesta
                dataType : 'json',
                success : function(response) {
                   if(response.status){

                    let donutData        = {
                        labels: response.datos.labels,
                        datasets: [
                          {
                            data: response.datos.data,
                            backgroundColor : ['#3e95cd', '#8e5ea2','#3cba9f','#e8c3b9','#c45850','#f56954', '#00a65a', '#f39c12', '#00c0ef', '#3c8dbc', '#d2d6de', '#ffff00'],
                          }
                        ]
                      }
        
                        var pieChartCanvas = $('#cantidad_productos').get(0).getContext('2d')
                        var pieData        = donutData;
                        var pieOptions     = {
                        maintainAspectRatio : false,
                        responsive : true,
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
                error : function(jqXHR, status, error) {
                    console.log('Disculpe, existió un problema');
                },
                complete : function(jqXHR, status) {
                    // console.log('Petición realizada');
                }
            });

        }

        grafica_porcentaje();
        function grafica_porcentaje(){   
            $.ajax({
                // la URL para la petición
                url : urlServidor + 'categoria/grafica_porcentaje',
                // especifica si será una petición POST o GET
                type : 'GET',
                // el tipo de información que se espera de respuesta
                dataType : 'json',
                success : function(response) {
                   if(response.status){

                    let donutData        = {
                        labels: response.datos.labels,
                        datasets: [
                          {
                            data: response.datos.porcentaje,
                            backgroundColor : ['#f56954', '#00a65a', '#f39c12', '#ff00ff', '#800000', '#00c0ef', '#3c8dbc', '#d2d6de', '#ffff00', '#3e95cd', '#8e5ea2','#3cba9f','#e8c3b9','#c45850','#3e95cd','#8e5ea2','#3cba9f','#e8c3b9','#c45850','#66cdaa','#0000cd','#006400	'],
                          }
                        ]
                      }
        
                        var pieChartCanvas = $('#porcentaje_productos').get(0).getContext('2d')
                        var pieData        = donutData;
                        var pieOptions     = {
                        maintainAspectRatio : false,
                        responsive : true,
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
                error : function(jqXHR, status, error) {
                    console.log('Disculpe, existió un problema');
                },
                complete : function(jqXHR, status) {
                    // console.log('Petición realizada');
                }
            });

        }

        stock_productos();

        function stock_productos(){
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
                barColors : ['#ff6565','#ff9c9c','#eb9cff','#edb8fa','#fadc9b','#77dd77']
              });
              $.ajax({
                // la URL para la petición
                url : urlServidor + 'producto/grafica_stock',
                // especifica si será una petición POST o GET
                type : 'GET',
                // el tipo de información que se espera de respuesta
                dataType : 'json',
                success : function(response) {
                    if(response.status){
                        f1.setData(response.data);
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


    }


    reporte_compras();

    function reporte_compras(){
          $.ajax({
            // la URL para la petición
            url : urlServidor + 'compras/grafica_general',
            // especifica si será una petición POST o GET
            type : 'GET',
            // el tipo de información que se espera de respuesta
            dataType : 'json',
            success : function(response) {
                Morris.Bar({
                    element: 'compras-reporte',
                    data: response,
                    xkey: 'x',
                    ykeys: ['compras','ventas'],
                    labels: ['Compras','Ventas'],
                    resize: true,
                    barColors : ['#84b6f4','#00a65a']
                  });
            },
            error : function(jqXHR, status, error) {
                console.log('Disculpe, existió un problema');
            },
            complete : function(jqXHR, status) {
                // console.log('Petición realizada');
            }
        });
    }
    





});

