<?php 
class SupervisoresController extends Controller {
    public function landing(){
        $nombre = 'Gerenciales';
        $this->view('supervisores/supervisores', ['nombre' => $nombre]);
    }
}