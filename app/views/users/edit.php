<h1>Edit User</h1>
<form method="POST" action="<?= BASE_URL ?>/users/update/<?= $data['user']['id'] ?>">
    <input type="text" name="first_name" value="<?= htmlspecialchars($data['user']['first_name']) ?>" required>
    <input type="text" name="last_name" value="<?= htmlspecialchars($data['user']['last_name']) ?>" required>
    <input type="email" name="email" value="<?= htmlspecialchars($data['user']['email']) ?>" required>
    <select name="user_type" required>
        <option value="student" <?= $data['user']['user_type'] === 'student' ? 'selected' : '' ?>>student</option>
        <option value="teacher" <?= $data['user']['user_type'] === 'teacher' ? 'selected' : '' ?>>teacher</option>
        <option value="admin" <?= $data['user']['user_type'] === 'admin' ? 'selected' : '' ?>>Admin</option>
    </select>
    <button type="submit">Update</button>
</form>
