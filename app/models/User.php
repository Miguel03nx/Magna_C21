<?php declare(strict_types=1);

require_once './core/Database.php';

class User {
    private Database $db;

    public function __construct() {
        $this->db = new Database();
    }

    public function getAllUsers(): array {
        return $this->db->query("SELECT * FROM users")->fetchAll();
    }

    public function getUserById(int $id): array {
        $stmt = $this->db->query("SELECT * FROM users WHERE id = ?", [$id]);
        return $stmt->fetch();
    }

    public function createUser(string $first_name, string $last_name, string $email, string $password, string $user_type): void {
        $hashedPassword = password_hash($password, PASSWORD_DEFAULT);
        $this->db->query(
            "INSERT INTO users (first_name, last_name, email, password, user_type) VALUES (?, ?, ?, ?, ?)",
            [$first_name, $last_name, $email, $hashedPassword, $user_type]
        );
    }

    public function updateUser(int $id, string $first_name, string $last_name, string $email, string $user_type): void {
        $this->db->query("UPDATE users SET first_name = ?, last_name = ?, email = ?, user_type = ? WHERE id = ?", [$first_name, $last_name, $email, $user_type, $id]);
    }

    public function deleteUser(int $id): void {
        $this->db->query("DELETE FROM users WHERE id = ?", [$id]);
    }

    public function getUserByEmail(string $email): ?array {
        $stmt = $this->db->query("SELECT * FROM users WHERE email = ?", [$email]);
        $user = $stmt->fetch();
        return $user ?: null;
    }

    public function updateUserPassword(int $id, string $newPassword): void {
        $hashed = password_hash($newPassword, PASSWORD_DEFAULT);
        $this->db->query("UPDATE users SET password = ? WHERE id = ?", [$hashed, $id]);
    }
}
