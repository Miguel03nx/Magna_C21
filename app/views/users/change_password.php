<h1>Change Password</h1>
<form method="POST" action="<?= BASE_URL ?>/users/updatePassword">
    <input type="password" name="current_password" placeholder="Current Password" required><br>
    <input type="password" name="new_password" placeholder="New Password" required><br>
    <button type="submit">Update Password</button>
</form>
