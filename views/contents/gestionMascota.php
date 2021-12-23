<!-- Content Header (Page header) -->
<div class="content-header">
    <div class="container-fluid">
        <div class="row mb-2">
            <div class="col-sm-6">
                <h1 class="m-0">Gestión Mascota</h1>
            </div><!-- /.col -->
            <div class="col-sm-6">
                <ol class="breadcrumb float-sm-right">
                    <li class="breadcrumb-item"><a href="#">Inicio</a></li>
                    <li class="breadcrumb-item active">Mascota</li>
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
            <div class="col-md-6">
                <div class="card card-primary">
                    <div class="card-header">
                        <h3 class="card-title">Registro de Mascota</h3>

                        <div class="card-tools">
                            <button type="button" class="btn btn-tool" data-card-widget="collapse">
                                <i class="fas fa-minus"></i>
                            </button>
                        </div>

                    </div>

                    <div class="card-body">
                        <form id="nueva-mascota" method="POST">

                            <div class="row ">
                                <div class="col-12 col-md-6 form-group">
                                    <label for="">Nombre</label>
                                    <input id="new-nombre" type="text" name="nombre" class="form-control"
                                        maxlength="200" minlength="3">
                                </div>
                                <div class="col-12 col-md-6 form-group">
                                    <label for="">Edad</label>
                                    <input id="new-edad" type="text" name="edad" class="form-control" maxlength="2"
                                        minlength="1">
                                </div>
                            </div>

                            <div class="row">

                                <div class="col-12 col-md-6 form-group">
                                    <label for="">Tipo de Mascota</label>
                                    <select name="chelas" id="new-tipo-mascota" class="form-control">
                                    </select>
                                </div>

                                <div class="col-12 col-md-6 form-group">
                                    <label for="">Genero Mascota</label>
                                    <select name="" id="new-genero" class="form-control">
                                    </select>
                                </div>

                            </div>

                            <div class="row ">
                                <div class="col-9  form-group">
                                    <label for="new-raza">Raza</label>
                                    <input type="hidden" id="id-raza">
                                    <input id="new-raza" type="raza" name="raza" class="form-control">
                                </div>
                                <div class="col-3  form-group">
                                    <button class="btn btn-primary mb-2" style="margin-top: 31px;" data-toggle="modal"
                                        data-target="#modal-raza" data-backdrop="static" data-keyboard="false">
                                        <i class="fas fa-search"></i></button>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-5  form-group">
                                    <label for="">Peso</label>
                                    <input id="new-peso" type="text" name="peso" class="form-control">
                                </div>

                                <div class="col-7  form-group">
                                    <label for="">F. Nacimiento </label>
                                    <input id="new-fecha" type="date" name="fechaN" class="form-control ">
                                </div>

                            </div>

                            <div class="row mt-4">
                                <div class="col-12  form-group">
                                    <label for="">Imagen</label>
                                    <input class="form-control" type="file" name="img" id="new-img-mascota"
                                        accept="image/*">
                                </div>
                            </div>

                    </div>
                    <!-- /.card-body -->
                </div>
                <!-- /.card -->
            </div>

            <div class="col-md-6">
                <div class="card card-primary card-outline">
                    <div class="card-body">

                        <div class="row">
                            <div class="col-md-6 col-sm-6 col-12">
                                <div class=" info-box">
                                    <span class="info-box-icon bg-info"><i class="fas fa-user-check"></i></span>

                                    <div class="info-box-content">
                                        <h5><strong>Cedula</strong></h5>
                                        <span class="info-box-text" id="v-Cedula">---------</span>
                                        <h5><strong>Cliente</strong></h5>
                                        <span class="info-box-text" id="v-Cliente">---------</span>
                                    </div>

                                </div>
                            </div>

                            <div class="col-md-6 col-sm-6 col-12">
                                <div class=" info-box">
                                    <span class="info-box-icon bg-info"><i class="fas fa-paw"></i></span>

                                    <div class="info-box-content">
                                        <h5><strong>Mascota</strong></h5>
                                        <span class="info-box-text" id="v-Mascota">---------</span>
                                        <h5><strong>Tipo</strong></h5>
                                        <span class="info-box-text" id="v-Tipo">---------</span>
                                    </div>

                                </div>

                            </div>
                        </div>

                        <div class="row">
                            <div class="col-12 btn-center">
                                <button style="margin-top: 18px;" type="submit" id="btn-guardarMascota"
                                    class="btn btn-block btn-outline-primary">Guardar</button>
                            </div>
                        </div>
                        </form>
                    </div>


                    <div class="col-md-12">
                        <div class="card card-primary">
                            <div class="card-header">
                                <h3 class="card-title">Listado de Clientes</h3>

                                <div class="card-tools">
                                    <button type="button" class="btn btn-tool" data-card-widget="collapse">
                                        <i class="fas fa-minus"></i>
                                    </button>
                                </div>

                            </div>

                            <div class="card-body">
                                <div class="row ">
                                    <div class="col-9  form-group">
                                        <label>Cedula</label>
                                        <input id="c-cli-cedula" type="text" name="cedula" readOnly
                                            class="form-control">
                                    </div>
                                    <div class="col-3  form-group">
                                        <button class="btn btn-primary mb-2" style="margin-top: 31px;"
                                            data-toggle="modal" data-target="#modal-cargar-cliente"
                                            data-backdrop="static" data-keyboard="false">
                                            <i class="fas fa-search"></i></button>
                                    </div>
                                </div>


                                <div class="row ">
                                    <div class="col-12 col-md-6 form-group">
                                        <input type="hidden" id="c-cli-id">
                                        <label for="">Nombre</label>
                                        <input id="c-cli-nombre" readOnly type="text" name="nombre" class="form-control"
                                            maxlength="200" minlength="3">
                                    </div>
                                    <div class="col-12 col-md-6 form-group">
                                        <label for="">Apellido</label>
                                        <input id="c-cli-apellido" readOnly type="text" name="apellido"
                                            class="form-control" maxlength="200" minlength="3">
                                    </div>
                                </div>

                                <div class="row ">
                                    <div class="col-12 col-md-6 form-group">
                                        <label for="">Direccion</label>
                                        <input id="c-cli-direccion" readOnly type="text" name="direccion"
                                            class="form-control" maxlength="200" minlength="3">
                                    </div>
                                    <div class="col-12 col-md-6 form-group">
                                        <label for="">Telefono</label>
                                        <input id="c-cli-telefono" readOnly type="text" name="telefono"
                                            class="form-control" maxlength="200" minlength="3">
                                    </div>
                                </div>

                            </div>



                        </div>

                    </div>


                </div>
            </div>



        </div>

        <!--   tablamascota -->
        <div class="card">
            <div class="card-header bg-dark">
                <h3 class="card-title">Mascotas Registradas</h3>
            </div>
            <!-- /.card-header -->
            <div class="card-body" style="overflow: auto !important;">
                <table id="tabla-mascota" class="table table-bordered table-striped table-hover">
                    <thead>
                        <tr>
                            <th style="width: 10px">#</th>
                            <th>Propietario</th>
                            <th>Mascota</th>
                            <th>Edad</th>
                            <th>Tipo Mascota</th>
                            <th>Raza</th>
                            <th>Genero Mascota</th>
                            <th>Peso</th>
                            <th>F. Nacimiento</th>
                            <th>Acciones</th>

                        </tr>
                    </thead>
                    <tbody>

                    </tbody>
                </table>
            </div>
            <!-- /.card-body -->
            <div class="card-footer clearfix">
                <ul class="pagination pagination-sm m-0 float-right">
                    <li class="page-item"><a class="page-link" href="#">«</a></li>
                    <li class="page-item"><a class="page-link" href="#">1</a></li>
                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                    <li class="page-item"><a class="page-link" href="#">»</a></li>
                </ul>
            </div>
        </div>


        <!-- /.row -->
    </div><!-- /.container-fluid -->
</div>
<!-- /.content -->
</div>
<!-- /.content-wrapper -->


<!-- Tabla Mascota -->








<!-- MOdal de raza -->
<div class="modal fade" id="modal-raza">
    <div class="modal-dialog modal-md">
        <div class="modal-content">
            <div class="modal-header bg-primary">
                <h4 class="modal-title">Raza</h4>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <div class="row">
                    <div class="col-12">
                        <div class="form-group">
                            <label for="">Buscar Raza</label>
                            <input id="buscar-raza" type="text" class="form-control"
                                placeholder="Ingrese el nombre de la Raza">
                        </div>
                    </div>
                </div>
                <div class="row" style="height: 200px !important; overflow: auto;">
                    <div class="col-12">
                        <div class="tabla-buscar-raza">
                            <table class="table table-hover text-nowrap">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th style="display: none">ID</th>
                                        <th>Raza</th>
                                        <th>OK</th>
                                    </tr>
                                </thead>
                                <tbody id="raza-body">

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



<!-- MODAL DE LISTAR CLIENTEES -->
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
                            <label for="">Buscar Cliente</label>
                            <input id="buscar-cliente" type="text" class="form-control"
                                placeholder="Ingrese el nombre de la Cliente">
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
                                        <th>Nombre</th>
                                        <th>Apellido</th>
                                        <th>Direccion</th>
                                        <th>Telefono</th>
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

<script src="<?=BASE?>views/plugins/datatables/jquery.dataTables.min.js"></script>
<script src="<?=BASE?>views/plugins/datatables-bs4/js/dataTables.bootstrap4.min.js"></script>
<script src="<?=BASE?>views/plugins/datatables-responsive/js/dataTables.responsive.min.js"></script>
<script src="<?=BASE?>views/plugins/datatables-responsive/js/responsive.bootstrap4.min.js"></script>
<script src="<?=BASE?>views/plugins/datatables-buttons/js/dataTables.buttons.min.js"></script>
<script src="<?=BASE?>views/plugins/datatables-buttons/js/buttons.bootstrap4.min.js"></script>
<script src="<?=BASE?>views/plugins/jszip/jszip.min.js"></script>
<script src="<?=BASE?>views/plugins/pdfmake/pdfmake.min.js"></script>


<script src="<?=BASE?>views/plugins/Toast/js/Toast.min.js"></script>
<script src="<?=BASE?>views/dist/js/scripts/llenarmascota.js"></script>