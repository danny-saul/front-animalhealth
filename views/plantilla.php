
  <?php

    require_once 'conf/base.php';
    require_once 'conf/controller.php';

    require_once 'views/layouts/header.php';

    if(count($_GET) == 0){
        require_once 'views/pages/login.php';
    }else
    if(isset($_GET['url']) && $_GET['url'] == 'login'){
        require_once 'views/pages/login.php';
    }else
    if(isset($_GET['url']) && $_GET['url'] == 'crearcuentacliente'){
        require_once 'views/pages/crearcuentacliente.php';
    }else{
        $controller = new Controller();

        if(!$controller->procesar()){
            //pagina de error 404
            require_once 'views/pages/404.php';
        }else{
            require_once 'views/layouts/navbar.php';
            require_once 'views/layouts/asidebar.php';
            
            $controller->include();
            require_once 'views/layouts/asidebar_rigth.php';
        }  
    }

    require_once 'views/layouts/footer.php';

