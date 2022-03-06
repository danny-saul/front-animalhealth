<!-- Content Header (Page header) -->
<div class="content-header">
    <div class="container-fluid">
        <div class="row mb-2">
            <div class="col-sm-6">
                <h1 class="m-0">Consultar Compras</h1>
            </div><!-- /.col -->
            <div class="col-sm-6">
                <ol class="breadcrumb float-sm-right">
                    <li class="breadcrumb-item"><a href="#">Compras</a></li>
                    <li class="breadcrumb-item active">Consultar Compras</li>
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
                <div class="card card-dark">
                    <div class="card-header">
                        <h3 class="card-title">Listado de Compras</h3>

                        <div class="card-tools">
                            <button type="button" class="btn btn-tool" data-card-widget="collapse"><i
                                    class="fas fa-minus"></i>
                            </button>
                        </div>
                        <!-- /.card-tools -->
                    </div>
                    <!--form-nuevo-descripcion /.card-header -->
                    <div class="card-body">
                        <div class="div" style="overflow: auto;">
                            <table id="tabla-ver-compras" class="table table-bordered table-striped">
                                <thead>
                                    <tr>
                                        <th style="width: 10px">#</th>
                                        <th>Fecha Compra</th>
                                        <th>Numero Compra</th>
                                        <th>Proveedor</th>
                                        <th>Total</th>
                                        <th>Acciones</th>
                                    </tr>
                                </thead>
                                <tbody>

                            </table>
                        </div>
                    </div>
                    <!-- /.card-body -->
                </div>
            </div>
        </div>
        <!-- /.row -->
        <!-- /.row -->
    </div><!-- /.container-fluid -->
</div>
<!-- /.content -->
</div>
<!-- /.content-wrapper -->


<!-- MODAL DETALLE CONSULTA COMPRA -->
<div class="modal fade" id="modal-detalle-consulta-compra">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header bg-dark">
                <h4 class="modal-title">Detalle de Compra</h4>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <div class="col-12">
                    <div class="">
                        <div class="card" id="detalle-compra-imprimir">
                            <div class="card-header p-4">
                                <a class="pt-2 d-inline-block" data-abc="true">Nota de Venta: # <span
                                        id="compra-numero"></span></a>
                                <div class="float-right">
                                    <h4 class="mb-0">Codigo: <span id="compra-codigo"></span></h4>
                                    Fecha Compra: <span id="compra-fecha"></span>
                                </div>
                            </div>
                            <div class="card-body">
                                <div class="row mb-4">
                                    <div class="col-sm-6">
                                        <h5 class="mb-3">Responsable de la Compra</h5>
                                        <h4 class="text-dark mb-1" id="compra-usuario-nombres"></h4>
                                        <div>Correo: <span id="compra-correo"></span></div>
                                        <div>Telefono: <span id="compra-telefono"></span></div>
                                    </div>
                                    <div class="col-sm-6 ">
                                        <h5 class="mb-3">Proveedor</h5>
                                        <h4 class="text-dark mb-1" id="compra-proveedor-nombre"></h4>
                                        <div>Ruc: <span id="compra-proveedor-ruc"></span></div>
                                        <div>Direccion: <span id="compra-proveedor-direccion"></span></div>
                                        <div>Correo: <span id="compra-proveedor-correo"></span></div>
                                        <div>Telefono: <span id="compra-proveedor-telefono"></span></div>
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
                                        <tbody id="body_detalle_compra">


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
                                                        <strong class="text-dark">Subtotal</strong>
                                                    </td>
                                                    <td class="right" id="compra-subtotal"></td>
                                                </tr>
                                                <tr>
                                                    <td class="left">
                                                        <strong class="text-dark">Descuento</strong>
                                                    </td>
                                                    <td class="right" id="compra-des"></td>
                                                </tr>
                                                <tr>
                                                    <td class="left">
                                                        <strong class="text-dark">IVA (12%)</strong>
                                                    </td>
                                                    <td class="right" id="compra-iva"></td>
                                                </tr>
                                                <tr>
                                                    <td class="left">
                                                        <strong class="text-dark">Total</strong>
                                                    </td>
                                                    <td class="right">
                                                        <strong class="text-dark" id="compra-totalcompra"></strong>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div class="card-footer bg-white">
                                <p class="mb-0">Animal Helth Gracias por su compra</p>
                            </div>
                        </div>
                        <button class="btn btn-primary btn-sm" id="btn-imprimir" style="margin-top: 35px;">
                            <i class="far fa-file-pdf"></i> Imprimir</button>
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
<script src="<?=BASE?>views/plugins/html2pdf/html2pdf.bundle.js"></script>


<script src="<?=BASE?>views/plugins/Toast/js/Toast.min.js"></script>
<script src="<?=BASE?>views/dist/js/scripts/vercomprasconsultas.js?ver=1.1.1.1"></script>