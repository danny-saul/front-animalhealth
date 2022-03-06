<style>
.highcharts-figure .chart-container {
    width: 250px;
    height: 180px;
    float: left;
}

.highcharts-figure,
.highcharts-data-table table {
    width: 550px;
    margin: 0 auto;
}

.highcharts-data-table table {
    font-family: Verdana, sans-serif;
    border-collapse: collapse;
    border: 1px solid #ebebeb;
    margin: 10px auto;
    text-align: center;
    width: 100%;
    max-width: 500px;
}

.highcharts-data-table caption {
    padding: 1em 0;
    font-size: 1.2em;
    color: #555;
}

.highcharts-data-table th {
    font-weight: 600;
    padding: 0.5em;
}

.highcharts-data-table td,
.highcharts-data-table th,
.highcharts-data-table caption {
    padding: 0.5em;
}

.highcharts-data-table thead tr,
.highcharts-data-table tr:nth-child(even) {
    background: #f8f8f8;
}

.highcharts-data-table tr:hover {
    background: #f1f7ff;
}

@media (max-width: 600px) {

    .highcharts-figure,
    .highcharts-data-table table {
        width: 100%;
    }

    .highcharts-figure .chart-container {
        width: 300px;
        float: none;
        margin: 0 auto;
    }
}
</style>


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

            <div class="col-lg-3 col-6">
                <!-- small box -->
                <div class="small-box bg-warning">
                    <div class="inner">
                        <h3 id="conta_producto" style="color: white;">0</h3>

                        <p id="nombre-productos" style="color: white;"> </p>
                    </div>
                    <div class="icon">
                        <i class="fas fa-box-open"></i>
                    </div>
                    <a href="<?=BASE?>producto/cantidad" class="small-box-footer">Ver Más <i
                            class="fas fa-arrow-circle-right"></i></a>
                </div>
            </div>

            <div class="col-lg-3 col-6">
                <!-- small box -->
                <div class="small-box bg-info">
                    <div class="inner">
                        <h3 id="conta_proveedor">0</h3>

                        <p id="nombre-proveedor" style="color: white;"> </p>
                    </div>
                    <div class="icon">
                        <i class="fas fa-truck-moving"></i>
                    </div>
                    <a href="<?=BASE?>proveedor/listar" class="small-box-footer">Ver Más <i
                            class="fas fa-arrow-circle-right"></i></a>
                </div>
            </div>

            <div class="col-lg-3 col-6">
                <!-- small box -->
                <div class="small-box bg-success">
                    <div class="inner">
                        <h3 id="conta_categoria"><sup style="font-size: 20px"></sup>0</h3>

                        <p id="nombre-categoria" style="color: white;"> </p>
                    </div>
                    <div class="icon">
                        <i class="fas fa-tags"></i>
                    </div>
                    <a href="<?=BASE?>producto/categoria" class="small-box-footer">Ver Más <i
                            class="fas fa-arrow-circle-right"></i></a>
                </div>
            </div>

            <div class="col-lg-3 col-6">
                <!-- small box -->
                <div class="small-box bg-primary">
                    <div class="inner">
                        <h3 id="conta_mascota">0</h3>

                        <p id="nombre-mascota" style="color: white;"> </p>
                    </div>
                    <div class="icon">
                        <i class="fas fa-paw"></i>
                    </div>
                    <a href="<?=BASE?>cliente/listarmascota" class="small-box-footer">Ver Más <i
                            class="fas fa-arrow-circle-right"></i></a>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-12">
                <div class="card">
                    <!-- /.card-header -->
                    <div class="card-body">
                        <div class="row">
                            <div class="col-12 col-md-6">
                                <figure class="highcharts-figure">
                                    <div id="container-speed" class="chart-container"></div>
                                    <div id="container-por1" class="chart-container"></div>

                                </figure>
                            </div>
                            <div class="col-12 col-md-6">
                                <figure class="highcharts-figure">
                                    <div id="container-rpm" class="chart-container"></div>
                                    <div id="container-por2" class="chart-container"></div>
                                </figure>
                            </div>
                        </div>
                        <!-- /.row -->
                    </div>
                    <!-- /.card-body -->
                </div>
                <!-- /.card -->
            </div>
            <!-- /.col -->
        </div>


        <div class="row">
            <div class="col-12">
                <div class="card">
                  
                    <div class="card-body">
                        <div class="row">
                            <div class="col-12 col-md-6">
                                <figure class="highcharts-figure">
                                    <div id="container-speed-2" class="chart-container"></div>
                                    <div id="container-por-2" class="chart-container"></div>

                                </figure>
                            </div>
                            <div class="col-12 col-md-6">
                                <figure class="highcharts-figure">
                                    <div id="container-rpm-2" class="chart-container"></div>
                                    <div id="container-por-3" class="chart-container"></div>
                                </figure>
                            </div>
                        </div>
               
                    </div>
                 
                </div>
           
            </div>
          
        </div>

        <div class="row">
            <div class="col-12">
                <div class="card card-danger shadow">
                    <div class="card-body">
                        <div class="row mb-3">
                            <div class="col-2 col-md-3 form-group ">
                                <label for="">Fecha Inicio</label>
                                <input id="fecha-inicio-kpi" type="date" class="form-control">
                            </div>
                            <div class="col-2 col-md-3 form-group ">
                                <label for="">Fecha fin</label>
                                <input id="fecha-fin-kpi" type="date" class="form-control">
                            </div>
                            <div class="col-2 col-md-2 form-group ">
                                <label for="">Año</label>
                                <select id="year-select" class="form-control">
                                    <option value="0">Seleccione un Año</option>
                                    <option value="2021">2021</option>
                                    <option value="2022">2022</option>
                                </select>
                            </div>
                            <div class="col-2 col-md-2 form-group ">
                                <label for="">Presupuesto</label>
                                <input id="presupuesto-kpi" type="text" class="form-control">
                            </div>
                            <div class="col-1 col-md-2 form-group">
                                <button class="btn btn-dark btn-sm " id="btn-consulta" style="margin-top: 35px;">
                                    <i class="fa fa-search"></i></button>
                            </div>
                        </div>

                        <div id="tabla-reporte-kpiventas" class="row bg-white">
                            <div class="col-8 mt-2">
                                <div class="col-12 col-md-8">
                                    <div id="canvas-kpi-ventas" class="w-10 d-flex justify-content-center">

                                    </div>
                                </div>
                            </div>
                            <div id="data-pre" class="col-4 d-none">
                                <div class="card card-outline-primary">
                                    <div class="card-body">
                                        <h3>Ejecucion Presupuestal: </h3>
                                        <h2><b id="eje-pre"></b></h2>
                                        <h3>Formula: </h3>
                                        <h2><b id="formula-presupuestal"></b></h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-12">
                <div class="card card-dark shadow">
                    <div class="card-header">
                        <h5 class="card-title text-center"><b>Regresion Lineal</b></h5>
                    </div>
                    <div class="card-body">
                        <div class="row mb-3">
                            <div class="col-6 col-md-4 col-lg-3">
                                <label for="">Año</label>
                                <select class="form-control" name="" id="periodo-proyeccion">
                                    <option value="0">Seleccione un Año</option>
                                    <option value="2022">2022</option>
                                </select>
                            </div>
                            <div class="col-6 col-md-4 col-lg-3" style="margin-top: 32px;">
                                <button class="btn btn-outline-dark mx-1px text-95" id="consultar">
                                    <i class="mr-1 fa fa-play text-white-m1 text-120 w-2">Consultar</i>
                                </button>
                            </div>
                            <div id="num-dias" class="col-6 col-md-4 col-lg-2 ">
                                <label for="">Ingrese el número de días</label>
                                <input type="text" class="form-control numeros-vd" id="proy-dias" maxlength="3">
                            </div>
                            <div class="col-6 col-md-4 col-lg-3" style="margin-top: 32px;">
                                <button class="btn btn-outline-dark mx-1px text-95" id="consultar-pro">
                                    <i class="mr-1 fa fa-play text-white-m1 text-120 w-2">Proyectar</i>
                                </button>
                            </div>
                        </div>
                        <div class="row" id="tabla-proy-venta">
                            <div class="col-12">
                                <div class="card card-primary card-outline shadow">
                                    <div class="card-header">
                                        <h5 class="card-title text-center"><b>Tabla de Datos</b></h5>
                                    </div>
                                    <div class="card-body table-responsive p-0">
                                        <table class="table table-hover text-nowrap">
                                            <thead>
                                                <tr>
                                                    <th>#</th>
                                                    <th>Total</th>
                                                    <th>Fecha</th>
                                                    <th>Cantidad</th>
                                                </tr>
                                            </thead>
                                            <tbody id="body-proy-venta">

                                            </tbody>
                                        </table>
                                        <input type="hidden" id="const-a">
                                        <input type="hidden" id="const-b">

                                    </div>

                                </div>
                            </div>

                            <div class="col-12">
                                <div class="row">
                                    <div class="col-12 col-md-6">
                                        <div class="card card-danger shadow">
                                            <div class="card-header">
                                                <h3 class="card-title">Diagrama de Dispersión</h3>

                                                <div class="card-tools">
                                                    <button type="button" class="btn btn-tool"
                                                        data-card-widget="collapse">
                                                        <i class="fas fa-minus"></i>
                                                    </button>
                                                </div>
                                            </div>
                                            <div class="card-body" style="min-height: 250px; background: white;">
                                                <div class="w-100" id="box-canva1">

                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                    <div class="col-12 col-md-6">
                                        <div class="card card-danger shadow">
                                            <div class="card-header">
                                                <h3 class="card-title">Proyección Lineal</h3>

                                                <div class="card-tools">
                                                    <button type="button" class="btn btn-tool"
                                                        data-card-widget="collapse">
                                                        <i class="fas fa-minus"></i>
                                                    </button>
                                                </div>
                                            </div>
                                            <div class="card-body" style="min-height: 250px; background: white;">
                                                <div class="w-100" id="box-canva2">

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

        <div class="row">
            <div class="col-12 col-md-6">
                <div class="card card-primary shadow">
                    <div class="card-header">
                        <h5 class="card-title text-center"><b>Cantidad de Productos Por Categoría</b></h5>
                    </div>
                    <div class="card-body">
                        <canvas id="cantidad_productos"
                            style="min-height: 250px; height: 250px; max-height: 300px; max-width: 100%; margin-top: 22px"></canvas>
                    </div>
                </div>
            </div>

            <div class="col-12 col-md-6">
                <div class="card card-primary shadow">
                    <div class="card-header">
                        <h5 class="card-title text-center"><b>Porcentaje de Productos Por Categoría</b></h5>
                    </div>
                    <div class="card-body">
                        <canvas id="porcentaje_productos"
                            style="min-height: 250px; height: 250px; max-height: 300px; max-width: 100%; margin-top: 22px"></canvas>
                    </div>
                </div>
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

                </div>
            </div>
        </div>
    </div>
    </div>
</div>


<script src="<?=BASE?>views/plugins/chart.js/Chart.min.js"></script>
<script src="<?=BASE?>views/plugins/moment/moment.min.js"></script>
<script src="<?=BASE?>views/plugins/html2pdf/html2pdf.bundle.js"></script>

<script src="<?=BASE?>views/plugins/morris/raphael-min.js"></script>
<script src="<?=BASE?>views/plugins/morris/morris.min.js"></script>


<script src="https://code.highcharts.com/highcharts.js"></script>
<script src="https://code.highcharts.com/highcharts-more.js"></script>
<script src="https://code.highcharts.com/modules/solid-gauge.js"></script>
<script src="https://code.highcharts.com/modules/exporting.js"></script>
<script src="https://code.highcharts.com/modules/export-data.js"></script>
<script src="https://code.highcharts.com/modules/accessibility.js"></script>


<script src="<?=BASE?>views/plugins/jquery-knob/jquery.knob.min.js"></script>

<script src="<?=BASE?>views/plugins/Toast/js/Toast.min.js"></script>
<script src="<?=BASE?>views/dist/js/scripts/dashboardAdministrador.js"></script>