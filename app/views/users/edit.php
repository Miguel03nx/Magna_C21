<h1>Edit User</h1>
<form method="POST" action="<?= BASE_URL ?>/users/update/<?= $data['user']['id'] ?>">
    <input type="text" name="name" value="<?= htmlspecialchars($data['user']['name']) ?>" required>
    <input type="email" name="email" value="<?= htmlspecialchars($data['user']['email']) ?>" required>
    <select name="role">
        <option value="user" <?= $data['user']['role'] === 'user' ? 'selected' : '' ?>>User</option>
        <option value="admin" <?= $data['user']['role'] === 'admin' ? 'selected' : '' ?>>Admin</option>
    </select>
    <button type="submit">Update</button>
</form>
