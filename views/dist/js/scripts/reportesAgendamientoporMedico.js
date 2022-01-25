$(function () {

    _init();

    function _init() {
        cargaragendamientoxdc();
        cargarDoctor();
    }

    function cargarDoctor() {
            $.ajax({
                url: urlServidor + 'doctor/listar',
                type: 'GET',
                dataType: 'json',
                success: function (response) {
                    // console.log(response);
                    if (response.status) {
                        let option = '<option value="0">Seleccione un Doctor</option>';
                        response.doctor.forEach(element => {
                            option += `<option value=${element.id}>${element.persona.nombre} ${element.persona.apellido}</option>`;
                        });
    
                        $('#doctor-cargar').html(option);
    
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



    function cargaragendamientoxdc(){
        $('#btn-consulta-doc').click(function () {
            let fecha_inicio = $('#fecha-inicio-r-doc').val();
            let fecha_fin = $('#fecha-fin-r-doc').val();
            let doctor_id = $('#doctor-cargar option:selected').val();

            toastr.options = {
                "closeButton": true,
                "preventDuplicates": true,
                "positionClass": "toast-top-center",
            };

            if (fecha_inicio.length == 0) {
                toastr["info"]('Seleccione una fecha de inicio', "Reporte Agendamiento por Medicos");
            } else if (fecha_fin.length == 0) {
                toastr["info"]('Seleccione una fecha fin', "Reporte Agendamiento por Medicos");
            } else if (moment(fecha_inicio).isAfter(fecha_fin)) {
                toastr["info"]('La fecha fin no puede ser menor', "Reporte Agendamiento por Medicos");
            }else if(doctor_id == 0 ){
                toastr["info"]('Seleccione un Doctor', "Reporte Agendamiento por Medicos");
            } else {

                let f = new Date();
                let fecha = f.getDate() + '/' + (f.getMonth() + 1) + '/' + f.getFullYear();
                let hora = f.getHours() + ':' + (f.getMinutes()) + ':' + f.getSeconds();


                $('#fecha-inicio-r-doc2').text(fecha_inicio);
                $('#fecha-fin-r-doc2').text(fecha_fin);
                $('#fecha-consulta-s').text(fecha);
                $('#hora-consulta-s').text(hora);

                $('#tabla-reporte-doc').removeClass('d-none');
            }


            $.ajax({
                url: urlServidor + 'citas/citasagendamientospordoctor/' + fecha_inicio + '/' + fecha_fin + '/' + doctor_id,
                type: 'GET',
                dataType: 'json',
                    success: function (response) {
                   console.log(response);
                    let tr = '';  
                      if(response){
                        let i = 1;
                        response.data.forEach(element => {
                            
                            tr += `
                            <tr>
                                <th>${i}</th>
                                <th>${element.cliente}</th>
                                <th>${element.nombreMascota}</th>
                                <th>${element.servicio}</th>
                                <th>${element.fecha}</th> 
                                <th>${element.horario_atencion}</th> 

                            </tr>
                        `;
                        i++;                             
                        });

                        $('#body-reporte-agendamiento-doc').html(tr);
                  
                          

                        
                    }else{
                        toastr["info"]('No hay informacion disponible', "Reporte Agendamiento por Medico");

                   }  
                }
            });            

        });

    }





});