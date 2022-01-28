<!-- Content Header (Page header) -->
<div class="content-header">
    <div class="container-fluid">
        <div class="row mb-2">
            <div class="col-sm-6">
                <h1 class="m-0">Reporte de Agendamiento por Medicos </h1>
            </div><!-- /.col -->
            <div class="col-sm-6">
                <ol class="breadcrumb float-sm-right">
                    <li class="breadcrumb-item"><a href="#">Reportes</a></li>
                    <li class="breadcrumb-item active">Agendamientos por Medicos</li>
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
                            <div class="col-6 col-md-4 col-lg-3 form-group ">
                                <label for="">Fecha Inicio</label>
                                <input id="fecha-inicio-r-doc" type="date" class="form-control">
                            </div>
                            <div class="col-6 col-md-4 col-lg-3 form-group ">
                                <label for="">Fecha fin</label>
                                <input id="fecha-fin-r-doc" type="date" class="form-control">
                            </div>
                            <div class="col-6 col-md-4 col-lg-3 form-group ">
                                <label for="">Doctor</label>
                                <select id="doctor-cargar" class="form-control">
                              <!--       <option value="0">Seleccione un Doctor</option> -->
                                </select>
                            </div>
                            <div class="col-6 col-md-4 col-lg-3 form-group ">
                                <button class="btn btn-dark btn-sm " id="btn-consulta-doc" style="margin-top: 35px;">
                                    <i class=" fa fa-search  "></i> Consultar</button>
                                <button class="btn btn-primary btn-sm " id="btn-imprimir" style="margin-top: 35px;">
                                    <i class="far fa-file-pdf"></i> Imprimir</button>
                            </div>

                        </div>

                        <div id="tabla-reporte-doc" class="row bg-white d-none">
                            <div class="col-12 mt-2">
                                <div class="row">
                                    <div class="col-6 col-md-8 col-lg-9" style="padding-left: 125px; margin-top: 65px;">
                                        <h3><b>ANIMALHEALTH</b></h3>
                                        <h6>Reporte de Agendamiento por Medico</h6>
                                        <h6 class="text-danger">Desde:
                                            <span class="text-dark" id="fecha-inicio-r-doc2"></span> - Hasta:
                                            <span class="text-dark" id="fecha-fin-r-doc2"></span>
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
                                                                <th>Cliente</th>
                                                                <th>Mascota</th>
                                                                <th>Servicio</th>
                                                                <th>Fecha Cita</th>
                                                                <th>Hora Cita</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody id="body-reporte-agendamiento-doc">

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

        <!-- /.row -->
    </div><!-- /.container-fluid -->
</div>
<!-- /.content -->
</div>
<!-- /.content-wrapper -->




<script src="<?=BASE?>views/plugins/moment/moment.min.js"></script>
<script src="<?=BASE?>views/plugins/html2pdf/html2pdf.bundle.js"></script>
<script src="<?=BASE?>views/plugins/Toast/js/Toast.min.js"></script>
<script src="<?=BASE?>views/plugins/chart.js/Chart.min.js"></script>
<script src="<?=BASE?>views/dist/js/scripts/reportesAgendamientoporMedico.js?ver=1.1.1.1"></script>