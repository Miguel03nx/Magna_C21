<?php declare(strict_types=1);

class UsersController extends Controller {
    private User $userModel;

    public function __construct() {
        parent::__construct(true);
        requireRole('Admin');
        $this->userModel = $this->model('User');
    }

    public function index(): void {
        $users = $this->userModel->getAllUsers();
        $this->view('users/index', ['users' => $users]);
    }

    public function create(): void {
        $this->view('users/create');
    }

    public function store(): void {
        $name = $_POST['name'] ?? '';
        $email = $_POST['email'] ?? '';
        $password = $_POST['password'] ?? '';
        $role = $_POST['role'] ?? 'user';

        if ($name) {
            $this->userModel->createUser($name, $email, $password, $role);
            $this->redirect("/users");
            exit;
        } else {
            echo "Name is required.";
        }
    }

    public function edit($id): void {
        $user = $this->userModel->getUserById((int)$id);
        $this->view('users/edit', ['user' => $user]);
    }

    public function update($id): void {
        $name = $_POST['name'] ?? '';
        $email = $_POST['email'] ?? '';
        $role = $_POST['role'] ?? 'user';
        if ($name) {
            $this->userModel->updateUser((int)$id, $name, $email, $role);
            $this->redirect("/users");
            exit;
        } else {
            echo "Name is required.";
        }
    }

    public function delete($id): void {
        $this->userModel->deleteUser((int)$id);
        $this->redirect("/users");
        exit;
    }

    public function changePassword(): void {
        $this->view('users/change_password');
    }

    public function updatePassword(): void {
        $current = $_POST['current_password'] ?? '';
        $new = $_POST['new_password'] ?? '';
    
        if (!$current || !$new) {
            echo "All fields are required.";
            return;
        }
    
        $userId = $_SESSION['user_id'] ?? null;
        if (!$userId) {
            $this->redirect("/auth/login");
            exit;
        }
    
        $user = $this->userModel->getUserById((int)$userId);
    
        if (!$user || !password_verify($current, $user['password'])) {
            echo "Current password is incorrect.";
            return;
        }
    
        $this->userModel->updateUserPassword($userId, $new);
        $this->redirect("/users");
    }
}