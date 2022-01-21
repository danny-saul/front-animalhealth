$(function(){
   
    _init();

    function _init(){
        cargandoDatos();
        actualizarconfiguracion();

        
    }
    function cargandoDatos(){
      
            $.ajax({
                url:urlServidor  +'configuracion/listar/'+1,
                type:'GET',
                dataType:'json',
                success:function(response){
                //    console.log(response);
                    if(response.status){
                       $('#configuracion-id').val(response.configuracion.id);
                       $('#new-configuracion-iva').val(response.configuracion.iva);
                       $('#new-configuracion-ganacia').val(response.configuracion.porcentaje_ganancia);
                      
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

    function actualizarconfiguracion(){
        $('#btn-update-configuracion').click(function(){
          let id=  $('#configuracion-id').val();
           let iva= $('#new-configuracion-iva').val() ;
           let porcentaje_ganancia= $('#new-configuracion-ganacia').val();
    
                    
            let json = {
                configuracion: {
                    id:id,
                    iva: iva,
                    porcentaje_ganancia: porcentaje_ganancia,
            
                }
            };
    
            //console.log(json);
    
            $.ajax({
                // la URL para la petición
                url : urlServidor + 'configuracion/editar',
                type : 'POST',
                data: {data: JSON.stringify(json)},
                dataType : 'json',
                success : function(response){
                    //console.log(response);
                    if(response.status){
                        toastr.options = {
                            "closeButton": true,
                            "preventDuplicates": true,
                            "positionClass": "toast-top-center",
                        };
            
                        toastr["success"](response.mensaje, "Listo !")
                        actualizarPrecioVenta();
                        $('#configuracion-general')[0].reset();
                        cargandoDatos();
                     
                    }else{
                        toastr.options = {
                            "closeButton": true,
                            "preventDuplicates": true,
                            "positionClass": "toast-top-center",
                        };
            
                        toastr["error"](response.mensaje, "Error")
                    }
                },
                error : function(jqXHR, status, error) {
                 console.log('Disculpe, existió un problema');
             },
             complete : function(jqXHR, status) {
                 // console.log('Petición realizada');
             } 
             });
        });
    }

    function actualizarPrecioVenta(){
           
        $.ajax({
            url:urlServidor  +'configuracion/listar/'+1,
            type:'GET',
            dataType:'json',
            success:function(response){
            //    console.log(response);
                if(response.status){     
                    let porcentaje_ganancia = response.configuracion.porcentaje_ganancia;
                    $.ajax({
                        url:urlServidor  +'producto/listarproducto',
                        type:'GET',
                        dataType:'json',
                        success:function(response){
                        //    console.log(response);
                       
                            if(response.status){

                              response.producto.forEach(element => {
                                let precio_ventaf = 0;
                                precio_ventaf = Number(element.precio_compra)+Number(element.precio_compra * porcentaje_ganancia)/100;
                                let precio_venta = precio_ventaf.toFixed(2);
                                let id = element.id;

                                let json = {
                                    producto:{
                                        id,
                                        precio_venta,
                                        
                                    },
                                }

                                $.ajax({
                                    url:urlServidor  + 'configuracion/actualizarprecioventa',
                                    type:'POST',
                                    data: 'data=' + JSON.stringify(json),
                                    dataType:'json',
                                    success:function(response){
                                    //    console.log(response);
                                        if(response.status){
                                            toastr.options = {
                                                "closeButton": true,
                                                "preventDuplicates": true,
                                                "positionClass": "toast-top-center",
                                            };
                                            toastr["success"](response.mensaje, "Compra")
                                                          
                                        } else{
                                            toastr.options = {
                                                "closeButton": true,
                                                "preventDuplicates": true,
                                                "positionClass": "toast-top-center",
                                            };
                                            toastr["error"](response.mensaje, "Compra")
                                        }
                                    },
                                    error : function(jqXHR, status, error) {
                                        console.log('Disculpe, existió un problema');
                                    },
                                    complete : function(jqXHR, status) {
                                        // console.log('Petición realizada');
                                    }
                                });
                                       

                              });
                               
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