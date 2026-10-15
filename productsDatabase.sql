
DROP DATABASE IF EXISTS simpleproducts;

CREATE DATABASE simpleproducts;

USE simpleproducts;

CREATE TABLE IF NOT EXISTS product (
    id BIGINT NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(100) NOT NULL,
    price DECIMAL(12, 2) NOT NULL,
    PRIMARY KEY (id)
    );