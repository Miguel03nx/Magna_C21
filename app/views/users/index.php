<?php require_once './app/views/layout/header.php'; ?>
<?php require_once './app/views/layout/sidebar.php'; ?>

<main>
    <h1>User List</h1>
    <a href="/users/create">Add User</a>
    <ul>
        <?php foreach ($data['users'] as $user): ?>
            <li>
                <?= htmlspecialchars($user['first_name']) ?>
                <?= htmlspecialchars($user['last_name']) ?>
                <?= htmlspecialchars($user['email']) ?>
                <a href="<?= BASE_URL ?>/users/edit/<?= $user['id'] ?>">Edit</a>
                <a href="<?= BASE_URL ?>/users/delete/<?= $user['id'] ?>">Delete</a>
            </li>
        <?php endforeach; ?>
    </ul>
</main>
<?php require_once './app/views/layout/footer.php'; ?>