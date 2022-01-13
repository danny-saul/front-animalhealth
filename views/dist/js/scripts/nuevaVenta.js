//$(function () {

    _init();

    function _init() {

         cargarCliente();
         cargarUsuario();
         cargarProducto();
         agregar_producto_item();
        guardarVentas();
        
      
       
        calcular_descuento();
        reset_productos();
        reset_datos();
    }

    function cargarCliente() {
        $.ajax({
            url: urlServidor + 'cliente/listar',
            type: 'GET',
            dataType: 'json',
            success: function (response) {
                console.log(response);
                if (response.status) { 
                    let tr = '';
                    let i = 1;
                    response.cliente.forEach(element => {
                    tr += ` <tr id="fila-cliente-${element.id}">
                    <td>${i}</td>
                    <td style="display: none">${element.id}</td>
                    <td>${element.persona.cedula}</td>
                    <td>${element.persona.nombre}</td>
                    <td>${element.persona.apellido}</td>
                    <td>${element.persona.telefono}</td>
                    <td>${element.persona.direccion}</td>
                   
                    <td>
                        <div class="div">
                            <button data-dismiss="modal" class="btn btn-primary btn-sm" onclick="seleccionar_cliente(${element.id})">
                                <i class="fas fa-check"></i>
                            </button>
                        </div>
                    </td>
                </tr> `;
                        i++;
                    });
                    $('#cliente-body').html(tr);
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

    function cargarUsuario(){
        let usuario = JSON.parse(sessionStorage.getItem('sesion'));
        let nombres = usuario.persona.nombre + ' ' + usuario.persona.apellido;
        $('#c-v-usuario').val(nombres);




    }

    function cargarProducto() {
   
        $.ajax({
            url: urlServidor + 'producto/listarproducto',
            type: 'GET',
            dataType: 'json',
            success: function (response) {
              //  console.log(response);
                 if (response.status) { 
                    let tr = '';
                    let i = 1;
                    response.producto.forEach(element => {
                    tr += ` <tr id="fila-producto-${element.id}">
                    <td>${i}</td>
                    <td style="display: none">${element.id}</td>
                    <td>${element.codigo}</td>
                    <td>${element.nombre}</td>
                    <td>${element.categoria.nombre}</td>
                    <td>${element.stock}</td>
                    <td>${element.precio_venta}</td>
                    <td>
                        <div class="div">
                            <button data-dismiss="modal" class="btn btn-primary btn-sm" onclick="seleccionar_producto(${element.id})">
                                <i class="fas fa-check"></i>
                            </button>
                        </div>
                    </td>
                </tr> `;
                        i++;
                    });
                    $('#producto-body').html(tr);
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

    function agregar_producto_item(){
        $('#btn-agregar-item').click(function(){
        let id = $('#producto-id').val();   
        let nombre = $('#detalle-venta-nombre').val(); 
        let cantidad = $('#venta-cantidad').val();
        let stock = $('#venta-stock').val();
        let pventa = $('#venta-pventa').val();

        let total = Number((parseInt(cantidad) * parseFloat(pventa)).toFixed(2));
        //console.log(total);
        if(id.length==0 ){
            toastr.options = {
                "closeButton": true,
                "preventDuplicates": true,
                "positionClass": "toast-top-center",
            };
            toastr["error"]('Seleccione un Producto', "Producto")
        }else 
        if(cantidad.length==0 ){
            toastr.options = {
                "closeButton": true,
                "preventDuplicates": true,
                "positionClass": "toast-top-center",
            };
            toastr["error"]('Ingrese una cantidad', "Producto")
        }
            else 
        if(parseInt(cantidad) ==0 || parseInt(cantidad) <0){

            toastr.options = {
                "closeButton": true,
                "preventDuplicates": true,
                "positionClass": "toast-top-center",
            };

            toastr["error"]('Ingrese un valor mayor a 0', "Producto")
        } 
        else 
        if(parseInt(cantidad) > stock){

            toastr.options = {
                "closeButton": true,
                "preventDuplicates": true,
                "positionClass": "toast-top-center",
            };

            toastr["error"]('Cantidad supera al stock', "Producto")
        }else{
            
            let tr= ` <tr id="fila-producto-${id}">   
            <td>${nombre}</td>
            <td>${cantidad}</td>
            <td>${pventa}</td>
            <td>${total}</td>
            <td>
                <div class="div">
                    <button  class="btn btn-primary btn-sm" onclick="borrar_item(${id})">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </td>
            <td style="display:none;">${id}</td>

        </tr> `;
    
        $('#body-aggProducto').append(tr);
        actualizar_total();

        }
        }); 
    }

   
    function arrayDetalleVenta(){
        let tr = $('#body-aggProducto tr');
       

        let detalle_venta = [];  let json = {};

        for(let i=0; i < tr.length; i++ ){
            let hijos = tr[i].children;
           // console.log(hijos);

            let producto_id = hijos[5].innerText;
            let cantidad = hijos[1].innerText;
            let precio_venta = hijos[2].innerText;
            let total = hijos[3].innerText;

            let object = {producto_id,cantidad,precio_venta,total};//almacenamos en un objeto
            detalle_venta.push(object);// el objeto lo almacenamos en un array

            json = {detalle_venta}
        }
        return json;

    }

    function guardarVentas(){
        $('#guardar-venta').click(function(){
            let cliente_id = $('#c-cli-id').val();
            let usuario_id = JSON.parse(sessionStorage.getItem('sesion')).id;
          //   let numero_venta =  $('#c-c-codigo').val(); 
            let fecha_venta =$('#c-v-fechac').val();
            let descuento=$('#venta-descuento-input').val();
            let subtotal= $('#venta-subtotal').text();
            let iva=$('#venta-iva').text();
            let total=$('#venta-totalg').text();

            let object = arrayDetalleVenta();

            let json = {
                venta:{
                    cliente_id,
                    usuario_id,
                    descuento,
                    subtotal,
                    iva,
                    total,
                    fecha_venta,
                },
                detalle_venta:object.detalle_venta 
                
            }

            ajaxGuardarVenta(json);
          
    

        });

    }

    function ajaxGuardarVenta(json){
        $.ajax({
            url:urlServidor  + 'ventas/guardar',
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
                    toastr["success"](response.mensaje, "Ventas")
                    reset_datos();
 
                } else{
                    toastr.options = {
                        "closeButton": true,
                        "preventDuplicates": true,
                        "positionClass": "toast-top-center",
                    };
                    toastr["error"](response.mensaje, "Ventas")
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
    
//});


function seleccionar_cliente(id) {
    let fila = '#fila-cliente-' + id;

    let f = $(fila)[0].children;

    let cedula = f[2].innerText;
    let nombre = f[3].innerText;
    let apellido = f[4].innerText;
    let direccion = f[5].innerText;
    let telefono = f[6].innerText;

    $('#c-cli-id').val(id);
    $('#c-venta-cedula').val(cedula);
    $('#c-venta-nombre').val(nombre + ' ' + apellido) ;
    $('#c-venta-apellido').val(apellido);
    $('#c-venta-telefono').val(telefono);
    $('#c-venta-direccion').val(direccion);

    $('#v-Cedula').text(cedula);
    $('#v-Cliente').text(nombre + ' ' + apellido);

}

function seleccionar_producto(id) {
    let fila = '#fila-producto-' + id;

    let f = $(fila)[0].children;

    let codigo = f[2].innerText;
    let nombre = f[3].innerText;
    let stock = f[5].innerText;
    let p_venta = f[6].innerText;

    if(stock>0){
        $('#producto-id').val(id);
        $('#detalle-venta-codigo').val(codigo);
        $('#detalle-venta-nombre').val(nombre);
        $('#venta-stock').val(stock);
        $('#venta-pventa').val(p_venta);
    }else{
        toastr.options = {
            "closeButton": true,
            "preventDuplicates": true,
            "positionClass": "toast-top-center",
        };

        toastr["error"]('Producto con stock 0', "Citas")
    }
  

 
  

}

function actualizar_total(){
    let tr = $('#body-aggProducto tr');
    let descuento_input = parseFloat($('#venta-descuento-input').val());
    let subtotal = 0;
    let descuento =0;
    let total = 0;
  
    for(let i=0; i < tr.length; i++){
        let hijos = tr[i].children;
        subtotal += parseFloat(hijos[3].innerText);       
    }
    let iva = Number(subtotal.toFixed(2)) * 0.12;
    descuento = descuento_input;
 
    if(descuento > 0){
        total = subtotal - descuento + iva;
    }else{
        total = Number(subtotal) + Number(iva.toFixed(2));
    }

 /*    $('#total-general').val(total); //guardar en la bd

    $('#total-detalle').text(total.toFixed(2));  //mostra en la tabla */

    $('#venta-subtotal').text(subtotal.toFixed(2));
    $('#venta-iva').text(iva.toFixed(2));
    $('#venta-descuento').text(descuento.toFixed(2));
    $('#venta-totalg').text(total.toFixed(2));
}

function borrar_item(id){
    let tr = '#fila-producto-'+id;
    $(tr).remove();
    actualizar_total();
    $('#venta-descuento').text('0.00');
    $('#venta-totalg').text('0.00');
    $('#venta-descuento-input').val('0.00');

}


function calcular_descuento(){
    $('#venta-descuento-input').blur(function(e){
        let descuento_input = $('#venta-descuento-input').val();
        let subtotal = $('#venta-subtotal').text();

        let descuento = 0;
        let total = 0;

        if(parseFloat(descuento) > parseFloat(subtotal)){
            Swal.fire(
                'venta',
                'El descuento no puede ser mayor al subtotal',
                'error'
              )
              $('#venta-descuento-input').val('0');
        }else{
            let iva = Number(parseFloat(subtotal).toFixed(2)) * 0.12;
            descuento = descuento_input;

            if(descuento > 0){
                total = subtotal - descuento + iva;
            }else{
                total = Number(subtotal) + Number(iva.toFixed(2));
            }

            $('#venta-subtotal').text(parseFloat(subtotal).toFixed(2));
            $('#venta-iva').text(iva.toFixed(2));
            $('#venta-descuento').text(parseFloat(descuento).toFixed(2));
            $('#venta-totalg').text(total.toFixed(2));
        }



    });

    
}


function reset_productos(){
    $('#producto-id').val('');
    $('#detalle-venta-codigo').val('');
    $('#detalle-venta-nombre').val('');
    $('#venta-cantidad').val('');
    $('#venta-stock').val('');
    $('#venta-pventa').val('');


}

function reset_datos(){
    $('#venta-descuento').text('0');
    $('#body-aggProducto').html('');
    $('#c-cli-id').val('');
    $('#c-venta-cedula').val('');
    $('#c-venta-nombre').val('');
    $('#c-venta-telefono').val('');
    $('#c-venta-direccion').val('');
    $('#venta-descuento-input').val('0.00');
    $('#c-c-codigoo').val('');
    $('#c-v-fechac').val('');
    $('#venta-subtotal').text('0.00');
    $('#venta-iva').text('0.00');
    $('#venta-descuento').text('0.00');
    $('#venta-totalg').text('0.00');

    $('#producto-id').val('');
    $('#detalle-venta-codigo').val('');
    $('#detalle-venta-nombre').val('');
    $('#venta-cantidad').val('');
    $('#venta-stock').val('');
    $('#venta-pventa').val('');
}
