$(function(){
   
    _init();

    function _init(){
        cargandoDatos();
        
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
            //    console.log(response);
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



});  