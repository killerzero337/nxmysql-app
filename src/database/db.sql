CREATE TABLE
    articulos (
        id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
        nombre VARCHAR(200) NOT NULL,
        descripcion VARCHAR(200),
        precio DECIMAL(10, 2),
        createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    );

CREATE TABLE
    proveedores (
        id UNSIGNED AUTO_INCREMENT PRIMARY KEY,
        nombre VARCHAR(200),
        telefono VARCHAR(20),
        imagen VARCHAR(200)
    );
ALTER TABLE articulos
ADD COLUMN imagen VARCHAR(200) AFTER precio;