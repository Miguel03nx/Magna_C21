<?php
require_once 'config/config.php';

// Get URI path
$uri = trim(parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH), '/');

// Remove "myapp/public" from URI if needed (adjust for your folder name)
$baseFolder = './'; // Change this if your project folder is different
if (str_starts_with($uri, $baseFolder)) {
    $uri = substr($uri, strlen($baseFolder));
}
$uri = trim($uri, '/');

// Parse parts
$uriParts = explode('/', $uri);

// Default controller and method
$controllerName = !empty($uriParts[0]) ? ucfirst($uriParts[0]) . 'Controller' : 'HomeController';
$method = $uriParts[1] ?? 'index';
$params = array_slice($uriParts, 2);

// Build controller file path
$controllerFile = "app/controllers/$controllerName.php";

// Load and run controller/method
if (file_exists($controllerFile)) {
    require_once 'core/Controller.php';
    require_once $controllerFile;

    $controller = new $controllerName();

    if (method_exists($controller, $method)) {
        call_user_func_array([$controller, $method], $params);
    } else {
        http_response_code(404);
        echo "Error: Method '$method' not found in controller '$controllerName'.";
    }
} else {
    http_response_code(404);
    echo "Error: Controller '$controllerName' not found.";
}
