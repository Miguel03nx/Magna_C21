<?php
// define routes
$router->add('', 'HomeController', 'index');
$router->add('auth/login', 'AuthController', 'login');
$router->add('auth/authenticate', 'AuthController', 'authenticate');
$router->add('auth/logout', 'AuthController', 'logout');
$router->add('users', 'UsersController', 'index');
$router->add('gerenciales', 'GerencialesController', 'index');
$router->add('supervisores', 'SupervisoresController', 'landing');
$router->add('rrhh', 'RrhhController', 'landing');