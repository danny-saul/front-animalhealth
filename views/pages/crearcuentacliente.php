<style>
.content-select {
    max-width: 100%;
    position: relative;
}

.content-select select {
    display: inline-block;
    width: 100%;
    cursor: pointer;
    padding: 7px 10px;
    height: 42px;
    outline: 0;
    border: 0;
    border-radius: 0;
    background: #f0f0f0;
    color: #7b7b7b;
    font-size: 1em;
    color: #999;
    font-family:
        'Quicksand', sans-serif;
    border: 2px solid rgba(0, 0, 0, 0.2);
    border-radius: 12px;
    position: relative;
    transition: all 0.25s ease;
}

.content-select select:hover {
    background: #B1E8CD;
}

/* 
Creamos la fecha que aparece a la izquierda del select.
Realmente este elemento es un cuadrado que sólo tienen
dos bordes con color y que giramos con transform: rotate(-45deg);
*/
.content-select i {
    position: absolute;
    right: 20px;
    top: calc(50% - 13px);
    width: 16px;
    height: 16px;
    display: block;
    border-left: 4px solid #2AC176;
    border-bottom: 4px solid #2AC176;
    transform: rotate(-45deg);
    /* Giramos el cuadrado */
    transition: all 0.25s ease;
}

.content-select:hover i {
    margin-top: 3px;
}

.wrap-login1001 {
    width: 960px;
    background: #fff;
    border-radius: 10px;
    overflow: hidden;

    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 1px 130px 33px 95px;

}
</style>

<body>

    <div class="limiter">
        <div class="container-login100">
            <div class="wrap-login100">

                <div class="col-12">
                    <span class="login100-form-title">ANIMAL HEALTH</span>
                </div>

                <form class="login100-form validate-form" id="form-crear-cuenta-cliente" method="post">

                    <div class="wrap-input100 validate-input">
                        <input id="ccc-cedula" class="input100" type="text" name="cedula" placeholder="Cedula"
                            maxlength="10" minlength="10" required>
                        <span class="focus-input100"></span>
                        <span class="symbol-input100">
                            <i class="far fa-closed-captioning"></i>
                        </span>
                    </div>

                    <div class="wrap-input100 validate-input">
                        <input id="ccc-nombre" class="input100" type="text" name="nombre" placeholder="Nombre"
                            maxlength="200" minlength="3">
                        <span class="focus-input100"></span>
                        <span class="symbol-input100">
                            <i class="far fa-address-book"></i>
                        </span>
                    </div>

                    <div class="wrap-input100 validate-input">
                        <input id="ccc-apellido" class="input100" type="text" name="apellido" placeholder="Apellido"
                            maxlength="200" minlength="3">
                        <span class="focus-input100"></span>
                        <span class="symbol-input100">
                            <i class="far fa-address-book"></i>
                        </span>
                    </div>

                    <div class="wrap-input100 validate-input">
                        <input id="ccc-telefono" class="input100" type="text" name="telefono" placeholder="Telefono"
                            maxlength="10" minlength="10">
                        <span class="focus-input100"></span>
                        <span class="symbol-input100">
                            <i class="fas fa-phone-square"></i>
                        </span>
                    </div>

                    <div class="wrap-input100 validate-input">
                        <input id="ccc-direccion" class="input100" type="text" name="direccion" placeholder="Direccion">
                        <span class="focus-input100"></span>
                        <span class="symbol-input100">
                            <i class="fas fa-route"></i>
                        </span>
                    </div>

                    <div class="col-12 form-group content-select">
                        <select name="" id="ccc-sexo" class="input100"></select>
                    </div>
                </form>

                <form class="login100-form validate-form" id="form-crear-cuenta-cliente2" method="post">
                    <div class="wrap-input100 validate-input">
                        <input type="hidden" id="ccc-rol-id">
                        <input id="ccc-cargo" readonly class="input100" type="text" name="cargo" placeholder="Cargo">
                        <span class="symbol-input100">
                            <i class="fas fa-user-check"></i>
                        </span>
                    </div>

                    <div class="wrap-input100 validate-input">
                        <input id="ccc-usuario" class="input100" type="text" name="usuario"
                            placeholder="Nombre de Usuario">
                        <span class="focus-input100"></span>
                        <span class="symbol-input100">
                            <i class="fas fa-user-check"></i>
                        </span>
                    </div>

                    <div class="wrap-input100 validate-input">
                        <input id="ccc-correo" class="input100" type="email" name="email" placeholder="Correo">
                        <span class="focus-input100"></span>
                        <span class="symbol-input100">
                            <i class="fa fa-envelope" aria-hidden="true"></i>
                        </span>
                    </div>

                    <div class="wrap-input100 validate-input">
                        <input id="ccc-clave" class="input100" type="password" name="password" placeholder="Contraseña">
                        <span class="focus-input100"></span>
                        <span class="symbol-input100">
                            <i class="fa fa-lock" aria-hidden="true"></i>
                        </span>
                    </div>

                    <div class="wrap-input100 validate-input">
                        <input id="ccc-clave2" class="input100" type="password" name="password2"
                            placeholder="Confirmar Contraseña">
                        <span class="focus-input100"></span>
                        <span class="symbol-input100">
                            <i class="fa fa-lock" aria-hidden="true"></i>
                        </span>
                    </div>

                    <div class="container-login100-form-btn">
                        <button type="submit" class="login100-form-btn">
                            crear cuenta
                        </button>
                    </div>

                    <div class="text-center p-t-30">
                        <a class="txt2" href="login">
                            Ir al login
                            <i class="fa fa-long-arrow-right m-l-5" aria-hidden="true"></i>
                        </a>
                    </div>
                </form>
            </div>
        </div>
    </div>
</body>

<script src="<?=BASE?>views/dist/js/scripts/creaCuentaCliente.js"></script>