$(function () {

    _init();

    function _init() {
        cargarTabla();
    }

    function cargarTabla(){
        tabla = $('#tabla-ver-compras').DataTable({
            "lengthMenu": [ 5, 10, 25, 75, 100],//mostramos el menú de registros a revisar
            "responsive": true, "lengthChange": false, "autoWidth": false,
            "aProcessing": true,//Activamos el procesamiento del datatables
            "aServerSide": true,//Paginación y filtrado realizados por el servidor
            "ajax":
                {
                    url:  urlServidor + 'compras/datatable',
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
/*modal ver compra */
    function ver_detalleCompra(id){
         $('#modal-detalle-consulta-compra').modal('show');

         $.ajax({
            url:urlServidor  +'compras/listar/'+id,
            type:'GET',
            dataType:'json',
            success:function(response){
                let tr = '';
                if(response.status){
    
                    $('#compra-numero').text(response.compra.id);
                    $('#compra-codigo').text(response.compra.numero_compra);
                    $('#compra-fecha').text(response.compra.fecha_compra);
                    $('#compra-usuario-nombres').text(response.compra.usuario.persona.nombre + ' ' + response.compra.usuario.persona.apellido);
                    $('#compra-correo').text(response.compra.usuario.correo);
                    $('#compra-telefono').text(response.compra.usuario.persona.telefono);
                    $('#compra-proveedor-nombre').text(response.compra.proveedor.razon_social);  
                    $('#compra-proveedor-ruc').text(response.compra.proveedor.ruc);    
                    $('#compra-proveedor-direccion').text(response.compra.proveedor.direccion); 
                    $('#compra-proveedor-correo').text(response.compra.proveedor.correo); 
                    $('#compra-proveedor-telefono').text(response.compra.proveedor.telefono); 
                    $('#compra-subtotal').text(response.compra.subtotal.toFixed(2));
                    $('#compra-des').text(response.compra.descuento.toFixed(2));
                    $('#compra-iva').text(response.compra.iva.toFixed(2));
                    $('#compra-totalcompra').text(response.compra.total.toFixed(2));

                    response.detalle_compra.forEach((element, i) => {
                        tr += `<tr>
                        <td style="color: black;">${i+1} </td>
                        <td style="color: black;">${element.producto.nombre}</td>
                        <td style="color: black;">${element.cantidad}</td>
                        <td style="color: black;">${element.precio_compra}</td>
                        <td style="color: black;">${element.total}</td>
                    </tr>`;
                    });
                    $('#body_detalle_compra').html(tr);
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
