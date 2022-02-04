<!-- Content Header (Page header) -->
<div class="content-header">
    <div class="container-fluid">
        <div class="row mb-2">
            <div class="col-sm-6">
                <h1 class="m-0">Reportes de Mascotas mas Atendidas</h1>
            </div><!-- /.col -->
            <div class="col-sm-6">
                <ol class="breadcrumb float-sm-right">
                    <li class="breadcrumb-item"><a href="#">Reportes</a></li>
                    <li class="breadcrumb-item active">Mascotas mas Atendidas</li>
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
                            <div class="col-6 col-md-3 col-lg-3 form-group ">
                                <label for="">Fecha Inicio</label>
                                <input id="fecha-inicio-r-s" type="date" class="form-control">
                            </div>
                            <div class="col-6 col-md-3 col-lg-3 form-group ">
                                <label for="">Fecha fin</label>
                                <input id="fecha-fin-r-s" type="date" class="form-control">
                            </div>
                            <div class="col-6 col-md-3 col-lg-2 form-group ">
                                <input type="hidden" id="cliente-id-reporte">
                                <label for="">Cliente</label>
                                <input id="cliente-reporte" readonly type="text" class="form-control">


                            </div>

                            <div class="col-6 col-md-4 col-lg-1 form-group">
                                <button class="btn btn-primary btn-sm " id="buscar-datos-cliente"
                                    style="margin-top: 35px;">
                                    <i class=" fa fa-search  "></i> </button>
                            </div>

                            <div class="col-6 col-md-4 col-lg-3 form-group ">
                                <div class="row" id="imprimir-detalle">

                                </div>
                                <button class="btn btn-dark btn-sm " id="btn-consulta" style="margin-top: 35px;">
                                    <i class=" fa fa-search  "></i> Consultar</button>
                                <button class="btn btn-primary btn-sm " id="btn-imprimir" style="margin-top: 35px;">
                                    <i class="far fa-file-pdf"></i> Imprimir</button>
                            </div>

                        </div>

                             <div id="tabla-reporte-mascotas" class="row bg-white d-none">
                            <div class="col-12 mt-2">
                                <div class="row">
                                    <div class="col-6 col-md-8 col-lg-9" style="padding-left: 125px; margin-top: 65px;">
                                        <h3><b>ANIMALHEALTH</b></h3>
                                        <h6>Mascotas mas atendidas</h6>
                                        <h6 class="text-danger">Desde:
                                            <span class="text-dark" id="fecha-inicio-r-s2"></span> - Hasta:
                                            <span class="text-dark" id="fecha-fin-r-s2"></span>
                                        </h6>
                                    </div>
                                    <div class="col-6-col-md-4 col-lg-3">
                                        <img src="<?=BASE?>views/dist/css/logincss/images/logo22.gif" alt="IMG"
                                            width="260px" style="margin-left: -100px;margin-top: -30px;">
                                    </div>
                                </div>

                                <div class="d-flex justify-content-between">
                                    <small><b>Fecha de Consulta: <span id="fecha-consulta-s"></span></b></small>
                                    <small><b>Hora de Consulta: <span id="hora-consulta-s"></span></b></small>
                                </div>

                                <div class="row mt-1">
                                    <div class="col-12 text-center">
                                        <div class="mt-3">
                                            <div class="card">
                                                <div class="card-body table-responsive p-0">
                                                    <table class="table table-hover text-nowrap">
                                                        <thead>
                                                            <tr>
                                                                <th>#</th>
                                                                <th>Nombre de Mascota</th>
                                                                <th>Tipo Mascota</th>
                                                                <th>Veces Atendidas</th>
                                                                <th>Servicio</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody id="body-reporte-reoprte-c">
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                </div>

                                
                                <div class="col-12 col-md-8">
                                    <h3 class="card-title"><b>Mascotas mas Atendidas</b></h3>
                                    <div id="canvas1" class="w-10 d-flex justify-content-center">

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



<!-- MODAL DE LISTAR CLIENTE -->
<div class="modal fade" id="modal-cargar-cliente">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header bg-primary">
                <h4 class="modal-title">Clientes</h4>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <div class="row">
                    <div class="col-12">
                        <div class="form-group">
                            <label for="">Buscar Clientes</label>
                            <input id="buscar-clientes" type="text" class="form-control"
                                placeholder="Ingrese el nombre del Cliente">
                        </div>
                    </div>
                </div>
                <div class="row" style="height: 200px !important; overflow: auto;">
                    <div class="col-12">
                        <div class="tabla-buscar-cliente">
                            <table class="table table-hover text-nowrap">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th style="display: none">ID</th>
                                        <th>Cedula</th>
                                        <th>Nombres</th>
                                        <th>Apellidos</th>
                                        <th>OK</th>
                                    </tr>
                                </thead>
                                <tbody id="cliente-body">

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




<script src="<?=BASE?>views/plugins/moment/moment.min.js"></script>
<script src="<?=BASE?>views/plugins/html2pdf/html2pdf.bundle.js"></script>
<script src="<?=BASE?>views/plugins/Toast/js/Toast.min.js"></script>
<script src="<?=BASE?>views/plugins/chart.js/Chart.min.js"></script>
<script src="<?=BASE?>views/dist/js/scripts/reportesmascotasatendidas.js"></script>