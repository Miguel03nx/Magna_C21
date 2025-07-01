<?php
class RouteDispatcher {
    private $router;
    private $baseFolder;

    public function __construct($router, $baseFolder = '') {
        $this->router = $router;
        $this->baseFolder = trim($baseFolder, '/');
    }

    public function dispatch() {
        // Get cleaned URI
        $uri = $this->getUri();

        // Match route
        $route = $this->router->match($uri);

        if (!$route) {
            http_response_code(404);
            echo "Error: No matching route for URI '$uri'.";
            return;
        }

        $this->runController($route);
    }

    private function getUri() {
        $uri = trim(parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH), '/');
        if (!empty($this->baseFolder) && str_starts_with($uri, $this->baseFolder)) {
            $uri = substr($uri, strlen($this->baseFolder));
        }
        return trim($uri, '/');
    }

    private function runController($route) {
        $controllerName = $route['controller'];
        $method = $route['method'];
        $params = $route['params'];

        $controllerFile = __DIR__ . "/../app/controllers/$controllerName.php";

        if (!file_exists($controllerFile)) {
            http_response_code(404);
            echo "Error: Controller '$controllerName' not found.";
            return;
        }

        require_once __DIR__ . '/Controller.php';
        require_once $controllerFile;

        $controller = new $controllerName();

        if (!method_exists($controller, $method)) {
            http_response_code(404);
            echo "Error: Method '$method' not found in controller '$controllerName'.";
            return;
        }

        call_user_func_array([$controller, $method], $params);
    }
}
