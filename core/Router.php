<?php
class Router {
    private $routes = [];

    public function add($pattern, $controller, $method) {
        // Convert pattern to regex
        $regex = preg_replace('#\{([\w]+)\}#', '(?P<\1>[^/]+)', $pattern);
        $regex = "#^" . $regex . "$#";
        $this->routes[$regex] = ['controller' => $controller, 'method' => $method];
    }

    public function match($uri) {
        foreach ($this->routes as $pattern => $route) {
            if (preg_match($pattern, $uri, $matches)) {
                // Extract only named params
                $params = array_filter(
                    $matches,
                    fn($key) => !is_int($key),
                    ARRAY_FILTER_USE_KEY
                );

                return [
                    'controller' => $route['controller'],
                    'method' => $route['method'],
                    'params' => $params
                ];
            }
        }
        return null;
    }
}
