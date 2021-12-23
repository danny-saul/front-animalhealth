<?php

class CitasController{

    public function agendar(){
        include_once 'views/contents/agendarCitas.php';
     
    }
    public function pendientes(){
        include_once 'views/contents/citasPendientes.php';
     
    }

    public function atendidas(){
        include_once 'views/contents/citasAtendidas.php';
     
    }


}