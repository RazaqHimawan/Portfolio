---
title: Day 151
description: Variables
date: "2024-12-06"
categories:
  - Pemograman Web 2
published: true
---

## Table of Contents

## Variable

Variable adalah tempat untuk menyimpan data yang dapat digunakan dalam program. Di PHP, semua variable diawali dengan tanda `$`.

### Contoh:

```php
<?php
$name = "John"; // Variable biasa
echo $name;
?>
```

### Global Variable

Variable global adalah variable yang dideklarasikan di luar fungsi. Variable ini hanya dapat diakses secara langsung di luar fungsi. Untuk mengaksesnya di dalam fungsi, harus menggunakan kata kunci global.

```php
<?php
$name = "John"; // Global variable

function sayHello() {
    global $name; // Menggunakan global keyword
    echo "Hello, $name!";
}

sayHello(); // Output: Hello, John!
?>
```

### Local Variable

Variable lokal adalah variable yang dideklarasikan di dalam sebuah fungsi. Variable ini hanya dapat diakses di dalam fungsi tersebut.

```php
<?php
function greet() {
    $message = "Hello, World!"; // Local variable
    echo $message;
}

greet(); // Output: Hello, World!

// echo $message; // Error: Undefined variable
?>
```

### Superglobal Variable

Superglobal adalah array PHP bawaan yang dapat diakses dari mana saja tanpa perlu mendeklarasikannya terlebih dahulu. Contoh superglobal adalah:

- $\_GET
- $\_POST
- $\_REQUEST
- $\_SERVER
- $\_SESSION
- $\_COOKIE
