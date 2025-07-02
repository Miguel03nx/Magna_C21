<?php 
class GerencialesController extends Controller {
    private Curso $curso_Model;

        public function __construct() {
        $this->curso_Model = $this->model('curso');
    }

    public function index(){
        $cursos = $this->curso_Model->getAllCursos();
        $this->view('gerenciales/index', ['cursos' => $cursos]);
    }
}