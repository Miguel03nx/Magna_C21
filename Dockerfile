# Usa PHP 8.2 con Apache
FROM php:8.2-apache

# Instala soporte para MySQL
RUN docker-php-ext-install pdo pdo_mysql

# Copia tu código a la carpeta pública de Apache
COPY . /var/www/html/

# Ajusta permisos
RUN chown -R www-data:www-data /var/www/html \
    && chmod -R 755 /var/www/html

# Expone el puerto 80
EXPOSE 80
