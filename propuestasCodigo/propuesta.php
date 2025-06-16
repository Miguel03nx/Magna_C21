<?php
// Archivo: /crud/usuarios/crear_usuario.php
require_once '../db.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $nombre = $_POST['nombre'];
    $correo = $_POST['correo'];
    $contrasena = password_hash($_POST['contrasena'], PASSWORD_DEFAULT);
    $tipo = $_POST['tipo_usuario'];

    $stmt = $pdo->prepare("INSERT INTO usuarios (nombre, correo, contrasena, tipo_usuario) VALUES (?, ?, ?, ?)");
    $stmt->execute([$nombre, $correo, $contrasena, $tipo]);

    header("Location: listar_usuarios.php");
    exit;
}

?>

<?php // Archivo: /crud/usuarios/editar_usuario.php
require_once '../db.php';

$id = $_GET['id'] ?? null;
if ($id && $_SERVER['REQUEST_METHOD'] === 'POST') {
    $nombre = $_POST['nombre'];
    $correo = $_POST['correo'];
    $tipo = $_POST['tipo_usuario'];

    $stmt = $pdo->prepare("UPDATE usuarios SET nombre = ?, correo = ?, tipo_usuario = ? WHERE id = ?");
    $stmt->execute([$nombre, $correo, $tipo, $id]);

    header("Location: listar_usuarios.php");
    exit;
}
?>

<?php // Archivo: /crud/usuarios/eliminar_usuario.php
require_once '../db.php';

$id = $_GET['id'] ?? null;
if ($id) {
    $stmt = $pdo->prepare("DELETE FROM usuarios WHERE id = ?");
    $stmt->execute([$id]);

    header("Location: listar_usuarios.php");
    exit;
}
?>

<?php // Archivo: /crud/usuarios/listar_usuarios.php
require_once '../db.php';

$stmt = $pdo->query("SELECT * FROM usuarios");
$usuarios = $stmt->fetchAll();
?>

<!DOCTYPE html>
<html>
<head><title>Usuarios</title></head>
<body>
<h1>Lista de Usuarios</h1>
<table border="1">
    <tr><th>ID</th><th>Nombre</th><th>Correo</th><th>Tipo</th><th>Acciones</th></tr>
    <?php foreach ($usuarios as $usuario): ?>
        <tr>
            <td><?= htmlspecialchars($usuario['id']) ?></td>
            <td><?= htmlspecialchars($usuario['nombre']) ?></td>
            <td><?= htmlspecialchars($usuario['correo']) ?></td>
            <td><?= htmlspecialchars($usuario['tipo_usuario']) ?></td>
            <td>
                <a href="editar_usuario.php?id=<?= $usuario['id'] ?>">Editar</a>
                <a href="eliminar_usuario.php?id=<?= $usuario['id'] ?>" onclick="return confirm('¿Eliminar?')">Eliminar</a>
            </td>
        </tr>
    <?php endforeach; ?>
</table>
<a href="crear_usuario.php">Crear nuevo usuario</a>
</body>
</html>

<?php // Archivo: /crud/modulos/crear_modulo.php
require_once '../db.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $titulo = $_POST['titulo'];
    $descripcion = $_POST['descripcion'];
    $dirigido_a = $_POST['dirigido_a'];
    $material_url = $_POST['material_url'];

    $stmt = $pdo->prepare("INSERT INTO modulos (titulo, descripcion, dirigido_a, material_url) VALUES (?, ?, ?, ?)");
    $stmt->execute([$titulo, $descripcion, $dirigido_a, $material_url]);

    header("Location: listar_modulos.php");
    exit;
}
?>

<?php // Archivo: /crud/modulos/editar_modulo.php
require_once '../db.php';

$id = $_GET['id'] ?? null;
if ($id && $_SERVER['REQUEST_METHOD'] === 'POST') {
    $titulo = $_POST['titulo'];
    $descripcion = $_POST['descripcion'];
    $dirigido_a = $_POST['dirigido_a'];
    $material_url = $_POST['material_url'];

    $stmt = $pdo->prepare("UPDATE modulos SET titulo = ?, descripcion = ?, dirigido_a = ?, material_url = ? WHERE id = ?");
    $stmt->execute([$titulo, $descripcion, $dirigido_a, $material_url, $id]);

    header("Location: listar_modulos.php");
    exit;
}
?>

<?php // Archivo: /crud/modulos/eliminar_modulo.php
require_once '../db.php';

$id = $_GET['id'] ?? null;
if ($id) {
    $stmt = $pdo->prepare("DELETE FROM modulos WHERE id = ?");
    $stmt->execute([$id]);

    header("Location: listar_modulos.php");
    exit;
}
?>

<?php // Archivo: /crud/modulos/listar_modulos.php
require_once '../db.php';

$stmt = $pdo->query("SELECT * FROM modulos");
$modulos = $stmt->fetchAll();
?>

<!DOCTYPE html>
<html>
<head><title>Módulos</title></head>
<body>
<h1>Lista de Módulos</h1>
<table border="1">
    <tr><th>ID</th><th>Título</th><th>Descripción</th><th>Dirigido a</th><th>Material</th><th>Acciones</th></tr>
    <?php foreach ($modulos as $modulo): ?>
        <tr>
            <td><?= htmlspecialchars($modulo['id']) ?></td>
            <td><?= htmlspecialchars($modulo['titulo']) ?></td>
            <td><?= htmlspecialchars($modulo['descripcion']) ?></td>
            <td><?= htmlspecialchars($modulo['dirigido_a']) ?></td>
            <td>
                <?php if (!empty($modulo['material_url'])): ?>
                    <a href="<?= htmlspecialchars($modulo['material_url']) ?>" target="_blank">Ver PDF</a>
                <?php else: ?>
                    Sin material
                <?php endif; ?>
            </td>
            <td>
                <a href="editar_modulo.php?id=<?= $modulo['id'] ?>">Editar</a>
                <a href="eliminar_modulo.php?id=<?= $modulo['id'] ?>" onclick="return confirm('¿Eliminar?')">Eliminar</a>
            </td>
        </tr>
    <?php endforeach; ?>
</table>
<a href="crear_modulo.php">Crear nuevo módulo</a>
</body>
</html>
