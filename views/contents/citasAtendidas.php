<!-- Content Header (Page header) -->
<div class="content-header">
    <div class="container-fluid">
        <div class="row mb-2">
            <div class="col-sm-6">
                <h1 class="m-0">Citas Atendidas</h1>
            </div><!-- /.col -->
            <div class="col-sm-6">
                <ol class="breadcrumb float-sm-right">
                    <li class="breadcrumb-item"><a href="#">Ver Citas</a></li>
                    <li class="breadcrumb-item active">Atendidas</li>
                </ol>
            </div><!-- /.col -->
        </div><!-- /.row -->
    </div><!-- /.container-fluid -->
</div>
<!-- /.content-header -->

<!-- Main content -->
<div class="content">
    <div class="container-fluid">
        <div class="row" id="citas-atendidas">
            <!--   <div class="col-md-3 col-sm-6 col-12">
                <div class="info-box bg-gradient-warning">
                    <span class="info-box-icon"><i class="far fa-calendar-alt"></i></span>

                    <div class="info-box-content">
                        <span class="info-box-text">Cedula: <span>2400032559 </span> </span>
                        <span class="info-box-text">Cliente: <span>Danny Chavez </span> </span>
                        <span class="info-box-text">Mascota: <span>Gufi </span> </span>
                        <div class="progress">
                            <div class="progress-bar" style="width: 100%"></div>
                        </div>
                        <span class="progress-description">
                            Hora: <span>10:30 - 11:00 </span>
                        </span>
                        <div class="text-center">
                            <button class="btn btn-sm btn-primary" onclick="ver_cita('id')">
                                <i class="fas fa-eye"></i>
                            </button>
                            <button class="btn btn-sm btn-success" onclick="cambiar_estado('id')">
                                <i class="far fa-check-square"></i>
                            </button>
                        </div>
                    </div>


                </div>

            </div> -->

        </div>

    </div>
</div>
<!-- /.content -->
</div>
<!-- /.content-wrapper -->


<!-- MODAL CITAS ATENDIDAS -->

<div class="modal fade" id="modal-cargar-citas" style="overflow-y: scroll;">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header bg-primary">
                <h4 class="modal-title">ANIMAL HEALTH</h4>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">

                <div class="col-12">
                    <!-- Custom Tabs -->
                 
                   
                        <div class="card-body">
                            <div class="tab-content">
                                <div class="tab-pane active" id="tab_1">

                                    <div class="modal-body">
                                        <div class="col-12">
                                            <div class="">
                                                <div class="card">
                                                    <div class="card-header p-4">
                                                        <a class="pt-2 d-inline-block" data-abc="true">Receta: #
                                                            <span id="receta-numero"></span></a>
                                                        <div class="float-right">
                                                            <h4 class="mb-0">Codigo: <span id="receta-codigo"></span>
                                                            </h4>
                                                            Fecha Receta: <span id="receta-fecha"></span>
                                                        </div>
                                                    </div>
                                                    <div class="card-body">
                                                        <div class="row mb-4">
                                                            <div class="col-sm-6">
                                                                <h5 class="mb-3">Doctor</h5>
                                                                <h4 class="text-dark mb-1" id="receta-usuario-nombres">
                                                                </h4>
                                                                <div>Correo: <span id="receta-correo"></span></div>
                                                                <div>Telefono: <span id="receta-telefono"></span></div>
                                                            </div>
                                                            <div class="col-sm-6 ">
                                                                <h5 class="mb-3">Cliente</h5>
                                                                <h4 class="text-dark mb-1" id="receta-cliente-nombre">
                                                                </h4>
                                                                <div>Cedula: <span id="receta-cliente-cedula"></span>
                                                                </div>
                                                                <div>Direccion: <span
                                                                        id="receta-cliente-direccion"></span></div>
                                                                <div>Telefono: <span id="receta-cliente-telefono"></span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="table-responsive-sm">
                                                            <table class="table table-striped">
                                                                <thead>
                                                                    <tr>
                                                                        <th class="center">#</th>
                                                                        <th>Producto</th>
                                                                        <th class="center">Cantidad</th>
                                                                        <th class="right">Precio</th>
                                                                        <th class="right">Total</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody id="body_detalle_receta">


                                                                </tbody>
                                                            </table>
                                                        </div>
                                                        <div class="row">
                                                            <div class="col-lg-4 col-sm-5">
                                                            </div>
                                                            <div class="col-lg-4 col-sm-5 ml-auto">
                                                                <table class="table table-clear">
                                                                    <tbody>
                                                                        <tr>
                                                                            <td class="left">
                                                                                <strong
                                                                                    class="text-dark">Subtotal</strong>
                                                                            </td>
                                                                            <td class="right" id="receta-subtotal"></td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td class="left">
                                                                                <strong
                                                                                    class="text-dark">Descuento</strong>
                                                                            </td>
                                                                            <td class="right" id="receta-des"></td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td class="left">
                                                                                <strong class="text-dark">IVA
                                                                                    (12%)</strong>
                                                                            </td>
                                                                            <td class="right" id="receta-iva"></td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td class="left">
                                                                                <strong class="text-dark">Total</strong>
                                                                            </td>
                                                                            <td class="right">
                                                                                <strong class="text-dark"
                                                                                    id="receta-totalreceta"></strong>
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="card-footer bg-white">
                                                        <p class="mb-0">Animal Helth Gracias por preferirnos</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <!-- /.tab-pane -->

                            </div>
                            <!-- /.tab-pane -->

                            <!-- /.tab-pane -->
                        </div>
                        <!-- /.tab-content -->
                
                </div>
                <!-- ./card -->
            </div>
        </div>
        <div class="modal-footer justify-content-between">
        </div>
    </div>
    <!-- /.modal-content -->
</div>





<script src="<?=BASE?>views/plugins/Toast/js/Toast.min.js"></script>
<script src="<?=BASE?>views/dist/js/scripts/citasAtendidas.js"></script>