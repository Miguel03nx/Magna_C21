<?php
// define routes
$router->add('', 'HomeController', 'index');
$router->add('auth/login', 'AuthController', 'login');
$router->add('auth/authenticate', 'AuthController', 'authenticate');
$router->add('auth/logout', 'AuthController', 'logout');
$router->add('users', 'UsersController', 'index');