<?php
class HomeController extends Controller {
    public function __construct() {
        parent::__construct(true);
        
    }

    public function index() {
        $this->view('home');
    }
}
