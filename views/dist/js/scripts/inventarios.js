$(function () {

    _init();

    function _init() {
        cargarSelectCategoria();

      cargarProducto();
      cargarInventario();
      imprimir();

  /*      abrirModalCliente(); 
        imprimir();*/
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
                    $('#categoria-inventario').html(option);

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
    function cargarProducto(){
        $('#categoria-inventario').change(function(){
            let id = $('#categoria-inventario option:selected').val();
                $.ajax({
                    // la URL para la petición
                    url : urlServidor + 'categoria/buscarCategoriaProducto/' + id,
                    // especifica si será una petición POST o GET
                    type : 'GET',
                    // el tipo de información que se espera de respuesta
                    dataType : 'json',
                    success : function(response) {
                        let inicio = '<option value=0>Seleccione un Producto</option>';
                        let aux = 0;

                        if(response.status){
                            response.categoria.producto.forEach(element => {
                                aux += `<option value='${element.id}'>${element.nombre}</option>`;
                            });
                            inicio += aux;
                        }

                        $('#producto-inventario').html(inicio);       
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
    function cargarInventario(){
        $('#buscar-datos-inventario').click(function(){
            let categoria_id = $('#categoria-inventario option:selected').val();
            let producto_id = $('#producto-inventario option:selected').val();

            if(categoria_id==0){
                toastr.options = {
                    "closeButton": true,
                    "preventDuplicates": true,
                    "positionClass": "toast-top-center",
                };
                toastr["error"]("Seleccione una categoria", "Inventario de Producto")
            }else if (producto_id == 0){
                toastr.options = {
                    "closeButton": true,
                    "preventDuplicates": true,
                    "positionClass": "toast-top-center",
                };
                toastr["error"]("Seleccione un Producto", "Inventario de Producto")

            }else{
                cargarTabla(producto_id);

            }

        });
    }
    function cargarTabla(id_producto){
        tabla=$('#tabla-inventario').dataTable({
            "lengthMenu": [ 5, 10, 25, 75, 100],//mostramos el menú de registros a revisar
            "responsive": true, "lengthChange": false, "autoWidth": false,
            "aProcessing": true,//Activamos el procesamiento del datatables
            "aServerSide": true,//Paginación y filtrado realizados por el servidor
            dom: '<Bl<f>rtip>',//Definimos los elementos del control de tabla
            buttons: [		          
                    ],
            "ajax":
                    {
                        url:  urlServidor + 'inventario/ver/' + id_producto,
                        type : "get",
                        dataType : "json",						
                        error: function(e){
                            console.log(e.responseText);	
                        }
                    },
            "bDestroy": true,
            "iDisplayLength": 10,//Paginación

            "language": {
 
			    "sProcessing":     "Procesando...",
			 
			    "sLengthMenu":     "Mostrar MENU registros",
			 
			    "sZeroRecords":    "No se encontraron resultados",
			 
			    "sEmptyTable":     "Ningún dato disponible en esta tabla",
			 
			    "sInfo":           "Mostrando un total de TOTAL registros",
			 
			    "sInfoEmpty":      "Mostrando un total de 0 registros",
			 
			    "sInfoFiltered":   "(filtrado de un total de MAX registros)",
			 
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
        $('#data-inventario').removeClass('d-none');
    }

    function imprimir() {
        $('#btn-imprimir').click(function () {
            let element = document.getElementById('data-inventario');
            let opt = {
                margin: 0.5,
                filename: 'Reporte de Inventario.pdf',
                image: { type: 'jpeg', quality: 3 },
                html2canvas: { scale: 2 },
                jsPDF: { unit: 'mm', format: 'legal', orientation: 'portrait' }
            };

            html2pdf().set(opt).from(element).save();
        });
    }

    


    });
