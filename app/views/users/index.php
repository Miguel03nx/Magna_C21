<?php require_once './app/views/layout/app_start.php'; ?>



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

<?php require_once './app/views/layout/app_end.php'; ?>