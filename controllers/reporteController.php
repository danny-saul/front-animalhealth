<?php

class ReporteController{

    public function compra(){
        include_once 'views/contents/reportescompras.php';
     
    }
    public function venta(){
        include_once 'views/contents/reportesventas.php';
     
    }
    

    public function servicios(){
        include_once 'views/contents/reportesserviciosadquiridos.php';
     
    }
    public function medicinamasc(){
        include_once 'views/contents/reportesmedicinamascomprada.php';
     
    }
    public function medicinamasv(){
        include_once 'views/contents/reportesmedicinamasvendida.php';
     
    }
    public function agendamientoxdoc(){
        include_once 'views/contents/reportesagendamientodecitasxdoct.php';
     
    }
    public function mascotasmasatendidas(){
        include_once 'views/contents/reportesmascotasmasatendidas.php';
     
    }
    
    
    
    

    


}