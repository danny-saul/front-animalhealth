/* $(function(){  */

    _init();

    function _init(){
        citasAtendidas();
        imprimir();
    }

    /*function citasAtendidas(){
        let usuario=JSON.parse(sessionStorage.getItem('sesion'));
        let persona_id= usuario.persona.id;
 
        $.ajax({
            url: urlServidor + 'citas/pendientes/'+persona_id+'/'+2,
            type: 'GET',
            dataType: 'json',
            success: function (response) {
              //  console.log(response);

                let div='';
                if(response.length > 0 ){
                    response.forEach(element => {
                        div += `<div class="col-md-4 col-sm-6 col-12">
                        <div class="info-box bg-gradient-success">
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
                            </div>
                            </div>
                        </div>
                        </div>`  
                    });
                }
                $('#citas-atendidas').html(div);
            },
            error: function (jqXHR, status, error) {
                console.log('Disculpe, existi?? un problema');
            },
            complete: function (jqXHR, status) {
                // console.log('Petici??n realizada');
            }
        });

    } */



    function citasAtendidas(){
        let usuario=JSON.parse(sessionStorage.getItem('sesion'));
        let persona_id= usuario.persona.id;
 
        $.ajax({
            url: urlServidor + 'citas/pendientes/'+persona_id+'/'+2,
            type: 'GET',
            dataType: 'json',
            success: function (response) {
              //  console.log(response);

                let div='';
                if(response.length > 0 ){
                    response.forEach(element => {
                        div += `<div class="col-md-4 col-sm-6 col-12">
                        <div class="info-box bg-gradient-success">
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
                            </div>
                            </div>
                        </div>
                        </div>`  
                    });
                }
                $('#citas-atendidas').html(div);
            },
            error: function (jqXHR, status, error) {
                console.log('Disculpe, existi?? un problema');
            },
            complete: function (jqXHR, status) {
                // console.log('Petici??n realizada');
            }
        });

    }

    function imprimir(){
        $('#btn-imprimir').click(function(){
   
                let element = document.getElementById('detalle-receta-imprimir');
                let opt = {
                margin:       0.5,
                filename:     'facturaimprimir.pdf',
                image:        { type: 'jpeg', quality: 3 },
                html2canvas:  { scale: 2 },
                jsPDF:        { unit: 'mm', format: 'legal', orientation: 'portrait' }
                };
  
                html2pdf().set(opt).from(element).save();
        });
    }

    

/* }); */

function ver_cita(id){
  //  alert(id);
}
