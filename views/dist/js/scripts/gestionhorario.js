

/* 
$(function () { */

    _init();

    function _init() {
        cargarDoctor();
        guardarHorarioAtencion();
        cargarHorariosLibres('S'); 
        agregarDoctorHorario();
        get_HorariosAtencion(); 
        cargarTabla(); 
        editandohorasDoctorModal();
        //cargar_hora();
    }

    function cargarTabla(){
        tabla = $('#tabla-listar-horasD').DataTable({
            "lengthMenu": [ 5, 10, 25, 75, 100],//mostramos el menú de registros a revisar
            "responsive": true, "lengthChange": false, "autoWidth": false,
            "aProcessing": true,//Activamos el procesamiento del datatables
            "aServerSide": true,//Paginación y filtrado realizados por el servidor
            "ajax":
                {
                    url:  urlServidor + 'horarios_atencion/listarHorasdatatable',
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

    function cargarDoctor(){
        let sesion = JSON.parse(sessionStorage.getItem('sesion')); 
        let doctor_id = JSON.parse(sessionStorage.getItem("sesion-2"));
             
        let nombreDoctor = sesion.persona.nombre + ' '+ sesion.persona.apellido; 

        $('#local-doctor').val(nombreDoctor);
        $('#doctor-id').val(doctor_id);
    }
    
    function guardarHorarioAtencion(){
         $('#form-horario-doctor').submit(function(e){
           e.preventDefault();
      
           let horaE = $('#hora-entrada').val();//18:00
           let horaS=  $('#hora-salida').val();//19:00
           let fecha= $('#fecha-doctor').val();
           let intervalo= $('#hora-intervalo').val();


           //let intervalo =$('#hora-intervalo').val(); //30 min

           let hoy = moment().get('year')+'-'+(moment().get('month')+1)+'-'+moment().get('date') + ' ' + '7:00:00';
        
           
           let horaIni = horaE; 
           let horaFin = horaS;
            if(moment(hoy).isAfter(horaIni)){
                toastr.options = {
                    "closeButton": true,
                    "preventDuplicates": true,
                    "positionClass": "toast-top-center",
                };
                toastr["error"]("La Hora Inicio no puede ser menor a la de Hoy");
         
            }else if(moment(horaIni).isAfter(horaFin)){ 
                toastr.options = {
                    "closeButton": true,
                    "preventDuplicates": true,
                    "positionClass": "toast-top-center",
                };
                toastr["error"]( "La hora Fin no puede ser menor a la de Inicio")
            }else {
                let json = {
                    horario_atencion:{
                        horaE,
                        horaS,
                        fecha,
                        intervalo 
                       }
                   };
                   console.log(json);
                   guardandoHorarioAtencion(json);
            }
          // console.log(hoy);
        });
    }

    //ejemplo
   
    

    /* function calcularIntervalo(hora_ini,hora_fin,intervalo){

        for (let index = 0; index < array.length; index++) {
            const element = array[index];
            
        }

    }  */   

    /* function cargar_hora(){
        let hoy = moment().get('year')+'-'+(moment().get('month')+1)+'-'+moment().get('date') + ' ' + '7:00:00';
        update_fecha_inicio();

        function update_fecha_inicio(){
            $('#fecha-doctor').blur(function(){
                let fecha = $('#fecha-doctor').val();
             console.log(fecha);
            });
        }
        update_hora_inicio();
        function update_hora_inicio(){
            $('#hora-entrada').blur(function(){
                let horaE = $('#hora-entrada').val();
                console.log(horaE);
            });
        }
        update_fecha_fin();
        function update_fecha_fin(){
            $('#hora-salida').blur(function(){
                let horaS = $('#hora-salida').val();
                console.log(horaS);
            });
        }
     
    } */

    function guardandoHorarioAtencion(json){
        $.ajax({
            url:urlServidor  +'horarios_atencion/guardar',
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
                    toastr["success"](response.mensaje, "Horario de Atencion")
                    $('#form-horario-doctor')[0].reset();
                    cargarHorariosLibres2('S');
    
                } else{
                    toastr.options = {
                        "closeButton": true,
                        "preventDuplicates": true,
                        "positionClass": "toast-top-center",
                    };
                    toastr["error"](response.mensaje, "Horario de Atencion")
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

    function cargarHorariosLibres(estado){
        $.ajax({
            // la URL para la petición
            url : urlServidor + 'horarios_atencion/libre/'+estado, 
            // especifica si será una petición POST o GET
            type : 'GET',
            // el tipo de información que se espera de respuesta
            dataType : 'json',
            success : function(response) {
                if(response.status){
                    let option = '<option value=0>Seleccione una Hora de Atencion</option>';
                    
                    response.horario_atencion.forEach(element =>{
                        option += `<option value=${element.id}>${element.horaE} - ${element.horaS} / ${element.fecha}</option>`;
                    });

                    $('#select-horario-atencion').html(option);

   
                }else{
                    toastr.options = {
                        "closeButton": true,
                        "preventDuplicates": true,
                        "positionClass": "toast-top-center",
                    };
                    toastr["error"]("No hay  Horarios Libres", "Horarios Atencion")
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

    function agregarDoctorHorario(){

        $('#btn-agregar-hora').click(function(){
        let doctor_id = $('#doctor-id').val();
        let horarios_atencion_id = $('#select-horario-atencion option:selected').val();

        if(horarios_atencion_id == '0' || doctor_id == 0 ){
            toastr.options = {
                "closeButton": true,
                "preventDuplicates": true,
                "positionClass": "toast-top-center",
            };
            toastr["error"]('Debe selecionar la hora', "Horario de Atencion");
        }else{
            let json = {
                datos: {
                    doctor_id,
                    horarios_atencion_id
                }
            }

            //console.log(json);

            $.ajax({
                // la URL para la petición
                url : urlServidor + 'horarios_atencion/saveDoctorHorarioAtencion',
                data : "data=" + JSON.stringify(json),
                // especifica si será una petición POST o GET
                type : 'POST',
                // el tipo de información que se espera de respuesta
                dataType : 'json',
                success : function(response) {
    
                    if(response.status){
                        toastr.options = {
                            "closeButton": true,
                            "preventDuplicates": true,
                            "positionClass": "toast-top-center",
                        };
                        toastr["success"](response.mensaje, "Horario de Atencion");
                        get_HorariosAtencion(doctor_id);
                        cargarHorariosLibres2('S');
                    }else{
                        toastr.options = {
                            "closeButton": true,
                            "preventDuplicates": true,
                            "positionClass": "toast-top-center",
                        };
                        toastr["error"](response.mensaje, "Horario de Atencion");
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

        })
        



    }

    function get_HorariosAtencion(id_doctor){
        $.ajax({
            // la URL para la petición
            url : urlServidor + 'horarios_atencion/doctor/' + id_doctor,
            // especifica si será una petición POST o GET
            type : 'GET',
            // el tipo de información que se espera de respuesta
            dataType : 'json',
            success : function(response) {
             //   console.log(response);
                if(response.status){
                    let tr = '';
                    let i = 1;
                    response.doctor_horario.forEach(element => {
                        tr += ` <tr>
                        <td>${i}</td>
                        <td>${element.horarios_atencion.horaE}</td>
                        <td>${element.horarios_atencion.horaS}</td>
                        <td><span class="tag tag-warning">${element.horarios_atencion.fecha}</span></td>
                        <td>
                            <div>
                                <button class="btn btn-danger" onclick="eliminar_doctor_horario(${element.doctor_id},${element.horarios_atencion.id})">
                                    <i class="fas fa-trash"></i>
                                </button>
                            </div>
                        </td>
                        </tr>`;
                    });
                    $('#body-listado-doctor-hora').html(tr);
                }else{
                    let tr = `<tr>
                    <td></td>     
                    <td></td>
                    <td></td>
                    <td>${response.mensaje}</td>    
                    <td></td>           
                  </tr>`;
                  $('#body-listado-doctor-hora').html(tr);
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


    /* function cargarDoctores(){
        $.ajax({
            // la URL para la petición
            url : urlServidor + 'doctor/listarArray',
            // especifica si será una petición POST o GET
            type : 'GET',
            // el tipo de información que se espera de respuesta
            dataType : 'json',
            success : function(response) {
                
                    let item = '';
                    let i = 0;
                    response.forEach(element => {
                        item += `<blockquote id="doctor-${i}" onclick="seleccionar(${element.doctor.id},${i},${response.length})" class="quote-secondary doctores" style="margin-left: -5px">
                        <p style="margin-bottom: -5px">${element.doctor.persona.nombre} ${element.doctor.persona.apellido}</p>
                        <small>${element.doctor.persona.cedula}</small>
                      </blockquote>`;
                      i++;
                    });
    
                $('#box-doctores').html(item);           
            },
            error : function(jqXHR, status, error) {
                console.log('Disculpe, existió un problema');
            },
            complete : function(jqXHR, status) {
                // console.log('Petición realizada');
            }
        });
    } */

/* }); */

function cargarHorariosLibres2(estado){
    $.ajax({
        // la URL para la petición
        url : urlServidor + 'horarios_atencion/libre/'+estado, 
        // especifica si será una petición POST o GET
        type : 'GET',
        // el tipo de información que se espera de respuesta
        dataType : 'json',
        success : function(response) {
            if(response.status){
                let option = '<option value=0>Seleccione una Hora de Atencion</option>';
                
                response.horario_atencion.forEach(element =>{
                    option += `<option value=${element.id}>${element.horaE} - ${element.horaS} / ${element.fecha}</option>`;
                });
                $('#select-horario-atencion').html(option);

            }else{
                toastr.options = {
                    "closeButton": true,
                    "preventDuplicates": true,
                    "positionClass": "toast-top-center",
                };
                toastr["error"]("No hay  Horarios Libres", "Horarios Atencion")
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

function get_HorariosAtencion2(id_doctor){
    $.ajax({
        // la URL para la petición
        url : urlServidor + 'horarios_atencion/doctor/' + id_doctor,
        // especifica si será una petición POST o GET
        type : 'GET',
        // el tipo de información que se espera de respuesta
        dataType : 'json',
        success : function(response) {
            console.log(response);
            if(response.status){
                let tr = '';
                let i = 1;
                response.doctor_horario.forEach(element => {
                    tr += ` <tr>
                    <td>${i}</td>
                    <td>${element.horarios_atencion.horaE}</td>
                    <td>${element.horarios_atencion.horaS}</td>
                    <td><span class="tag tag-warning">${element.horarios_atencion.fecha}</span></td>
                    <td>
                        <div>
                            <button class="btn btn-danger" onclick="eliminar_doctor_horario(${element.doctor_id},${element.horarios_atencion.id})">
                                <i class="fas fa-trash"></i>
                            </button>
                        </div>
                    </td>
                    </tr>`;
                });
                $('#body-listado-doctor-hora').html(tr);
            }else{
                let tr = `<tr>
                <td></td>     
                <td></td>
                <td></td>
                <td>${response.mensaje}</td>    
                <td></td>           
              </tr>`;
              $('#body-listado-doctor-hora').html(tr);
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

function eliminar_doctor_horario(id_doctor,id_horarios_atencion){
    $.ajax({
        // la URL para la petición
        url : urlServidor + 'horarios_atencion/eliminarDoctorHorarioAtencion/'+ id_horarios_atencion + '/' + id_doctor,
        // especifica si será una petición POST o GET
        type : 'DELETE',
        // el tipo de información que se espera de respuesta
        dataType : 'json',
        success : function(response) {
            get_HorariosAtencion2(id_doctor);
            cargarHorariosLibres2('S');
            toastr.options = {
                "closeButton": true,
                "preventDuplicates": true,
                "positionClass": "toast-top-center",
            };
            toastr["success"](response.mensaje, "Horario de Atencion");
        },
        error : function(jqXHR, status, error) {
            console.log('Disculpe, existió un problema');
        },
        complete : function(jqXHR, status) {
            // console.log('Petición realizada');
        }
    });
}

function eliminar_horaAdoctor(id){
    let data = {
        horarios_atencion: {
            id: id,
        }
    };
    $.ajax({
        // la URL para la petición
        url : urlServidor + 'horarios_atencion/eliminarHorasDotor',
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
    
                toastr["success"](response.mensaje, "hora atencion")
            
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

function editar_horaAdoctor(id){
    $('#modal-editar-horasdoctor').modal('show');
    cargarHorasDoctor(id);
}
function cargarHorasDoctor(id){
    $.ajax({
        url:urlServidor  +'horarios_atencion/listarH/'+id,
        type:'GET',
        dataType:'json',
        success:function(response){
            //console.log(response);
            if(response.status){            
                $('#e-horaD-id').val(response.horarios_atencion.id);
                $('#e-hora-entrada').val(response.horarios_atencion.horaE);
                $('#e-hora-salida').val(response.horarios_atencion.horaS);
                $('#e-h-fecha').val(response.horarios_atencion.fecha);
         

            } 
        },
        error : function(jqXHR, status, error) {
            console.log('Disculpe, existió un problema');
        },
        complete : function(jqXHR, status) {
        }
    });
}

function editandohorasDoctorModal(){
    $('#btn-update-hora-doctor').click(function(){

        let id = $('#e-horaD-id').val();
      
        let horaE = $('#e-hora-entrada').val();
        let horaS = $('#e-hora-salida').val();
        let fecha = $('#e-h-fecha').val();

                
        let json = {
            horarios_atencion: {
                id:id,
                horaE: horaE,
                horaS:horaS,
                fecha:fecha,   
            }
        };

        console.log(json);

        $.ajax({
            // la URL para la petición
            url : urlServidor + 'horarios_atencion/editarDoctorHorarioAtencion',
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

                    $('#modal-editar-horasdoctor').modal('hide');
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



/* function seleccionar(id,select,cantidad){

    
    let item = '#doctor-'+select;
    $(item).addClass('select-doctor');

    for(let i=0;i<cantidad;i++){
        let aux = '#doctor-'+i;
        if(i!=select){
            $(aux).removeClass('select-doctor');
            
        }
    }

} */

