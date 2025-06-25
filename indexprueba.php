<?php
require 'db.php';

$path = $_SERVER['REQUEST_URI'];
$method = $_SERVER['REQUEST_METHOD'];

if ($method === 'POST' && $path === '/users/create-user') {
    require_once 'controllers/userController.php';
    $controller = new UserController($pdo);
    $controller->handleCreateUser($_POST);
    exit;
}
if ($method === 'GET' && $path === '/users/create-user') {
    require_once 'controllers/userController.php';
    $controller = new UserController($pdo);
    $controller->createUser();
    exit;
}
if ($path === '/' || $path === '/users') {
    require_once 'controllers/userController.php';
    $controller = new UserController($pdo);
    $controller->listUsers();
    exit;
} else {
    http_response_code(404);
    echo "404 Not Found";
}