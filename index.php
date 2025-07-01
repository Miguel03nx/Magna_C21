<?php
require_once 'config/config.php';
require_once 'core/Router.php';
require_once 'core/RouteDispatcher.php';

$router = new Router();

// Load route definitions
require_once './routes.php';

// Dispatch the current request
$dispatcher = new RouteDispatcher($router, ''); // base path optional
$dispatcher->dispatch();