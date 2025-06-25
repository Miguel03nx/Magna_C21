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

    public function createUser(string $name, string $email, string $password, string $role): void {
        $hashedPassword = password_hash($password, PASSWORD_DEFAULT);
        $this->db->query(
            "INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)",
            [$name, $email, $hashedPassword, $role]
        );
    }

    public function updateUser(int $id, string $name, string $email, string $role): void {
        $this->db->query("UPDATE users SET name = ?, email = ?, role = ? WHERE id = ?", [$name, $email, $role, $id]);
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
