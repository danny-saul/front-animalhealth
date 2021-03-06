<!-- Content Header (Page header) -->
<div class="content-header">
    <div class="container-fluid">
        <div class="row mb-2">
            <div class="col-sm-6">
                <h1 class="m-0">Listado de Doctores</h1>
            </div><!-- /.col -->
            <div class="col-sm-6">
                <ol class="breadcrumb float-sm-right">
                    <li class="breadcrumb-item"><a href="#">Doctores</a></li>
                    <li class="breadcrumb-item active">Listado de Doctores </li>
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
            <div class="col-12">
                <div class="card card-dark">
                    <div class="card-header">
                        <h3 class="card-title">Listado de Doctores</h3>

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
                            <table id="tabla-doctor" class="table table-bordered table-striped">
                                <thead>
                                    <tr>
                                        <th style="width: 10px">#</th>
                                        <th>Cédula</th>
                                        <th>Nombres</th>
                                        <th>Apellidos</th>
                                        <th>Teléfono</th>
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

<!-- Modal de editar -->
<div class="modal fade" id="modal-editar-doctor">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header bg-dark">
                <h4 class="modal-title">Editar Doctor</h4>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <div class="contanier-fluid">
                    <form id="actualizar-doctor" method="POST">

                        <div class="row ">
                            <div class="col-12 col-md-4 form-group">
                                <input type="hidden" id="e-d-persona-id">
                                <input type="hidden" id="e-d-doctor-id">
                                <label for="">Cédula</label>
                                <input id="e-d-cedula" readOnly type="text" name="cedula" class="form-control" required
                                    maxlength="10" minlength="10">
                            </div>
                            <div class="col-12 col-md-4 form-group">
                                <label for="">Nombre</label>
                                <input id="e-d-nombre" type="text" name="nombre" class="form-control" maxlength="200"
                                    minlength="3">
                            </div>
                            <div class="col-12 col-md-4 form-group">
                                <label for="">Apellido</label>
                                <input id="e-d-apellido" type="text" name="apellido" class="form-control" maxlength="200"
                                    minlength="3">
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12 col-md-6 form-group">
                                <label for="">Telefono</label>
                                <input id="e-d-telefono" type="text" name="telefono" class="form-control" maxlength="10"
                                    minlength="10">
                            </div>
                            <div class="col-12 col-md-6 form-group">
                                <label for="">Direccion</label>
                                <input id="e-d-direccion" type="text" name="direccion" class="form-control">
                            </div>
                            
                        </div>
                                          
                    </form>
                    <div class="row">
                            <div class="col-12 form-group text-right" >
                                <button class="btn btn-primary" id="btn-d-update"  type="button">
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
<script src="<?=BASE?>views/dist/js/scripts/listadoDoctores.js?ver=1.1.1"></script>