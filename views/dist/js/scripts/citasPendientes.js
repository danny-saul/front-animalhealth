/* $(function(){ */

    _init();

    function _init(){
        citasPendientes();
        cargarProducto();
        agregar_producto_item();
        guardarReceta();
    }

  /*   function citasPendientes(){
        let usuario=JSON.parse(sessionStorage.getItem('sesion'));
        let persona_id= usuario.persona.id;
 
        $.ajax({
            url: urlServidor + 'citas/pendientes/'+persona_id+'/'+1,
            type: 'GET',
            dataType: 'json',
            success: function (response) {
              //  console.log(response);

                let div='';
                if(response.length > 0 ){
                    response.forEach(element => {
                        div += `<div class="col-md-4 col-sm-6 col-12">
                        <div class="info-box bg-gradient-warning">
                            <span class="info-box-icon"><i class="far fa-calendar-alt"></i></span>
                        
                            <div class="info-box-content">
                                <span class="info-box-text">Cedula: <span>${element.cita.cliente.persona.cedula} </span> </span>
                                <span class="info-box-text">Cliente: <span>${element.cita.cliente.persona.nombre} ${element.cita.cliente.persona.apellido} </span> </span>
                                <span class="info-box-text">Mascota: <span>${element.cita.mascota.nombre}</span> </span>
                                <div class="progress">
                                    <div class="progress-bar" style="width: 100%"></div>
                                </div>
                                <span class="progress-description">
                                    Hora:  <span>${element.cita.horarios_citas.hora_inicio} - ${element.cita.horarios_citas.hora_fin} </span>
                                </span>
                                <div class="text-center">
                                <button class="btn btn-sm btn-primary"
                                data-toggle="modal" data-target="#modal-cargar-citas" data-backdrop="static" data-keyboard="false"
                                         onclick="ver_cita(${element.cita.id})">
                                    <i class="fas fa-eye"></i>
                                </button>
                                <button class="btn btn-sm btn-success" disabled="disabled" id="btn-disabled" onclick="cambiar_estado(${element.cita.id},2)">
                                    <i class="far fa-check-square"></i>
                                </button>
                            </div>
                            </div>
                        </div>
                        </div>`  
                    });
                }
                $('#citas-pendientes').html(div);
            },
            error: function (jqXHR, status, error) {
                console.log('Disculpe, existió un problema');
            },
            complete: function (jqXHR, status) {
                // console.log('Petición realizada');
            }
        });

    } */


    function citasPendientes(){
        let usuario=JSON.parse(sessionStorage.getItem('sesion'));
        let persona_id= usuario.persona.id;
 
        $.ajax({
            url: urlServidor + 'citas/pendientes/'+persona_id+'/'+1,
            type: 'GET',
            dataType: 'json',
            success: function (response) {
              //  console.log(response);

                let div='';
                if(response.length > 0 ){
                    response.forEach(element => {
                        div += `<div class="col-md-4 col-sm-6 col-12">
                        <div class="info-box bg-gradient-warning">
                            <span class="info-box-icon"><i class="far fa-calendar-alt"></i></span>
                        
                            <div class="info-box-content">
                                <span class="info-box-text">Cedula: <span>${element.cita.cliente.persona.cedula} </span> </span>
                                <span class="info-box-text">Cliente: <span>${element.cita.cliente.persona.nombre} ${element.cita.cliente.persona.apellido} </span> </span>
                                <span class="info-box-text">Mascota: <span>${element.cita.mascota.nombre}</span> </span>
                                <div class="progress">
                                    <div class="progress-bar" style="width: 100%"></div>
                                </div>
                                <span class="progress-description">
                                    Hora:  <span>${element.cita.horarios_atencion.horario} </span>
                                </span>
                                <div class="text-center">
                                <button class="btn btn-sm btn-primary"
                                data-toggle="modal" data-target="#modal-cargar-citas" data-backdrop="static" data-keyboard="false"
                                         onclick="ver_cita(${element.cita.id})">
                                    <i class="fas fa-eye"></i>
                                </button>
                                <button class="btn btn-sm btn-success" disabled="disabled" id="btn-disabled" onclick="cambiar_estado(${element.cita.id},2)">
                                    <i class="far fa-check-square"></i>
                                </button>
                                <button class="btn btn-sm btn-danger" id="btn-cancelar" onclick="cancelar_cita(${element.cita.id},3)">
                                <i class="fas fa-times"></i>
                            </button>
                            </div>
                            </div>
                        </div>
                        </div>`  
                    });
                }
                $('#citas-pendientes').html(div);
            },
            error: function (jqXHR, status, error) {
                console.log('Disculpe, existió un problema');
            },
            complete: function (jqXHR, status) {
                // console.log('Petición realizada');
            }
        });

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
        let nombre = $('#detalle-nombre').val(); 
        let cantidad = $('#detalle-cantidad').val();
        let stock = $('#detalle-stock').val();
        let pventa = $('#detalle-pVenta').val();

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
     /*    else 
        if(parseInt(cantidad) ==0 || parseInt(cantidad) <0){

            toastr.options = {
                "closeButton": true,
                "preventDuplicates": true,
                "positionClass": "toast-top-center",
            };

            toastr["error"]('Ingrese un valor mayor a 0', "Producto")
        } */
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

    function guardarReceta(){
        $('#guardar-receta').click(function(){
            let cita_id = $('#citas-id').val();
            let doctor_id = $('#doctor-id').val(); 
            let total =  $('#total-general').val();
            let descripcion =$('#receta-descripcion').val();

            let object = arrayReceta();

            let json = {
                receta:{
                    cita_id,
                    doctor_id,
                    total,
                    descripcion,
                },
                detalle_receta:object.detalle_receta 
                
            }

            ajaxGuardarReceta(json);
    

        });

    }

    function arrayReceta(){
        let tr = $('#body-aggProducto tr');

        let detalle_receta = [];  let json = {};

        for(let i=0; i < tr.length; i++ ){
            let hijos = tr[i].children;
            //console.log(hijos);

            let producto_id = hijos[5].innerText;
            let cantidad = hijos[1].innerText;
            let total = hijos[3].innerText;

            let object = {producto_id,cantidad,total};//almacenamos en un objeto
            detalle_receta.push(object);// el objeto lo almacenamos en un array

            json = {detalle_receta}
        }
        return json;

    }

    function ajaxGuardarReceta(json){
        $.ajax({
            url:urlServidor  +'receta/guardar',
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
                    toastr["success"](response.mensaje, "Receta")
                    resetDatos();
                    $('#btn-disabled').prop('disabled',false);
                    $('#modal-cargar-citas').modal('hide');

    
                } else{
                    toastr.options = {
                        "closeButton": true,
                        "preventDuplicates": true,
                        "positionClass": "toast-top-center",
                    };
                    toastr["error"](response.mensaje, "Receta")
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

    function resetDatos(){
        $('#detalle-codigo').val('');
        $('#detalle-nombre').val('');
        $('#detalle-cantidad').val('');
        $('#detalle-stock').val('');
        $('#detalle-pVenta').val('');
        $('#producto-id').val('');
        $('#body-aggProducto').html('');
        $('#total-detalle').text(0);
        $('#receta-descripcion').val('');
    }

/*});*/

    function ver_cita(id){  
        $.ajax({
            url:urlServidor  +'citas/listar/'+id,
            type:'GET',
            dataType:'json',
            success:function(response){
                //console.log(response);
                if(response.status){
                    $('#citas-id').val(response.citas.id);
                    $('#doctor-id').val(response.citas.doctor.id);
                    $('#cedula-propietario').text(response.citas.cliente.persona.cedula);
                    $('#nombre-propietario').text(response.citas.cliente.persona.nombre + ' '+ response.citas.cliente.persona.apellido) ;
                    $('#nombre-mascota').text(response.citas.mascota.nombre);
                    $('#tipo-mascota').text(response.citas.mascota.tipo_mascota.nombre_tipo);
                    $('#raza-mascota').text(response.citas.mascota.raza.raza);
                    $('#servicio-mascota').text(response.citas.servicios.nombre_servicio);

                    $('#receta-nombre-propietario').text(response.citas.cliente.persona.nombre + ' '+ response.citas.cliente.persona.apellido) ;
                    $('#receta-nombre-mascota').text(response.citas.mascota.nombre);
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

    function seleccionar_producto(id) {
        let fila = '#fila-producto-' + id;
    
        let f = $(fila)[0].children;
    
        let codigo = f[2].innerText;
        let nombre = f[3].innerText;
        let stock = f[5].innerText;
        let p_venta = f[6].innerText;

        if(stock>0){
            $('#producto-id').val(id);
            $('#detalle-codigo').val(codigo);
            $('#detalle-nombre').val(nombre);
            $('#detalle-stock').val(stock);
            $('#detalle-pVenta').val(p_venta);
        }else{
            toastr.options = {
                "closeButton": true,
                "preventDuplicates": true,
                "positionClass": "toast-top-center",
            };

            toastr["error"]('Producto con stock 0', "Citas")
        }
      
   
     
      
    
    }

    function borrar_item(id){
        let tr = '#fila-producto-'+id;
        $(tr).remove();
        actualizar_total();


    }

    function actualizar_total(){
        let tr = $('#body-aggProducto tr');
        let subtotal = 0;
        let total = 0;
      
        for(let i=0; i < tr.length; i++){
            let hijos = tr[i].children;
            subtotal += parseFloat(hijos[3].innerText);       
        }

        total = Number(subtotal);

        $('#total-general').val(total); //guardar en la bd
    
        $('#total-detalle').text(total.toFixed(2));  //mostra en la tabla
    }
    
    function cambiar_estado(id_cita,estado_id){
        $.ajax({
            // la URL para la petición
            url : urlServidor + 'citas/actualizar_cita/' + id_cita + '/' + estado_id,
            // especifica si será una petición POST o GET
            type : 'GET',
            // el tipo de información que se espera de respuesta
            dataType : 'json',
            success : function(response) { 
                if(response.status){
                    toastr.options = {
                        "closeButton": true,
                        "preventDuplicates": true,
                        "positionClass": "toast-top-center",
                    };
                    toastr["success"]('La Cita a sido atendida', "Citas")
                    citasPendientes();
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

    function cancelar_cita(id_cita,estado_id){
        $.ajax({
            // la URL para la petición
            url : urlServidor + 'citas/cancelar/' + id_cita + '/' + estado_id,
            // especifica si será una petición POST o GET
            type : 'GET',
            // el tipo de información que se espera de respuesta
            dataType : 'json',
            success : function(response) { 
                if(response.status){
                    toastr.options = {
                        "closeButton": true,
                        "preventDuplicates": true,
                        "positionClass": "toast-top-center",
                    };
                    toastr["success"]('La cita ha sido cancelada', "Citas")
                    citasPendientes();
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
    


  


