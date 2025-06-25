<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>My MVC App</title>
    <link rel="stylesheet" href="<?= BASE_URL ?>/assets/style.css">
</head>
<body>
    <header>
        <nav>
            <a href="<?= BASE_URL ?>/">Home</a>
            <?php if (isLoggedIn()): ?>
                <a href="<?= BASE_URL ?>/user">Users</a>
                <a href="<?= BASE_URL ?>/auth/logout">Logout</a>
            <?php else: ?>
                <a href="<?= BASE_URL ?>/auth/login">Login</a>
            <?php endif; ?>
        </nav>
    </header>
    <div class="container">
