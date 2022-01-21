/* $(function () { */
    _init();

    function _init(){
        guardarCategoria();
        cargarCategoria();
        cargarSelectCategoria();
        guardarProducto();
        cargarTabla();
        recuperarCategoria();
        editandoProductoModal();

    }

    function guardarCategoria(){
        $('#nueva-categoria').submit(function(e){
            e.preventDefault();
            let nombre = $('#new-categoria-nombre').val();


            if(nombre.length == 0){
                toastr.options = {
                    "closeButton": true,
                    "preventDuplicates": true,
                    "positionClass": "toast-top-center",
                };

                toastr["error"]('Ingrese el nombre de una categoria', "Categoria")

            }else{

                let json ={
                    categoria:{
                        nombre,
                    }
                }
                guardandocategoria(json);
            }       
        });

    }

    function guardandocategoria(json){
        $.ajax({
            url:urlServidor  +'categoria/guardarcategoria',
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
                    toastr["success"](response.mensaje, "Categoria")
                    $('#nueva-categoria')[0].reset();
                    cargarTabla();
    
                } else{
                    toastr.options = {
                        "closeButton": true,
                        "preventDuplicates": true,
                        "positionClass": "toast-top-center",
                    };
                    toastr["error"](response.mensaje, "Categoria")
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
    
    function cargarCategoria(){
        tabla = $('#tabla-categoria').DataTable({
            "lengthMenu": [ 5, 10, 25, 75, 100],//mostramos el menú de registros a revisar
            "responsive": true, "lengthChange": false, "autoWidth": false,
            "aProcessing": true,//Activamos el procesamiento del datatables
            "aServerSide": true,//Paginación y filtrado realizados por el servidor
            "ajax":
                {
                    url:  urlServidor + 'categoria/datatablecategoria',
                    type : "get",
                    dataType : "json",						
                    error: function(e){
                        console.log(e.responseText);	
                    }
                },
            destroy: true,
            "iDisplayLength": 2,//Paginación
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

    function cargarSelectCategoria(){
        $.ajax({
            url:urlServidor  +'categoria/listar',
            type:'GET',
            dataType:'json',
            success:function(response){
                //console.log(response);

                    if(response.status){
                    let option = '<option value="0">Seleccione Categoria</option>';
                    response.categoria.forEach(element=>{
                    option +=`<option value=${element.id}>${element.nombre}</option>`;
                    });
                    $('#new-producto-categoria').html(option);

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

    function guardarProducto(){
        $('#nuevo-productos').submit(function(e){
            e.preventDefault();
            let categoria_id = $('#new-producto-categoria option:selected').val();

            let codigo = $('#new-producto-codigo').val();
            let nombre=  $('#new-producto-nombre').val();
            let descripcion= $('#new-producto-descripcion').val();
            let imagen= $('#new-producto-img')[0].files[0]; 
            let stock= $('#new-producto-stock').val();
            let fecha = $('#new-producto-fecha').val();
            let def = (imagen == undefined) ? 'productodefault.jpg' : imagen.name;

            let json = {
            producto:{
                    categoria_id,
                    codigo,
                    nombre,
                    descripcion,
                    imagen:def,
                    fecha,
                    
                },
                

            };
            console.log(json);

                guardandoproducto(json);    

        });
    } 
       
    function guardandoproducto(json){
        $.ajax({
            url:urlServidor  +'producto/guardarproducto',
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
        
                    toastr["success"](response.mensaje, "Producto")
                    $('#nuevo-productos')[0].reset();
                    cargarTabla();

                } else{
                    toastr.options = {
                        "closeButton": true,
                        "preventDuplicates": true,
                        "positionClass": "toast-top-center",
                    };
        
                    toastr["error"](response.mensaje, "Productos")

                }
            },
            error : function(jqXHR, status, error) {
                console.log('Disculpe, existió un problema');
            },
            complete : function(jqXHR, status) {
                // console.log('Petición realizada');
            }
        });
        if(json.producto.imagen=='productodefault.jpg'){

        }else{
            let imagen=$('#new-producto-img')[0].files[0];
            let formData= new FormData();
            formData.append('fichero',imagen);

            $.ajax({
                // la URL para la petición
                url : urlServidor + 'producto/fichero',
                // especifica si será una petición POST o GET
                type : 'POST',
                // el tipo de información que se espera de respuesta
                data: formData,
                contentType: false,
                processData: false,

                dataType : 'json',
                success : function(responseImg) {
                    if(responseImg.status){
                      
                    }else{
                       

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

    function cargarTabla(){
        tabla = $('#tabla-productos').DataTable({
            "lengthMenu": [ 5, 10, 25, 75, 100],//mostramos el menú de registros a revisar
            "responsive": true, "lengthChange": false, "autoWidth": false,
            "aProcessing": true,//Activamos el procesamiento del datatables
            "aServerSide": true,//Paginación y filtrado realizados por el servidor
            "ajax":
                {
                    url:  urlServidor + 'producto/datatableproducto',
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

    function recuperarCategoria(){
        $.ajax({
            url:urlServidor  +'categoria/listar',
            type:'GET',
            dataType:'json',
            success:function(response){
            //    console.log(response);
                if(response.status){
                    let option = '<option value="0">Seleccione Categoria</option>';
                    response.categoria.forEach(element=>{
                    option +=`<option value=${element.id}>${element.nombre}</option>`;
                   });
                   $('#e-categoria-producto').html(option);

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

/* }); */

function editar_producto(id){
   $('#modal-editar-producto').modal('show');
   cargarProducto(id);
}

function cargarProducto(id){
    $.ajax({
        url:urlServidor  +'producto/listar/'+id,
        type:'GET',
        dataType:'json',
        success:function(response){
            //console.log(response);
            if(response.status){            
                $('#e-producto-id').val(response.producto.id);
                $('#e-nombre-producto').val(response.producto.nombre);
                $('#e-descripcion-producto').val(response.producto.descripcion);
                $('#e-precio-venta-producto').val(response.producto.precio_venta);
                $('#e-categoria-producto').val(response.producto.categoria.id);

            } 
        },
        error : function(jqXHR, status, error) {
            console.log('Disculpe, existió un problema');
        },
        complete : function(jqXHR, status) {
        }
    });

}

function editandoProductoModal(){
    $('#btn-update-producto').click(function(){
        let id = $('#e-producto-id').val();
        let categoria_id =$('#e-categoria-producto option:selected').val();
        let nombre = $('#e-nombre-producto').val();
        let descripcion = $('#e-descripcion-producto').val();
        let precio_venta = $('#e-precio-venta-producto').val();

                
        let json = {
            producto: {
                id:id,
                categoria_id: categoria_id,
                nombre: nombre,
                descripcion:descripcion,
                precio_venta:precio_venta,   
            }
        };

        //console.log(json);

        $.ajax({
            // la URL para la petición
            url : urlServidor + 'producto/editarproducto',
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

                    $('#modal-editar-producto').modal('hide');
                    cargarTabla();
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

function eliminar_producto(id){
    let data = {
        producto: {
            id: id,
        }
    };
    $.ajax({
        // la URL para la petición
        url : urlServidor + 'producto/eliminarproducto',
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
    
                toastr["success"]("Se Ha eliminado el producto del sistema", "Producto")
            
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