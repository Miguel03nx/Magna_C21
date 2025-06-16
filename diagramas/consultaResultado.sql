SELECT
    u.nombre AS usuario,
    m.titulo AS modulo,
    COUNT(p.id) AS total_preguntas,
    SUM(CASE WHEN ru.es_correcta THEN 1 ELSE 0 END) AS respuestas_correctas
FROM modulos m
JOIN examenes e ON e.modulo_id = m.id
JOIN preguntas p ON p.examen_id = e.id
LEFT JOIN respuestas_usuario ru ON ru.pregunta_id = p.id AND ru.usuario_id = ? -- (ID del usuario)
JOIN usuarios u ON u.id = ru.usuario_id
WHERE m.id = ?  -- (ID del módulo)
GROUP BY u.nombre, m.titulo;
