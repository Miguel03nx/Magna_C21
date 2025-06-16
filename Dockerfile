# Usa una imagen oficial de PHP con Apache
FROM php:8.2-apache

# Copia tu código fuente al directorio raíz de Apache
COPY . /var/www/html/

# Da permisos al código (opcional, pero recomendable)
RUN chown -R www-data:www-data /var/www/html \
    && chmod -R 755 /var/www/html

# Expone el puerto 80
EXPOSE 80
