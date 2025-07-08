<?php 
class ConceptoController extends Controller {
    public function concepto(){
        $nombre = 'Gerenciales';
        $this->view('concepto/concepto21', ['nombre' => $nombre]);
    }
}