-- 1. Tabla de usuarios
CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    correo VARCHAR(100) NOT NULL UNIQUE,
    contraseña VARCHAR(255) NOT NULL,
    tipo_usuario ENUM('supervisor', 'gerencial', 'rh', 'concepto') NOT NULL
);

-- 2. Tabla de módulos
CREATE TABLE modulos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(150) NOT NULL,
    descripcion TEXT,
    dirigido_a ENUM('supervisor', 'gerencial') NOT NULL,
    material_url VARCHAR(255) -- Puede ser una ruta o URL del PDF
);

-- 3. Tabla de exámenes
CREATE TABLE examenes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    modulo_id INT NOT NULL,
    FOREIGN KEY (modulo_id) REFERENCES modulos(id) ON DELETE CASCADE
);

-- 4. Tabla de preguntas
CREATE TABLE preguntas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    examen_id INT NOT NULL,
    texto TEXT NOT NULL,
    tipo ENUM('opcion_multiple', 'verdadero_falso') NOT NULL,
    FOREIGN KEY (examen_id) REFERENCES examenes(id) ON DELETE CASCADE
);

-- 5. Tabla de respuestas por pregunta
CREATE TABLE respuestas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    pregunta_id INT NOT NULL,
    texto TEXT NOT NULL,
    es_correcta BOOLEAN NOT NULL DEFAULT FALSE,
    FOREIGN KEY (pregunta_id) REFERENCES preguntas(id) ON DELETE CASCADE
);

-- 6. Tabla de asignación de módulos a usuarios
CREATE TABLE modulos_asignados (
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuario_id INT NOT NULL,
    modulo_id INT NOT NULL,
    estado ENUM('pendiente', 'en_progreso', 'completado') DEFAULT 'pendiente',
    fecha_asignacion DATETIME DEFAULT CURRENT_TIMESTAMP,
    fecha_finalizacion DATETIME NULL,
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id) ON DELETE CASCADE,
    FOREIGN KEY (modulo_id) REFERENCES modulos(id) ON DELETE CASCADE,
    UNIQUE(usuario_id, modulo_id)
);

-- 7. Tabla de respuestas del usuario
CREATE TABLE respuestas_usuario (
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuario_id INT NOT NULL,
    pregunta_id INT NOT NULL,
    respuesta_id INT NOT NULL,
    es_correcta BOOLEAN NOT NULL,
    fecha_respuesta DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id) ON DELETE CASCADE,
    FOREIGN KEY (pregunta_id) REFERENCES preguntas(id) ON DELETE CASCADE,
    FOREIGN KEY (respuesta_id) REFERENCES respuestas(id) ON DELETE CASCADE
);

-- 8. Tabla de resultados de exámenes
CREATE TABLE resultados_examen (
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuario_id INT NOT NULL,
    modulo_id INT NOT NULL,
    total_preguntas INT NOT NULL,
    respuestas_correctas INT NOT NULL,
    porcentaje DECIMAL(5,2) NOT NULL,
    aprobado BOOLEAN NOT NULL,
    fecha DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id) ON DELETE CASCADE,
    FOREIGN KEY (modulo_id) REFERENCES modulos(id) ON DELETE CASCADE,
    UNIQUE(usuario_id, modulo_id) -- un resultado por usuario por módulo
);
