<!-- Content Header (Page header) -->
<div class="content-header">
    <div class="container-fluid">
        <div class="row mb-2">
            <div class="col-sm-6">
                <h1 class="m-0">Dashboard Administrador</h1>
            </div><!-- /.col -->
            <div class="col-sm-6">
                <ol class="breadcrumb float-sm-right">
                    <li class="breadcrumb-item"><a href="#">Inicio</a></li>
                    <li class="breadcrumb-item active">Administrador</li>
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
            <div class="col-lg-3 col-6">
                <!-- small box -->
                <div class="small-box bg-info">
                    <div class="inner">
                        <h3 id="cantidad-usuarios" class="text-dark">0</h3>

                        <p id="nombre-usuario" class="text-white"></p>
                    </div>
                    <div class="icon">
                    <i class="fas fa-users"></i>
                    </div>
                    <a href="<?=BASE?>usuario/registro" class="small-box-footer">Ver Mas <i class="fas fa-arrow-circle-right"></i></a>
                </div>
            </div>
            <!-- ./col -->
            <div class="col-lg-3 col-6">
                <!-- small box -->
                <div class="small-box bg-success">
                    <div class="inner">
                        <h3 id="cantidad-clientes" class="text-dark">0</h3>

                        <p id="nombre-clientes" class="text-white"></p>
                    </div>
                    <div class="icon">
                    <i class="fas fa-user-tie"></i>
                    </div>
                    <a href="#" class="small-box-footer">Ver Mas <i class="fas fa-arrow-circle-right"></i></a>
                </div>
            </div>
            <!-- ./col -->
            <div class="col-lg-3 col-6">
                <!-- small box -->
                <div class="small-box bg-warning">
                    <div class="inner">
                        <h3 id="total-compras">0</h3>

                        <p id="mes-compras" class="text-white"> </p>
                    </div>
                    <div class="icon">
                    <i class="fas fa-cart-arrow-down"></i>
                    </div>
                    <a href="#" class="small-box-footer">Ver Mas <i class="fas fa-arrow-circle-right"></i></a>
                </div>
            </div>
            <!-- ./col -->
            <div class="col-lg-3 col-6">
                <!-- small box -->
                <div class="small-box bg-danger">
                    <div class="inner"> 
                        <h3 id="total-ventas" class="text-dark" >0</h3>

                        <p id="mes-ventas" class="text-white"></p>
                    </div>
                    <div class="icon">
                    <i class="fas fa-comments-dollar"></i>
                    </div>
                    <a href="#" class="small-box-footer">Ver Mas <i class="fas fa-arrow-circle-right"></i></a>
                </div>
            </div>
            <!-- ./col -->
        </div>
        <!-- /.row -->
    </div><!-- /.container-fluid -->
</div>
<!-- /.content -->
</div>
<!-- /.content-wrapper -->

 

<script src="<?=BASE?>views/plugins/Toast/js/Toast.min.js"></script>
<script src="<?=BASE?>views/dist/js/scripts/dashboardAdministrador.js"></script>