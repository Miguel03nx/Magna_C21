<aside>
    <ul>
        <li><a href="<?= BASE_URL ?>/user">User List</a></li>
        <li><a href="<?= BASE_URL ?>/user/create">Add User</a></li>
        <?php if (hasRole('Admin')): ?>
            <li><a href="<?= BASE_URL ?>/admin/dashboard">Admin Panel</a></li>
        <?php endif; ?>
    </ul>
</aside>
