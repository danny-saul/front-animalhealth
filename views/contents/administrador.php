<!-- Content Header (Page header) -->
<div class="content-header">
    <div class="container-fluid">
        <div class="row mb-2">
            <div class="col-sm-6">
                <h1 class="m-0">Dashboard Administrador</h1>
            </div><!-- /.col -->
            <div class="col-sm-6">
                <ol class="breadcrumb float-sm-right">
                    <li class="breadcrumb-item"><a href="#">Inicio</a></li>
                    <li class="breadcrumb-item active">Administrador</li>
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
            <div class="col-lg-3 col-6">
                <!-- small box -->
                <div class="small-box bg-info">
                    <div class="inner">
                        <h3 id="cantidad-usuarios" class="text-dark">0</h3>

                        <p id="nombre-usuario" class="text-white"></p>
                    </div>
                    <div class="icon">
                        <i class="fas fa-users"></i>
                    </div>
                    <a href="<?=BASE?>usuario/registro" class="small-box-footer">Ver Mas <i
                            class="fas fa-arrow-circle-right"></i></a>
                </div>
            </div>
            <!-- ./col -->
            <div class="col-lg-3 col-6">
                <!-- small box -->
                <div class="small-box bg-success">
                    <div class="inner">
                        <h3 id="cantidad-clientes" class="text-dark">0</h3>

                        <p id="nombre-clientes" class="text-white"></p>
                    </div>
                    <div class="icon">
                        <i class="fas fa-user-tie"></i>
                    </div>
                    <a href="#" class="small-box-footer">Ver Mas <i class="fas fa-arrow-circle-right"></i></a>
                </div>
            </div>
            <!-- ./col -->
            <div class="col-lg-3 col-6">
                <!-- small box -->
                <div class="small-box bg-warning">
                    <div class="inner">
                        <h3 id="total-compras">0</h3>

                        <p id="mes-compras" class="text-white"> </p>
                    </div>
                    <div class="icon">
                        <i class="fas fa-cart-arrow-down"></i>
                    </div>
                    <a href="#" class="small-box-footer">Ver Mas <i class="fas fa-arrow-circle-right"></i></a>
                </div>
            </div>
            <!-- ./col -->
            <div class="col-lg-3 col-6">
                <!-- small box -->
                <div class="small-box bg-danger">
                    <div class="inner">
                        <h3 id="total-ventas" class="text-dark">0</h3>

                        <p id="mes-ventas" class="text-white"></p>
                    </div>
                    <div class="icon">
                        <i class="fas fa-comments-dollar"></i>
                    </div>
                    <a href="#" class="small-box-footer">Ver Mas <i class="fas fa-arrow-circle-right"></i></a>
                </div>
            </div>
            <!-- ./col -->





        </div>

        <div class="row">
            <div class="col-12 col-md-6">
                <h5 class="card-title text-center"><b>Cantidad de Productos Por Categoría</b></h5>
                <canvas id="cantidad_productos"
                    style="min-height: 250px; height: 250px; max-height: 300px; max-width: 100%; margin-top: 22px"></canvas>
            </div>

            <div class="col-12 col-md-6">
                <h5 class="card-title text-center"><b>Porcentaje de Productos Por Categoría</b></h5>
                <canvas id="porcentaje_productos"
                    style="min-height: 250px; height: 250px; max-height: 300px; max-width: 100%; margin-top: 22px"></canvas>
            </div>
        </div>

        <div class="row">
            <div class="col-12 col-md-6">
                <div class="card card-primary shadow">
                    <div class="card-header">
                        <h3 class="card-title">Reporte de Compras y Ventas Anual</h3>

                        <div class="card-tools">
                            <button type="button" class="btn btn-tool" data-card-widget="collapse">
                                <i class="fas fa-minus"></i>
                            </button>
                        </div>
                    </div>
                    <div class="card-body">
                        <div id="compras-reporte"></div>
                    </div>
                    <!-- /.card-body -->
                </div>


            </div>
            <div class="col-12 col-md-6">
                <div class="card card-primary shadow">
                    <div class="card-header">
                    <h3 class="card-title">Stock de Productos por Categoría</h3>

                        <div class="card-tools">
                            <button type="button" class="btn btn-tool" data-card-widget="collapse">
                                <i class="fas fa-minus"></i>
                            </button>
                        </div>
                    </div>
                    <div class="card-body">
                        <div id="stock-productos"></div>
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

<script src="<?=BASE?>views/plugins/chart.js/Chart.min.js"></script>
<script src="<?=BASE?>views/plugins/moment/moment.min.js"></script>
<script src="<?=BASE?>views/plugins/html2pdf/html2pdf.bundle.js"></script>

<script src="<?=BASE?>views/plugins/morris/raphael-min.js"></script>
<script src="<?=BASE?>views/plugins/morris/morris.min.js"></script>


<script src="<?=BASE?>views/plugins/Toast/js/Toast.min.js"></script>
<script src="<?=BASE?>views/dist/js/scripts/dashboardAdministrador.js"></script>