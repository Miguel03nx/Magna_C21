<h1>Create User</h1>
<form method="POST" action="<?= BASE_URL ?>/users/store">
    <input type="text" name="first_name" required placeholder="Name">
    <input type="text" name="last_name" required placeholder="Name">
    <input type="email" name="email" required placeholder="Email">
    <input type="password" name="password" required placeholder="Password">
    <select name="user_type" required>
        <option value="teacher">Teacher</option>
        <option value="student">Student</option>
        <option value="admin">Admin</option>
    </select>
    <button type="submit">Create</button>
</form>
