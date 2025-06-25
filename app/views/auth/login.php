<h1>Login</h1>
<form method="POST" action="<?= BASE_URL ?>/auth/authenticate">
    <input type="email" name="email" placeholder="Email" required><br>
    <input type="password" name="password" placeholder="Password" required><br>
    <button type="submit">Login</button>
</form>