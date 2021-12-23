<!-- Content Header (Page header) -->
<div class="content-header">
    <div class="container-fluid">
        <div class="row mb-2">
            <div class="col-sm-6">
                <h1 class="m-0">Agendar Citas</h1>
            </div><!-- /.col -->
            <div class="col-sm-6">
                <ol class="breadcrumb float-sm-right">
                    <li class="breadcrumb-item"><a href="#">Inicio</a></li>
                    <li class="breadcrumb-item active">Agendar Citas</li>
                </ol>
            </div><!-- /.col -->
        </div><!-- /.row -->
    </div><!-- /.container-fluid -->
</div>
<!-- /.content-header -->

<!-- Main content -->
<div class="content">
    <div class="container-fluid">
        <button class="btn btn-secondary btn-lg" data-toggle="modal" data-target="#modal-agendar-citas"
            data-backdrop="static" data-keyboard="false"><i class="fa fa-plus mr-2"></i>Agendar Citas</button>
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
                            <table id="tabla-citas" class="table table-bordered table-striped">
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
<!-- /.content -->
</div>
<!-- /.content-wrapper -->


<!-- Modales -->
<div class="modal fade" id="modal-agendar-citas" style="overflow-y: scroll;">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header bg-dark">
                <h4 class="modal-title">Agendar Citas</h4>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <div class="contanier-fluid">
                    <form id="nueva-cita" method="POST">

                        <div class="row">
                            <div class="col-6">
                                <medium class="ml-2 text-primary title-orden-card"> <b> Datos de la Mascota</b>
                                </medium>
                            </div>
                            <div class="col-6 text-right">
                                <button class="btn btn-primary btn-sm" id="buscar-mascota"><i
                                        class="fa fa-search mr-2"></i>Buscar Mascota</button>

                            </div>
                        </div>

                        <div class="row">

                            <div class="col-12 col-md-6 form-group">
                                <label for="">Nombre Mascota </label>
                                <input id="new-mascota-nombre" readonly type="text" class="form-control">
                            </div>
                            <div class="col-12 col-md-6 form-group">
                                <label for="">Tipo Mascota</label>
                                <input id="new-mascota-tipo" readonly type="text" class="form-control">
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-6">
                                <medium class="ml-2 text-primary title-orden-card"> <b> Datos del Propietario</b>
                                </medium>
                            </div>
                        </div>

                        <div class="row ">
                            <input type="hidden" id="doctor-id">
                            <input type="hidden" id="cliente-id">
                            <div class="col-12 col-md-6 form-group">
                                <label for="">Cédula</label>
                                <input id="new-cliente-cedula" readonly type="text" class="form-control" required
                                    maxlength="10" minlength="10">

                            </div>
                            <div class="col-12 col-md-6 form-group">
                                <label for="">Nombre</label>
                                <input id="new-cliente-nombre" readonly type="text" class="form-control" maxlength="200"
                                    minlength="3">
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12 col-md-6 form-group">
                                <label for="">Apellido</label>
                                <input id="new-cliente-apellido" readonly type="text" class="form-control"
                                    maxlength="200" minlength="3">
                            </div>
                            <div class="col-12 col-md-6 form-group">
                                <label for="">Telefono</label>
                                <input id="new-cliente-telefono" readonly type="text" class="form-control"
                                    maxlength="10" minlength="10">
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-6">

                                <medium class="ml-2 text-primary title-orden-card"> <b> Doctor</b>
                                </medium>
                            </div>
                            <div class="col-6 text-right">
                                <button class="btn btn-primary btn-sm" id="buscar-doctor"><i
                                        class="fa fa-search mr-2"></i>Buscar Doctor</button>

                            </div>
                        </div>

                        <div class="row">

                            <div class="col-12 col-md-6 form-group">
                                <label for="">Nombres</label>
                                <input id="new-doctor-nombre" readonly type="text" class="form-control">
                            </div>
                            <div class="col-12 col-md-6 form-group">
                                <label for="">Telefono</label>
                                <input id="new-doctor-telefono" readonly type="email" class="form-control">
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-12 col-md-6 form-group">
                                <label for="">Servicios</label>
                                <select id="new-servicio" class="form-control"></select>
                            </div>

                            <div class="col-12 col-md-6 form-group">
                                <label for="">Hora</label>
                                <select id="new-hora" class="form-control"></select>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-12">
                                <button class="btn btn-primary" type="submit"><i
                                        class="fas fa-save mr-2"></i>Guardar</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div class="modal-footer justify-content-between">
            </div>
        </div>
        <!-- /.modal-content -->
    </div>
    <!-- /.modal-dialog -->
</div>

<!-- Modales -->
<div class="modal fade" id="modal-mascota">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header bg-dark">
                <h4 class="modal-title">Mascotas Registradas</h4>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <div class="row">
                    <div class="col-12">
                        <div class="form-group">
                            <input type="hidden" id="mascota-id">
                            <label for="">Buscar Mascota</label>
                            <input id="buscar-mascota" type="text" class="form-control"
                                placeholder="Ingrese el nombre de la Mascota">
                        </div>
                    </div>
                </div>
                <div class="row" style="height: 200px !important; overflow: auto;">
                    <div class="col-12">
                        <div class="tabla-buscar-mascota">
                            <table class="table table-hover text-nowrap">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th style="display: none">ID</th>
                                        <th>Nombre</th>
                                        <th>Tipo</th>
                                        <th>Genero</th>
                                        <th>Raza</th>
                                        <th>Edad</th>
                                        <th>OK</th>
                                    </tr>
                                </thead>
                                <tbody id="mascota-body">

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

<script src="<?=BASE?>views/plugins/datatables/jquery.dataTables.min.js"></script>
<script src="<?=BASE?>views/plugins/datatables-bs4/js/dataTables.bootstrap4.min.js"></script>
<script src="<?=BASE?>views/plugins/datatables-responsive/js/dataTables.responsive.min.js"></script>
<script src="<?=BASE?>views/plugins/datatables-responsive/js/responsive.bootstrap4.min.js"></script>
<script src="<?=BASE?>views/plugins/datatables-buttons/js/dataTables.buttons.min.js"></script>
<script src="<?=BASE?>views/plugins/datatables-buttons/js/buttons.bootstrap4.min.js"></script>
<script src="<?=BASE?>views/plugins/jszip/jszip.min.js"></script>
<script src="<?=BASE?>views/plugins/pdfmake/pdfmake.min.js"></script>

<script src="<?=BASE?>views/plugins/Toast/js/Toast.min.js"></script>
<script src="<?=BASE?>views/dist/js/scripts/agendarCitas.js"></script>