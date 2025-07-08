<?php
function requireLogin(): void {
    if (session_status() === PHP_SESSION_NONE) {
        session_start();
    }

    if (empty($_SESSION['user_id'])) {
        header("Location: " . BASE_URL . "/auth/login");
        exit;
    }
}

function isLoggedIn(): bool {
    if (session_status() === PHP_SESSION_NONE) {
        session_start();
    }
    return !empty($_SESSION['user_id']);
}

function hasRole(string|array $roles): bool {
    if (session_status() === PHP_SESSION_NONE) session_start();
    $currentRole = $_SESSION['user_type'] ?? null;

    if (is_array($roles)) {
        return in_array($currentRole, $roles, true);
    }

    return $currentRole === $roles;
}

function requireRole(string|array $roles): void {
    requireLogin();
    if (!hasRole($roles)) {
        http_response_code(403);
        echo "Access denied: insufficient permissions.";
        exit;
    }
}