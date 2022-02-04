<!-- Content Header (Page header) -->
<div class="content-header">
    <div class="container-fluid">
        <div class="row mb-2">
            <div class="col-sm-6">
                <h1 class="m-0">Inventarios</h1>
            </div><!-- /.col -->
            <div class="col-sm-6">
                <ol class="breadcrumb float-sm-right">
                    <li class="breadcrumb-item"><a href="#">Inicio</a></li>
                    <li class="breadcrumb-item active">Ver Inventarios</li>
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
                <div class="card card-danger shadow">

                    <div class="card-body">
                        <div class="row mb-3 d-flex justify-content-center">
                            <div class="col-6 col-md-4 col-lg-3 form-group">
                                <label for="">Categorias</label>
                                <select id="categoria-inventario" class="form-control">
                                </select>
                            </div>
                            <div class="col-6 col-md-4 col-lg-3 form-group">
                                <label for="">Producto </label>
                                <select id="producto-inventario" class="form-control">
                                </select>
                            </div>
                            <div class="col-6 col-md-4 col-lg-3 form-group">
                                <button class="btn btn-primary btn-sm " id="buscar-datos-inventario"
                                    style="margin-top: 35px;">
                                    <i class=" fa fa-search  "></i> </button>
                                <button class="btn btn-primary btn-sm " id="btn-imprimir" style="margin-top: 35px;">
                                    <i class="far fa-file-pdf"></i> Imprimir</button>
                            </div>
                        </div>

                        <div id="data-inventario" class="row bg-white d-none ">
                            <div class="col-12 mt-2">
                                <div class="row">
                                    <div class="col-6 col-md-8 col-lg-9"
                                        style="padding-left: 125px;  margin-top: 65px;">
                                        <h3><b>ANIMALHEALTH</b></h3>
                                        <h6>Inventarios de Productos</h6>

                                    </div>
                                    <div class="col-6-col-md-4 col-lg-3">
                                        <img src="<?=BASE?>views/dist/css/logincss/images/logo22.gif" alt="IMG"
                                            width="260px" style="margin-left: -100px;margin-top: -30px;">
                                    </div>
                                </div>

                                <div class="row mt-1">
                                    <div class="col-12 text-center">
                                        <div class="mt-3">
                                            <div class="card">
                                                <div class="card-body table-responsive p-0">
                                                    <table id="tabla-inventario"
                                                        class="table table-bordered table-hover table-sm text-center  ">
                                                        <thead>
                                                            <tr class="table-primary">
                                                                <th rowspan="2" class="text-center">N°</th>
                                                                <th rowspan="2" class="text-center">Fecha</th>
                                                                <th rowspan="2" class="text-center">Movimiento</th>
                                                                <th colspan="1" class="text-center">Entradas</th>
                                                                <th colspan="1" class="text-center">Salidas</th>
                                                                <th colspan="1" class="text-center">Disponibles</th>
                                                            </tr>
                                                            <tr class="table-primary">
                                                                <th class="text-center">Cantidad de Entrada</th>
                                                                <th class="text-center">Cantidad de Salida</th>
                                                                <th class="text-center">Cantidad Disponibles</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>

                                                            </tfoot>
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
        <!-- /.row -->
    </div><!-- /.container-fluid -->
</div>
<!-- /.content -->
</div>
<!-- /.content-wrapper -->



<script src="<?=BASE?>views/plugins/datatables/jquery.dataTables.min.js"></script>
<script src="<?=BASE?>views/plugins/datatables-bs4/js/dataTables.bootstrap4.min.js"></script>
<script src="<?=BASE?>views/plugins/datatables-responsive/js/dataTables.responsive.min.js"></script>
<script src="<?=BASE?>views/plugins/datatables-responsive/js/responsive.bootstrap4.min.js"></script>
<script src="<?=BASE?>views/plugins/datatables-buttons/js/dataTables.buttons.min.js"></script>
<script src="<?=BASE?>views/plugins/datatables-buttons/js/buttons.bootstrap4.min.js"></script>
<script src="<?=BASE?>views/plugins/jszip/jszip.min.js"></script>
<script src="<?=BASE?>views/plugins/pdfmake/pdfmake.min.js"></script>
<script src="<?=BASE?>views/plugins/moment/moment.min.js"></script>
<script src="<?=BASE?>views/plugins/html2pdf/html2pdf.bundle.js"></script>

<script src="<?=BASE?>views/plugins/Toast/js/Toast.min.js"></script>
<script src="<?=BASE?>views/dist/js/scripts/inventarios.js"></script>