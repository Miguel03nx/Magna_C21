<?php
// define routes
$router->add('', 'HomeController', 'index');
$router->add('auth/login', 'AuthController', 'login');
$router->add('auth/authenticate', 'AuthController', 'authenticate');
$router->add('auth/logout', 'AuthController', 'logout');
$router->add('users', 'UsersController', 'index');
$router->add('users/create', 'UsersController', 'create');
$router->add('users/store', 'UsersController', 'store');
$router->add('users/edit/{id}', 'UsersController', 'edit');
$router->add('users/update/{id}', 'UsersController', 'update');
$router->add('users/delete/{id}', 'UsersController', 'delete');
$router->add('gerenciales', 'GerencialesController', 'index');
$router->add('supervisores', 'SupervisoresController', 'landing');
$router->add('rrhh', 'RrhhController', 'landing');
$router->add('concepto21', 'ConceptoController', 'concepto');
$router->add('login', 'LoginController', 'landing');