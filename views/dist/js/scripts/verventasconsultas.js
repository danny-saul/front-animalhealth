$(function () {

    _init();

    function _init() {
        cargarTabla();
    }

    function cargarTabla(){
        tabla = $('#tabla-ver-ventas').DataTable({
            "lengthMenu": [ 5, 10, 25, 75, 100],//mostramos el menú de registros a revisar
            "responsive": true, "lengthChange": false, "autoWidth": false,
            "aProcessing": true,//Activamos el procesamiento del datatables
            "aServerSide": true,//Paginación y filtrado realizados por el servidor
            "ajax":
                {
                    url:  urlServidor + 'ventas/datatable',
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
    function ver_detalleVenta(id){
         $('#modal-detalle-consulta-venta').modal('show');

         $.ajax({
            url:urlServidor  +'ventas/listar/'+id,
            type:'GET',
            dataType:'json',
            success:function(response){
                let tr = '';
                if(response.status){
    
                    $('#venta-numero').text(response.venta.id);
                    $('#venta-codigo').text(response.venta.numero_venta);
                    $('#venta-fecha').text(response.venta.fecha_venta);
                    $('#venta-usuario-nombres').text(response.venta.usuario.persona.nombre + ' ' + response.venta.usuario.persona.apellido);
                    $('#venta-correo').text(response.venta.usuario.correo);
                    $('#venta-telefono').text(response.venta.usuario.persona.telefono);
                    $('#venta-cliente-nombre').text(response.venta.cliente.persona.nombre +' '+response.venta.cliente.persona.apellido);  
                    $('#venta-cliente-cedula').text(response.venta.cliente.persona.cedula);    
                    $('#venta-cliente-direccion').text(response.venta.cliente.persona.direccion); 
                    $('#venta-cliente-telefono').text(response.venta.cliente.persona.telefono); 
                    $('#venta-subtotal').text(response.venta.subtotal.toFixed(2));
                    $('#venta-des').text(response.venta.descuento.toFixed(2));
                    $('#venta-iva').text(response.venta.iva.toFixed(2));
                    $('#venta-totalventa').text(response.venta.total.toFixed(2));

                    response.detalle_venta.forEach((element, i) => {
                        tr += `<tr>
                        <td style="color: black;">${i+1} </td>
                        <td style="color: black;">${element.producto.nombre}</td>
                        <td style="color: black;">${element.cantidad}</td>
                        <td style="color: black;">${element.precio_venta}</td>
                        <td style="color: black;">${element.total}</td>
                    </tr>`;
                    });
                    $('#body_detalle_venta').html(tr);
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
