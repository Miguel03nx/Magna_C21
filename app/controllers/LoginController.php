<?php 
class LoginController extends Controller {
    public function landing(){
        $nombre = 'Gerenciales';
        $this->view('landing/login', ['nombre' => $nombre]);
    }
}