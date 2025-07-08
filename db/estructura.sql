-- Tabla de usuarios
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    email VARCHAR(150) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    user_type ENUM('student', 'teacher', 'admin') NOT NULL
);

-- Tabla de cursos
CREATE TABLE courses (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(200) NOT NULL
);

-- Tabla de módulos de cursos
CREATE TABLE course_modules (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(200) NOT NULL,
    course_id INT NOT NULL,
    exam_external_url VARCHAR(255),
    material_file_url VARCHAR(255),
    calendar_file_url VARCHAR(255),
    user_type ENUM('student', 'teacher', 'admin') NOT NULL,
    FOREIGN KEY (course_id) REFERENCES courses(id)
);

-- Evidencia por módulo
CREATE TABLE module_evidence (
    id INT AUTO_INCREMENT PRIMARY KEY,
    file_url VARCHAR(255) NOT NULL,
    user_id INT NOT NULL,
    module_id INT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (module_id) REFERENCES course_modules(id)
);

-- Material adicional subido por usuarios
CREATE TABLE module_material (
    id INT AUTO_INCREMENT PRIMARY KEY,
    file_url VARCHAR(255) NOT NULL,
    user_id INT NOT NULL,
    module_id INT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (module_id) REFERENCES course_modules(id)
);

-- Recursos compartidos
CREATE TABLE resources (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(200) NOT NULL,
    user_type ENUM('student', 'teacher', 'admin') NOT NULL,
    file_url VARCHAR(255) NOT NULL
);

-- Preguntas en el foro
CREATE TABLE foro_questions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    user_id INT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id)
);

-- Respuestas en el foro
CREATE TABLE foro_answers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    description TEXT NOT NULL,
    file_url VARCHAR(255),
    user_id INT NOT NULL,
    question_id INT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (question_id) REFERENCES foro_questions(id)
);
