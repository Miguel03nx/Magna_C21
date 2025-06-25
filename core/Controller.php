<?php
require_once './core/Auth.php';
class Controller {
    public function __construct(bool $requireAuth = false) {
        if ($requireAuth) {
            requireLogin();
        }
    }

    protected function protect(): void {
        requireLogin();
    }

    protected function isLoggedIn(): bool {
        return isLoggedIn();
    }

    public function model($model) {
        require_once "./app/models/$model.php";
        return new $model();
    }

    public function view($view, $data = []) {
        require_once "./app/views/$view.php";
    }
}
