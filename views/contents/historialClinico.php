<!-- Content Header (Page header) -->
<div class="content-header">
    <div class="container-fluid">
        <div class="row mb-2">
            <div class="col-sm-6">
                <h1 class="m-0">Historial Clinico</h1>
            </div><!-- /.col -->
            <div class="col-sm-6">
                <ol class="breadcrumb float-sm-right">
                    <li class="breadcrumb-item"><a href="#">Inicio</a></li>
                    <li class="breadcrumb-item active">Registro</li>
                </ol>
            </div><!-- /.col -->
        </div><!-- /.row -->
    </div><!-- /.container-fluid -->
</div>
<!-- /.content-header -->

<!-- Main content -->
<div class="content">
    <div class="container-fluid">

        <div class="well">
            <div class="row">
                <div class="col-xs-4 col-sm-4 col-md-3">
                    <div class="form-group row">
                        <!--    <label for="nombre" class="col-form-label col-sm-4">Paciente:</label> -->
                        <div class="col-sm-8">
                            <button class="btn btn-primary btn-sm mb-2 mr-2 " data-toggle="modal"
                                data-target="#modal-buscar-paciente" data-backdrop="static" data-keyboard="false"><i
                                    class="fa fa-check mr-2"></i>Seleccionar
                                Paciente</button>
                        </div>
                    </div>
                </div>

                <div class="col-xs-1 col-sm-1 col-md-1">
                    <div class="form-group row">    
                        <h3>
                            <span id="num-consulta" class="float-right badge bg-dark" >----</span>
                        </h3>

                    </div>  
                </div>
                <div class="col-xs-4 col-sm-4 col-md-3">
                    <div class="form-group row">
                        <input type="hidden" id="h-cli-id">
                        <input type="hidden" id ="h-masc-id">
                        <label for="apellido" class="col-form-label col-sm-4">Paciente:</label>
                        <div class="col-sm-8">
                            <input id="c-h-paciente" readOnly type="text" name="nombre"
                                class="form-control form-control-sm" maxlength="200" minlength="3">
                        </div>
                    </div>
                </div>
                <div class="col-xs-4 col-sm-4 col-md-3">
                    <div class="form-group row">
                        <label for="nombre" class="col-form-label col-sm-4">Propietario: </label>
                        <div class="col-sm-8">
                            <input id="c-h-propietario" readOnly type="text" name="propietario"
                                class="form-control form-control-sm" maxlength="200" minlength="3">
                        </div>
                    </div>
                </div>
                <div class="col-xs-2 col-sm-2 col-md-2">
                    <div class="form-group row">
                        <label class="col-form-label col-sm-4">Fecha:</label>
                        <div class="col-sm-8">
                            <input id="c-h-fecha" readonly type="text" class="form-control form-control-sm"
                                value="<?=date('d/m/Y')?>">
                        </div>
                    </div>
                </div>
            </div>

        </div>

        <div class="row">
            <div class="col-12">
                <div class="card card-outline card-primary">
                    <div class="card-header">
                        <h3 class="card-title">Nueva Historia Clinica</h3>

                        <div class="card-tools">
                            <button type="button" class="btn btn-tool" data-card-widget="collapse">
                                <i class="fas fa-minus"></i>
                            </button>
                        </div>
                        <!-- /.card-tools -->
                    </div>
                    <!-- /.card-header -->
                    <div class="card-body" style="display: block;">
                        <div class="row">
                            <div class="col-12">
                                <div class="form-group">
                                    <label>Motivo de la Consulta:</label>
                                    <textarea id="motivo-consulta" class="form-control" rows="4"></textarea>
                                </div>
                            </div>

                            <div class="col-12">
                                <div id="accordion">
                                    <div class="card card-info">
                                        <div class="card-header">
                                            <h4 class="card-title w-100">
                                                <a class="d-block w-100 collapsed" data-toggle="collapse"
                                                    href="#collapseOne" aria-expanded="false">
                                                    Antecedentes
                                                </a>
                                            </h4>
                                        </div>
                                        <div id="collapseOne" class="collapse" data-parent="#accordion">
                                            <div class="card-body">
                                                <div class="row">
                                                    <div class="col-12 col-md-4">
                                                        <div class="form-group">
                                                            <label>Cirugias:</label>
                                                            <textarea id="h-cirugias" class="form-control"
                                                                rows="3"></textarea>
                                                        </div>
                                                    </div>
                                                    <div class="col-12 col-md-4">
                                                        <div class="form-group">
                                                            <label>Descripcion de la Cirugia:</label>
                                                            <textarea id="motivo-cirugia" class="form-control"
                                                                rows="3"></textarea>
                                                        </div>
                                                    </div>
                                                    <div class="col-12 col-md-4">
                                                        <div class="form-group">
                                                            <label>Fecha Cirugia</label>
                                                            <input id="c-h-fecha-cirugia" type="date"
                                                                class="form-control form-control-sm">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card card-info">
                                        <div class="card-header">
                                            <h4 class="card-title w-100">
                                                <a class="d-block w-100 collapsed" data-toggle="collapse"
                                                    href="#collapseTwo" aria-expanded="false">
                                                    Examen Fisico
                                                </a>
                                            </h4>
                                        </div>
                                        <div id="collapseTwo" class="collapse" data-parent="#accordion" style="">
                                            <div class="card-body">
                                                <div class="row">
                                                    <div class="col-12 col-md-2">
                                                        <label>Temperatura</label>
                                                        <div class="input-group mb-3">
                                                            <div class="input-group-prepend">
                                                                <span class="input-group-text">
                                                                    <i class="fas fa-temperature-high"></i>
                                                                </span>
                                                            </div>
                                                            <input type="text" id="h-temperatura" class="form-control"
                                                                placeholder="ºC">
                                                        </div>
                                                    </div>

                                                    <div class="col-12 col-md-2">
                                                        <label>Peso</label>
                                                        <div class="input-group mb-3">
                                                            <div class="input-group-prepend">
                                                                <span class="input-group-text">
                                                                    <i class="fas fa-weight"></i>
                                                                </span>
                                                            </div>
                                                            <input type="text" id="h-peso" class="form-control"
                                                                placeholder="Kg">
                                                        </div>
                                                    </div>

                                                    <div class="col-12 col-md-2">
                                                        <label>Hidratacion</label>
                                                        <div class="input-group mb-3">
                                                            <div class="input-group-prepend">
                                                                <span class="input-group-text">
                                                                    <i class="fas fa-h-square"></i>
                                                                </span>
                                                            </div>
                                                            <input type="text" id="h-hidratacion" class="form-control">
                                                        </div>
                                                    </div>


                                                    <div class="col-12 col-md-2">
                                                        <label>F. C.</label>
                                                        <div class="input-group mb-3">
                                                            <div class="input-group-prepend">
                                                                <span class="input-group-text">
                                                                    <i class="fas fa-heartbeat"></i>
                                                                </span>
                                                            </div>
                                                            <input type="text" id="h-f-c" class="form-control"
                                                                placeholder="/minuto">

                                                        </div>
                                                    </div>

                                                    <div class="col-12 col-md-2">
                                                        <label>Pulso</label>
                                                        <div class="input-group mb-3">
                                                            <div class="input-group-prepend">
                                                                <span class="input-group-text">
                                                                    <i class="fas fa-stethoscope"></i>
                                                                </span>
                                                            </div>
                                                            <input type="text" id="h-pulso" class="form-control"
                                                                placeholder="/minuto">

                                                        </div>
                                                    </div>

                                                    <div class="col-12 col-md-2">
                                                        <label>F.R.</label>
                                                        <div class="input-group mb-3">
                                                            <div class="input-group-prepend">
                                                                <span class="input-group-text">
                                                                    <i class="fas fa-lungs"></i>
                                                                </span>
                                                            </div>
                                                            <input type="text" id="h-f-r" class="form-control"
                                                                placeholder="/minuto">

                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="row">
                                                    <div class="col-12 col-md-6">
                                                        <div class="form-group">
                                                            <label>Diagnostico:</label>
                                                            <textarea id="motivo-diagnostico" class="form-control"
                                                                rows="3"></textarea>
                                                        </div>

                                                    </div>
                                                    <div class="col-12 col-md-6">
                                                        <div class="form-group">
                                                            <label>Tratamiento:</label>
                                                            <textarea id="motivo-tratamiento" class="form-control"
                                                                rows="3"></textarea>
                                                        </div>

                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <div class="card card-info">
                                        <div class="card-header">
                                            <h4 class="card-title w-100">
                                                <a class="d-block w-100 collapsed" data-toggle="collapse"
                                                    href="#collapseThree" aria-expanded="false">
                                                    Prescripción
                                                </a>
                                            </h4>
                                        </div>
                                        <div id="collapseThree" class="collapse" data-parent="#accordion" style="">
                                            <div class="card-body">
                                                <div class="row">
                                                    <div class="col-12">
                                                        <div class="form-group">
                                                            <label>Descripcion:</label>
                                                            <textarea id="motivo-prescripcion" class="form-control"
                                                                rows="3"></textarea>
                                                        </div>

                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        <div class="row d-flex justify-content-end">
                            <button id="guardar-historial" type="button" class="btn btn-outline-primary">
                                <i class="fas fa-file-medical-alt mr-2"></i>Guardar Historia Clinica</button>
                        </div>
                    </div>
                    <!-- /.card-body -->
                </div>
            </div>
        </div>





    </div>

    <!-- /.row -->
</div><!-- /.container-fluid -->
</div>
<!-- /.content -->

<!-- /.content-wrapper -->




<!-- Modales -->
<div class="modal fade" id="modal-buscar-paciente">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header bg-dark">
                <h4 class="modal-title">Mascotas Registradas</h4>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <div class="row">
                    <div class="col-12">
                        <div class="form-group">
                            <input type="hidden" id="mascota-id">
                            <label for="">Buscar Mascota</label>
                            <input id="buscar-mascota" type="text" class="form-control"
                                placeholder="Ingrese el nombre de la Mascota">
                        </div>
                    </div>
                </div>
                <div class="row" style="height: 200px !important; overflow: auto;">
                    <div class="col-12">
                        <div class="tabla-buscar-mascota">
                            <table class="table table-hover text-nowrap">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th style="display: none">ID</th>
                                        <th>Nombre</th>
                                        <th>Tipo</th>
                                        <th>Genero</th>
                                        <th>Raza</th>
                                        <th>Edad</th>
                                        <th>OK</th>
                                    </tr>
                                </thead>
                                <tbody id="mascota-body">

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
<script src="<?=BASE?>views/dist/js/scripts/historialclinico.js?ver=1.1.1"></script>