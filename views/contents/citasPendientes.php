<!-- Content Header (Page header) -->
<div class="content-header">
    <div class="container-fluid">
        <div class="row mb-2">
            <div class="col-sm-6">
                <h1 class="m-0">Citas Pendientes</h1>
            </div><!-- /.col -->
            <div class="col-sm-6">
                <ol class="breadcrumb float-sm-right">
                    <li class="breadcrumb-item"><a href="#">Ver Citas</a></li>
                    <li class="breadcrumb-item active">Pendientes</li>
                </ol>
            </div><!-- /.col -->
        </div><!-- /.row -->
    </div><!-- /.container-fluid -->
</div>
<!-- /.content-header -->

<!-- Main content -->
<div class="content">
    <div class="container-fluid">
        <div class="row" id="citas-pendientes">
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

<!-- MODAL CITAS PENDIENTES -->

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
                    <div class="card">
                        <div class="card-header d-flex p-0">
                            <h3 class="card-title p-3">Detalle de la Cita Medica</h3>
                            <ul class="nav nav-pills ml-auto p-2">
                                <li class="nav-item"><a class="nav-link active" href="#tab_1"
                                        data-toggle="tab">Datos</a></li>
                                <li class="nav-item"><a class="nav-link" href="#tab_2" data-toggle="tab">Receta</a>
                                </li>
                            </ul>
                        </div><!-- /.card-header -->
                        <div class="card-body">
                            <div class="tab-content">
                                <div class="tab-pane active" id="tab_1">

                                    <div class="row">
                                        <div class="col-12">
                                            <!-- Widget: user widget style 2 -->
                                            <div class="card card-widget widget-user-2">
                                                <!-- Add the bg color to the header using any of the bg-* classes -->
                                                <div class="widget-user-header bg-primary">
                                                    <div class="widget-user-image">
                                                        <img class="img-circle elevation-2"
                                                            src="<?=BASE?>views/dist/css/logincss/images/logo22.gif"
                                                            alt="User Avatar">
                                                    </div>
                                                    <!-- /.widget-user-image -->
                                                    <h3 class="widget-user-username">Datos de la Cita Medica</h3>

                                                </div>
                                                <div class="card-footer p-0">
                                                    <ul>
                                                        <li class="nav-item">
                                                            <input type="hidden" id="citas-id">
                                                            <input type="hidden" id="doctor-id">
                                                            <a class="nav-link"> Identificacion del Propietario: <span
                                                                    class="float-right" id="cedula-propietario">
                                                                </span></a>
                                                        </li>

                                                        <li class="nav-item">
                                                            <a class="nav-link">
                                                                Nombre Propietario: <span class="float-right"
                                                                    id="nombre-propietario"></span>
                                                            </a>
                                                        </li>

                                                        <li class="nav-item">
                                                            <a class="nav-link">
                                                                Nombre Mascota: <span class="float-right "
                                                                    id="nombre-mascota"></span>
                                                            </a>
                                                        </li>
                                                        <li class="nav-item">
                                                            <a class="nav-link">
                                                                Tipo Mascota: <span class="float-right "
                                                                    id="tipo-mascota"> </span>
                                                            </a>
                                                        </li>
                                                        <li class="nav-item">
                                                            <a class="nav-link">
                                                                Raza: <span class="float-right " id="raza-mascota">
                                                                </span>
                                                            </a>
                                                        </li>
                                                        <li class="nav-item">
                                                            <a class="nav-link">
                                                                Servicio: <span class="float-right "
                                                                    id="servicio-mascota"> </span>
                                                            </a>
                                                        </li>

                                                    </ul>
                                                </div>
                                            </div>
                                            <!-- /.widget-user -->
                                        </div>
                                    </div>

                                </div>
                                <!-- /.tab-pane -->
                                <div class="tab-pane" id="tab_2">
                                    <div class="col-12">
                                        <div class="callout callout-info">

                                            <div class="col-12 form-group row">
                                                <div class="col-8 col-md-6 col-12">
                                                    <li class="nav-item">
                                                        <a class="nav-link">
                                                            Nombre Propietario:
                                                            <span id="receta-nombre-propietario"></span>
                                                        </a>
                                                    </li>
                                                    <li class="nav-item">
                                                        <a class="nav-link">
                                                            Nombre Mascota:
                                                            <span id="receta-nombre-mascota"></span>
                                                        </a>
                                                    </li>
                                                </div>
                                                <div class="col-4 col-md-6 col-12">
                                                    <li class="nav-item">
                                                        <a class="nav-link">
                                                            Fecha:
                                                            <span class="text-right" id="receta-fecha">
                                                                <?php echo(date('d-m-Y'));?>
                                                            </span>
                                                        </a>
                                                    </li>
                                                </div>
                                            </div>

                                            <div class="col-12">
                                                <div class="form-group">
                                                    <label>RX:</label>
                                                    <textarea id="receta-descripcion" class="form-control" rows="3"></textarea>
                                                </div>
                                            </div>


                                        </div>



                                        <div class="callout callout-info">
                                            <div class="col-12 col-md-12 col-xs-12">

                                                <div class="card-body">
                                                    <input type="hidden" id="producto-id">
                                                    <div class="row ">
                                                        <div class="col-5  form-group">
                                                            <label>Codigo</label>
                                                            <input id="detalle-codigo" type="text" readOnly
                                                                class="form-control">
                                                        </div>
                                                        <div class="col-5  form-group">
                                                            <label>Nombre</label>
                                                            <input id="detalle-nombre" type="text" readOnly
                                                                class="form-control">
                                                        </div>
                                                        <div class="col-2  form-group">
                                                            <button class="btn btn-primary mb-2"
                                                                style="margin-top: 31px;" data-toggle="modal"
                                                                data-target="#modal-producto" data-backdrop="static"
                                                                data-keyboard="false">
                                                                <i class="fas fa-search"></i></button>
                                                        </div>
                                                    </div>

                                                    <div class="row ">
                                                        <div class="col-3 col-md-4 col-xs-12 form-group">
                                                            <label for="">Cantidad</label>
                                                            <input id="detalle-cantidad" type="text"
                                                                class="form-control solo-numeros">
                                                        </div>
                                                        <div class="col-3 col-md-3 col-xs-12 form-group">
                                                            <label for="">Stock</label>
                                                            <input id="detalle-stock" readOnly type="text"
                                                                class="form-control">
                                                        </div>
                                                        <div class="col-3 col-md-3 col-xs-12 form-group">
                                                            <label for="">Precio Venta</label>
                                                            <input id="detalle-pVenta" readOnly type="text"
                                                                class="form-control">
                                                        </div>
                                                        <div class="col-3 col-md-2 col-xs-12  form-group">
                                                            <button id="btn-agregar-item" class="btn btn-primary mb-2"
                                                                style="margin-top: 31px;" data-toggle="modal"
                                                                data-target="#modal-cargar-cliente"
                                                                data-backdrop="static" data-keyboard="false">
                                                                <i class="fas fa-plus"></i></button>
                                                        </div>
                                                    </div>
                                                    <div class="row col-12">
                                                        <div class="card-body" style=" overflow: auto;">
                                                            <table class="table table-bordered">
                                                                <thead>
                                                                    <tr>

                                                                        <th>Producto</th>
                                                                        <th>Cantidad</th>
                                                                        <th>P. Venta</th>
                                                                        <th>Total</th>
                                                                        <th>Eliminar</th>
                                                                        <th style="display:none">Id</th>


                                                                    </tr>
                                                                </thead>
                                                                <tbody id="body-aggProducto">

                                                                </tbody>
                                                                <tfoot>
                                                                    <tr>
                                                                        <th></th>
                                                                        <th></th>
                                                                        <th id="total-general">Total:</th>
                                                                        <th id="total-detalle"></th>
                                                                        <th></th>
                                                                        <th style="display:none"></th>


                                                                    </tr>

                                                                </tfoot>
                                                            </table>
                                                        </div>
                                                    </div>
                                                    <div class="row col-md-3 btn-group">
                                                        <button id="guardar-receta" type="button"
                                                            class="btn btn-block btn-outline-primary">Guardar</button>
                                                    </div>
                                                </div>

                                            </div>

                                        </div>
                                    </div>
                                    <!-- /.card -->
                                </div>
                            </div>
                            <!-- /.tab-pane -->

                            <!-- /.tab-pane -->
                        </div>
                        <!-- /.tab-content -->
                    </div><!-- /.card-body -->
                </div>
                <!-- ./card -->
            </div>
        </div>
        <div class="modal-footer justify-content-between">
        </div>
    </div>
    <!-- /.modal-content -->
</div>
<!-- /.modal-dialog -->

<!-- MODAL PRODUCTO -->
<div class="modal fade" id="modal-producto">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header bg-dark">
                <h4 class="modal-title">Productos Registrados</h4>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <div class="row">
                    <div class="col-12">
                        <div class="form-group">

                            <label for="">Buscar Producto</label>
                            <input id="buscar-producto" type="text" class="form-control"
                                placeholder="Ingrese el nombre del producto">
                        </div>
                    </div>
                </div>
                <div class="row" style="height: 200px !important; overflow: auto;">
                    <div class="col-12">
                        <div class="tabla-buscar-producto">
                            <table class="table table-hover text-nowrap">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th style="display: none">ID</th>
                                        <th>Codigo</th>
                                        <th>Nombre</th>
                                        <th>Categoria</th>
                                        <th>Stock</th>
                                        <th>P.Venta</th>
                                        <th>OK</th>
                                    </tr>
                                </thead>
                                <tbody id="producto-body">

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
<script src="<?=BASE?>views/plugins/Toast/js/Toast.min.js"></script>
<script src="<?=BASE?>views/dist/js/scripts/citasPendientes.js?ver=1.1.1.2"></script>