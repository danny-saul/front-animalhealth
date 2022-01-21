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

            <div class="col-md-6">
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
                                        </div>
                                        <div class="row">

                                            <div class="col-12 col-md-6 form-group">
                                                <label for="">Nombres</label>
                                                <input type="hidden" id="doctor-id">
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
                                                <input id="new-dias-d-c" type="date" required  min=<?php $hoy=date("Y-m-d"); echo $hoy;?> name="fecha"
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



<!-- MOdal de raza -->
<div class="modal fade" id="modal-raza-cliente">
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
        <!-- /.modal-content -->
    </div>
    <!-- /.modal-dialog -->
</div>

<script src="<?=BASE?>views/plugins/datatables/jquery.dataTables.min.js"></script>
<script src="<?=BASE?>views/plugins/datatables-bs4/js/dataTables.bootstrap4.min.js"></script>
<script src="<?=BASE?>views/plugins/datatables-responsive/js/dataTables.responsive.min.js"></script>
<script src="<?=BASE?>views/plugins/datatables-responsive/js/responsive.bootstrap4.min.js"></script>
<script src="<?=BASE?>views/plugins/datatables-buttons/js/dataTables.buttons.min.js"></script>
<script src="<?=BASE?>views/plugins/datatables-buttons/js/buttons.bootstrap4.min.js"></script>
<script src="<?=BASE?>views/plugins/jszip/jszip.min.js"></script>
<script src="<?=BASE?>views/plugins/pdfmake/pdfmake.min.js"></script>


<script src="<?=BASE?>views/plugins/Toast/js/Toast.min.js"></script>
<script src="<?=BASE?>views/dist/js/scripts/citasZZCliente.js"></script>