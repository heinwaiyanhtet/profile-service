CREATE DATABASE IF NOT EXISTS shadowDb;
USE shadowDb;

GRANT ALL PRIVILEGES ON shadowDb.* TO 'heinwai'@'%';
FLUSH PRIVILEGES;