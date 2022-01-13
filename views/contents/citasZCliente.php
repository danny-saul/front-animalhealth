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
        <div class="row">
            <div class="col-md-6">
                <div class="card card-outline card-primary">
                    <div class="card-header">
                        <h3 class="card-title">Datos</h3>

                        <div class="card-tools">
                            <button type="button" class="btn btn-tool" data-card-widget="collapse">
                                <i class="fas fa-minus"></i>
                            </button>
                        </div>
                        <!-- /.card-tools -->
                    </div>
                    <!-- /.card-header -->
                    <div class="card-body">
                        <form id="form-horario-doctor" method="POST">
                            <div class="row">
                                <div class="col-12 text-right">
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

                        </form>

                        <div class="row">
                            <div class="col-12" id="fecha-doctor">
                                <!-- <span class="ml-3"> Fecha: <b id="fecha-intervalo"> </b></span> -->
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

                        <div class="card card-dark mt-4">
                            <div class="card-header">
                                <h3 class="card-title">
                                    <i class="fas fa-user-md"></i>
                                </h3>
                            </div>

                            <div class="card-body">
                                <div>
                                    <div class="form-group">
                                        <label>Cliente</label>
                                        <input type="hidden" id="cliente-id">
                                        <input type="text" class="form-control" readOnly id="local-cliente">
                                    </div>
                                </div>
                            </div>

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

<script src="<?=BASE?>views/plugins/Toast/js/Toast.min.js"></script>
<script src="<?=BASE?>views/dist/js/scripts/citasZZCliente.js"></script>