<?php declare(strict_types=1);

require_once './core/Database.php';

class Curso {
    private Database $db;

    public function __construct() {
        $this->db = new Database();
    }

    public function getAllCursos(): array {
        return $this->db->query("SELECT * FROM cursos")->fetchAll();
    }
}