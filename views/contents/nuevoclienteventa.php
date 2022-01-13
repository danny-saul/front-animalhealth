<!-- Content Header (Page header) -->
<div class="content-header">
    <div class="container-fluid">
        <div class="row mb-2">
            <div class="col-sm-6">
                <h1 class="m-0">Cliente</h1>
            </div><!-- /.col -->
            <div class="col-sm-6">
                <ol class="breadcrumb float-sm-right">
                    <li class="breadcrumb-item"><a href="#">Inicio</a></li>
                    <li class="breadcrumb-item active">Nuevo Cliente</li>
                </ol>
            </div><!-- /.col -->
        </div><!-- /.row -->
    </div><!-- /.container-fluid -->
</div>
<!-- /.content-header -->

<!-- Main content -->
<div class="content">
    <div class="container-fluid">
        <div class="container-fluid">
            <button class="btn btn-secondary btn-lg" data-toggle="modal" data-target="#modal-registro-cliente"
                data-backdrop="static" data-keyboard="false"><i class="fa fa-plus mr-2"></i>Agregar Cliente</button>
            <div class="row mt-3">
                <div class="col-12">
                    <div class="card card-dark">
                        <div class="card-header">
                            <h3 class="card-title">Listar Clientes</h3>

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
                                <table id="tabla-cliente" class="table table-bordered table-striped">
                                    <thead>
                                        <tr>
                                            <th style="width: 10px">#</th>
                                            <th>Cédula</th>
                                            <th>Nombres</th>
                                            <th>Apellidos</th>
                                            <th>Teléfono</th>
                                            <th>Dirección</th>
                                            <th>Sexo</th>
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
        <!-- /.row -->
    </div><!-- /.container-fluid -->
</div>
<!-- /.content -->
</div>
<!-- /.content-wrapper -->



<!-- Modales -->
<div class="modal fade" id="modal-registro-cliente">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header bg-dark">
                <h4 class="modal-title">Registrar Cliente</h4>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <div class="contanier-fluid">
                    <form id="form-crear-cuenta-cliente" method="post">
                        <div class="row">
                            <div class="col-12 col-md-4 form-group">
                                <label for="">Cédula</label>
                                <input id="ccc-cedula" class="form-control" type="text" name="cedula" maxlength="10"
                                    minlength="10" required>

                            </div>
                            <div class="col-12 col-md-4 form-group">
                                <label for="">Nombre</label>
                                <input id="ccc-nombre" class="form-control" type="text" name="nombre" maxlength="200"
                                    minlength="3">
                            </div>
                            <div class="col-12 col-md-4 form-group">
                                <label for="">Apellido</label>
                                <input id="ccc-apellido" class="form-control" type="text" name="apellido"
                                    maxlength="200" minlength="3">
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-12 col-md-4 form-group">
                                <label for="">Telefono</label>
                                <input id="ccc-telefono" class="form-control" type="text" name="telefono" maxlength="10"
                                    minlength="10">
                            </div>
                            <div class="col-12 col-md-4 form-group">
                                <label for="">Direccion</label>
                                <input id="ccc-direccion" class="form-control" type="text" name="direccion">
                            </div>
                            <div class="col-12 col-md-4 form-group">
                                <label for="">Sexo</label>
                                <select name="" id="ccc-sexo" class="form-control"></select>
                            </div>
                        </div>

                    </form>

                    <form id="form-crear-cuenta-cliente2" method="post">
                        <div class="row">
                            <div class="col-12 col-md-4 form-group">
                                <label for="">Cargo</label>
                                <input type="hidden" id="ccc-rol-id">
                                <input id="ccc-cargo" readonly class="form-control" type="text" name="cargo">

                            </div>
                            <div class="col-12 col-md-4 form-group">
                                <label for="">Nombre de Usuario</label>
                                <input id="ccc-usuario" class="form-control" type="text" name="usuario">

                            </div>
                            <div class="col-12 col-md-4 form-group">
                                <label for="">Correo</label>
                                <input id="ccc-correo" class="form-control" type="email" name="email">
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-12 col-md-6 form-group">
                                <label for="">Contraseña</label>
                                <input id="ccc-clave" class="form-control" type="password" name="password">
                            </div>
                            <div class="col-12 col-md-6 form-group">
                                <label for="">Confirmar Contraseña</label>
                                <input id="ccc-clave2" class="form-control" type="password" name="password2">
                            </div>


                        </div>
                        <div class="col-12 col-md-4 form-group">
                            <button type="submit" class="btn btn-primary mt-4"><i class="fas fa-save mr-2"></i>
                                Guardar
                            </button>
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

<script src="<?=BASE?>views/plugins/datatables/jquery.dataTables.min.js"></script>
<script src="<?=BASE?>views/plugins/datatables-bs4/js/dataTables.bootstrap4.min.js"></script>
<script src="<?=BASE?>views/plugins/datatables-responsive/js/dataTables.responsive.min.js"></script>
<script src="<?=BASE?>views/plugins/datatables-responsive/js/responsive.bootstrap4.min.js"></script>
<script src="<?=BASE?>views/plugins/datatables-buttons/js/dataTables.buttons.min.js"></script>
<script src="<?=BASE?>views/plugins/datatables-buttons/js/buttons.bootstrap4.min.js"></script>
<script src="<?=BASE?>views/plugins/jszip/jszip.min.js"></script>
<script src="<?=BASE?>views/plugins/pdfmake/pdfmake.min.js"></script>

<script src="<?=BASE?>views/plugins/Toast/js/Toast.min.js"></script>
<script src="<?=BASE?>views/dist/js/scripts/clienteventaRegistro.js"></script>