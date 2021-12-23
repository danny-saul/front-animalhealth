//$(function () {

    _init();

    function _init() {

        cargarProveedor();
        guardarCompras();
        cargarUsuario();
        cargarProducto();
        agregar_producto_item();
        calcular_descuento();
        reset_productos();
        reset_datos();
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

    function cargarProveedor() {
        $.ajax({
            url: urlServidor + 'proveedor/listar',
            type: 'GET',
            dataType: 'json',
            success: function (response) {
                //console.log(response);
                if (response.status) { 
                    let tr = '';
                    let i = 1;
                    response.proveedor.forEach(element => {
                    tr += ` <tr id="fila-proveedor-${element.id}">
                    <td>${i}</td>
                    <td style="display: none">${element.id}</td>
                    <td>${element.ruc}</td>
                    <td>${element.razon_social}</td>
                    <td>${element.telefono}</td>
                    <td>${element.direccion}</td>
                   
                    <td>
                        <div class="div">
                            <button data-dismiss="modal" class="btn btn-primary btn-sm" onclick="seleccionar_proveedor(${element.id})">
                                <i class="fas fa-check"></i>
                            </button>
                        </div>
                    </td>
                </tr> `;
                        i++;
                    });
                    $('#proveedor-body').html(tr);
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
        $('#c-c-usuario').val(nombres);




    }

    function agregar_producto_item(){
        $('#btn-agregar-item').click(function(){
           let id = $('#producto-id').val();   
           let nombre = $('#detalle-compras-nombre').val(); 
           let cantidad = $('#compra-cantidad').val();
           let stock = $('#compra-stock').val();
           let pcompra = $('#compra-pCompra').val();

   
           let total = Number((parseInt(cantidad) * parseFloat(pcompra)).toFixed(2));
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
           if(pcompra.length==0 ){
            toastr.options = {
                "closeButton": true,
                "preventDuplicates": true,
                "positionClass": "toast-top-center",
            };
            toastr["error"]('Ingrese un precio de compra', "Producto")
        }else{
               
              
             let tr= ` <tr id="fila-producto-${id}">   
               <td>${nombre}</td>
               <td>${cantidad}</td>
               <td>${pcompra}</td>
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
           reset_productos();
           actualizar_total();
   
           }
        }); 
       }

    function guardarCompras(){
        $('#guardar-compra').click(function(){
            let proveedor_id = $('#c-pro-id').val();
            let usuario_id = JSON.parse(sessionStorage.getItem('sesion')).id;
            let numero_compra =  $('#c-c-codigo').val();
            let fecha_compra =$('#c-c-fechac').val();
            let descuento=$('#compra-descuento-input').val();
            let subtotal= $('#compra-subtotal').text();
            let iva=$('#compra-iva').text();
            let total=$('#compra-totalg').text();

            let object = arrayDetalleCompra();

            let json = {
                compra:{
                    proveedor_id,
                    usuario_id,
                    numero_compra,
                    descuento,
                    subtotal,
                    iva,
                    total,
                    fecha_compra,
                },
                detalle_compra:object.detalle_compra 
                
            }

            ajaxGuardarCompra(json);
          
    

        });

    }

    function arrayDetalleCompra(){
        let tr = $('#body-aggProducto tr');
       

        let detalle_compra = [];  let json = {};

        for(let i=0; i < tr.length; i++ ){
            let hijos = tr[i].children;
           // console.log(hijos);

            let producto_id = hijos[5].innerText;
            let cantidad = hijos[1].innerText;
            let precio_compra = hijos[2].innerText;
            let total = hijos[3].innerText;

            let object = {producto_id,cantidad,precio_compra,total};//almacenamos en un objeto
            detalle_compra.push(object);// el objeto lo almacenamos en un array

            json = {detalle_compra}
        }
        return json;

    }

    function ajaxGuardarCompra(json){
        $.ajax({
            url:urlServidor  + 'compras/guardar',
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
                    reset_datos();
 
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

    
    }

//});


function seleccionar_proveedor(id) {
    let fila = '#fila-proveedor-' + id;

    let f = $(fila)[0].children;

    let ruc = f[2].innerText;
    let razon_social = f[3].innerText;
    let telefono = f[4].innerText;
    let direccion = f[5].innerText;


    $('#c-pro-id').val(id);
    $('#c-pro-ruc').val(ruc);
    $('#c-pro-razon').val(razon_social);
    $('#c-pro-telefono').val(telefono);
    $('#c-pro-direccion').val(direccion);
   // console.log(id);

}

function seleccionar_producto(id) {
    let fila = '#fila-producto-' + id;

    let f = $(fila)[0].children;

    let codigo = f[2].innerText;
    let nombre = f[3].innerText;
    let stock = f[5].innerText;
  
        $('#producto-id').val(id);
        $('#detalle-compras-codigo').val(codigo);
        $('#detalle-compras-nombre').val(nombre);
        $('#compra-stock').val(stock);
     
  


}

function borrar_item(id){
    let tr = '#fila-producto-'+id;
    $(tr).remove();
    actualizar_total();
    $('#compra-descuento').text('0.00');
    $('#compra-totalg').text('0.00');
    $('#compra-descuento-input').val('0.00');

}

function actualizar_total(){
    let tr = $('#body-aggProducto tr');
    let descuento_input = parseFloat($('#compra-descuento-input').val());
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

    $('#compra-subtotal').text(subtotal.toFixed(2));
    $('#compra-iva').text(iva.toFixed(2));
    $('#compra-descuento').text(descuento.toFixed(2));
    $('#compra-totalg').text(total.toFixed(2));
}


function calcular_descuento(){
    $('#compra-descuento-input').blur(function(e){
        let descuento_input = $('#compra-descuento-input').val();
        let subtotal = $('#compra-subtotal').text();

        let descuento = 0;
        let total = 0;

        if(parseFloat(descuento) > parseFloat(subtotal)){
            Swal.fire(
                'Compra',
                'El descuento no puede ser mayor al subtotal',
                'error'
              )
              $('#compra-descuento-input').val('0');
        }else{
            let iva = Number(parseFloat(subtotal).toFixed(2)) * 0.12;
            descuento = descuento_input;

            if(descuento > 0){
                total = subtotal - descuento + iva;
            }else{
                total = Number(subtotal) + Number(iva.toFixed(2));
            }

            $('#compra-subtotal').text(parseFloat(subtotal).toFixed(2));
            $('#compra-iva').text(iva.toFixed(2));
            $('#compra-descuento').text(parseFloat(descuento).toFixed(2));
            $('#compra-totalg').text(total.toFixed(2));
        }



    });

    
}


function reset_productos(){
    $('#producto-id').val('');
    $('#detalle-compras-codigo').val('');
    $('#detalle-compras-nombre').val('');
    $('#compra-cantidad').val('');
    $('#compra-stock').val('');
    $('#compra-pCompra').val('');


}

function reset_datos(){
    $('#compra-descuento').text('0');
    $('#body-aggProducto').html('');
    $('#c-pro-id').val('');
    $('#c-pro-ruc').val('');
    $('#c-pro-razon').val('');
    $('#c-pro-telefono').val('');
    $('#c-pro-direccion').val('');
    $('#compra-descuento-input').val('0.00');
    $('#c-c-codigoo').val('');
    $('#c-c-fechac').val('');
    $('#compra-subtotal').text('0.00');
    $('#compra-iva').text('0.00');
    $('#compra-descuento').text('0.00');
    $('#compra-totalg').text('0.00');
}