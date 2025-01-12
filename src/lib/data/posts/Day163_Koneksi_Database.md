---
title: Day 163
description: Koneksi Database
date: "2025-01-03"
categories:
  - Pemograman Web 2
published: true
---

## Table of Contents

## Koneksi Database Menggunakan PHP

### Menggunakan Ekstensi MySQLi

PHP menyediakan ekstensi MySQLi (MySQL Improved) untuk bekerja dengan database MySQL. MySQLi mendukung:

- Koneksi prosedural
- Koneksi berorientasi objek

#### Contoh Koneksi Prosedural:

```php
$host = "localhost";
$user = "root";
$password = "";
$database = "my_database";

$conn = mysqli_connect($host, $user, $password, $database);

if (!$conn) {
    die("Koneksi gagal: " . mysqli_connect_error());
}
echo "Koneksi berhasil!";
```

#### Contoh Koneksi OO:

```php
$host = "localhost";
$user = "root";
$password = "";
$database = "my_database";

$conn = new mysqli($host, $user, $password, $database);

if ($conn->connect_error) {
    die("Koneksi gagal: " . $conn->connect_error);
}
echo "Koneksi berhasil!";
```

### Menggunakan PDO (PHP Data Object)

```php
$dsn = "mysql:host=localhost;dbname=my_database";
$user = "root";
$password = "";

try {
    $pdo = new PDO($dsn, $user, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    echo "Koneksi berhasil!";
} catch (PDOException $e) {
    echo "Koneksi gagal: " . $e->getMessage();
}
```
