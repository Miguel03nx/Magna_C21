<?php declare(strict_types=1);

class AuthController extends Controller {
    private User $userModel;

    public function __construct() {
        $this->userModel = $this->model('User');
        session_start();
    }

    public function login(): void {
        $this->view('auth/login');
    }

    public function authenticate(): void {
        $email = $_POST['email'] ?? '';
        $password = $_POST['password'] ?? '';

        $user = $this->userModel->getUserByEmail($email);

        if ($user && password_verify($password, $user['password'])) {
            $_SESSION['user_id'] = $user['id'];
            $_SESSION['user_type'] = $user['user_type'];
            $this->redirect('/users');
            exit;
        } else {
            echo "Invalid credentials.";
        }
    }

    public function logout(): void {
        session_start();
        session_destroy();
        $this->redirect('/auth/login');
        exit;
    }
}
