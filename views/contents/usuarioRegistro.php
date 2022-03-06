<style>
.box-img-usuario {
    width: 50px;
    height: 50px;
    overflow: hidden;
}

.box-img-usuario>img {
    width: 100% !important;
    height: 100% !important;
}

.pt-25 {
    padding-top: 30px !important;
}
</style>
<!-- Content Header (Page header) -->
<div class="content-header">
    <div class="container-fluid">
        <div class="row mb-2">
            <div class="col-sm-6">
                <h1 class="m-0">Registro de Usuario</h1>
            </div><!-- /.col -->
            <div class="col-sm-6">
                <ol class="breadcrumb float-sm-right">
                    <li class="breadcrumb-item"><a href="#">Usuarios</a></li>
                    <li class="breadcrumb-item active">Registro de Usuario</li>
                </ol>
            </div><!-- /.col -->
        </div><!-- /.row -->
    </div><!-- /.container-fluid -->
</div>
<!-- /.content-header -->

<!-- Main content -->
<div class="content">
    <div class="container-fluid">
        <button class="btn btn-secondary btn-lg" data-toggle="modal" data-target="#modal-registro-usuario"
            data-backdrop="static" data-keyboard="false"><i class="fa fa-plus mr-2"></i>Agregar Usuario</button>
        <div class="row mt-3">
            <div class="col-12">
                <div class="card card-dark">
                    <div class="card-header">
                        <h3 class="card-title">Listar Usuarios</h3>

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
                            <table id="tabla-usuario" class="table table-bordered table-striped">
                                <thead>
                                    <tr>
                                        <th style="width: 10px">#</th>
                                        <th>Imagen</th>
                                        <th>Cédula</th>
                                        <th>Nombres</th>
                                        <th>Apellidos</th>
                                        <th>Usuario</th>
                                        <th>Rol</th>
                                        <th>Teléfono</th>
                                        <th>Correo</th>
                                        <th>Dirección</th>
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
<div class="modal fade" id="modal-registro-usuario">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header bg-dark">
                <h4 class="modal-title">Registrar Usuario</h4>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <div class="contanier-fluid">
                    <form id="nuevo-usuario" method="POST">

                        <div class="row ">
                            <div class="col-12 col-md-4 form-group">
                                <label for="">Cédula</label>
                                <input id="new-cedula" type="text" name="cedula" class="form-control" required
                                    maxlength="10" minlength="10">

                            </div>
                            <div class="col-12 col-md-4 form-group">
                                <label for="">Nombre</label>
                                <input id="new-nombre" type="text" name="nombre" class="form-control" maxlength="200"
                                    minlength="3">
                            </div>
                            <div class="col-12 col-md-4 form-group">
                                <label for="">Apellido</label>
                                <input id="new-apellido" type="text" name="apellido" class="form-control"
                                    maxlength="200" minlength="3">
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12 col-md-4 form-group">
                                <label for="">Telefono</label>
                                <input id="new-telefono" type="text" name="telefono" class="form-control" maxlength="10"
                                    minlength="10">
                            </div>
                            <div class="col-12 col-md-4 form-group">
                                <label for="">Direccion</label>
                                <input id="new-direccion" type="text" name="direccion" class="form-control">
                            </div>
                            <div class="col-12 col-md-4 form-group">
                                <label for="">Sexo</label>
                                <select name="" id="new-sexo" class="form-control">
                                </select>
                            </div>
                        </div>


                        <div class="row">

                            <div class="col-12 col-md-4 form-group">
                                <label for="new-rol">Rol</label>
                                <select id="new-rol" class="form-control">
                                </select>
                            </div>
                            <div class="col-12 col-md-4 form-group">
                                <label for="">Usuario</label>
                                <input id="new-usuario" type="text" name="usuario" class="form-control">
                            </div>
                            <div class="col-12 col-md-4 form-group">
                                <label for="">Correo</label>
                                <input id="new-correo" type="email" name="correo" class="form-control">
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-12 col-md-6 form-group">
                                <label for="">Contraseña</label>
                                <input id="new-password" type="password" name="password" class="form-control ">
                            </div>
                            <div class="col-12 col-md-6 form-group">
                                <label for="">Confirmar Contraseña</label>
                                <input id="new-password2" type="password" name="password2" class="form-control">
                            </div>

                        </div>

                        <div class="row">
                            <div class="col-12 col-md-6 form-group">
                                <label for="">Imagen</label>
                                <input class="form-control" type="file" name="img" id="new-img-usuario"
                                    accept="image/*">
                            </div>
                         <!--    <div class="col-12 col-md-6 form-group d-none" id="horario-doctor">
                                <label for="">Horarios</label>
                                <select id="new-horario" class="form-control"></select>
                            </div> -->
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


<!-- MODAL EDITAR -->
<div class="modal fade" id="modal-editar-usuario">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header bg-dark">
                <h4 class="modal-title">Editar Usuario</h4>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <div class="contanier-fluid">
                    <form id="actualizar-usuario" method="POST">

                        <div class="row ">
                            <div class="col-12 col-md-4 form-group">
                                <input type="hidden" id="e-usuario-id">
                                <input type="hidden" id="e-persona-id">
                                <input type="hidden" id="e-doctor-id">
                                <label for="">Cédula</label>
                                <input id="e-cedula" readOnly type="text" name="cedula" class="form-control" required
                                    maxlength="10" minlength="10">
                            </div>
                            <div class="col-12 col-md-4 form-group">
                                <label for="">Nombre</label>
                                <input id="e-nombre" type="text" name="nombre" class="form-control" maxlength="200"
                                    minlength="3">
                            </div>
                            <div class="col-12 col-md-4 form-group">
                                <label for="">Apellido</label>
                                <input id="e-apellido" type="text" name="apellido" class="form-control" maxlength="200"
                                    minlength="3">
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12 col-md-4 form-group">
                                <label for="">Telefono</label>
                                <input id="e-telefono" type="text" name="telefono" class="form-control" maxlength="10"
                                    minlength="10">
                            </div>
                            <div class="col-12 col-md-4 form-group">
                                <label for="">Direccion</label>
                                <input id="e-direccion" type="text" name="direccion" class="form-control">
                            </div>
                            <div class="col-12 col-md-4 form-group">
                                <label for="">Sexo</label>
                                <select name="" id="e-sexo" class="form-control">
                                </select>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12 col-md-4 form-group">
                                <input type="hidden" id="id-rol">
                                <label for="">Rol</label>
                                <input id="e-rol" readOnly class="form-control">
                            </div>
                            <div class="col-12 col-md-4 form-group">
                                <label for="">Usuario</label>
                                <input id="e-usuario" type="text" name="usuario" class="form-control">
                            </div>
                            <div class="col-12 col-md-4 form-group">
                                <label for="">Correo</label>
                                <input id="e-correo" type="email" name="correo" class="form-control">
                            </div>
                        </div>


                        <div class="row d-none" id="e-horario-doctor">
                            <div class="col-12 col-md-6 col-sm-6 form-group">
                                <input type="hidden" id="e-doctor-horario">
                                <label for="">Horarios</label>
                                <select id="e-horario" class="form-control"></select>
                            </div>
                        </div>

                    </form>
                    <div class="row">
                        <div class="col-12 form-group text-right">
                            <button class="btn btn-primary" id="btn-update" type="button">
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
<script src="<?=BASE?>views/dist/js/scripts/usuarioRegistro.js?ver=1.1.1.2"></script>