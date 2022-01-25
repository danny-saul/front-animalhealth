<style>
.box-img-producto {
    width: 50px;
    height: 50px;
    overflow: hidden;
}

.box-img-producto>img {
    width: 100% !important;
    height: 100% !important;
}

.pt-25 {
    padding-top: 30px !important;
}
</style>
<!-- Content Header (Page header) -->
<div class="content-header">
    <div class="container-fluid">
        <div class="row mb-2">
            <div class="col-sm-6">
                <h1 class="m-0">Registrar Productos</h1>
            </div><!-- /.col -->
            <div class="col-sm-6">
                <ol class="breadcrumb float-sm-right">
                    <li class="breadcrumb-item"><a href="#">Gestion de Productos</a></li>
                    <li class="breadcrumb-item active">Registrar Productos</li>
                </ol>
            </div><!-- /.col -->
        </div><!-- /.row -->
    </div><!-- /.container-fluid -->
</div>
<!-- /.content-header -->

<!-- Main content -->
<div class="content">
    <div class="container-fluid">
        <button class="btn btn-secondary btn-lg mb-2" data-toggle="modal" data-target="#modal-registro-categoria"
            data-backdrop="static" data-keyboard="false"><i class="fa fa-plus mr-2"></i>Agregar Categoria</button>

        <div class="row ">
            <div class="col-12">
                <div class="card card-primary">
                    <div class="card-header">
                        <h3 class="card-title">Registro de Productos</h3>
                    </div>
                    <!-- /.card-header -->
                    <!-- form start -->
                    <form id="nuevo-productos" method="POST">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-4">
                                    <div class="form-group">
                                        <label>Categoria</label>
                                        <select id="new-producto-categoria" class="form-control">
                                        </select>
                                    </div>
                                </div>
                                <div class="col-4">
                                    <div class="form-group">
                                        <label>Codigo</label>
                                        <input type="text" class="form-control" id="new-producto-codigo">
                                    </div>
                                </div>
                                <div class="col-4">
                                    <div class="form-group">
                                        <label>Nombre Producto</label>
                                        <input type="text" class="form-control" id="new-producto-nombre">
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-4">
                                    <div class="form-group">
                                        <label>Imagen</label>
                                        <input class="form-control" type="file" id="new-producto-img" accept="image/*">

                                    </div>

                                </div>
                                <div class="col-4">
                                    <div class="form-group">
                                        <label>Stock</label>
                                        <input type="text" class="form-control" placeholder="0" readonly
                                            id="new-producto-stock">
                                    </div>
                                </div>
                                <div class="col-4">
                                    <div class="form-group">
                                        <label>Fecha de registro</label>
                                        <input type="date" class="form-control" required  min=<?php $hoy=date("Y-m-d"); echo $hoy;?> id="new-producto-fecha">
                                    </div>
                                </div>
                            </div>

                            <div class="row">

                                <div class="col-12">
                                    <div class="form-group">
                                        <label>Descripcion</label>
                                        <textarea id="new-producto-descripcion" class="form-control"
                                            rows="3"></textarea>
                                    </div>
                                </div>


                            </div>

                        </div>
                        <!-- /.card-body -->

                        <div class="card-footer">
                            <button type="submit" class="btn btn-primary">Guardar</button>
                        </div>
                    </form>
                </div>

            </div>

        </div>

        <div class="row">
            <div class="col-12">
                <div class="card card-dark">
                    <div class="card-header">
                        <h3 class="card-title">Listado de Productos</h3>

                        <div class="card-tools">
                            <button type="button" class="btn btn-tool" data-card-widget="collapse"><i
                                    class="fas fa-minus"></i>
                            </button>
                        </div>

                    </div>

                    <div class="card-body">
                        <div class="div" style="overflow: auto;">
                            <table id="tabla-productos" class="table table-bordered table-striped">
                                <thead>
                                    <tr>
                                        <th style="width: 10px">#</th>

                                        <th>Imagen</th>
                                        <th>Codigo</th>
                                        <th>Nombre</th>
                                        <th>Descripcion</th>
                                        <th>Categoria</th>
                                        <th>Stock</th>
                                        <th>Precio Compra</th>
                                        <th>Precio Venta</th>
                                        <th>Fecha</th>
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
    </div><!-- /.container-fluid -->
</div>
<!-- /.content -->
</div>
<!-- /.content-wrapper -->


<!-- Modal de categorias -->


<!-- Modales -->
<div class="modal fade" id="modal-registro-categoria">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header bg-dark">
                <h4 class="modal-title">Registrar Categoria</h4>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <div class="contanier-fluid">
                    <div class="row">

                        <div class="col-12 col-md-10 mt-3">
                            <form id="nueva-categoria" method="POST">
                                <label for="">Categoria</label>
                                <input id="new-categoria-nombre" type="text" name="categoria" class="form-control"
                                    maxlength="200" minlength="3">
                                <button class="btn btn-primary mt-2" type="submit">
                                    <i class="fas fa-save mr-2"></i>Guardar
                                </button>
                            </form>

                            <div class="col-12 mt-3">
                                <div class="card card-dark">
                                    <div class="card-header">
                                        <h3 class="card-title">Listado de Categorias</h3>

                                        <div class="card-tools">
                                            <button type="button" class="btn btn-tool" data-card-widget="collapse"><i
                                                    class="fas fa-minus"></i>
                                            </button>
                                        </div>

                                    </div>

                                    <div class="card-body">
                                        <div class="div" style="overflow: auto;">
                                            <table id="tabla-categoria" class="table table-bordered table-striped">
                                                <thead>
                                                    <tr>
                                                        <th style="width: 10px">#</th>
                                                        <th>Categoria</th>
                                                        <th>Acciones</th>
                                                    </tr>
                                                </thead>
                                                <tbody>

                                            </table>
                                        </div>
                                    </div>

                                </div>
                            </div>
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

<!-- MODAL EDITAR -->
<div class="modal fade" id="modal-editar-producto">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header bg-dark">
                <h4 class="modal-title">Editar Producto</h4>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <div class="contanier-fluid">
                    <form id="actualizar-producto" method="POST">

                        <div class="row ">
                            <div class="col-12 col-md-6 form-group">
                                <label for="">Categoria</label>
                                <select id="e-categoria-producto" class="form-control"></select>
                            </div>
                            <div class="col-12 col-md-6 form-group">
                                <input type="hidden" id="e-producto-id">
                                <label for="">Nombre</label>
                                <input id="e-nombre-producto" type="text" name="nombre" class="form-control">
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12 col-md-6 form-group">
                                <label for="">Descripcion</label>
                                <input id="e-descripcion-producto" type="text" name="descripcion" class="form-control">
                            </div>
                            <div class="col-12 col-md-6 form-group">
                                <label for="">Precio Venta</label>
                                <input id="e-precio-venta-producto" type="text" class="form-control">
                            </div>
                        </div>
                    </form>
                    <div class="row">
                        <div class="col-12 form-group text-right">
                            <button class="btn btn-primary" id="btn-update-producto" type="button">
                                <i class="fas fa-save mr-2"></i>Guardar</button>
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
<script src="<?=BASE?>views/dist/js/scripts/gestionproductos.js?ver=1.1.1.6"></script>