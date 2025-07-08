<?php declare(strict_types=1);

class UsersController extends Controller {
    private User $userModel;

    public function __construct() {
        parent::__construct(true);
        requireRole('admin');
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
        $first_name = $_POST['first_name'] ?? '';
        $last_name = $_POST['last_name'] ?? '';
        $email = $_POST['email'] ?? '';
        $password = $_POST['password'] ?? '';
        $user_type = $_POST['user_type'] ?? '';

        if ($first_name && $last_name && $email && $password) {
            $this->userModel->createUser($first_name, $last_name, $email, $password, $user_type);
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
        $first_name = $_POST['first_name'] ?? '';
        $last_name = $_POST['last_name'] ?? '';
        $email = $_POST['email'] ?? '';
        $user_type = $_POST['user_type'] ?? '';
        if ($first_name && $last_name && $email && $user_type) {
            $this->userModel->updateUser((int)$id, $first_name, $last_name, $email, $user_type);
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