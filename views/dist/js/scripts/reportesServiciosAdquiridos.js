$(function () {

    _init();

    function _init() {
        cargar();
        imprimir();
    }


    function cargar(){
        $('#btn-consulta').click(function () {
            let fecha_inicio = $('#fecha-inicio-r-s').val();
            let fecha_fin = $('#fecha-fin-r-s').val();
            let limite = $('#limite option:selected').val();

            toastr.options = {
                "closeButton": true,
                "preventDuplicates": true,
                "positionClass": "toast-top-center",
            };

            if (fecha_inicio.length == 0) {
                toastr["warning"]('Seleccione una fecha de inicio', "Reporte Servicios Adquiridos");
            } else if (fecha_fin.length == 0) {
                toastr["warning"]('Seleccione una fecha fin', "Reporte Servicios Adquiridos");
            } else if (moment(fecha_inicio).isAfter(fecha_fin)) {
                toastr["error"]('La fecha fin no puede ser menor', "Reporte Servicios Adquiridos");
            }else if(limite == 0 ){
                toastr["warning"]('Seleccione un Limite', "Reporte Servicios Adquiridos");
            } else {

                let f = new Date();
                let fecha = f.getDate() + '/' + (f.getMonth() + 1) + '/' + f.getFullYear();
                let hora = f.getHours() + ':' + (f.getMinutes()) + ':' + f.getSeconds();


                $('#fecha-inicio-r-s2').text(fecha_inicio);
                $('#fecha-fin-r-s2').text(fecha_fin);
                $('#fecha-consulta-s').text(fecha);
                $('#hora-consulta-s').text(hora);

                $('#tabla-reporte').removeClass('d-none');
            }


        
            $.ajax({
                url: urlServidor + 'citas/serviciomasAdquirido/' + fecha_inicio + '/' + fecha_fin + '/' + limite,
                type: 'GET',
                dataType: 'json',
                    success: function (response) {
                  //  console.log(response);
                    let tr = '';  
                    if(response){
                        let i = 1;

                        
                        response.lista.forEach(element => {
                            
                            tr += `
                            <tr>
                                <th>${i}</th>
                                <th>${element.nombre_servicio}</th>
                                <th>${element.cantidad}</th>
                                
                                <th>${element.precio}</th> 
                            </tr>
                        `;
                        i++;                             
                        });

                        $('#body-reporte-servicio').html(tr);
                        $('#totales-s').html('Totales');
                        $('#total-general-s').html(response.total_general);

                    }
                }
            });            

        });

    }

    
    function imprimir(){
        $('#btn-imprimir').click(function(){
                let element = document.getElementById('tabla-reporte');
                let opt = {
                margin:       0.5,
                filename:     'Reporte Servicios mas adquiridos.pdf',
                image:        { type: 'jpeg', quality: 3 },
                html2canvas:  { scale: 2 },
                jsPDF:        { unit: 'mm', format: 'legal', orientation: 'portrait' }
                };
  
                html2pdf().set(opt).from(element).save();
        });
    }

});