<?php 
class RrhhController extends Controller {
    public function landing(){
        $nombre = 'Gerenciales';
        $this->view('rrhh/landing', ['nombre' => $nombre]);
    }
}