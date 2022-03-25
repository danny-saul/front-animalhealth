 <style>
    .factura{
    background-color: transparent;
}


.factura-header-prov{
    padding: 10px 20px;
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    border: 1px solid rgba(0,0,0,.2);
}

.factura-header-prov span{
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid rgba(0,0,0,.4);
    line-height: 40px;
}

.factura-body{
    min-height: 150px;
   
    border: 1px solid rgba(0,0,0,.2);
}

.factura-title{
    color: #007bff;
}
.factura-body table tr{
    box-sizing: border-box;
    padding:20px;
}

.factura-body table thead tr td{
    font-weight: bold;
    text-transform: uppercase;
    text-align: start;
    color: #007bff;
}
.factura-body table tr td{
    padding: 10px;
    border-bottom: 1px solid rgba(0,0,0,.2);
    width: 15%;
}

.box-items{
    border: 1px solid rgba(0,0,0,.2);
    min-height: 75px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.box-items .item-valores{
    display: flex;
    flex-direction: column;
}

.title-orden-card{
    border-bottom: 1px solid red;
    width: 50%;
    margin-bottom: 14px;
}

.orden-trabajo{
    border: 1px solid #4040ff;
    border-radius: 5px;
}

.border-top{
    border-top: 1px solid #4040ff !important;
}

.sin-margin-y{
    margin-right: 0px;
    margin-left: 0px;
}

.sin-margin-x{
    margin-top: 0px !important;
    margin-bottom: 0px !important;
}

.sin-padding-y{
    padding-right: 0px;
    padding-left: 0px;
}

.text-azul{
    color: #4040ff !important;
}

.border-rigth{
    border-right: 1px solid #4040ff !important;
}
</style>


<!-- Content Header (Page header) -->
<div class="content-header">
    <div class="container-fluid">
        <div class="row mb-2">
            <div class="col-sm-6">
                <h1 class="m-0">Gestionar Citas</h1>
            </div><!-- /.col -->
            <div class="col-sm-6">
                <ol class="breadcrumb float-sm-right">
                    <li class="breadcrumb-item"><a href="#">Inicio</a></li>
                    <li class="breadcrumb-item active">Cliente</li>
                </ol>
            </div><!-- /.col -->
        </div><!-- /.row -->
    </div><!-- /.container-fluid -->
</div>
<!-- /.content-header -->

<!-- Main content -->
<div class="content">
    <div class="container-fluid">


        <div class="row pb-2">
            <!--
            <div class="col-md-6">
                <div class="card-body">

                    <div class="row">
                        <div class="col-md-12">
                            <div class="card card-primary">
                                <div class="card-header">
                                    <h3 class="card-title">Registro de Mascota</h3>

                                    <div class="card-tools">
                                        <button type="button" class="btn btn-tool" data-card-widget="collapse">
                                            <i class="fas fa-minus"></i>
                                        </button>
                                    </div>

                                </div>

                                <div class="card-body">
                                    <form id="nueva-mascota-c" method="POST">

                                        <div class="row ">
                                            <div class="col-12 col-md-6 form-group">
                                                <input type="hidden" id="c-cli-id-c">
                                                <label for="">Nombre</label>
                                                <input id="new-nombre-c" type="text" name="nombre" class="form-control"
                                                    maxlength="200" minlength="3">
                                            </div>
                                            <div class="col-12 col-md-6 form-group">
                                                <label for="">Edad</label>
                                                <input id="new-edad-c" type="text" name="edad" class="form-control"
                                                    maxlength="2" minlength="1">
                                            </div>
                                        </div>

                                        <div class="row">

                                            <div class="col-12 col-md-6 form-group">
                                                <label for="">Tipo de Mascota</label>
                                                <select name="chelas" id="new-tipo-mascota-c" class="form-control">
                                                </select>
                                            </div>

                                            <div class="col-12 col-md-6 form-group">
                                                <label for="">Genero Mascota</label>
                                                <select name="" id="new-genero-c" class="form-control">
                                                </select>
                                            </div>

                                        </div>

                                        <div class="row ">
                                            <div class="col-9  form-group">
                                                <label for="new-raza-c">Raza</label>
                                                <input type="hidden" id="id-raza-c">
                                                <input id="new-raza-c" type="raza" name="raza" class="form-control">
                                            </div>
                                            <div class="col-3  form-group">
                                                <button class="btn btn-primary mb-2" style="margin-top: 31px;"
                                                    data-toggle="modal" data-target="#modal-raza-cliente"
                                                    data-backdrop="static" data-keyboard="false">
                                                    <i class="fas fa-search"></i></button>
                                            </div>
                                        </div>

                                        <div class="row">
                                            <div class="col-5  form-group">
                                                <label for="">Peso</label>
                                                <input id="new-peso-c" type="text" name="peso" class="form-control">
                                            </div>

                                            <div class="col-7  form-group">
                                                <label for="">F. Nacimiento </label>
                                                <input id="new-fecha-c" type="date" name="fechaN" class="form-control ">
                                            </div>

                                        </div>

                                        <div class="row mt-4">
                                            <div class="col-12  form-group">
                                                <label for="">Imagen</label>
                                                <input class="form-control" type="file" name="img"
                                                    id="new-img-mascota-c" accept="image/*">
                                            </div>
                                        </div>
                                    </form>
                                    <div class="row">
                                        <div class="col-12 btn-center">
                                            <button style="margin-top: 18px;" id="btn-guardar-mascota-cliente"
                                                class="btn btn-block btn-outline-primary">Guardar</button>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>
            </div>
-->
            <div class="col-md-12">
                <div class="card-body">

                    <div class="row">
                        <div class="col-md-12">
                            <div class="card card-primary">
                                <div class="card-header">
                                    <h3 class="card-title">Gestionar Cita</h3>

                                    <div class="card-tools">
                                        <button type="button" class="btn btn-tool" data-card-widget="collapse">
                                            <i class="fas fa-minus"></i>
                                        </button>
                                    </div>

                                </div>

                                <div class="card-body">

                                    <form id="nueva-cita-cliente" method="POST">
                                        <div class="row">
                                            <div class="col-12 text-right">
                                                <button class="btn btn-primary btn-sm" id="buscar-doctor"><i
                                                        class="fa fa-search mr-2"></i>Buscar Doctor</button>

                                            </div>

                                            <!--                     <div class="col-12 text-right">
                                                <button class="btn btn-primary btn-sm" id="abrir-preguntas"><i
                                                        class="fa fa-search mr-2"></i>KPI</button>

                                            </div> -->
                                        </div>
                                        <div class="row">

                                            <div class="col-12 col-md-6 form-group">
                                                <label for="">Nombres</label>
                                                <input type="hidden" id="doctor-id">
                                                <input type="hidden" id="c-cli-id-c">
                                                <input id="new-doctor-nombre" readonly type="text" class="form-control">
                                            </div>
                                            <div class="col-12 col-md-6 form-group">
                                                <label for="">Telefono</label>
                                                <input id="new-doctor-telefono" readonly type="email"
                                                    class="form-control">
                                            </div>
                                        </div>

                                        <div class="row">
                                            <div class="col-6 form group">
                                                <!--min=<php date("Y-m-d");?>   -->
                                                <label for="">Dias</label>
                                                <input id="new-dias-d-c" type="date" required
                                                    min=<?php $hoy=date("Y-m-d"); echo $hoy;?> name="fecha"
                                                    class="form-control">

                                            </div>
                                            <div class="col-3">
                                                <button class="btn btn-primary btn-sm " id="buscar-datos-c"
                                                    style="margin-top: 35px;">
                                                    <i class=" fa fa-search  "></i> </button>

                                            </div>
                                        </div>


                                        <div class="row">
                                            <div class="col-12" id="fecha-doctor">

                                            </div>

                                        </div>
                                        <div class="row">
                                            <div class="col-12 col-md-6 form-group d-none" id="hora-cita-a">
                                                <label for="">Hora</label>
                                                <select id="new-hora-cita" class="form-control"></select>
                                            </div>
                                            <div class="col-12 col-md-6 form-group">
                                                <label for="">Servicios</label>
                                                <select id="new-servicio" class="form-control"></select>
                                            </div>
                                        </div>

                                        <div class="row">
                                            <div class="col-12 col-md-6 form-group " id="mascota-cita-a">
                                                <label for="">Elija Su Mascota</label>
                                                <select id="new-mascota-cita" class="form-control"></select>
                                            </div>

                                        </div>


                                    </form>

                                    <div class="row">
                                        <div class="col-12 btn-center">
                                            <button style="margin-top: 18px;" id="btn-guardar-cita-cliente"
                                                class="btn btn-block btn-outline-primary">Guardar</button>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>
            </div>

            <div class="col-12">
                <div class="content">
                    <div class="container-fluid">
                        <div class="row mt-3">
                            <div class="col-12">
                                <div class="card card-dark">
                                    <div class="card-header">
                                        <h3 class="card-title">Listar Citas</h3>

                                        <div class="card-tools">
                                            <button type="button" class="btn btn-tool" data-card-widget="collapse"><i
                                                    class="fas fa-minus"></i>
                                            </button>
                                        </div>
                                        <!-- /.card-tools -->
                                    </div>
                                    <!--form-nuevo-descripcion /.card-header -->
                                    <div class="card-body">
                                        <div class="div" style="overflow: auto;">
                                            <table id="tabla-citas-cliente" class="table table-bordered table-striped">
                                                <thead>
                                                    <tr>
                                                        <th style="width: 10px">#</th>
                                                        <th>Propietario</th>
                                                        <th>Mascota</th>
                                                        <th>Doctor</th>
                                                        <th>Servicio</th>
                                                        <th>Hora</th>
                                                        <th>Fecha</th>
                                                        <th>Estado Cita</th>
                                                        <th>Acciones</th>
                                                    </tr>
                                                </thead>
                                                <tbody>

                                            </table>
                                        </div>
                                    </div>
                                    <!-- /.card-body -->
                                </div>
                            </div>
                        </div>
                        <!-- /.row -->
                    </div><!-- /.container-fluid -->
                </div>
            </div>



        </div>

    </div>
</div>

</div>





<div class="modal fade" id="modal-doctor">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header bg-dark">
                <h4 class="modal-title">Doctores Disponibles</h4>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <div class="row" style="height: 200px !important; overflow: auto;">
                    <div class="col-12">
                        <div class="tabla-buscar-mascota">
                            <table class="table table-hover text-nowrap">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th style="display: none">ID</th>
                                        <th>Nombres</th>
                                        <th>Teléfono</th>
                                        <th>Dirección</th>
                                        <th>OK</th>
                                    </tr>
                                </thead>
                                <tbody id="doctor-body">

                                </tbody>

                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal-footer justify-content-between">
            </div>
        </div>
        <!-- /.modal-content -->
    </div>
    <!-- /.modal-dialog -->
</div>


<!-- MODAL KPI EVUALUACION -->

<div class="modal fade" id="modal-kpi-evaluacion">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header bg-dark">
                <h4 class="modal-title">Evalue los Servicios Entregados por Animal Health</h4>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <div class="row" style="height: 200px !important; overflow: auto;">
                    <div class="col-12">
                        <div class="tabla-buscar-mascota">
                            <h5>Como evaluaria su sastifaccion respecto al servicio entregado?</h5>
                            <div class="card-body">
                                <form action="">
                                    <div class="row">
                                        <div class="col-12 col-md-6 form-group  " id="hora-cita-a">
                                            <label for="">Evalue su atencion recibida por nuestro equipo
                                                veterinario</label>
                                            <select id="new-kpi-pregunta" class="form-control"></select>
                                        </div>

                                        <div class="col-12 col-md-6 form-group  " id="hora-cita-a">
                                            <label for="">Cómo calificarías tu experiencia general con nuestros
                                                productos y servicios</label>
                                            <select id="new-kpi-producto" class="form-control"></select>
                                        </div>

                                    </div>

                                </form>

                                <div class="row">
                                    <div class="col-12 btn-center">
                                        <button style="margin-top: 18px;" id="btn-guardar-kpi-cliente"
                                            class="btn btn-block btn-outline-primary">Guardar</button>
                                    </div>
                                </div>
                            </div>



                        </div>
                    </div>
                </div>
            </div>
            <div class="modal-footer justify-content-between">
            </div>
        </div>
        <!-- /.modal-content -->
    </div>
    <!-- /.modal-dialog -->
</div>


<!-- Modal  Ver citas-->
<div class="modal fade" id="modal-ver-cita">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-body">
                <div class="row d-flex justify-content-center">
                    <div class="col-12 col-md-12 col-lg-12">
                        <div class="card card-dark" id="factura-cita">
                            <div class="card-header">
                                Comprobante de Cita Medica
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>

                            <div class="card-body">
                                <div class="factura">
                                    <div class="factura-header">
                                        <div class="row">
                                            <div class="col-12 col-md-8">
                                                <img src="<?=BASE?>views/dist/css/logincss/images/logo22.gif" alt="logo"
                                                    height="100px" width="100px">
                                            </div>
                                            <div class="col-12 col-md-4">
                                                <div class="text-right">
                                                    <h2 class="lead p-4 factura-title">ANIMAL HEALTH <b
                                                            id="compra_id"></b>
                                                    </h2>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-sm-6 ">
                                            <div>Cliente: <span id="cita-cliente-nombre"></span></div>
                                            <div>Cedula: <span id="cita-cliente-cedula"></span></div>
                                            <div>Fecha Cita: <span id="cita-cliente-fecha"></span> </div>
                                            <div>Hora Cita: <span id="cita-cliente-hora"></span> </div>
                                            <div>Mascota: <span id="cita-cliente-mascota"></span> </div>
                                            <div>Doctor: <span id="cita-cliente-doctor"></span> </div>

                                        </div>
                                    </div>

                                    <div class="factura-body mt-4" style="overflow: auto;">
                                        <table>
                                            <thead>
                                                <tr>
                                  
                                                    <td>Detalle Cita</td>
                                                    <td>Estado</td>
                                                    <td>Precio</td>
                                         
                                                </tr>
                                         
                                            </thead>

                                            <tbody id="body_detalle_compra">
                                                </tbody>
                                           
                                        </table>
                                        <p>Estimado Cliente por favor estar 15 minutos antes de su cita, 
                                            acerquese en recepcion a cancelar el valor estimado de la consulta. 
                                            Gracias por preferirnos Animal Health al cuidado de tus mascotas</p>
                                    </div>

                               <!--      <div class="row mt-4">
                                        <div class="col-6 col-md-3  box-items">
                                            <div class="item-valores">
                                                <b>$ Subtotal</b>
                                                <span id="compra_subtotal" class="text-center">0.00</span>
                                            </div>
                                        </div>

                                        <div class="col-6 col-md-3  box-items">
                                            <div class="item-valores">
                                                <b>$ Iva</b>
                                                <span id="compra_iva" class="text-center">0.00</span>
                                            </div>
                                        </div>

                                        <div class="col-6 col-md-3 box-items">
                                            <div class="item-valores">
                                                <b>$ Descuento</b>
                                                <span id="compra_descuento" class="text-center">0.00</span>
                                            </div>
                                        </div>

                                        <div class="col-6 col-md-3  box-items">
                                            <div class="item-valores">
                                                <b>$ Total</b>
                                                <span id="compra_total" class="text-center">0.00</span>
                                            </div>
                                        </div>
                                    </div> -->
                                </div>
                            </div>
                        </div>
                        <main class="mt-3 text-right">
                            <button class="btn btn-primary" id="btn-imprimir">
                                <i class="fas fa-print mr-2"></i>
                                Descargar PDF
                            </button>
                        </main>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>



<!-- MOdal de raza -->

<!-- <div class="modal fade" id="modal-raza-cliente">
    <div class="modal-dialog modal-md">
        <div class="modal-content">
            <div class="modal-header bg-primary">
                <h4 class="modal-title">Raza</h4>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <div class="row">
                    <div class="col-12">
                        <div class="form-group">
                            <label for="">Buscar Raza</label>
                            <input id="buscar-raza-c" type="text" class="form-control"
                                placeholder="Ingrese el nombre de la Raza">
                        </div>
                    </div>
                </div>
                <div class="row" style="height: 200px !important; overflow: auto;">
                    <div class="col-12">
                        <div class="tabla-buscar-raza">
                            <table class="table table-hover text-nowrap">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th style="display: none">ID</th>
                                        <th>Raza</th>
                                        <th>OK</th>
                                    </tr>
                                </thead>
                                <tbody id="raza-body-c">

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal-footer justify-content-between">
            </div>
        </div>
    
    </div>
   
</div> -->

<script src="<?=BASE?>views/plugins/datatables/jquery.dataTables.min.js"></script>
<script src="<?=BASE?>views/plugins/datatables-bs4/js/dataTables.bootstrap4.min.js"></script>
<script src="<?=BASE?>views/plugins/datatables-responsive/js/dataTables.responsive.min.js"></script>
<script src="<?=BASE?>views/plugins/datatables-responsive/js/responsive.bootstrap4.min.js"></script>
<script src="<?=BASE?>views/plugins/datatables-buttons/js/dataTables.buttons.min.js"></script>
<script src="<?=BASE?>views/plugins/datatables-buttons/js/buttons.bootstrap4.min.js"></script>
<script src="<?=BASE?>views/plugins/jszip/jszip.min.js"></script>
<script src="<?=BASE?>views/plugins/pdfmake/pdfmake.min.js"></script>
 
<script src="<?=BASE?>views/plugins/html2pdf/html2pdf.bundle.js"></script>


<script src="<?=BASE?>views/plugins/Toast/js/Toast.min.js"></script>
<script src="<?=BASE?>views/dist/js/scripts/citasZZCliente.js"></script>