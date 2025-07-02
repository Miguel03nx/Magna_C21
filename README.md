# Concepto21 - Sistema de Gestión de Capacitación

## Descripción
Sistema web para la gestión de capacitación y desarrollo profesional, enfocado en dos perfiles principales: Gerenciales y Supervisores. Permite la administración de módulos de aprendizaje, evaluaciones, materiales y evidencias.



## Tecnologías Utilizadas
- PHP 7.4+
- MySQL/MariaDB
- JavaScript (ES6+)
- SASS/SCSS
- Node.js y NPM (para desarrollo)

## Requisitos Previos
1. PHP 7.4 o superior
2. MySQL/MariaDB
3. Node.js y NPM
4. Servidor web (Apache/Nginx) o PHP built-in server

## Instalación

1. Clonar el repositorio:
```bash

```

2. Instalar dependencias de Node.js:
```bash
npm install
```

3. Compilar assets:
```bash
npm run dev
```

4. Configurar la base de datos:
- Crear una base de datos MySQL
- Copiar `includes/config/database.example.php` a `includes/config/database.php`
- Actualizar las credenciales de la base de datos en `includes/config/database.php`

5. Configurar AWS (si se usa S3):
- Copiar `aws-config/config.example.php` a `aws-config/config.php`
- Actualizar las credenciales de AWS

## Desarrollo Local

1. Iniciar el servidor PHP:
```bash
php -S localhost:****
php -S localhost:3000
```

2. Observar cambios en SASS y JavaScript:
```bash
npm run dev
```

## Estructura de Módulos

### Gerenciales
- Módulos 1-6
- Calendario
- Personal y Liderazgo
- Evaluaciones y Tests

### Supervisores
- Módulos 1-6
- Evaluaciones básicas
- Seguimiento de tareas

## Características Principales

1. **Sistema de Autenticación**
   - Login diferenciado por roles
   - Gestión de sesiones

2. **Gestión de Contenido**
   - Módulos de aprendizaje
   - Material descargable
   - Exámenes por módulo
   - Evidencias de completación

3. **Evaluaciones**
   - Tests de Moss
   - Insights Discovery
   - Evaluaciones por módulo

4. **Integración con Servicios**
   - Google Forms para evaluaciones
   - Sistema de foros

## Desarrollo

### Estructura JavaScript
El código JavaScript está organizado en módulos:
- `app.js`: Gestión de autenticación
- `botones.js`: Navegación gerenciales
- `botonesconcepto.js`: Navegacion para concepto21
- `botonesrh.js`: Funcionalidad de RRHH
- `botonessupervisiones.js`: Gestión de supervisiones

### Estilos
Los estilos utilizan SCSS con una estructura modular:
- Variables globales en `_variables.scss`
- Mixins en `_mixins.scss`
- Estilos base en `_globales.scss`
- Componentes específicos en carpeta `layout/`

## Despliegue
1. Compilar assets para producción:
```bash
# npm run build:prod
```

2. Verificar configuración:
- Credenciales de base de datos
- Configuración de AWS
- Permisos de archivos
- Variables de entorno

3. Subir archivos al servidor:
- Excluir `node_modules/`
- Excluir archivos de desarrollo
- Mantener archivos compilados

## Mantenimiento

### Base de Datos
- Respaldar regularmente
- Verificar integridad de datos
- Optimizar consultas según sea necesario

### Archivos
- Limpiar archivos temporales
- Mantener logs organizados



## TODO
- [ ] Implementar sistema de notificaciones
- [ ] Mejorar integración con Google Forms
- [ ] Completar módulo de estadísticas
- [ ] Implementar caché de contenido


