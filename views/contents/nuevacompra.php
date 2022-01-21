    <!-- Content Header (Page header) -->
    <div class="content-header">
        <div class="container-fluid">
            <div class="row mb-2">
                <div class="col-sm-6">
                    <h1 class="m-0">Realizar Compras</h1>
                </div><!-- /.col -->
                <div class="col-sm-6">
                    <ol class="breadcrumb float-sm-right">
                        <li class="breadcrumb-item"><a href="#">Compras</a></li>
                        <li class="breadcrumb-item active">Nueva Compra</li>
                    </ol>
                </div><!-- /.col -->
            </div><!-- /.row -->
        </div><!-- /.container-fluid -->
    </div>
    <!-- /.content-header -->

    <!-- Main content -->
    <div class="content">
        <div class="container-fluid">




            <!-- /.card-header -->
            <!-- form start -->
            <!--  PROVEEDORES -->
            <div class="col-md-12">
                <div class="card card-primary">


                    <div class="card-body">
                        <div class="row ">
                            <div class="col-md-6">
                                <div class="row mb-3">
                                    <div class="col-8">
                                        <div class="form-group row">
                                            <label class="col-3 col-sm-4 col-form-label">R.U.C :</label>
                                            <div class="col-sm-8">
                                                <input type="text" name="ruc" readOnly
                                                    class="form-control form-control-sm" id="c-pro-ruc">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-4">
                                        <button class="btn btn-primary btn-sm" id="buscar-marca" data-toggle="modal"
                                            data-target="#modal-cargar-proveedores" data-backdrop="static"
                                            data-keyboard="false"><i class="fa fa-search mr-2"></i>Buscar
                                            Proveedor</button>
                                    </div>
                                </div>


                                <div class="form-group row">
                                    <input type="hidden" id="c-pro-id">
                                    <label class="col-sm-4 col-form-label">Razon Social :</label>
                                    <div class="col-sm-8">
                                        <input id="c-pro-razon" readOnly type="text" name="razon"
                                            class="form-control form-control-sm" maxlength="200" minlength="3">
                                    </div>
                                </div>

                                <div class="form-group row">
                                    <label class="col-sm-4 col-form-label">Direccion :</label>
                                    <div class="col-sm-8">
                                        <input id="c-pro-direccion" readOnly type="text" name="direccion"
                                            class="form-control form-control-sm" maxlength="200" minlength="3">
                                    </div>
                                </div>
                                <!--      <div class="form-group row">
                                    <label class="col-sm-4 col-form-label">Fecha Compra :</label>
                                    <div class="col-sm-8">
                                        <input id="c-c-fechac" type="date" name="fechac"
                                            class="form-control form-control-sm">

                                    </div>
                                </div> -->
                                <div class="form-group row">
                                    <label class="col-sm-4  col-form-label">Descuento :</label>
                                    <div class="col-sm-8">
                                        <input id="compra-descuento-input" type="text" value="0.00"
                                            class="form-control form-control-sm decimal">
                                    </div>
                                </div>




                            </div>
                            <div class="col-md-6">
                                <div class="col-12 ">
                                    <div class="card card-dark ">
                                        <div class="card-header ">
                                            <h3 class="card-title"> <span style="text-align: center">DATOS DE
                                                    COMPRA</span></h3>
                                        </div>
                                        <div class="card-body">
                                            <div class="row ">
                                                <!--  <div class="col-6   form-group">
                                                       <label>Codigo :</label>
                                                    <input id="c-c-codigo" type="text" name="codigo"
                                                        class="form-control form-control-sm"> 
                                                </div> -->
                                                <div class="col-6 form-group">
                                                    <label>Fecha Compra :</label>

                                                    <input id="c-c-fechac" required  min=<?php $hoy=date("Y-m-d"); echo $hoy;?> type="date" name="fechac"
                                                        class="form-control form-control-sm">


                                                </div>

                                                <div class="col-6  form-group">

                                                    <label for="">Usuario :</label>
                                                    <input id="c-c-usuario" readOnly type="text" name="usuario"
                                                        class="form-control form-control-sm">
                                                </div>
                                            </div>
                                        </div>
                                        <!-- /.card-body -->
                                    </div>
                                    <!-- /.card -->
                                </div>
                            </div>

                        </div>

                    </div>
                </div>

            </div>


            <div class="col-md-12">
                <div class="card card-primary">


                    <div class="card-body">
                        <input type="hidden" id="producto-id">
                        <div class="row ">
                            <div class="col-5  form-group">
                                <label>Codigo </label>
                                <input id="detalle-compras-codigo" type="text" readOnly class="form-control">
                            </div>
                            <div class="col-5  form-group">
                                <label>Nombre</label>
                                <input id="detalle-compras-nombre" type="text" readOnly class="form-control">
                            </div>
                            <div class="col-2  form-group">
                                <button class="btn btn-primary mb-2" style="margin-top: 31px;" data-toggle="modal"
                                    data-target="#modal-producto" data-backdrop="static" data-keyboard="false">
                                    <i class="fas fa-search"></i></button>
                            </div>
                        </div>
                        <div class="row ">
                            <div class="col-2  col-xs-12 form-group">
                                <label for="">Cantidad</label>
                                <input id="compra-cantidad" type="text" class="form-control solo-numeros">
                            </div>
                            <div class="col-2  col-xs-12 form-group">
                                <label for="">Stock</label>
                                <input id="compra-stock" readOnly type="text" class="form-control">
                            </div>
                            <div class="col-3  col-xs-12 form-group">
                                <label for="">Precio Compra</label>
                                <input id="compra-pCompra" type="text" class="form-control">
                            </div>

                            <div class="col-3  col-xs-12  form-group">
                                <button id="btn-agregar-item" class="btn btn-primary mb-2" style="margin-top: 31px;">
                                    <i class="fas fa-plus"></i> Agregar</button>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

            <div class="col-md-12">
                <div class="card card-primary">

                    <div class="card-body">

                        <div class="row col-12">
                            <div class="card-body" style=" overflow: auto;">
                                <table class="table table-bordered">
                                    <thead>
                                        <tr>

                                            <th>Producto</th>
                                            <th>Cantidad</th>
                                            <th>P. Compra</th>
                                            <th>Total</th>
                                            <th>Eliminar</th>
                                            <th style="display:none">Id</th>


                                        </tr>
                                    </thead>
                                    <tbody id="body-aggProducto">

                                    </tbody>
                                    <!--           <tfoot>
                                        <tr>
                                            <th></th>
                                            <th></th>
                                            <th id="total-general">Total:</th>
                                            <th id="total-detalle"></th>
                                            <th></th>
                                            <th style="display:none"></th>


                                        </tr>

                                    </tfoot> -->
                                </table>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-6 col-md-3">
                                <div class="small-box bg-info">
                                    <div class="inner">
                                        <h3 id="compra-subtotal">0</h3>

                                        <p class="text-white"><strong>(+) </strong>Subtotal</p>
                                    </div>
                                    <div class="icon">
                                        <i class="fas fa-dollar-sign"></i>
                                    </div>
                                </div>
                            </div>
                            <div class="col-6 col-md-3">
                                <div class="small-box bg-info">
                                    <div class="inner">
                                        <h3 id="compra-iva">0</h3>

                                        <p class="text-white"><strong>(+) </strong>IVA <span id="numero-porcentaje"></span>%</p>
                                    </div>
                                    <div class="icon">
                                        <i class="fas fa-dollar-sign"></i>
                                    </div>
                                </div>
                            </div>
                            <div class="col-6 col-md-3">
                                <div class="small-box bg-info">
                                    <div class="inner">
                                        <h3 id="compra-descuento">0</h3>

                                        <p class="text-white"><strong>(-) </strong>Descuento</p>
                                    </div>
                                    <div class="icon">
                                        <i class="fas fa-dollar-sign"></i>
                                    </div>
                                </div>
                            </div>
                            <div class="col-6 col-md-3">
                                <div class="small-box bg-info">
                                    <div class="inner">
                                        <h3 id="compra-totalg">0</h3>

                                        <p class="text-white">Total</p>
                                    </div>
                                    <div class="icon">
                                        <i class="fas fa-dollar-sign"></i>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="row text-right ">
                            <div class="col-12">
                                <button id="guardar-compra" type="button" class="btn  btn-primary ">Guardar</button>
                            </div>

                        </div>

                    </div>


                </div>

            </div>


            <!-- /.row -->
        </div><!-- /.container-fluid -->
    </div>
    <!-- /.content -->

    <!-- MODAL DE LISTAR PROVEEDORES -->
    <div class="modal fade" id="modal-cargar-proveedores">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header bg-primary">
                    <h4 class="modal-title">Proveedores</h4>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-12">
                            <div class="form-group">
                                <label for="">Buscar Proveedores</label>
                                <input id="buscar-proveedores" type="text" class="form-control"
                                    placeholder="Ingrese el nombre del proveedor">
                            </div>
                        </div>
                    </div>
                    <div class="row" style="height: 200px !important; overflow: auto;">
                        <div class="col-12">
                            <div class="tabla-buscar-proveedor">
                                <table class="table table-hover text-nowrap">
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th style="display: none">ID</th>
                                            <th>Ruc</th>
                                            <th>Razon Social</th>
                                            <th>Telefono</th>
                                            <th>Direccion</th>
                                            <th>OK</th>
                                        </tr>
                                    </thead>
                                    <tbody id="proveedor-body">

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

    </div>
    <!-- /.content-wrapper -->



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



    <script src="<?=BASE?>views/plugins/datatables/jquery.dataTables.min.js"></script>
    <script src="<?=BASE?>views/plugins/datatables-bs4/js/dataTables.bootstrap4.min.js"></script>
    <script src="<?=BASE?>views/plugins/datatables-responsive/js/dataTables.responsive.min.js"></script>
    <script src="<?=BASE?>views/plugins/datatables-responsive/js/responsive.bootstrap4.min.js"></script>
    <script src="<?=BASE?>views/plugins/datatables-buttons/js/dataTables.buttons.min.js"></script>
    <script src="<?=BASE?>views/plugins/datatables-buttons/js/buttons.bootstrap4.min.js"></script>
    <script src="<?=BASE?>views/plugins/jszip/jszip.min.js"></script>
    <script src="<?=BASE?>views/plugins/pdfmake/pdfmake.min.js"></script>


    <script src="<?=BASE?>views/plugins/Toast/js/Toast.min.js"></script>
    <script src="<?=BASE?>views/dist/js/scripts/nuevaCompra.js"></script>