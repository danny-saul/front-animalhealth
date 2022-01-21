<!-- Content Header (Page header) -->
<div class="content-header">
    <div class="container-fluid">
        <div class="row mb-2">
            <div class="col-sm-6">
                <h1 class="m-0">Configuraciones</h1>
            </div><!-- /.col -->
            <div class="col-sm-6">
                <ol class="breadcrumb float-sm-right">
                    <li class="breadcrumb-item"><a href="#">Inicio</a></li>
                    <li class="breadcrumb-item active">Configuraciones</li>
                </ol>
            </div><!-- /.col -->
        </div><!-- /.row -->
    </div><!-- /.container-fluid -->
</div>
<!-- /.content-header -->

<!-- Main content -->
<div class="content">
    <div class="container-fluid">
        <div class="row mt-4">
            <div class="col-12">

                <div class="card card-primary">
                    <div class="card-header">
                        <h3 class="card-title">Configuraciones Generales del Sistema</h3>

                        <div class="card-tools">
                            <button type="button" class="btn btn-tool" data-card-widget="collapse"><i
                                    class="fas fa-minus"></i>
                            </button>
                        </div>
                        <!-- /.card-tools -->
                    </div>
                    <!-- /.card-header -->
                    <div class="card-body" style="display: block;">
                        <form id="configuracion-general" method="POST">
                            <input type="hidden" id="configuracion-id">
                            <div class="row">
                                <div class="col-12 col-md-6 form-group">
                                    <label for="">Iva </label>
                                    <input id="new-configuracion-iva" type="text" class="form-control" maxlength="2"
                                        minlength="2">
                                </div>
                                <div class="col-12 col-md-6 form-group">
                                    <label for="">Porcentaje de Ganancia %</label>
                                    <input id="new-configuracion-ganacia" type="text" class="form-control">
                                </div>
                            </div>
                        </form>
                        <div class="row text-right">
                            <div class="col-12">
                                <button class="btn btn-primary" id="btn-update-configuracion"><i
                                        class="fas fa-save mr-2"></i>Guardar</button>
                            </div>
                        </div>
                    </div>
                    <!-- /.card-body -->
                </div>
                <!-- /.card -->

            </div>

        </div>
        <!-- /.row -->
    </div><!-- /.container-fluid -->
</div>
<!-- /.content -->
</div>
<!-- /.content-wrapper -->


<script src="<?=BASE?>views/plugins/Toast/js/Toast.min.js"></script>
<script src="<?=BASE?>views/dist/js/scripts/configuracionesgenerales.js"></script>