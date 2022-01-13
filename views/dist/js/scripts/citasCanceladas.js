/* $(function(){  */

    _init();

    function _init(){
        citasCanceladas();
    }

    function citasCanceladas(){
        let usuario=JSON.parse(sessionStorage.getItem('sesion'));
        let persona_id= usuario.persona.id;
 
        $.ajax({
            url: urlServidor + 'citas/pendientes/'+persona_id+'/'+3,
            type: 'GET',
            dataType: 'json',
            success: function (response) {
              //  console.log(response);

                let div='';
                if(response.length > 0 ){
                    response.forEach(element => {
                        div += `<div class="col-md-4 col-sm-6 col-12">
                        <div class="info-box bg-gradient-danger">
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
                              
                            </div>
                        </div>
                        </div>`  
                    });
                }
                $('#citas-canceladas').html(div);
            },
            error: function (jqXHR, status, error) {
                console.log('Disculpe, existió un problema');
            },
            complete: function (jqXHR, status) {
                // console.log('Petición realizada');
            }
        });

    }

/* }); */

function ver_cita(id){
    alert(id);
}
