<!-- Content Header (Page header) -->
<div class="content-header">
    <div class="container-fluid">
        <div class="row mb-2">
            <div class="col-sm-6">
                <h1 class="m-0">Registro de Horarios de Atención</h1>
            </div><!-- /.col -->
            <div class="col-sm-6">
                <ol class="breadcrumb float-sm-right">
                    <li class="breadcrumb-item"><a href="#">Gestión de Horarios</a></li>
                    <li class="breadcrumb-item active">Registrar Horarios de Atención</li>
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
                                <div class="col-6 form-group">
                                    <label>Hora de Entrada</label>
                                    <input type="time" class="form-control" id="hora-entrada"
                                        placeholder="Ingrese la Hora de Entrada">
                                </div>
                                <div class="col-6 form-group">
                                    <label>Hora de Salida</label>
                                    <input type="time" class="form-control" id="hora-salida"
                                        placeholder="Ingrese la Hora de Salida">
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-12 form-group">
                                    <div class="form-group">
                                        <label for="">Fecha</label>
                                        <input id="fecha-doctor" type="date" class="form-control">
                                    </div>
                                </div>

                            </div>
                            <div class="row col-6">
                                <button type="submit" class="btn btn-block bg-gradient-primary btn-md">Guardar</button>
                            </div>
                        </form>

                        <div class="card card-dark mt-4">
                            <div class="card-header">
                                <h3 class="card-title">
                                    <i class="fas fa-user-md"></i>
                                </h3>
                            </div>

                            <div class="card-body">
                                <div>
                                    <div class="form-group">
                                        <label>Doctor</label>
                                        <input type="hidden" id="doctor-id">
                                        <input type="text" class="form-control" readOnly id="local-doctor">
                                    </div>
                                </div>
                            </div>

                        </div>


                    </div>
                    <!-- /.card-body -->
                </div>
            </div>

            <div class="col-md-6">
                <!-- /.card-header -->
                <!-- <div class="card-body clearfix">
                        <div>
                            <div class="form-group">
                                <label for="buscar-cliente">Buscar Doctores</label>
                                <input type="text" class="form-control form-control-border border-width-2"
                                    id="buscar-cliente" placeholder="Cedula, Apellidos, Nombres">
                            </div>
                        </div>
                        <div class="table-doctor" id="box-doctores"> 
                                           
                        </div>

                    </div> -->


                <div class="card card-primary shadow-none">
                    <div class="card-header">
                        <h3 class="card-title">Horas Disponibles</h3>

                        <div class="card-tools">
                            <button type="button" class="btn btn-tool" data-card-widget="collapse">
                                <i class="fas fa-minus"></i>
                            </button>
                        </div>

                    </div>

                    <div class="card-body">
                        <div class="row">
                            <div class="col-12">
                                <div class="row">
                                    <div class="col-8">
                                        <div class="form-group">
                                            <label for="">Seleccione una Hora</label>
                                            <select class="form-control" id="select-horario-atencion">
                                                <!-- <option value="0">Seleccione una Hora</option> -->
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-4">
                                        <button id="btn-agregar-hora" class="btn btn-dark mt-2"
                                            style="margin-top: 30px !important;">
                                            <i class="fas fa-plus-square"></i> Agregar</button>

                                    </div>

                                </div>
                                <div class="row mt-4">
                                    <div class="col-12">
                                        <div class="table-vehiculo">
                                            <div class="card card-dark">
                                                <div class="card-header">
                                                    <h3 class="card-title">Horas Disponibles del Doctor</h3>
                                                </div>

                                                <div class="card-body table-responsive p-3">
                                                    <table class="table table-hover text-nowrap">
                                                        <thead>
                                                            <tr>
                                                                <th>#</th>
                                                                <th>Hora Entrada</th>
                                                                <th>Hora Salida</th>
                                                                <th>Fecha</th>
                                                                <th>Acción</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody id="body-listado-doctor-hora">
                                                            <!-- <tr>
                                                                <td>1</td>
                                                                <td>08:00</td>
                                                                <td>12:00</td>
                                                                <td><span class="tag tag-warning">21/12/2021</span>
                                                                </td>
                                                                <td>
                                                                    <div>
                                                                        <button class="btn btn-danger"
                                                                            onclick="eliminar_vehiculo(1,1008)">
                                                                            <i class="fas fa-trash"></i>
                                                                        </button>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>1</td>
                                                                <td>08:00</td>
                                                                <td>12:00</td>
                                                                <td><span class="tag tag-warning">21/12/2021</span>
                                                                </td>
                                                                <td>
                                                                    <div>
                                                                        <button class="btn btn-danger"
                                                                            onclick="eliminar_vehiculo(1,1008)">
                                                                            <i class="fas fa-trash"></i>
                                                                        </button>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>1</td>
                                                                <td>08:00</td>
                                                                <td>12:00</td>
                                                                <td><span class="tag tag-warning">21/12/2021</span>
                                                                </td>
                                                                <td>
                                                                    <div>
                                                                        <button class="btn btn-danger"
                                                                            onclick="eliminar_vehiculo(1,1008)">
                                                                            <i class="fas fa-trash"></i>
                                                                        </button>
                                                                    </div>
                                                                </td>
                                                            </tr> -->
                                                        </tbody>
                                                    </table>
                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</div>

<!-- MODAL LISTAR HORAS DEL DOCTOR -->
<div class="col-12">
    <div class="card card-dark">
        <div class="card-header">
            <h3 class="card-title">Listar Horas Disponibles</h3>

            <div class="card-tools">
                <button type="button" class="btn btn-tool" data-card-widget="collapse"><i class="fas fa-minus"></i>
                </button>
            </div>
            <!-- /.card-tools -->
        </div>
        <!--form-nuevo-descripcion /.card-header -->
        <div class="card-body">
            <div class="div" style="overflow: auto;">
                <table id="tabla-listar-horasD" class="table table-bordered table-striped">
                    <thead>
                        <tr>
                            <th style="width: 10px">#</th>
                            <th>Hora de Entrada</th>
                            <th>Hora de Salida</th>
                            <th>Fecha</th>
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


<!-- MODAL EDITAR HORAS DEL DOCTOR -->
<!-- MODAL EDITAR -->
<div class="modal fade" id="modal-editar-horasdoctor">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header bg-dark">
                <h4 class="modal-title">Editar Horas Doctor</h4>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <div class="contanier-fluid">
                    <form id="actualizar-producto" method="POST">

                        <div class="row ">
                            <div class="col-12 col-md-4 form-group">
                                <label for="">Hora de Entrada</label>
                                <input id="e-hora-entrada" type="time" name="horaEntrada" class="form-control">
                            </div>
                            <div class="col-12 col-md-4 form-group">
                                <input type="hidden" id="e-horaD-id">
                                <label for="">Hora de Salida</label>
                                <input id="e-hora-salida" type="time" name="horaSalida" class="form-control">
                            </div>
                            <div class="col-12 col-md-4 form-group">
                                <label for="">Fecha</label>
                                <input id="e-h-fecha" type="date" name="efecha" class="form-control">
                            </div>
                        </div>
                    </form>
                    <div class="row">
                        <div class="col-12 form-group text-right">
                            <button class="btn btn-primary" id="btn-update-hora-doctor" type="button">
                                <i class="fas fa-save mr-2"></i>Guardar</button>
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
<script src="<?=BASE?>views/dist/js/scripts/gestionhorario.js?ver=1.1.1.5"></script>