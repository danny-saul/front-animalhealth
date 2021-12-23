<!-- Content Header (Page header) -->
<div class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1 class="m-0">Registrar Proveedor</h1>
          </div><!-- /.col -->
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item"><a href="#">Proveedores</a></li>
              <li class="breadcrumb-item active">Registrar Proveedor</li>
            </ol>
          </div><!-- /.col -->
        </div><!-- /.row -->
      </div><!-- /.container-fluid -->
    </div>
    <!-- /.content-header -->

    <!-- Main content -->
    <div class="content">
      <div class="container-fluid">
      <button class="btn btn-secondary btn-lg mb-2" data-toggle="modal" data-target="#modal-registro-proveedor"
            data-backdrop="static" data-keyboard="false"><i class="fa fa-plus mr-2"></i>Nuevo Proveedor</button>

     
        <div class="row">
            <div class="col-12">
                <div class="card card-dark">
                    <div class="card-header">
                        <h3 class="card-title">Listado de Proveedores</h3>

                        <div class="card-tools">
                            <button type="button" class="btn btn-tool" data-card-widget="collapse"><i
                                    class="fas fa-minus"></i>
                            </button>
                        </div>

                    </div>

                    <div class="card-body">
                        <div class="div" style="overflow: auto;">
                            <table id="tabla-proveedores" class="table table-bordered table-striped">
                                <thead>
                                    <tr>
                                        <th style="width: 10px">#</th>

                                        <th>Ruc</th>
                                        <th>Razon Social</th>
                                        <th>Telefono</th>
                                        <th>Correo</th>
                                        <th>Direccion</th>
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


  <!-- Modales -->
<div class="modal fade" id="modal-registro-proveedor">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header bg-dark">
                <h4 class="modal-title">Registrar Proveedor</h4>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <div class="contanier-fluid">
                    <form id="nuevo-proveedor" method="POST">

                    <input type="hidden" id="proveedor-id">
                        <div class="row">

                            <div class="col-12 col-md-6 form-group">
                                <label for="">Ruc </label>
                                <input id="new-proveedor-ruc" type="text" class="form-control"  maxlength="13" minlength="13">
                            </div>
                            <div class="col-12 col-md-6 form-group">
                                <label for="">Razon Social</label>
                                <input id="new-proveedor-razon"  type="text" class="form-control">
                            </div>
                        </div>


                        <div class="row ">
                            <div class="col-12 col-md-6 form-group">
                                <label for="">Telefono</label>
                                <input id="new-proveedor-telefono"   type="text" class="form-control"  
                                maxlength="10" minlength="10"  >

                            </div>
                            <div class="col-12 col-md-6 form-group">
                                <label for="">Correo</label>
                                <input id="new-proveedor-correo"   type="text" class="form-control"  >
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12 form-group">
                                <label for="">Direccion</label>
                                <textarea id="new-proveedor-direccion" class="form-control"
                                            rows="3"></textarea>
                            </div>
                       
                        </div>

 
                        <div class="row">
                            <div class="col-12">
                                <button class="btn btn-primary" type="submit"><i
                                        class="fas fa-save mr-2"></i>Guardar</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div class="modal-footer justify-content-between">
            </div>
        </div>
        <!-- /.modal-content -->
    </div>
    <!-- /.modal-dialog -->
</div>


  <!-- Modales EDITAR -->
  <div class="modal fade" id="modal-editar-proveedor">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header bg-dark">
                <h4 class="modal-title">Registrar Proveedor</h4>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <div class="contanier-fluid">
                    <form id="upd-proveedor" method="POST">
                        

                        <div class="row">

                            <div class="col-12 col-md-6 form-group">
                                <label for="">Ruc </label>
                                <input id="upd-proveedor-ruc" type="text" class="form-control"  maxlength="13" minlength="13">
                            </div>
                            <div class="col-12 col-md-6 form-group">
                                <label for="">Razon Social</label>
                                <input id="upd-proveedor-razon"  type="text" class="form-control">
                            </div>
                        </div>


                        <div class="row ">
                            <div class="col-12 col-md-6 form-group">
                                <label for="">Telefono</label>
                                <input id="upd-proveedor-telefono"   type="text" class="form-control"  
                                maxlength="10" minlength="10"  >

                            </div>
                            <div class="col-12 col-md-6 form-group">
                                <label for="">Correo</label>
                                <input id="upd-proveedor-correo"   type="text" class="form-control"  >
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12 form-group">
                                <label for="">Direccion</label>
                                <textarea id="upd-proveedor-direccion" class="form-control"
                                            rows="3"></textarea>
                            </div>
                       
                        </div>
                    </form>
                    <div class="row">
                            <div class="col-12">
                                <button class="btn btn-primary" id="btn-update-proveedor" type="button"><i
                                        class="fas fa-save mr-2"></i>Guardar</button>
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
<script src="<?=BASE?>views/dist/js/scripts/registrarProveedor.js"></script>